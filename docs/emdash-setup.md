# EmDash + project microsites — setup

What this branch adds, and the steps that need a Cloudflare account to finish.

## What changed

| File | Why |
| --- | --- |
| `astro.config.mjs` | `output: 'server'` (required by EmDash), Cloudflare adapter, edge-cache config, `routeRules` for `/sites/**` |
| `src/live.config.ts` | Registers EmDash as a runtime content source. Sits alongside `content.config.ts`, doesn't replace it |
| `src/middleware.ts` | Maps the request Host onto a project — `fort-frances.carbonfree.com` → `/sites/fort-frances` |
| `src/pages/**/*.astro` | Every existing page got `export const prerender = true` |
| `.emdash/seed.json` | The `projects` and `project_documents` content model, applied on first boot |
| `src/pages/sites/[project]/` | The microsite template and its documents subpage |
| `src/lib/microsite.ts`, `src/data/microsite.ts` | Data access, and the shared boilerplate every project inherits |
| `src/layouts/MicrositeLayout.astro` | Project shell — deliberately not the corporate header |
| `wrangler.jsonc`, `src/worker.ts` | D1/R2 bindings, edge cache, cron trigger for scheduled publishing |

**The corporate site is still static.** Server output does not change that: every page that reads
from markdown or `src/data` is prerendered at build time. A verification build emits all 11 of
them as HTML. Only `/sites/**` renders on request, because its content is in D1 and a D1 binding
only exists inside a running Worker — there is nothing for `astro build` to read.

## Astro was upgraded 7.1.6 → 7.2.0

Not optional. `@astrojs/cloudflare@14.2.0` declares `astro: ^7.0.0`, so npm installs it happily
against 7.1.6, but it imports `beginContentEntryCollection` from `astro/app` — an export that does
not exist until 7.2.0. The build fails at the bundling step with a `MISSING_EXPORT` error that
does not obviously point at a version mismatch. Worth knowing if you ever pin Astro back.

## Local setup

```sh
rm -f .git/index.lock     # left by an interrupted install; harmless but blocks git writes
npm install
npx wrangler login
npm run dev
```

Then open `http://localhost:4321/_emdash/admin` and complete the setup wizard. The seed applies on
first boot, so `Projects` and `Project documents` should already exist.

## Cloudflare — needs your account

1. **Create the bindings.** `wrangler deploy` provisions the D1 database and R2 bucket named in
   `wrangler.jsonc` on first run. Binding names must match `astro.config.mjs` exactly (`DB`,
   `MEDIA`); a mismatch surfaces at runtime, not at build.

2. **Set the encryption key.** Without it, plugin secrets are unprotected:

   ```sh
   npx emdash secrets generate
   npx wrangler secret put EMDASH_ENCRYPTION_KEY
   ```

   Back this up somewhere durable. Losing it means losing every secret encrypted with it.

3. **Wildcard DNS + Worker route.** Add `*.carbonfree.com` pointing at the Worker, and a route
   `*.carbonfree.com/*`. This is what makes a new project zero-touch: `src/middleware.ts` already
   maps any subdomain onto `/sites/<label>`, so a new project needs only a published entry whose
   slug matches the subdomain.

4. **Custom domains** (e.g. `carbonfreefortfrances.com`) go through Cloudflare for SaaS custom
   hostnames — 100 included free, then $0.10/hostname/month. Register the domain, CNAME it at the
   zone, add the hostname, then set `custom_domain` on the project entry.

5. **Confirm the worker entry.** `src/worker.ts` exports EmDash's cron handler, but the Astro
   adapter also emits an entry and sets `main`. Run `wrangler deploy --dry-run` and check the
   entrypoint before the first real deploy — if this is wrong, scheduled publishing fails silently
   and nothing else looks broken.

## Two things to decide

**Cache invalidation on publish is not wired up yet.** `routeRules` caches `/sites/**` for five
minutes with a day of stale-while-revalidate. Until a purge hook is added, an edit takes up to
five minutes to appear. The hook belongs on EmDash's `content:afterSave`, calling
`cache.purge({ tags: [...] })`. Straightforward, but it needs a deployed Worker to test against.

**EmDash pulls Noto Sans from Google Fonts at build time.** The build logs
`Could not initialize provider emdash-noto-…` when fonts.google.com is unreachable. It's
non-fatal, but this site uses Typekit, so the request is pure overhead — and it makes builds
depend on a third-party host. Worth disabling once the rest is stable.

## Not done yet

- News and leadership still read from files. That migration was deferred in favour of microsites.
- The contact form is not built. It needs a Worker endpoint plus an email provider —
  `cloudflareEmail()` covers it, but a `send_email` binding and a verified sender domain must
  exist first.
- Nothing has been deployed. The build is verified locally only.
