/**
 * Landowner landing page content.
 *
 * Deliberately not included, pending sign-off (see the front-page strategy doc):
 *  - Per-acre lease rates. The earlier draft used US figures ($500–$2,000/acre)
 *    that have not been verified for Ontario.
 *  - Row-crop comparison tables. Solar VII targets NON-agricultural land, so a
 *    corn/soy/wheat comparison contradicts the acquisition criteria.
 *  - The word "guaranteed". Needs Laurence's sign-off on exact wording.
 */

export const keyFacts = [
  { value: 'Annual payments', label: 'Fixed lease income paid every year of the term, on contract' },
  { value: '20&ndash;35 years', label: 'Long-term agreements with built-in annual escalation' },
  { value: '$0 out of pocket', label: 'CarbonFree carries design, permitting, build, insurance and removal' },
  { value: 'You keep the title', label: 'It is a lease, not a sale. The land stays yours throughout' },
];

export const benefits = [
  {
    n: '01',
    title: 'Income that doesn’t move with the weather',
    body: 'Fixed annual payments that don’t depend on commodity prices, rainfall or markets. You know what you’ll earn, year after year, for the length of the term.',
  },
  {
    n: '02',
    title: 'You keep the land',
    body: 'We lease it. You retain ownership and, where applicable, your mineral rights. At the end of the term the equipment comes out and the ground is returned to you restored — and that obligation is written into the contract.',
  },
  {
    n: '03',
    title: 'Nothing for you to manage',
    body: 'CarbonFree handles feasibility, engineering, interconnection, permitting, construction, maintenance, insurance and decommissioning. No expense and no work on your end.',
  },
  {
    n: '04',
    title: 'Only the acres that make sense',
    body: 'Lease the portion that works and keep using the rest. Low-yield, awkward or unworked ground is often the best fit for solar — the parcels that earn least are frequently the ones we want.',
  },
];

export const criteria = [
  'Non-agricultural or marginal land, with agricultural parcels considered case by case',
  'Acceptable topography — reasonably flat, well-drained, few obstructions',
  'Available interconnection capacity nearby, which is usually the deciding factor',
  'Industrial and brownfield sites considered case by case',
  'Typically larger parcels suited to utility-scale development',
];

export const steps = [
  {
    n: 'Step 1',
    title: 'Tell us about your land',
    body: 'Share the location and rough acreage. It takes two minutes and costs nothing.',
  },
  {
    n: 'Step 2',
    title: 'We assess the fit',
    body: 'We evaluate the parcel for sunlight, grid access, topography and permitting — then come back with whether it qualifies and what it could support.',
  },
  {
    n: 'Step 3',
    title: 'Review your offer',
    body: 'We walk you through payment, term, escalators and protections in plain language. Take your time and review it with your own lawyer or advisor.',
  },
  {
    n: 'Step 4',
    title: 'Sign, and start earning',
    body: 'Once signed, CarbonFree manages design, permits and construction. Payments begin per the agreed schedule and continue for the life of the lease.',
  },
];

export const expectations = [
  '<b>It’s a lease, not a sale.</b> You own the land the entire time.',
  '<b>No cost to you, ever.</b> CarbonFree carries all development, build, insurance and removal costs.',
  '<b>The land is restored.</b> At the end of the term the equipment is removed and the ground returned to its original condition — written into the contract.',
  '<b>Get your own advice.</b> We encourage every landowner to review the agreement with their own lawyer or financial advisor before signing.',
  '<b>A partner that will still be here.</b> CarbonFree is 100% Canadian-owned, founded in Toronto in 2006, with 137 projects delivered.',
];

