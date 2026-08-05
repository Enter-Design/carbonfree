/**
 * Corporate PPA landing page content.
 *
 * Claim discipline (see the front-page strategy doc):
 *  - Sells CERTAINTY, not SAVINGS. No claim that a contracted rate beats the
 *    market — that is a forward-looking price claim and needs sign-off.
 *  - Global Adjustment language stays hedged: "may reduce", "for eligible
 *    customers". Do not let this get sharpened in a copy edit.
 */

export const keyFacts = [
  { value: 'A fixed price', label: 'Contract a set rate for a defined portion of your load' },
  { value: '15&ndash;20+ years', label: 'Long enough to plan against, and to finance a project on' },
  { value: 'Clean energy credits', label: 'The environmental attributes of the contracted generation are yours' },
  { value: 'Nothing on site', label: 'No land, no roof, no capital project, no equipment to operate' },
];

export const benefits = [
  {
    n: '01',
    title: 'A price you set, not one you receive',
    body: 'Contract a fixed price for a defined portion of your load, so a meaningful share of your electricity cost stops moving with the market and starts behaving like a line you can budget.',
  },
  {
    n: '02',
    title: 'Global Adjustment exposure',
    body: 'For eligible Class A customers, clean electricity generated during Ontario’s peak demand hours may reduce your peak demand factor, which is used to calculate future Global Adjustment charges.',
  },
  {
    n: '03',
    title: 'Credits from a real project',
    body: 'Your contract includes the clean energy credits and environmental attributes of the generation itself — supporting Scope 2 reporting with new generation, not unbundled certificates bought from elsewhere.',
  },
  {
    n: '04',
    title: 'No capital project on your site',
    body: 'CarbonFree develops, finances, builds, owns and operates the project off site. Your organisation receives the contracted economic and environmental benefits without installing or running anything.',
  },
];

export const compare = {
  headA: 'Market exposure',
  headB: 'Under contract',
  rows: [
    { label: 'Price certainty', a: 'Exposed to volatile market prices', b: 'Contracted price on part of your load' },
    { label: 'Global Adjustment', a: 'Full exposure to peak-demand allocation', b: 'Possible peak demand factor reduction' },
    { label: 'Clean energy credits', a: 'Bought separately, if at all', b: 'Included with the contracted generation' },
    { label: 'Time horizon', a: 'Re-priced constantly', b: '15&ndash;20+ year contract term' },
    { label: 'On-site capital', a: 'N/A', b: '$0 &mdash; we build, own and operate' },
    { label: 'Budget visibility', a: 'A forecast', b: 'A number' },
  ],
};

export const steps = [
  {
    n: 'Step 1',
    title: 'Tell us about your load',
    body: 'Facility location, annual consumption, Class A status and peak demand profile. The first review is practical and quick.',
  },
  {
    n: 'Step 2',
    title: 'We assess the fit',
    body: 'We evaluate your usage, peak demand exposure and potential contract sizing to determine whether this supports your cost and sustainability objectives.',
  },
  {
    n: 'Step 3',
    title: 'Review the structure',
    body: 'We walk through the proposed contract price, term, expected generation profile, credits and the commercial protections on both sides.',
  },
  {
    n: 'Step 4',
    title: 'Contract, and hedge',
    body: 'Once signed, CarbonFree advances the project through development, financing, construction and operation. You receive the settlement value and the credits over the term.',
  },
];

export const fit = [
  'Ontario facilities with material electricity costs',
  'Class A status, or expected future Class A eligibility',
  'Significant exposure to Global Adjustment',
  'A need to make electricity costs predictable over a long horizon',
  'Sustainability, Scope 2 or clean energy procurement goals',
  'A preference for off-site clean energy over on-site generation',
];

export const expectations = [
  '<b>It’s a financial contract, not a construction project.</b> The project sits off site and connects to the Ontario grid.',
  '<b>You don’t own or operate generation.</b> CarbonFree develops, finances, builds, owns and operates it.',
  '<b>It’s sized to you.</b> Contract quantity is tailored to your load, risk tolerance, credit profile and objectives.',
  '<b>The credits come with it.</b> The environmental attributes of the contracted generation are delivered to you.',
  '<b>You can evaluate before committing.</b> We review your historical usage and peak demand profile first, at no cost.',
];

export const faq = [
  {
    q: 'What exactly am I buying?',
    a: 'A long-term contract for a portion of the output of a CarbonFree solar project, at a price agreed up front, together with the clean energy credits associated with that generation. The instrument is a corporate power purchase agreement — a corporate PPA.',
  },
  {
    q: 'Do we need to install solar panels at our facility?',
    a: 'No. The project is off site and connected to the Ontario grid. Your organisation receives the contracted financial and environmental benefits without installing or operating equipment.',
  },
  {
    q: 'How does this affect what we actually pay?',
    a: 'The contract establishes a price for a defined portion of your electricity exposure. If market prices rise above that contract price, the contract can provide financial value that helps offset the higher cost. It is a risk management tool over a full market cycle rather than a bet on any one month.',
  },
  {
    q: 'How can this reduce Global Adjustment exposure?',
    a: 'For eligible Class A customers, electricity generated during Ontario’s peak demand hours may reduce the customer’s peak demand factor, which is used to calculate future Global Adjustment charges. Whether and how much it applies depends on your facility, so it forms part of the assessment.',
  },
  {
    q: 'Is this only for Class A customers?',
    a: 'It is primarily designed for Class A customers because of the interaction with Global Adjustment. Large customers who expect to become Class A may also want to evaluate it.',
  },
  {
    q: 'How much of our load can we contract?',
    a: 'That depends on your load profile, annual consumption, peak demand exposure, credit profile and commercial objectives. Sizing it appropriately is part of the first conversation.',
  },
  {
    q: 'What is the typical term?',
    a: 'Generally 15 to 20 years or more. Long terms are what make the underlying project financeable, which is also what makes the contract worth holding.',
  },
  {
    q: 'What if the project never gets built?',
    a: 'A contract against a project that never reaches commercial operation is worth nothing, which is why counterparty track record matters. CarbonFree has taken 137 projects through to commercial operation since 2006 and was awarded 381 MW in Ontario’s 2026 IESO procurement.',
  },
  {
    q: 'What do you need from us to assess fit?',
    a: 'Facility location, annual electricity consumption, Class A status, peak demand factor information, and historical interval data if you have it.',
  },
];
