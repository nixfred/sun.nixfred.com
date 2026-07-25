// The sunspot adoption catalog. Fictional active regions in credible
// heliophysics dress. Designations follow the AR numbering style.
export interface Sunspot {
  designation: string;
  nickname: string;
  sizeClass: 'Compact' | 'Standard' | 'Executive';
  risk: 'Low' | 'Moderate' | 'Elevated';
  visibility: 'Favorable' | 'Intermittent' | 'Discreet';
  status: 'Available' | 'Recently Adopted';
  location: string;
  bio: string;
}

export const SUNSPOTS: Sunspot[] = [
  { designation: 'AR 4172', nickname: 'The Steward', sizeClass: 'Executive', risk: 'Moderate', visibility: 'Favorable', status: 'Available', location: 'Northern hemisphere, approximately', bio: 'A dignified region of intense magnetic activity that has held its position longer than most committees hold quorum. Photographs well. Asks for nothing.' },
  { designation: 'AR 4175', nickname: 'Little Dawn', sizeClass: 'Compact', risk: 'Low', visibility: 'Intermittent', status: 'Available', location: 'Equatorial band, subject to rotation', bio: 'A modest spot suited to first time adopters. Its magnetic field is described by analysts as earnest.' },
  { designation: 'AR 4168', nickname: 'The Chairman', sizeClass: 'Executive', risk: 'Elevated', visibility: 'Favorable', status: 'Recently Adopted', location: 'Northwest quadrant, commanding', bio: 'The largest region in the current catalog. Its adoption was finalized after a competitive review process the Foundation describes as orderly.' },
  { designation: 'AR 4180', nickname: 'Prudence', sizeClass: 'Standard', risk: 'Low', visibility: 'Favorable', status: 'Available', location: 'Southern hemisphere, reliable', bio: 'A well regulated spot that appears, persists, and dissolves on a schedule the Foundation finds exemplary. A sound choice for the fiscally careful.' },
  { designation: 'AR 4177', nickname: "The Widow's Mite", sizeClass: 'Compact', risk: 'Moderate', visibility: 'Discreet', status: 'Available', location: 'Near limb, humble', bio: 'Small, quiet, and easily overlooked, which is precisely why it should not be. Adopters receive the same certificate as everyone else.' },
  { designation: 'AR 4165', nickname: 'Continuity', sizeClass: 'Standard', risk: 'Moderate', visibility: 'Intermittent', status: 'Available', location: 'Mid latitude, dependable', bio: 'Named for the value it represents. Its flare record is unremarkable, which the Risk Office considers its finest quality.' },
  { designation: 'AR 4183', nickname: 'The Patriarch', sizeClass: 'Executive', risk: 'Elevated', visibility: 'Favorable', status: 'Available', location: 'Northern quadrant, prominent', bio: 'An imposing region trailed by a family of smaller spots it has never publicly acknowledged. Adoption includes the dependents.' },
  { designation: 'AR 4179', nickname: 'Quiet Yield', sizeClass: 'Compact', risk: 'Low', visibility: 'Discreet', status: 'Recently Adopted', location: 'Southeast quadrant, retiring', bio: 'Adopted within one business day of listing by a donor who wished to remain anonymous and was, per policy, recorded anyway.' },
  { designation: 'AR 4186', nickname: 'The Auditor', sizeClass: 'Standard', risk: 'Moderate', visibility: 'Favorable', status: 'Available', location: 'Central disk, observant', bio: 'Positioned to face Earth directly for much of its tenure. Analysts report the sensation of being reviewed. Adopters report the same.' },
  { designation: 'AR 4190', nickname: 'First Light', sizeClass: 'Standard', risk: 'Low', visibility: 'Favorable', status: 'Available', location: 'Eastern limb, arriving', bio: 'The newest region in the catalog, still rotating into view. Early adoption is available for those who commit before seeing it, which the Development Office calls faith.' },
  { designation: 'AR 4162', nickname: 'The Elder', sizeClass: 'Compact', risk: 'Moderate', visibility: 'Intermittent', status: 'Available', location: 'Western limb, departing', bio: 'Nearing the end of its visible transit. Adoption at this stage is a legacy gesture, and the certificate notes it accordingly.' },
  { designation: 'AR 4188', nickname: 'Standing Committee', sizeClass: 'Standard', risk: 'Elevated', visibility: 'Favorable', status: 'Available', location: 'Northern band, deliberating', bio: 'A cluster of spots in close formation that has neither grown nor dissolved in eleven days. The Foundation recognizes the posture.' },
];