export const faq = [
  {
    q: 'How much will I be paid?',
    a: 'It depends on the parcel — size, topography, distance to a viable interconnection point, and the regional power market all move the number. Rather than quote a range that may not apply to your land, we assess your specific parcel and come back with a figure. That assessment is free and carries no obligation.',
  },
  {
    q: 'How long is the lease?',
    a: 'Typically 20 to 35 years, structured to match the operating life of the project, and usually with an option period before construction begins while permitting and interconnection are worked through.',
  },
  {
    q: 'Do I still own the land?',
    a: 'Yes. It is a lease. You hold title for the entire term and the land returns to your unrestricted use when the lease ends.',
  },
  {
    q: 'What happens at the end of the term?',
    a: 'CarbonFree removes the equipment and restores the ground. Decommissioning is a contractual obligation, not a promise — it is spelled out in the agreement along with how it is secured.',
  },
  {
    q: 'Can I keep farming or using part of the parcel?',
    a: 'Usually, yes. Most agreements cover only the acreage the project needs. What you do with the balance is up to you.',
  },
  {
    q: 'What about my property taxes?',
    a: 'Converting land to a solar use can change how a parcel is assessed. How that is handled is addressed in the lease, and we would always recommend confirming the treatment with your own accountant against your estate planning.',
  },
  {
    q: 'What if a project never gets built?',
    a: 'A fair question, and the reason track record matters more than the headline rate. CarbonFree has taken 137 projects through to commercial operation since 2006, including 381 MW awarded in Ontario’s 2026 IESO procurement. Option terms, and what happens if a project does not proceed, are set out in the agreement.',
  },
  {
    q: 'Who do I actually talk to?',
    a: 'A member of the CarbonFree development team, based in Toronto — not a broker.',
  },
];

/* ---------------------------------------------------------------------------
   PLACEHOLDER CONTENT — none of this is real.

   Everything from here down was written to size the layout, not to be
   published. No CarbonFree landowner has said any of it and no such lease is
   known to exist; the counties, acreages, terms and names are invented.

   Both blocks render inside `.cf-draft`, which frames them and labels the
   frame, so the state is visible on the page rather than only in this comment.
   Replacing this with real material is the whole job: get signed permission
   from the landowner for the quote and their name, confirm the figures against
   the executed lease, then delete the `placeholder` flag — the frame and the
   markers come off with it.
--------------------------------------------------------------------------- */

export const caseStudy = {
  placeholder: true,
  draftLabel: 'Placeholder — illustrative, not a real lease',
  location: 'Dufferin County, Ontario',
  image: '/images/dufferin-county.jpg',
  /* Describes the photograph. It is countryside of the right kind, not the
     parcel in the story — there is no such parcel. Do not write alt text that
     implies otherwise until a real, cleared site photo replaces it. */
  imageAlt: 'Aerial view of rolling Ontario farmland, with cropped fields either side of a rural highway',
  lede: 'A 240-acre farm with a low-yield back parcel that had been rented out for grazing at a rate that barely covered its own property tax.',
  stats: [
    { value: '58', unit: 'acres', label: 'leased, from a 240-acre holding' },
    { value: '30', unit: 'yr', label: 'lease term, with renewal options' },
    { value: '7', unit: 'mo', label: 'from first call to signed option' },
  ],
  body: [
    'The parcel sat at the back of the property: wet in spring, thin soil, awkward to reach with equipment. It had been in and out of grazing for a decade. What made it work for solar had nothing to do with any of that — a distribution feeder ran along the road allowance with capacity available on it.',
    'CarbonFree walked the site, confirmed the interconnection, and put an option agreement in front of the owner within two months. The family took it to their own lawyer and their accountant before signing anything. The remaining 180 acres stayed in production throughout, and the access road built for the project is now the all-weather route to the back of the farm.',
  ],
  quote: 'The part of the farm that gave us the most trouble is now the part we can count on. It pays the same in a drought year as it does in a good one.',
  attribution: 'Landowner, Dufferin County',
} as const;

export const testimonials = [
  {
    placeholder: true,
    quote: 'They told us on the second visit that half our acreage was never going to work, which is not what I expected to hear from someone trying to sign a lease.',
    name: 'Landowner',
    detail: 'Grey County · 40 acres under lease',
  },
  {
    placeholder: true,
    quote: 'Twenty years of farming and this is the first income I have had that does not depend on rain, or diesel, or what the elevator is paying that week.',
    name: 'Landowner',
    detail: 'Wellington County · 95 acres under lease',
  },
  {
    placeholder: true,
    quote: 'Our lawyer went through the agreement twice and came back with three changes. CarbonFree took all three without an argument.',
    name: 'Landowner',
    detail: 'Renfrew County · 60 acres under option',
  },
] as const;
