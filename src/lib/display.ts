// ───────────────────────────────────────────────────────
// NPS — Display Map
// Maps stored enum values to human-readable UI labels.
// Import and use: DISPLAY.tags['beginners'] -> "For beginners"
// For single-word values not in the map, just capitalize.
// ───────────────────────────────────────────────────────

export const DISPLAY = {

  tags: {
    'beginners': 'For beginners',
    'families': 'For families',
    'solo': 'Solo-friendly',
    'budget': 'Budget',
    'luxury': 'Luxury',
    'wildlife': 'Wildlife',
    'birding': 'Birding',
    'photography': 'Photography',
    'expedition': 'Expedition',
    'weekend': 'Weekend trip',
    'trekking': 'Trekking',
    'heritage': 'Heritage',
    'marine': 'Marine',
    'urban': 'Urban',
    'geological': 'Geological',
  },

  climate: {
    'tropical-wet': 'Tropical wet',
    'tropical-dry': 'Dry tropical',
    'subtropical': 'Subtropical',
    'temperate': 'Temperate',
    'alpine': 'Alpine',
    'cold-desert': 'Cold desert',
    'arid': 'Arid',
    'semi-arid': 'Semi-arid',
    'coastal': 'Coastal',
    'mangrove': 'Mangrove',
  },

  terrain: {
    'flat': 'Flat',
    'hilly': 'Hilly',
    'mountainous': 'Mountainous',
    'dense-forest': 'Dense forest',
    'river-heavy': 'River-heavy',
    'gorge': 'Gorge',
    'plateau': 'Plateau',
    'island': 'Island',
    'scrubland': 'Scrubland',
    'wetland': 'Wetland',
    'glacial': 'Glacial',
    'cave-system': 'Cave system',
  },

  birdingQuality: {
    'Poor': 'Poor',
    'Mediocre': 'Mediocre',
    'Good': 'Good',
    'Rich': 'Rich',
    'Exceptional': 'Exceptional',
  },

  sightingProb: {
    'near-guaranteed': 'Near-guaranteed',
    'likely': 'Likely',
    'possible': 'Possible',
    'rare': 'Rare',
    'unlikely': 'Unlikely',
  },

  safariType: {
    'jeep': 'Jeep',
    'canter': 'Canter',
    'boat': 'Boat',
    'walking': 'Walking',
    'elephant': 'Elephant',
    'bus': 'Bus',
    'raft': 'Raft',
    'cycle': 'Cycle',
    'snorkeling': 'Snorkeling',
    'ferry': 'Ferry',
  },

  bookingRequirement: {
    'No': 'No',
    'Yes': 'Yes',
    'Months in advance': 'Months in advance',
  },

  coreZoneAccess: {
    'Yes': 'Yes',
    'Buffer zone only': 'Buffer zone only',
    'Outer zone only': 'Outer zone only',
    'No access': 'No access',
  },

  safariDensity: {
    'Low': 'Low',
    'Moderate': 'Moderate',
    'High': 'High',
    'Very high': 'Very high',
  },

  networkQuality: {
    'None': 'None',
    'Poor': 'Poor',
    'Decent': 'Decent',
    'Excellent': 'Excellent',
  },

  stayQuality: {
    'Boats': 'Boats',
    'Camps': 'Camps',
    'Forest rest house': 'Forest rest house',
    'Homestays': 'Homestays',
    'Budget': 'Budget',
    'Mid-range': 'Mid-range',
    'Luxury': 'Luxury',
  },

  transportIcon: {
    'plane': 'By Plane',
    'train': 'By Train',
    'bus': 'By Bus',
    'car': 'By Car',
    'boat': 'By Boat',
    'ferry': 'By Ferry',
    'foot': 'On Foot',
    'helicopter': 'By Helicopter',
  },

} as const;

// ── Utility: format month ranges ───────────────────────

const MONTH_SHORT = [
  '', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
] as const;

const MONTH_FULL = [
  '', 'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
] as const;

export function formatMonthRange(
  range: [number, number],
  style: 'short' | 'full' = 'short',
): string {
  const names = style === 'short' ? MONTH_SHORT : MONTH_FULL;
  return `${names[range[0]]}-${names[range[1]]}`;
}

// ── Utility: format elevation ──────────────────────────

export function formatElevation(range: [number, number]): string {
  return `${range[0].toLocaleString()}-${range[1].toLocaleString()} m`;
}

// ── Utility: format area ───────────────────────────────

export function formatArea(km2: number): string {
  return `${km2.toLocaleString()} km²`;
}
