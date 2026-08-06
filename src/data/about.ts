export const values = [
  {
    n: '01',
    title: 'Partnership before paperwork',
    body: '“Meaningful partnerships are foundational to how we develop projects.” Our First Nations partners hold controlling economic interests and governance seats, with development costs carried by CarbonFree so no community capital is at risk.',
  },
  {
    n: '02',
    title: 'Finish what we start',
    body: 'We measure ourselves on projects energised, not projects announced. Since 2006, 137 have reached commercial operation — carried through every stage to the point where the power actually reaches the grid.',
  },
  {
    n: '03',
    title: 'Own the whole journey',
    body: 'Origination, permitting, financing, construction and thirty years of operations, in house. The hardest parts of a project tend to be the handoffs — so we don’t have any.',
  },
  {
    n: '04',
    title: 'Be a good long-term neighbour',
    body: 'A solar lease is a thirty-year relationship with a landowner, a community and a municipality. We structure agreements to survive that long — including restoring the land in full when the term ends.',
  },
] as const;

export interface Milestone {
  year: string;
  tick: string;
  title: string;
  body: string;
  chips: string[];
  img: string;
}

export const milestones: Milestone[] = [
  {
    year: '2006',
    tick: 'The beginning',
    title: 'CarbonFree is founded in Toronto',
    body: 'CarbonFree Technology is established in Toronto, Ontario, at a point when solar sat on the fringe of the Canadian energy conversation. The company is Canadian-owned from day one and has been headquartered in the city ever since.',
    chips: ['Toronto, Ontario', '100% Canadian-owned'],
    img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80',
  },
  {
    year: '2008',
    tick: 'First build-out',
    title: 'Sixteen projects across five U.S. states',
    body: 'CarbonFree develops, finances and manages construction of 16 solar projects across Arizona, California, New Jersey, Massachusetts and Utah — winning competitive RFPs at Arizona State University, Harvard, the Salt Palace Convention Center and multiple JC Penney stores.',
    chips: ['16 projects', '5 states', 'Competitive RFP wins'],
    img: 'https://carbonfree.com/wp-content/uploads/2023/07/asunew.png',
  },
  {
    year: '2011',
    tick: 'Owning what we build',
    title: 'BrightRoof Solar established',
    body: 'CarbonFree establishes BrightRoof Solar with partners to own and operate commercial-scale projects, raising the equity and long-term debt and overseeing acquisition, development, construction and ongoing asset management — the first full expression of the end-to-end model.',
    chips: ['Equity and debt raised', 'Full asset management'],
    img: 'https://carbonfree.com/wp-content/uploads/2014/11/jcp2.jpg',
  },
  {
    year: '2013',
    tick: 'First Nations partnership',
    title: 'Grand Renewable Solar',
    body: 'CarbonFree invests in Grand Renewable Solar, a 130 MW DC construction-stage project, alongside an infrastructure investor and Canada’s largest First Nations community. CarbonFree negotiates the multi-party EPC and O&M contracts, provides construction management and secures the long-term debt financing.',
    chips: ['130 MW DC', 'Ontario', 'Indigenous partnership'],
    img: 'https://carbonfree.com/wp-content/uploads/2014/11/GRS1.jpg',
  },
  {
    year: '2014',
    tick: 'Utility scale',
    title: 'Kingston Solar — the largest in Canada',
    body: 'CarbonFree acquires Kingston Solar, a 140 MW DC construction-stage utility-scale project and at the time the largest solar project in Canada. With a major infrastructure investor, CarbonFree negotiates the EPC and O&M contracts, manages construction and raises the long-term debt.',
    chips: ['140 MW DC', 'Largest in Canada at build'],
    img: 'https://carbonfree.com/wp-content/uploads/2014/11/KS.jpg',
  },
  {
    year: '2015',
    tick: 'Scaling up',
    title: 'Two more Ontario utility-scale projects',
    body: 'CarbonFree acquires two large construction-stage Ontario projects totalling 120 MW DC with a multinational corporation and a leading infrastructure investor, negotiating the EPC, supply and O&M contracts and providing construction management throughout.',
    chips: ['120 MW DC', 'Two projects', 'Ontario'],
    img: 'https://carbonfree.com/wp-content/uploads/2014/11/EnconH.jpg',
  },
  {
    year: '2017',
    tick: 'Going international',
    title: 'CarbonFree Chile',
    body: 'CarbonFree establishes its Chilean platform and goes on to develop, finance, build and operate a portfolio of 53 ground-mounted PMGD projects totalling 362 MW — the company’s largest single portfolio by project count.',
    chips: ['53 projects', '362 MW', 'Chile'],
    img: 'https://carbonfree.com/wp-content/uploads/2021/09/Molina-h.jpeg',
  },
  {
    year: '2017–20',
    tick: 'Proving the full cycle',
    title: 'Four consecutive portfolio exits',
    body: 'CarbonFree sells its Ontario utility-scale portfolio investments across four separate transactions, realising eight-figure returns and multiples on invested capital for CarbonFree and its co-investors — evidence the model works through to exit, not just to construction.',
    chips: ['4 transactions', '8-figure returns'],
    img: 'https://carbonfree.com/wp-content/uploads/2019/07/Poblacionh.jpg',
  },
  {
    year: '2021',
    tick: 'A decade held, then realised',
    title: 'BrightRoof portfolio sold',
    body: 'CarbonFree sells the BrightRoof portfolio — 57 rooftop and 5 ground-mount operating projects across Ontario, 18.6 MWp of capacity producing more than 20 GWh annually — after a decade of ownership and operation.',
    chips: ['62 projects', '18.6 MWp', '20+ GWh a year'],
    img: 'https://carbonfree.com/wp-content/uploads/2014/11/SaltPalace.jpg',
  },
  {
    year: '2023',
    tick: 'Ontario, again',
    title: 'Building the next gigawatt',
    body: 'CarbonFree begins assembling a portfolio of more than 1 GW of Canadian projects for government procurement and corporate offtake — the Solar VI and Solar VII portfolios, together with the land rights beneath them.',
    chips: ['1 GW+ pipeline', 'Solar VI & VII', '4,250 acres optioned'],
    img: 'https://carbonfree.com/wp-content/uploads/2014/11/HarvardArsenal.jpg',
  },
  {
    year: '2026',
    tick: 'Where we are now',
    title: '381 MW awarded in the IESO LT2 procurement',
    body: 'CarbonFree and Fengate Asset Management are awarded three long-term supply contracts totalling 381 MW — Fort Frances, Kynoch and Rainy River — developed in partnership with the Couchiching, Mississauga and Rainy River First Nations.',
    chips: ['381 MW', '3 projects', '3 First Nations partners'],
    img: 'https://carbonfree.com/wp-content/uploads/2014/11/GRS1.jpg',
  },
];
