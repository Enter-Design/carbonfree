import couchiching from '../assets/partners/couchiching.webp';
import fengate from '../assets/partners/fengate.webp';
import mississauga from '../assets/partners/mississauga.webp';
import rainyRiver from '../assets/partners/rainy-river.webp';

export const doors = [
  {
    id: 'door-land',
    eyebrow: 'Earn from land you already own',
    title: 'Turn acres you aren’t using into decades of contracted income.',
    body: 'If you own rural, marginal or industrial land near available grid capacity, it may be able to host a utility-scale solar project. Long-term lease payments, no cost to you, and you keep the land.',
    cta: { label: 'See what your land could earn', href: '/landowners' },
    trust: ['No cost to apply', 'No obligation', 'You keep ownership'],
  },
  {
    id: 'door-power',
    eyebrow: 'Fix your electricity costs',
    title: 'Know what you’ll pay for power — for the next 20 years.',
    body: 'Electricity costs are volatile, climbing, and impossible to budget more than a year out. Buy power directly from our solar projects at a price fixed by contract for 15 to 20 years. Your rate is set, market spikes don’t reach you, and the clean energy credits are yours. Nothing is installed on your site.',
    cta: { label: 'See what a fixed rate would look like', href: '/clean-power' },
    trust: ['For large electricity users', 'No on-site equipment', 'Clean energy credits included'],
  },
] as const;

export const services = [
  {
    n: '01',
    title: 'Origination & development',
    body: 'We work with landowners and energy users to identify sites, assess business models, engineer systems, and manage permitting end to end.',
  },
  {
    n: '02',
    title: 'Transaction & acquisition',
    body: 'Two decades of renewable-energy legal and financial expertise structuring new projects and acquiring existing portfolios.',
  },
  {
    n: '03',
    title: 'Construction management',
    body: 'Hands-on, day-to-day management of some of the largest solar projects ever built in North America.',
  },
  {
    n: '04',
    title: 'Asset management & ownership',
    body: 'Ongoing management of operating projects — performance, O&M oversight, settlement, compliance and warranty.',
  },
] as const;

export const regions = [
  'Ontario & BC, Canada',
  'United States — AZ, CA, NJ, MA, UT',
  'Chile — 362 MW PMGD portfolio',
  'LATAM battery storage (BESS)',
] as const;

export const projects = [
  {
    capacity: '140 MW',
    tag: 'Utility-scale',
    name: 'Kingston Solar',
    place: 'Ontario, Canada',
    note: 'Largest solar project in Canada at build',
    img: 'https://carbonfree.com/wp-content/uploads/2014/11/KS.jpg',
  },
  {
    capacity: '130 MW',
    tag: 'First Nations partnership',
    name: 'Grand Renewable Solar',
    place: 'Ontario, Canada',
    note: 'With Canada’s largest First Nations community',
    img: 'https://carbonfree.com/wp-content/uploads/2014/11/GRS1.jpg',
  },
  {
    capacity: '362 MW',
    tag: 'International',
    name: 'Chile PMGD Portfolio',
    place: 'Chile',
    note: '53 ground-mounted projects',
    img: 'https://carbonfree.com/wp-content/uploads/2021/09/Molina-h.jpeg',
  },
  {
    tag: 'Commercial',
    name: 'Arizona State University',
    place: 'Arizona, USA',
    note: 'Competitive RFP win',
    img: 'https://carbonfree.com/wp-content/uploads/2023/07/asunew.png',
  },
  {
    tag: 'Commercial',
    name: 'Harvard University',
    place: 'Massachusetts, USA',
    note: 'Institutional rooftop',
    img: 'https://carbonfree.com/wp-content/uploads/2014/11/HarvardArsenal.jpg',
  },
  {
    tag: 'Commercial',
    name: 'Salt Palace Convention Center',
    place: 'Utah, USA',
    note: 'Large-scale canopy & rooftop',
    img: 'https://carbonfree.com/wp-content/uploads/2014/11/SaltPalace.jpg',
  },
] as const;

export const news = [
  {
    date: 'April 2026',
    title: '381 MW awarded in IESO LT2 procurement',
    body: 'CarbonFree and Fengate secured three solar contracts — Fort Frances, Kynoch and Rainy River — the largest single-proponent award in the round.',
    href: '/news/three-solar-contracts-381-mw-in-ontario',
  },
  {
    date: '2026',
    title: 'First Nations partnerships advance',
    body: 'Projects developed with the Couchiching, Mississauga and Rainy River First Nations move toward construction and operation across Ontario.',
    href: '/news',
  },
  {
    date: 'Ongoing',
    title: 'Solar VII & storage pipeline grows',
    body: 'A second utility-scale portfolio in Ontario, two BC projects for 2027 procurement, and a BESS project under development in Chile.',
    href: '/news',
  },
] as const;

/*
  Partner marks. `logoScale` trims each mark to the same optical weight rather
  than the same bounding box: the Rainy River drum carries long hanging ties
  that inflate its box, so matching raw heights would render it visibly
  smaller, while the solid Fengate letterform reads heavier than it measures.
  The drum sets the ceiling at 1 — values above that would overflow the box.
*/
export const partners = [
  {
    name: 'Couchiching First Nation',
    role: 'Fort Frances Solar — 167 MW',
    logo: couchiching,
    logoScale: 0.88,
  },
  {
    name: 'Mississauga First Nation',
    role: 'Kynoch Solar — 154 MW',
    logo: mississauga,
    logoScale: 0.86,
  },
  {
    name: 'Rainy River First Nations',
    role: 'Rainy River Solar — 60 MW',
    logo: rainyRiver,
    logoScale: 1,
  },
  {
    name: 'Fengate Asset Management',
    role: 'Energy-transition investment partner',
    logo: fengate,
    logoScale: 0.78,
  },
] as const;
