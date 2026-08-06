export interface Leader {
  name: string;
  role: string;
  photo: string;
  linkedin?: string;
  bio: string[];
}

const U = 'https://carbonfree.com/wp-content/uploads';

/**
 * Bios are CarbonFree's own, transcribed from carbonfree.com/leadership.
 *
 * Note: this page gives Judy Qi's title as "Director, Business Development".
 * The April 2026 investor deck says "Director, Corporate Development".
 * Confirm which is current before launch.
 */
export const leadership: Leader[] = [
  {
    name: 'Daniel Soper',
    role: 'Chief Executive Officer',
    photo: `${U}/2026/04/dsoper.jpg`,
    linkedin: 'https://www.linkedin.com/in/daniel-soper-51717a3/',
    bio: [
      'As CEO, Dan leads CarbonFree’s overall business including its strategic, transactional and financial activities. Having joined in 2009 as CFO, Dan has extensive experience in deal structuring, equity and debt financing and asset management, and he has first-hand experience in all aspects of solar project development and construction.',
      'Before joining CarbonFree, Dan was SVP at a Canadian private equity firm and COO of a TSX-listed company. Dan earned a BA in Economics at UC Berkeley. He is a former director of the University of Toronto Press and an independent school in Toronto.',
    ],
  },
  {
    name: 'David Oxtoby',
    role: 'Chair',
    photo: `${U}/2015/09/DO-Square-BW.jpg`,
    linkedin: 'https://www.linkedin.com/in/david-o-80865/',
    bio: [
      'David founded CarbonFree in 2006 and was CEO until 2024, leading the company’s growth in Canada, the US and Latin America. He remains closely involved in the company’s strategy and major investment decisions. David has deep experience in solar power and energy storage and hands-on knowledge of all aspects of project development and financing.',
      'Prior to founding CarbonFree, David worked in venture capital and investment banking. David earned an MBA at the Ivey Business School and is a CFA charter holder. He has served on several board committees for the University of Toronto and has been a director of a number of corporate and not-for-profit organizations.',
    ],
  },
  {
    name: 'Laurence Goldberg',
    role: 'COO and General Counsel',
    photo: `${U}/2015/09/LG-Square-BW.jpeg`,
    linkedin: 'https://www.linkedin.com/in/laurence-goldberg-665879b/',
    bio: [
      'As COO, Laurie has managed the day-to-day operation of CarbonFree and its related companies since 2007. As General Counsel he oversees CarbonFree’s legal and contractual interaction with all stakeholders.',
      'Prior to joining CarbonFree, Laurie practiced law with a leading Canadian law firm, spent four years practicing law in Europe and served as counsel to a Government of Canada Royal Commission. Laurie holds an LL.M. from the London School of Economics, an LL.B. from Osgoode Hall Law School and a BA from the University of Manitoba. He has been a director of several not-for-profit boards.',
    ],
  },
  {
    name: 'Graham Erion',
    role: 'Chief Commercial Officer',
    photo: `${U}/2022/02/Graham-Erion.jpg`,
    linkedin: 'https://www.linkedin.com/in/grahamerion/',
    bio: [
      'Graham oversees all business development functions at CarbonFree, including origination, strategic partnerships, M&A, and project finance. Graham also led the closing of all transactions related to CarbonFree Chile’s market-leading solar portfolio.',
      'Prior to joining CarbonFree, Graham worked as a senior associate at a leading Toronto law firm. Graham was called to the bar in Ontario (2008) and New York (2012). He has an LL.M. (Kent Scholar) from Columbia University in New York.',
    ],
  },
  {
    name: 'Andrew Kennedy',
    role: 'Chief Financial Officer',
    photo: `${U}/2025/07/AndrewKennedy.png`,
    linkedin: 'https://www.linkedin.com/in/ajak13/',
    bio: [
      'As CFO, Andrew leads CarbonFree’s financial and fund-raising activities. Prior to CarbonFree, Andrew held executive leadership roles at Desjardins Capital Markets, Deloitte, Brookfield and TD Securities, with a particular focus on renewable power financing and acquisitions.',
      'Andrew earned a BSc (hons) in Computer Science at Western University and an MBA at the Richard Ivey School of Business at Western University.',
    ],
  },
  {
    name: 'Maged Sami',
    role: 'Senior Vice President, Engineering, Procurement & Construction',
    photo: `${U}/2022/02/Maged-Sami.jpg`,
    linkedin: 'https://www.linkedin.com/in/magedsami/',
    bio: [
      'Maged leads all things technical at CarbonFree. He is intimately involved in the design, construction and operation of solar projects, as well as the assessment of new technologies and opportunities.',
      'Prior to joining CarbonFree, Maged worked at a Canadian resource company and at a multinational engineering firm. Maged earned an MEng and a BASc in Engineering, both from the University of Toronto, and is a licensed Professional Engineer as well as a certified Project Management Professional.',
    ],
  },
  {
    name: 'Doug Deeks',
    role: 'Senior Vice President, Project Development',
    photo: `${U}/2025/05/Doug-Deeks.jpg`,
    linkedin: 'https://www.linkedin.com/in/doug-deeks-1231452/',
    bio: [
      'Doug leads project development for CarbonFree’s Ontario operations, with a clear focus on delivering high-performance solar assets. With over 15 years in the renewable energy sector, he has led the development and commissioning of projects in Canada, Japan, Italy and New York.',
      'His 25+ year career includes leading successful operations and guiding projects for a diverse range of clients including Rogers, Tembec and Komeri Group, and he has managed development partnerships with several Ontario First Nations. Doug holds a bachelor’s degree from the University of Western Ontario.',
    ],
  },
  {
    name: 'Emma Coyle',
    role: 'Vice President, Legal',
    photo: `${U}/2025/05/Emma-Coyle.jpg`,
    linkedin: 'https://www.linkedin.com/in/emma-coyle-9aab706/',
    bio: [
      'As Vice President, Legal, Emma provides legal support for the company’s business development initiatives and asset management business. With a career spanning nearly two decades in the energy sector, Emma brings deep expertise in legal, regulatory and strategic matters.',
      'Prior to joining CarbonFree, Emma held a variety of roles at Capital Power, including positions in business development, strategy and regulatory affairs. Earlier in her career she served as Chief Compliance Officer and General Counsel at Goreway Station Partnership, a joint venture between JERA Corp. and Toyota Tsusho.',
      'Emma holds a Juris Doctor from Dalhousie University Law School and an MBA from the Ivey Business School at Western University.',
    ],
  },
  {
    name: 'Judy Qi',
    role: 'Director, Business Development',
    photo: `${U}/2025/07/JQ20205.png`,
    /* LinkedIn URL from the live site 404s — omitted until a working one is supplied. */
    bio: [
      'Judy manages a range of activities for CarbonFree including insurance, regulatory compliance and contract management for projects in Canada and internationally.',
      'Prior to joining CarbonFree, Judy worked in provider relations for an insurance company. Judy earned a Bachelor of Business Administration degree at the University of Toronto and volunteered for many years for the Heart and Stroke Foundation of Canada.',
    ],
  },
];
