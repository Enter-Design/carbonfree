import { defineMiddleware } from 'astro:middleware';
import { getProjects } from './lib/microsite';

/*
  Hostname → path routing for the project microsites.

  One deployment serves the corporate site and every project site. Which one a
  visitor gets is decided here, from the Host header:

    carbonfree.com                 → unchanged (the corporate site)
    fort-frances.carbonfree.com    → /sites/fort-frances
    carbonfreefortfrances.com      → /sites/<the project claiming that domain>

  Adding a project is therefore a content operation. The wildcard DNS record
  and the wildcard Worker route already match any new subdomain, so a new
  project needs no DNS change, no new deploy target and no config edit — only
  a published entry whose slug matches the subdomain label.

  Custom domains are the one case that still needs a lookup, because there is
  no derivable relationship between "carbonfreefortfrances.com" and a slug.
  That lookup is cached (see CUSTOM_DOMAIN_TTL) so it costs one D1 query per
  isolate per five minutes, not one per request.
*/

/** Subdomains that must never be treated as a project. */
const RESERVED = new Set(['www', 'api', 'cms', 'admin', 'mail', 'staging', 'preview', 'dev']);

/** Apex domains the corporate site is served from. */
const APEX = new Set(['carbonfree.com', 'carbonfree.ca']);

const CUSTOM_DOMAIN_TTL = 5 * 60 * 1000;

let customDomainCache: { map: Map<string, string>; at: number } | null = null;

async function customDomainMap(): Promise<Map<string, string>> {
  const now = Date.now();
  if (customDomainCache && now - customDomainCache.at < CUSTOM_DOMAIN_TTL) {
    return customDomainCache.map;
  }

  const map = new Map<string, string>();
  try {
    for (const entry of await getProjects()) {
      const domain = (entry.data as any).custom_domain?.trim().toLowerCase();
      // Map to the slug, not the entry id — the rewrite target is a URL path.
      const slug = (entry.data as any).slug ?? (entry as any).slug;
      if (domain && slug) map.set(domain.replace(/^www\./, ''), slug);
    }
  } catch {
    // A database hiccup must not take down the corporate site. Fall back to
    // the previous map if we have one, otherwise serve unrewritten and let the
    // request 404 rather than 500.
    return customDomainCache?.map ?? map;
  }

  customDomainCache = { map, at: now };
  return map;
}

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  const host = (context.request.headers.get('host') ?? url.host).split(':')[0].toLowerCase();

  // Never rewrite the admin, EmDash's own API, or asset requests.
  if (url.pathname.startsWith('/_emdash') || url.pathname.startsWith('/_')) return next();

  // Already an explicit /sites path — nothing to map.
  if (url.pathname.startsWith('/sites/')) return next();

  const bare = host.replace(/^www\./, '');

  // Corporate site, local dev, and *.workers.dev previews pass straight through.
  if (APEX.has(bare) || bare === 'localhost' || bare.endsWith('.workers.dev')) return next();

  // Subdomain of an apex we own → the label is the project slug.
  for (const apex of APEX) {
    if (bare.endsWith(`.${apex}`)) {
      const label = bare.slice(0, -(apex.length + 1));
      if (!label.includes('.') && !RESERVED.has(label)) {
        return context.rewrite(`/sites/${label}${url.pathname}`.replace(/\/$/, ''));
      }
      return next();
    }
  }

  // Otherwise it may be a project's own domain.
  const slug = (await customDomainMap()).get(bare);
  if (slug) return context.rewrite(`/sites/${slug}${url.pathname}`.replace(/\/$/, ''));

  return next();
});
