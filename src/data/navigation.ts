// Global navigation, transcribed from 01_INFORMATION_ARCHITECTURE.
// This file IS the route contract: stages 3 and 4 build pages against
// these paths, and the Stage 5 link check enforces zero dead links
// before any production swap.

export interface NavLink {
  label: string;
  href: string;
}

export interface NavSection {
  label: string;
  href: string;
  items: NavLink[];
}

export const PRIMARY_NAV: NavSection[] = [
  {
    label: 'Our Mission',
    href: '/mission',
    items: [
      { label: 'Why the Sun', href: '/mission/why-the-sun' },
      { label: 'Our Approach', href: '/mission/our-approach' },
      { label: 'The 4.8 Billion Year Plan', href: '/mission/the-plan' },
      { label: 'Theory of Change', href: '/mission/theory-of-change' },
      { label: 'Our History', href: '/mission/history' },
      { label: 'Global Strategy', href: '/mission/global-strategy' },
    ],
  },
  {
    label: 'The Crisis',
    href: '/crisis',
    items: [
      { label: 'Solar Depletion', href: '/crisis/solar-depletion' },
      { label: 'Hydrogen Loss', href: '/crisis/hydrogen-loss' },
      { label: 'Red Giant Risk', href: '/crisis/red-giant-risk' },
      { label: 'The Cost of Inaction', href: '/crisis/cost-of-inaction' },
      { label: 'Threats and Opposition', href: '/crisis/threats-and-opposition' },
      { label: 'Frequently Asked Questions', href: '/crisis/faq' },
    ],
  },
  {
    label: 'Our Work',
    href: '/programs',
    items: [
      { label: 'Hydrogen Replenishment Initiative', href: '/programs/hydrogen-replenishment' },
      { label: 'Sunspot Protection Program', href: '/programs/sunspot-protection' },
      { label: 'Solar Wellness Monitoring', href: '/programs/solar-wellness-monitoring' },
      { label: 'Public Awareness', href: '/programs/public-awareness' },
      { label: 'Government Affairs', href: '/programs/government-affairs' },
      { label: 'Youth Solar Leadership', href: '/programs/youth-solar-leadership' },
      { label: 'Corporate Solar Responsibility', href: '/programs/corporate-solar-responsibility' },
      { label: 'Emergency Preparedness', href: '/programs/emergency-preparedness' },
    ],
  },
  {
    label: 'Impact',
    href: '/impact',
    items: [
      { label: 'Impact Dashboard', href: '/impact/dashboard' },
      { label: 'Annual Impact Report', href: '/impact/annual-report' },
      { label: 'Where Your Support Goes', href: '/impact/where-your-support-goes' },
      { label: 'Program Results', href: '/impact/program-results' },
      { label: 'Solar Appearance Record', href: '/impact/solar-appearance-record' },
      { label: 'Independent Evaluation', href: '/impact/independent-evaluation' },
      { label: 'Financials', href: '/impact/financials' },
    ],
  },
  {
    label: 'Research',
    href: '/research',
    items: [
      { label: 'Solar Science', href: '/research/solar-science' },
      { label: 'Research Library', href: '/research/library' },
      { label: 'Policy Briefs', href: '/research/policy-briefs' },
      { label: 'Technical Papers', href: '/research/technical-papers' },
      { label: 'Data and Methodology', href: '/research/data-and-methodology' },
      { label: 'Scientific Advisory Council', href: '/research/advisory-council' },
      { label: 'Submit Research', href: '/research/submit' },
    ],
  },
  {
    label: 'Get Involved',
    href: '/get-involved',
    items: [
      { label: 'Donate', href: '/donate' },
      { label: 'Give Monthly', href: '/get-involved/give-monthly' },
      { label: 'Adopt a Sunspot', href: '/adopt-a-sunspot' },
      { label: 'Become a Volunteer', href: '/get-involved/volunteer' },
      { label: 'Corporate Partnerships', href: '/get-involved/corporate-partnerships' },
      { label: 'Workplace Giving', href: '/get-involved/workplace-giving' },
      { label: 'Legacy Giving', href: '/get-involved/legacy-giving' },
      { label: 'Fundraise for the Sun', href: '/get-involved/fundraise' },
      { label: 'Attend an Event', href: '/get-involved/events' },
      { label: 'Contact Your Representative', href: '/get-involved/contact-congress' },
    ],
  },
  {
    label: 'News and Stories',
    href: '/news',
    items: [
      { label: 'Latest News', href: '/news' },
      { label: 'Foundation Blog', href: '/news/blog' },
      { label: 'Press Releases', href: '/news/press' },
      { label: 'Field Updates', href: '/news/field-updates' },
      { label: 'Donor Stories', href: '/news/donor-stories' },
      { label: 'Media Resources', href: '/news/media-resources' },
      { label: 'Newsletter Archive', href: '/news/newsletter-archive' },
    ],
  },
  {
    label: 'About Us',
    href: '/about',
    items: [
      { label: 'Leadership', href: '/about/leadership' },
      { label: 'Board of Trustees', href: '/about/board' },
      { label: 'Careers', href: '/about/careers' },
      { label: 'Partners', href: '/about/partners' },
      { label: 'Financial Transparency', href: '/about/financial-transparency' },
      { label: 'Contact', href: '/about/contact' },
      { label: 'Governance', href: '/about/governance' },
      { label: 'Ethics and Accountability', href: '/about/ethics' },
    ],
  },
];

// Footer architecture, straight from the pack.
export const FOOTER_COLUMNS: { heading: string; items: NavLink[] }[] = [
  {
    heading: 'Mission',
    items: [
      { label: 'Why the Sun', href: '/mission/why-the-sun' },
      { label: 'Our Work', href: '/programs' },
      { label: 'Impact', href: '/impact' },
      { label: 'Research', href: '/research' },
    ],
  },
  {
    heading: 'Take Action',
    items: [
      { label: 'Donate', href: '/donate' },
      { label: 'Adopt a Sunspot', href: '/adopt-a-sunspot' },
      { label: 'Volunteer', href: '/get-involved/volunteer' },
      { label: 'Corporate Partnerships', href: '/get-involved/corporate-partnerships' },
      { label: 'Contact Congress', href: '/get-involved/contact-congress' },
    ],
  },
  {
    heading: 'Learn',
    items: [
      { label: 'News', href: '/news' },
      { label: 'Blog', href: '/news/blog' },
      { label: 'Research Library', href: '/research/library' },
      { label: 'Document Register', href: '/documents' },
      { label: 'FAQ', href: '/crisis/faq' },
      { label: 'Media Center', href: '/news/media-resources' },
    ],
  },
  {
    heading: 'Organization',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Leadership', href: '/about/leadership' },
      { label: 'Board', href: '/about/board' },
      { label: 'Careers', href: '/about/careers' },
      { label: 'Financials', href: '/impact/financials' },
      { label: 'Contact', href: '/about/contact' },
    ],
  },
  {
    heading: 'Legal',
    items: [
      { label: 'Privacy', href: '/legal/privacy' },
      { label: 'Terms', href: '/legal/terms' },
      { label: 'Accessibility', href: '/legal/accessibility' },
      { label: 'Cookie Preferences', href: '/legal/cookies' },
      { label: 'Donor Privacy', href: '/legal/donor-privacy' },
      { label: 'Research Ethics', href: '/legal/research-ethics' },
      { label: 'Solar Naming Policy', href: '/legal/solar-naming-policy' },
    ],
  },
];
