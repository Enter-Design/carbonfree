export const site = {
  name: 'CarbonFree Technology',
  tagline: 'We build solar at scale to power Canada’s clean energy future.',
  address: '1 St Clair Ave West, Suite 801, Toronto ON',
} as const;

export const nav = [
  { label: 'Lease Your Land', href: '/landowners', emphasis: true },
  { label: 'Buy Clean Power', href: '/clean-power', emphasis: true },
  { label: 'Projects', href: '/projects' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our Story', href: '/about' },
      { label: 'Leadership', href: '/leadership' },
    ],
  },
  { label: 'News', href: '/news' },
] as const;

/** Single source of truth for figures used across the site. */
export const facts = {
  projects: '137',
  commissioned: '780+ MW',
  pipeline: '1 GW+',
  capital: 'US$2.4B+',
  financings: '9',
  founded: '2006',
  years: '20 years',
  ontarioProjects: '66',
  awarded: '381 MW',
} as const;

export const stats = [
  { value: facts.projects, label: 'Projects developed and commissioned' },
  { value: facts.commissioned, unit: 'dc', label: 'Commissioned across three countries' },
  { value: facts.pipeline, label: 'Under advanced development in Canada' },
  { value: facts.capital, label: `Project capital raised across ${facts.financings} financings` },
] as const;
