/**
 * Scroll-triggered sunrise.
 *
 * Scroll TRIGGERS the retint; it does not scrub it. Crossing the trigger line
 * starts a self-contained timed animation that runs to completion at its own
 * pace, so the page is never parked in the muddy dawn mid-state.
 *
 * Two curves run at once:
 *   Surfaces  — sky, backgrounds, borders, veils — ride the full slow curve.
 *   Foreground — text and accents — ride a much steeper curve centred on the
 *   midpoint. A single text colour crossing a background of equal luminance
 *   always has one bad instant; it can't be designed away, only made short.
 */

type RGB = [number, number, number];

interface Palette {
  surface: RGB;
  surfaceAlt: RGB;
  panel: RGB;
  ink: RGB;
  inkMuted: RGB;
  lineRGB: RGB;
  lineAlpha: number;
  lineSoftAlpha: number;
  navRGB: RGB;
  navAlpha: number;
}

const NIGHT_PALETTE: Palette = {
  surface: [7, 8, 9],
  surfaceAlt: [12, 14, 16],
  panel: [14, 17, 19],
  ink: [238, 242, 245],
  inkMuted: [148, 160, 170],
  lineRGB: [255, 255, 255],
  lineAlpha: 0.1,
  lineSoftAlpha: 0.05,
  navRGB: [7, 8, 9],
  navAlpha: 0.86,
};

const DAY_PALETTE: Palette = {
  surface: [255, 255, 255],
  surfaceAlt: [244, 246, 249],
  panel: [255, 255, 255],
  ink: [16, 23, 29],
  inkMuted: [90, 107, 120],
  lineRGB: [12, 22, 30],
  lineAlpha: 0.13,
  lineSoftAlpha: 0.07,
  navRGB: [255, 255, 255],
  navAlpha: 0.82,
};

/* Accent swaps hue as well as value: solar yellow at night, signal green by day. */
const SOLAR_NIGHT: RGB = [255, 181, 36];
const SOLAR_DAY: RGB = [31, 210, 134];
const SOLAR_DEEP_NIGHT: RGB = [255, 138, 0];
const SOLAR_DEEP_DAY: RGB = [18, 168, 108];

/* Three-stop sky gradient, bottom to top. */
const SKY_NIGHT: RGB[] = [[11, 12, 14], [7, 8, 10], [4, 5, 7]];
const SKY_DAWN: RGB[] = [[255, 210, 122], [255, 126, 107], [58, 53, 102]];
const SKY_DAY: RGB[] = [[255, 255, 255], [251, 246, 240], [234, 241, 251]];

export interface SunriseOptions {
  /** Selector for the first daylight section. */
  pivot?: string;
  /** Fires when the pivot is this fraction of a viewport from the top. */
  triggerAt?: number;
  /** Length of the sunrise, ms. */
  duration?: number;
  /** Dead zone in px so the trigger can't flutter at the boundary. */
  hysteresis?: number;
  /** Where in the retint the foreground flips (0-1). */
  textAt?: number;
  /** How much of the range the foreground flip occupies. Smaller is crisper. */
  textSnap?: number;
}

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp = (t: number) => Math.max(0, Math.min(1, t));
const smooth = (t: number) => t * t * (3 - 2 * t);
const mix = (a: RGB, b: RGB, t: number): RGB =>
  [Math.round(lerp(a[0], b[0], t)), Math.round(lerp(a[1], b[1], t)), Math.round(lerp(a[2], b[2], t))];
const rgb = (c: RGB) => `rgb(${c[0]} ${c[1]} ${c[2]})`;
const rgba = (c: RGB, a: number) => `rgb(${c[0]} ${c[1]} ${c[2]} / ${a})`;

