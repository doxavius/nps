// ───────────────────────────────────────────────────────
// NPS — Final Schema (revised)
// ───────────────────────────────────────────────────────

// ── PREDETERMINED LISTS ────────────────────────────────

export type Region =
  | 'North India'
  | 'South India'
  | 'East India'
  | 'West India'
  | 'Central India'
  | 'Northeast India';

export type VisitorTag =
  | 'beginners'
  | 'families'
  | 'solo'
  | 'budget'
  | 'luxury'
  | 'wildlife'
  | 'birding'
  | 'photography'
  | 'expedition'
  | 'weekend'
  | 'trekking'
  | 'heritage'
  | 'marine'
  | 'urban'
  | 'geological';

export type Climate =
  | 'tropical-wet'
  | 'tropical-dry'
  | 'subtropical'
  | 'temperate'
  | 'alpine'
  | 'cold-desert'
  | 'arid'
  | 'semi-arid'
  | 'coastal'
  | 'mangrove';

export type Terrain =
  | 'flat'
  | 'hilly'
  | 'mountainous'
  | 'dense-forest'
  | 'river-heavy'
  | 'gorge'
  | 'plateau'
  | 'island'
  | 'scrubland'
  | 'wetland'
  | 'glacial'
  | 'cave-system';

export type BirdingQuality = 'Poor' | 'Mediocre' | 'Good' | 'Rich' | 'Exceptional';

export type SightingProb =
  | 'near-guaranteed'
  | 'likely'
  | 'possible'
  | 'rare'
  | 'unlikely';

export type SafariType =
  | 'jeep'
  | 'canter'
  | 'boat'
  | 'walking'
  | 'elephant'
  | 'bus'
  | 'raft'
  | 'cycle'
  | 'snorkeling'
  | 'ferry';

export type BookingRequirement = 'No' | 'Yes' | 'Months in advance';

export type CoreZoneAccess = 'Yes' | 'Buffer zone only' | 'Outer zone only' | 'No access';

export type SafariDensity = 'Low' | 'Moderate' | 'High' | 'Very high';

export type NetworkQuality = 'None' | 'Poor' | 'Decent' | 'Excellent';

export type StayQuality =
  | 'Boats'
  | 'Camps'
  | 'Forest rest house'
  | 'Homestays'
  | 'Budget'
  | 'Mid-range'
  | 'Luxury';

export type TransportIcon =
  | 'plane'
  | 'train'
  | 'bus'
  | 'car'
  | 'boat'
  | 'ferry'
  | 'foot'
  | 'helicopter';

// ── SUPPORTING TYPES ───────────────────────────────────

export type ExperienceScore = {
  score: number;
  desc: string;
};

export type TransportMode = {
  icon: TransportIcon;
  desc: string;
};

export type Gate = {
  name: string;
  qualifier?: string;
};

export type WildlifeCard = {
  name: string;
  image: string;
};

// ── MAIN TYPES ─────────────────────────────────────────

// Draft parks: just enough data for a map pin and a "coming soon" sidebar
export type DraftPark = {
  status: 'draft';
  id: string;
  name: string;
  state: string;
  region: Region;
  coordinates: { lat: number; lng: number };
};

// Live parks: fully populated, ready for the full sidebar
export type LivePark = {
  status: 'live';

  // ── Section 1: Hero ──────────────────────────────
  id: string;
  name: string;
  state: string;
  region: Region;
  oneLiner: string;
  description: string;
  tags: VisitorTag[];                    // 2-3 tags
  heroImage: string;
  unescoStatus: boolean;
  permitRequired: boolean;
  permitDescription?: string;            // only when permitRequired is true

  // ── Section 2: At a Glance ───────────────────────
  established: number;
  areaKm2: number;
  openMonths: [number, number];
  elevationRange: [number, number];      // [min, max] in metres, always present
  recommendedDays: number;
  nearestCity: string;
  nearestCityDistKm: number;
  coordinates: { lat: number; lng: number };

  // ── Section 3: Experience Scores ─────────────────
  scores: {
    wildlife: ExperienceScore;
    scenic: ExperienceScore;
    accessibility: ExperienceScore;
    crowdLevel: ExperienceScore;
    remoteness: ExperienceScore;
    infrastructure: ExperienceScore;
  };

  // ── Section 4: Best Season to Visit ──────────────
  bestMonths: [number, number];
  speciality: string;
  specialityMonths: [number, number];
  seasonProse: string;

  // ── Section 5: Did You Know ──────────────────────
  trivia: string[];                      // 2-3 items

  // ── Section 6: Landscape ─────────────────────────
  climate: Climate[];                    // 1-2 tags
  terrain: Terrain[];                    // 1-3 tags
  landscapeProse: string;
  landscapeImages: [string, string, string];

  // ── Section 7: Wildlife ──────────────────────────
  flagshipFauna: string | null;
  sightingProb: SightingProb | null;     // null when flagshipFauna is null
  birdingQuality: BirdingQuality;
  animalSpecies: number | null;
  birdingSpecies: number | null;
  wildlifeProse: string;
  wildlifeCards: WildlifeCard[];         // 3-6 items

  // ── Section 8: Safari System ─────────────────────
  safari: {
    types: SafariType[];
    bookingRequirement: BookingRequirement;
    coreZoneAccess: CoreZoneAccess;
    density: SafariDensity;
    prose: string;
    gates: Gate[];
  } | null;

  // ── Section 9: Practical Info ────────────────────
  networkQuality: NetworkQuality;
  stayQuality: StayQuality;
  entryFeeINR: number | null;
  entryFeeForeigner: number | null;
  practicalProse: string;

  // ── Section 10: How to Reach ─────────────────────
  connectivityProse: string;
  transport: TransportMode[];

  // ── Section 11: Photography ──────────────────────
  photoProse: string;
};

// Union: every entry in the parks array is either draft or live
export type Park = DraftPark | LivePark;
