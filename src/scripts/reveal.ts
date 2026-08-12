/** Reveal-on-scroll. */

let observer: IntersectionObserver | null = null;

/*
  Trigger point, as a fraction of the viewport height measured up from the
  bottom edge. An element reveals once its top crosses that line.

  This is deliberately expressed as a rootMargin rather than an intersection
  threshold: a ratio threshold is unreachable for any element taller than
  1 / threshold viewports, so a long grid (the projects portfolio, ~8000px)
  would never intersect and would stay at opacity 0 forever.
*/
const TRIGGER = 0.12;

export function teardownReveal(): void {
  observer?.disconnect();
  observer = null;
}

export function initReveal(): void {
  teardownReveal();
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0, rootMargin: `0px 0px -${TRIGGER * 100}% 0px` },
  );

  observer = io;

  document.querySelectorAll<HTMLElement>('.cf-reveal').forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 60}ms`;
    io.observe(el);
  });
}
