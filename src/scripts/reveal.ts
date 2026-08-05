/** Reveal-on-scroll, and the horizontal rails drawn at every [data-rail] edge. */

export function initReveal(): void {
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

  document.querySelectorAll<HTMLElement>('.cf-reveal').forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 60}ms`;
    io.observe(el);
  });
}

export function initRails(): void {
  const host = document.querySelector<HTMLElement>('.cf-rails > div');
  if (!host) return;

  let frame = 0;

  function build(): void {
    const ys: number[] = [];
    document.querySelectorAll<HTMLElement>('[data-rail]').forEach((el) => {
      const r = el.getBoundingClientRect();
      ys.push(r.top + window.scrollY, r.bottom + window.scrollY);
    });
    ys.sort((a, b) => a - b);

    const merged: number[] = [];
    for (const y of ys) {
      if (!merged.length || Math.abs(y - merged[merged.length - 1]) > 2) merged.push(y);
    }

    host!.style.height = `${document.documentElement.scrollHeight}px`;
    host!.replaceChildren(
      ...merged.map((y) => {
        const d = document.createElement('div');
        d.className = 'cf-rail';
        d.style.top = `${Math.round(y)}px`;
        return d;
      }),
    );
  }

  const schedule = () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(build);
  };

  build();
  window.addEventListener('load', build);
  window.addEventListener('resize', schedule);
  document.querySelectorAll('img').forEach((img) => {
    if (!img.complete) img.addEventListener('load', schedule);
  });
}
