// The 12 fictional corporate sponsors (09_ASSET_AND_LOGO_PLAN).
// Logos are code built text lockups; each gets a distinct typographic
// treatment so the wall reads like 12 real brands designed by 12 real
// agencies. No parody of actual trademarks.
export interface Sponsor {
  name: string;
  industry: string;
  level: 'Dawn Circle' | 'Zenith Partner' | 'Horizon Ally' | 'First Light Member';
  // Lockup style: which typographic recipe SponsorWall applies
  style: 'serif-caps' | 'sans-bold' | 'sans-light-wide' | 'mono-tech' | 'serif-italic' | 'sans-stacked';
  mark?: 'circle' | 'square' | 'triangle' | 'bar' | 'ring' | 'none';
}

export const SPONSORS: Sponsor[] = [
  { name: 'HelioSure', industry: 'Insurance', level: 'Dawn Circle', style: 'sans-bold', mark: 'circle' },
  { name: 'NightBright Industries', industry: 'Illumination', level: 'Dawn Circle', style: 'mono-tech', mark: 'square' },
  { name: 'Perpetual Day Financial', industry: 'Financial Services', level: 'Zenith Partner', style: 'serif-caps', mark: 'bar' },
  { name: 'Northstar Logistics', industry: 'Transportation', level: 'Zenith Partner', style: 'sans-light-wide', mark: 'triangle' },
  { name: 'Continuum Energy', industry: 'Energy', level: 'Zenith Partner', style: 'sans-bold', mark: 'ring' },
  { name: 'Atlas Atmospheric', industry: 'Climate Systems', level: 'Horizon Ally', style: 'serif-caps', mark: 'circle' },
  { name: 'Crown Hydrogen', industry: 'Industrial Gases', level: 'Horizon Ally', style: 'serif-italic', mark: 'none' },
  { name: 'Morning Standard', industry: 'Media', level: 'Horizon Ally', style: 'serif-caps', mark: 'none' },
  { name: 'Daybreak Systems', industry: 'Technology', level: 'First Light Member', style: 'mono-tech', mark: 'square' },
  { name: 'Aurora Civic Partners', industry: 'Consulting', level: 'First Light Member', style: 'sans-light-wide', mark: 'none' },
  { name: 'Horizon Mutual', industry: 'Insurance', level: 'First Light Member', style: 'sans-stacked', mark: 'bar' },
  { name: 'First Light Capital', industry: 'Private Equity', level: 'First Light Member', style: 'serif-italic', mark: 'triangle' },
];
