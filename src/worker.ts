/*
  Worker entry that adds EmDash's scheduled-publishing and plugin-cron handling
  on top of the Astro request handler.

  This pairs with the "triggers.crons" block in wrangler.jsonc. Without both,
  scheduling a news post or a project update for a future date in the admin
  silently never publishes in production.

  NOTE — confirm on first deploy: the @astrojs/cloudflare adapter also emits a
  worker entry and sets `main` itself. If wrangler reports a conflicting or
  ignored entry point, the fix is to point `main` at this file explicitly in
  wrangler.jsonc. Worth checking `wrangler deploy --dry-run` before the first
  real deploy rather than discovering it when a scheduled post fails to appear.
*/
export { default, PluginBridge } from '@emdash-cms/cloudflare/worker';