export function initSunrise(options: SunriseOptions = {}): void {
  const {
    pivot = '#daylight',
    triggerAt = 0.55,
    duration = 1100,
    hysteresis = 90,
    textAt = 0.5,
    textSnap = 0.16,
  } = options;

  const sky = document.querySelector<HTMLElement>('.cf-sky');
  const header = document.querySelector<HTMLElement>('[data-header]');
  if (!sky) return;

  const root = document.documentElement.style;
  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

  let tone = 0;
  let target = 0;
  let from = 0;
  let startedAt = 0;
  let running = false;

  const textCurve = (e: number) => smooth(clamp((e - textAt) / textSnap + 0.5));

  const skyStops = (p: number): RGB[] => {
    if (p < 0.55) {
      const t = p / 0.55;
      return SKY_NIGHT.map((c, i) => mix(c, SKY_DAWN[i], t));
    }
    const t = (p - 0.55) / 0.45;
    return SKY_DAWN.map((c, i) => mix(c, SKY_DAY[i], t));
  };

  function paint(e: number): void {
    const stops = skyStops(e);
    const glow = Math.sin(e * Math.PI) * 0.45;
    sky!.style.background =
      `radial-gradient(120% 92% at 50% 110%, rgb(255 188 108 / ${glow.toFixed(3)}), transparent 62%),` +
      `linear-gradient(to top, ${rgb(stops[0])} 0%, ${rgb(stops[1])} 50%, ${rgb(stops[2])} 100%)`;

    const N = NIGHT_PALETTE;
    const D = DAY_PALETTE;

    root.setProperty('--cf-surface', rgb(mix(N.surface, D.surface, e)));
    root.setProperty('--cf-surface-alt', rgb(mix(N.surfaceAlt, D.surfaceAlt, e)));
    root.setProperty('--cf-panel', rgb(mix(N.panel, D.panel, e)));
    root.setProperty('--cf-hairline', rgba(mix(N.lineRGB, D.lineRGB, e), +lerp(N.lineAlpha, D.lineAlpha, e).toFixed(3)));
    root.setProperty('--cf-hairline-soft', rgba(mix(N.lineRGB, D.lineRGB, e), +lerp(N.lineSoftAlpha, D.lineSoftAlpha, e).toFixed(3)));
    root.setProperty('--cf-nav', rgba(mix(N.navRGB, D.navRGB, e), +lerp(N.navAlpha, D.navAlpha, e).toFixed(3)));

    const veil = mix(N.surface, D.surface, e);
    root.setProperty('--cf-veil-heavy', rgba(veil, 0.94));
    root.setProperty('--cf-veil-mid', rgba(veil, 0.72));
    root.setProperty('--cf-veil-light', rgba(veil, 0.25));
    root.setProperty('--cf-veil-panel', rgba(mix(N.surface, D.surfaceAlt, e), +lerp(0.55, 0.88, e).toFixed(3)));
    root.setProperty('--cf-veil-field', rgba(mix([255, 255, 255], [12, 22, 30], e), +lerp(0.03, 0.045, e).toFixed(3)));

    /* Foreground on the steep curve. */
    const tx = textCurve(e);
    root.setProperty('--cf-ink', rgb(mix(N.ink, D.ink, tx)));
    root.setProperty('--cf-ink-muted', rgb(mix(N.inkMuted, D.inkMuted, tx)));
    root.setProperty('--cf-solar', rgb(mix(SOLAR_NIGHT, SOLAR_DAY, tx)));
    root.setProperty('--cf-solar-deep', rgb(mix(SOLAR_DEEP_NIGHT, SOLAR_DEEP_DAY, tx)));
    root.setProperty('--cf-signal', rgb(mix(SOLAR_NIGHT, SOLAR_DAY, tx)));
  }

  function step(now: number): void {
    const t = clamp((now - startedAt) / duration);
    tone = from + (target - from) * smooth(t);
    paint(tone);
    if (t < 1) {
      requestAnimationFrame(step);
    } else {
      tone = target;
      paint(tone);
      running = false;
    }
  }

  function setTarget(value: number): void {
    if (value === target) return;
    target = value;
    from = tone;
    if (reduced) {
      tone = target;
      paint(tone);
      return;
    }
    startedAt = performance.now();
    if (!running) {
      running = true;
      requestAnimationFrame(step);
    }
  }

  function triggerPoint(): number {
    const el = document.querySelector(pivot);
    if (!el) return Infinity;
    return el.getBoundingClientRect().top + window.scrollY - window.innerHeight * triggerAt;
  }

  function onScroll(): void {
    header?.classList.toggle('is-scrolled', window.scrollY > 40);
    const p = triggerPoint();
    if (window.scrollY > p + hysteresis) setTarget(1);
    else if (window.scrollY < p - hysteresis) setTarget(0);
  }

  /* Settle the initial state without animating — e.g. a reload part-way down. */
  if (window.scrollY > triggerPoint()) {
    tone = 1;
    target = 1;
  }
  paint(tone);
  header?.classList.toggle('is-scrolled', window.scrollY > 40);

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
}
