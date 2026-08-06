export type Region = 'Canada' | 'United States' | 'Chile';
export type Status = 'Operating' | 'In development';

export interface Project {
  name: string;
  region: Region;
  place: string;
  capacity: string;
  unit?: string;
  status: Status;
  cod?: string;
  note?: string;
  img: string;
  featured?: boolean;
}

const U = 'https://carbonfree.com/wp-content/uploads';

/* ---------------------------------------------------------------------------
   Flagship North American projects.

   These are not on the live /projects page — that page lists only the Chilean
   PMGD portfolio. They come from the live homepage gallery and the April 2026
   deck. Capacities are MW DC unless noted.
--------------------------------------------------------------------------- */
const flagship: Project[] = [
  {
    name: 'Kingston Solar',
    region: 'Canada',
    place: 'Ontario',
    capacity: '140',
    status: 'Operating',
    note: 'Largest solar project in Canada at the time of construction',
    img: `${U}/2014/11/KS.jpg`,
    featured: true,
  },
  {
    name: 'Grand Renewable Solar',
    region: 'Canada',
    place: 'Ontario',
    capacity: '130',
    status: 'Operating',
    note: 'Developed with Canada’s largest First Nations community',
    img: `${U}/2014/11/GRS1.jpg`,
    featured: true,
  },
  {
    name: 'Arizona State University',
    region: 'United States',
    place: 'Arizona',
    capacity: '—',
    unit: '',
    status: 'Operating',
    note: 'Competitive RFP win',
    img: `${U}/2023/07/asunew.png`,
    featured: true,
  },
  {
    name: 'Harvard University',
    region: 'United States',
    place: 'Massachusetts',
    capacity: '—',
    unit: '',
    status: 'Operating',
    note: 'Institutional rooftop',
    img: `${U}/2014/11/HarvardArsenal.jpg`,
    featured: true,
  },
  {
    name: 'Salt Palace Convention Center',
    region: 'United States',
    place: 'Utah',
    capacity: '—',
    unit: '',
    status: 'Operating',
    note: 'Large-scale canopy and rooftop',
    img: `${U}/2014/11/SaltPalace.jpg`,
    featured: true,
  },
  {
    name: 'JC Penney',
    region: 'United States',
    place: 'Multiple states',
    capacity: '—',
    unit: '',
    status: 'Operating',
    note: 'Multi-store commercial rooftop and canopy',
    img: `${U}/2014/11/jcp2.jpg`,
  },
  {
    name: 'Encon',
    region: 'Canada',
    place: 'Ontario',
    capacity: '—',
    unit: '',
    status: 'Operating',
    note: 'Commercial rooftop',
    img: `${U}/2014/11/EnconH.jpg`,
  },
];

/* Ontario projects awarded in the April 2026 IESO LT2(e1) procurement. MW AC. */
const inDevelopment: Project[] = [
  {
    name: 'Fort Frances Solar Project',
    region: 'Canada',
    place: 'Northwestern Ontario',
    capacity: '167.2',
    unit: 'MW AC',
    status: 'In development',
    note: 'With the Couchiching First Nation · IESO LT2 contract awarded',
    img: `${U}/2014/11/GRS1.jpg`,
    featured: true,
  },
  {
    name: 'Kynoch Solar Project',
    region: 'Canada',
    place: 'Northeastern Ontario',
    capacity: '154',
    unit: 'MW AC',
    status: 'In development',
    note: 'With the Mississauga First Nation · IESO LT2 contract awarded',
    img: `${U}/2014/11/KS.jpg`,
    featured: true,
  },
  {
    name: 'Rainy River Solar Project',
    region: 'Canada',
    place: 'Northwestern Ontario',
    capacity: '60',
    unit: 'MW AC',
    status: 'In development',
    note: 'With the Rainy River First Nations · IESO LT2 contract awarded',
    img: `${U}/2021/09/Molina-h.jpeg`,
    featured: true,
  },
];

