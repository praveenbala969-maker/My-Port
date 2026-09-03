export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  role: string;
  timeline: string;
  summary: string;
  metrics: {
    label: string;
    value: string;
  }[];
  tags: string[];
  screenshots: {
    folder: string;
    after: string[];
    before?: string[];
  };
  liveUrl?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'koenig',
    title: 'Koenig Solutions: Transforming Global IT Training & Certification Discovery',
    client: 'Koenig Solutions',
    role: 'Lead UX/UI Designer',
    timeline: '6 Months (2024)',
    summary:
      'Complete design system overhaul and conversion-focused UX revamp across 5,000+ certification offerings worldwide.',
    metrics: [
      { label: 'Direct Registrations', value: '+44%' },
      { label: 'Booking Drop-offs', value: '-38%' },
      { label: '1-on-1 Scheduling', value: '+62%' },
      { label: 'Mobile Conversion', value: '+29%' },
    ],
    tags: ['E-Commerce', 'EdTech', 'Design System', 'Responsive Web'],
    screenshots: {
      folder: '/projects/koenig',
      after: ['Course.png', 'Tech.png', 'Home.png'],
      before: ['Course_before.png', 'Tech_before.png', 'Home_before.png'],
    },
    liveUrl: 'https://www.koenig-solutions.com',
  },
];
