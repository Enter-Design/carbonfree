/**
 * Shared boilerplate for the project microsites.
 *
 * The whole point of templating these sites is that the parts which are *not*
 * project-specific stay identical across every project. On the GoDaddy sites
 * this copy was retyped per project, which is how wording drifts apart — and
 * on consultation sites that drift eventually becomes a discrepancy someone
 * has to explain.
 *
 * So this copy lives here, in one place, and a project only overrides it when
 * it genuinely needs to (via the `solar_explainer` / `about_override` fields).
 */

export interface Boilerplate {
  eyebrow: string;
  title: string;
  body: string[];
  points?: { label: string; text: string }[];
}

/** "How solar PV supports a greener Ontario" — identical on every project site. */
export const solarExplainer: Boilerplate = {
  eyebrow: 'How it works',
  title: 'How solar PV supports a greener Ontario',
  body: [
    'Solar photovoltaic (PV) technology transforms sunlight into electricity using specially designed panels made of semiconductor materials. These panels generate clean, renewable energy — without emissions, noise, or water use — making them one of the most environmentally friendly power generation technologies available today.',
  ],
  points: [
    {
      label: 'Clean and renewable',
      text: 'PV systems generate electricity with zero greenhouse gas emissions.',
    },
    {
      label: 'Quiet and low impact',
      text: 'Solar panels operate silently and have a minimal footprint on surrounding communities.',
    },
    {
      label: 'Reversible land use',
      text: 'PV installations are designed to be temporary, preserving the land’s long-term value.',
    },
    {
      label: 'Energy security',
      text: 'Local generation capacity helps diversify Ontario’s energy mix and enhance resilience.',
    },
    {
      label: 'Long-term stewardship',
      text: 'With smart design and ongoing vegetation management, solar projects can coexist with natural ecosystems and even improve site conditions over time.',
    },
  ],
};

/** "About CarbonFree Group" — the corporate boilerplate footer section. */
export const aboutCarbonFree: Boilerplate = {
  eyebrow: 'About',
  title: 'About CarbonFree Group',
  body: [
    'CarbonFree Group (“CarbonFree”) is wholly Canadian-owned and is a recognized leader in the development and financing of solar energy projects in the Americas. Since its founding in 2006, CarbonFree has successfully developed and built nearly 140 projects, totalling nearly 800 megawatts (MW), ranging from commercial-scale rooftop systems to a 140 MWp utility-scale system, in Ontario, the USA and Chile.',
    'CarbonFree has raised over US$2 billion in project capital as part of this effort, and currently has a portfolio of over 700 MWp of solar and storage projects in development in Ontario, Chile and the Dominican Republic.',
  ],
};

/**
 * Figures quoted in the About section above.
 *
 * NOTE: these differ from src/data/site.ts `facts` — the corporate site says
 * 137 projects and 780 MW, this boilerplate says "nearly 140" and "nearly 800".
 * They describe the same portfolio at different rounding. Worth reconciling
 * before launch so the microsites and carbonfree.com don't contradict
 * each other in a filing.
 */
export const aboutLinkLabel = 'Learn more about CarbonFree';
export const aboutLinkHref = 'https://carbonfree.com/';