/* ---------------------------------------------------------------------------
   Chilean PMGD portfolio — transcribed from carbonfree.com/projects.
   [ id, region, capacity MW, COD, image ]
--------------------------------------------------------------------------- */
const chile: [string, string, string, string, string][] = [
  ['CL217', 'Santiago Metropolitan Region', '10.9', 'September 2024', '2024/11/Til-Til.jpeg'],
  ['CL213', 'Santiago Metropolitan Region', '10.7', 'September 2024', '2024/11/Carena.jpeg'],
  ['CL205', 'Maule Region', '10.8', 'October 2023', '2024/11/Pencahue.jpeg'],
  ['CL216', 'Valparaíso Region', '10.9', 'September 2023', '2023/10/Petorca.png'],
  ['CL214', 'Santiago Metropolitan Region', '12.0', 'July 2023', '2023/10/El-Peral.png'],
  ['CL215', 'Santiago Metropolitan Region', '10.2', 'May 2023', '2023/10/Champa.png'],
  ['CL212', 'O’Higgins Region', '6.3', 'March 2023', '2023/10/La-Gamboina.png'],
  ['CL211', 'O’Higgins Region', '8.3', 'March 2023', '2023/10/Quemados.png'],
  ['CL208', 'O’Higgins Region', '3.0', 'February 2023', '2023/10/COA.png'],
  ['CL209', 'Maule Region', '3.0', 'December 2022', '2023/10/Pequen.png'],
  ['CL204', 'Maule Region', '6.3', 'November 2022', '2023/10/Batres.jpeg'],
  ['CL201', 'Valparaíso Region', '3.0', 'November 2022', '2023/01/VillaAlemana.jpeg'],
  ['CL206', 'Santiago Metropolitan Region', '7.4', 'November 2022', '2023/01/Paine.jpeg'],
  ['CL210', 'Biobío Region', '3.0', 'October 2022', '2023/01/BLB.jpg'],
  ['CL207', 'Santiago Metropolitan Region', '5.1', 'September 2022', '2023/01/Puangue.jpeg'],
  ['CL203', 'Santiago Metropolitan Region', '3.0', 'September 2022', '2022/10/Nihue.jpeg'],
  ['CL202', 'Valparaíso Region', '3.0', 'June 2022', '2022/07/thumb_Llay-Llay.jpeg'],
  ['CL128', 'Maule Region', '11.1', 'October 2021', '2021/11/pachira.jpeg'],
  ['CL129', 'Ñuble Region', '11.1', 'July 2021', '2021/11/mutupin.jpeg'],
  ['CL124', 'Ñuble Region', '3.0', 'July 2021', '2021/07/Pegasus.jpeg'],
  ['CL123', 'Ñuble Region', '3.0', 'July 2021', '2021/09/Orion.jpeg'],
  ['CL127', 'Maule Region', '10.8', 'May 2021', '2021/02/Linares.jpeg'],
  ['CL122', 'Ñuble Region', '10.2', 'February 2021', '2021/09/Chillan-II.jpeg'],
  ['CL121', 'Ñuble Region', '10.3', 'February 2021', '2021/09/Chillan-I.jpeg'],
  ['CL126', 'Maule Region', '7.1', 'January 2021', '2021/11/el-paso.jpeg'],
  ['CL117', 'Santiago Metropolitan Region', '7.5', 'January 2021', '2021/09/Casa-Bermeja.jpeg'],
  ['CL132', 'O’Higgins Region', '3.0', 'December 2020', '2021/11/Santa-Carolina.jpeg'],
  ['CL131', 'O’Higgins Region', '9.2', 'December 2020', '2021/09/Romeral.jpeg'],
  ['CL130', 'Maule Region', '10.8', 'December 2020', '2021/09/Molina.jpeg'],
  ['CL115', 'O’Higgins Region', '3.0', 'September 2020', '2020/11/Queltehue.jpeg'],
  ['CL116', 'O’Higgins Region', '3.0', 'September 2020', '2020/11/Pitotoy.jpeg'],
  ['CL125', 'Maule Region', '10.7', 'August 2020', '2020/11/Villa-Alegere.jpeg'],
  ['CL120', 'Maule Region', '10.3', 'June 2020', '2020/06/thumb_Santa-Fe.jpeg'],
  ['CL113', 'Maule Region', '6.0', 'May 2020', '2020/11/Lemu-R.jpeg'],
  ['CL119', 'Valparaíso Region', '3.0', 'April 2020', '2020/06/Los-Paltos.jpeg'],
  ['CL109', 'Maule Region', '3.2', 'March 2020', '2020/11/Villa-Cruz.jpeg'],
  ['CL114', 'Maule Region', '11.0', 'March 2020', '2020/06/Raquen.jpeg'],
  ['CL112', 'Santiago Metropolitan Region', '3.0', 'March 2020', '2020/06/La-Estancia.jpeg'],
  ['CL110', 'O’Higgins Region', '3.2', 'March 2020', '2020/06/Antonia.jpeg'],
  ['CL111', 'O’Higgins Region', '10.8', 'March 2020', '2020/06/Placilla.jpeg'],
];

const chileProjects: Project[] = chile.map(([id, place, capacity, cod, img]) => ({
  name: `Project ${id}`,
  region: 'Chile' as Region,
  place,
  capacity,
  status: 'Operating' as Status,
  cod,
  note: 'Ground-mounted PMGD',
  img: `${U}/${img}`,
}));

export const projects: Project[] = [...inDevelopment, ...flagship, ...chileProjects];

export const regions: Region[] = ['Canada', 'United States', 'Chile'];
export const statuses: Status[] = ['Operating', 'In development'];
