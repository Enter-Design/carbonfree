/** Reveal-on-scroll. */

let observer: IntersectionObserver | null = null;

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
    { threshold: 0.14 },
  );

  observer = io;

  document.querySelectorAll<HTMLElement>('.cf-reveal').forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 60}ms`;
    io.observe(el);
  });
}
