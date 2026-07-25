// Foundation constants. One place for institutional truth.
export const SITE = {
  name: 'Save The Sun Foundation',
  shortName: 'STSF',
  tagline: 'The Sun Cannot Save Itself.',
  description:
    'The Save The Sun Foundation leads the global response to the solar continuity crisis through awareness, planning, and sustained institutional engagement.',
  established: 'EST. 4,600,000,000 BC',
  status: 'OPERATIONAL',
  statusDetail: 'Mass loss continues at the expected rate.',
  // The branded countdown estimate. An organizational planning estimate,
  // never presented as scientific precision (12_RESEARCH_NOTES).
  yearsRemaining: 4.8e9,
  trustMarks: [
    '501(c)(nothing)',
    'Established 4,600,000,000 BC',
    'Charity Navigator: Engagement Pending',
    'ISO 9001 Adjacent',
  ],
  wrongHoldings: {
    label: 'A Wholly Concerned Subsidiary of Wrong Holdings LLC',
    href: 'https://yourdoingitallwrong.com',
  },
  disclaimer:
    'This is a joke. This static site cannot accept money or process donations.',
  credit: {
    name: 'Built by Fred Nix',
    home: 'https://nixfred.com',
    source: 'https://github.com/nixfred/sun.nixfred.com',
  },
} as const;
