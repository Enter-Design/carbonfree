import { initReveal, teardownReveal } from './reveal';
import { initSunrise, sunset, teardownSunrise } from './daynight';

/**
 * Page lifecycle for the client router.
 *
 * Bundled module scripts run exactly once, so everything that touches the DOM
 * is re-run on `astro:page-load` — which fires on first load and after every
 * client-side navigation — and torn down on `astro:before-swap`.
 */

function start(): void {
  const body = document.body;
  initReveal();
  if (body.dataset.sunrise === 'on') {
    initSunrise({
      pivot: body.dataset.pivot || '#daylight',
      triggerAt: Number(body.dataset.triggerAt ?? 0.55),
    });
  }
}

function stop(): void {
  teardownReveal();
  teardownSunrise();
}

/*
  The transition itself: run the palette back to night before the new page is
  fetched, so leaving a daylit page reads as the sun going down. The next page
  starts at the top, which is night anyway, so the two ends meet.
*/
document.addEventListener('astro:before-preparation', (event) => {
  const e = event as Event & { loader: () => Promise<void> };
  const original = e.loader;
  e.loader = async () => {
    await Promise.all([sunset(650), original()]);
  };
});

/* Swap has happened and the new DOM is in place but not yet painted. */
document.addEventListener('astro:before-swap', stop);

document.addEventListener('astro:page-load', start);
