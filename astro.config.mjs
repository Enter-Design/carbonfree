// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import { cacheCloudflare } from '@astrojs/cloudflare/cache';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import emdash from 'emdash/astro';
import { d1, r2 } from '@emdash-cms/cloudflare';

/*
  Output is 'server' because EmDash serves content at runtime — that is a hard
  requirement of the integration, not a preference.

  It does NOT mean the site stopped being static. Every page that reads from
  markdown or from src/data is still prerendered at build time via an explicit
  `export const prerender = true`. Those files are on disk at build time, so
  nothing is lost by moving to server output.

  Only the project microsites under /sites are rendered on request, because
  their content lives in D1 and a D1 binding only exists inside a running
  Worker — a Node build process cannot read it. Those routes sit behind the
  Workers edge cache instead (see `cache` and `routeRules` below), so a visitor
  almost always gets a cached response without the Worker or the database being
  touched at all.
*/
export default defineConfig({
  output: 'server',

  adapter: cloudflare({
    /*
      Gives `astro dev` the same D1 and R2 bindings the deployed Worker gets,
      proxied through wrangler from the local .wrangler state. Without this the
      dev server has no database and the admin panel cannot boot.
    */
    platformProxy: { enabled: true },
  }),

  /*
    Routes the edge cache through Cloudflare's native provider so `routeRules`
    below emit real Cache-Control headers and invalidation can use
    cache.purge() rather than the zone REST API.
  */
  cache: { provider: cacheCloudflare() },

  /*
    The microsites are consultation pages: read constantly, written rarely.
    `maxAge` keeps a fresh copy at the edge for five minutes; `swr` lets an
    expired copy keep serving instantly for a day while it revalidates behind
    the scenes. That stale window is what stands between a D1 hiccup and a
    visibly broken page, so it is deliberately long.

    On publish, EmDash purges by tag — see src/lib/purge.ts.
  */
  routeRules: {
    '/sites/**': { maxAge: 300, swr: 86400 },
  },

  integrations: [
    // Required: the EmDash admin at /_emdash/admin is a React app. Installing
    // the package is not enough — without the integration the admin builds but
    // never hydrates.
    react(),

    emdash({
      database: d1({ binding: 'DB' }),
      storage: r2({ binding: 'MEDIA' }),
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
