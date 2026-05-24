import { Park } from '@/types/park';

// ───────────────────────────────────────────────────────
// Parks. Each entry is either a 'draft' (id + coordinates
// only, renders as a pin on the map and a minimal sidebar)
// or 'live' (fully populated, renders the full sidebar).
// ───────────────────────────────────────────────────────

export const parks: Park[] = [
  {
    status: 'draft',
    id: "anamudi-shola",
    name: "Anamudi Shola National Park",
    state: "Kerala",
    region: "South India",
    coordinates: { lat: 10.12, lng: 77.12 },
  },
  {
    status: 'draft',
    id: "anshi",
    name: "Anshi National Park",
    state: "Karnataka",
    region: "South India",
    coordinates: { lat: 15.01, lng: 74.35 },
  },
  {
    status: 'draft',
    id: "balphakram",
    name: "Balphakram National Park",
    state: "Meghalaya",
    region: "Northeast India",
    coordinates: { lat: 25.33, lng: 90.75 },
  },
  {
    status: 'live',
    id: 'bandhavgarh',
    name: 'Bandhavgarh National Park',
    state: 'Madhya Pradesh',
    region: 'Central India',
    oneLiner: 'The highest tiger density in India, packed into a compact core zone',
    description:
      'A dense sal forest wrapped around a 2,000-year-old hilltop fort in the Vindhya Hills. Former hunting ground of the Maharaja of Rewa, where the first white tiger was captured in 1951. Bandhavgarh\'s compact 105 km² tourism zone and high tiger density give it arguably the best odds of a tiger sighting on any single safari in India.',
    tags: ['wildlife', 'heritage', 'photography'],
    heroImage: '/images/bandhavgarh.jpg',
    unescoStatus: false,
    permitRequired: false,

    established: 1968,
    areaKm2: 716,
    openMonths: [10, 6] as [number, number],
    elevationRange: [410, 810] as [number, number],
    recommendedDays: 2,
    nearestCity: 'Umaria',
    nearestCityDistKm: 32,
    coordinates: { lat: 23.699, lng: 80.962 },

    scores: {
      wildlife: { score: 9, desc: 'Highest tiger sighting probability per safari in India' },
      scenic: { score: 7, desc: 'Ancient fort on a hilltop, sal forest, grassy meadows' },
      accessibility: { score: 4, desc: 'Jabalpur airport 170 km, then 3.5 hours by road' },
      crowdLevel: { score: 3, desc: 'Very high demand for Tala zone, sells out weeks ahead' },
      remoteness: { score: 6, desc: 'Tala village has resort clusters, otherwise rural MP' },
      infrastructure: { score: 7, desc: 'Online booking via MP Forest, trained guides, luxury lodges at Tala' },
    },

    bestMonths: [2, 5] as [number, number],
    speciality: 'tiger sighting odds',
    specialityMonths: [3, 6] as [number, number],
    seasonProse:
      'February to May offers the best tiger sighting probability. Deciduous trees shed leaves from March, water sources shrink, and tigers are forced into the open near meadows and streams. October to January is pleasant weather but thicker vegetation reduces visibility. Park closes July to September for monsoon. Tuesday is the weekly closure day.',

    trivia: [
      'Mohan, the world\'s first captive white tiger, was caught in Bandhavgarh\'s forests by the Maharaja of Rewa in 1951. Every white tiger alive today descends from him.',
      'The Bandhavgarh Fort, perched at 810 m atop the central hill, dates to at least the 1st century AD. It has inscriptions in Brahmi script and a 10th-century Vishnu reclining statue carved into rock.',
      'Charger, one of Bandhavgarh\'s most famous tigers, was named for his habit of mock-charging elephants and jeeps. He never actually attacked anyone.',
    ],

    climate: ['subtropical'],
    terrain: ['hilly', 'dense-forest'],
    landscapeProse:
      'A horseshoe of steep sandstone hills encloses a central valley of sal forest and meadow. The Bandhavgarh fort crowns the highest point at 810 m, its walls visible from much of the core zone. Below the hills, grasslands and bamboo thickets line seasonal streams. The Tala zone has the densest forest and the highest prey concentration. By late March, the canopy thins to bare branches, opening dramatic sightlines through the forest.',
    landscapeImages: [
      '/images/bandhavgarh-landscape-1.jpg',
      '/images/bandhavgarh-landscape-2.jpg',
      '/images/bandhavgarh-landscape-3.jpg',
    ],

    flagshipFauna: 'Bengal Tiger',
    sightingProb: 'near-guaranteed',
    birdingQuality: 'Rich',
    animalSpecies: 37,
    birdingSpecies: 250,
    wildlifeProse:
      'Around 135 tigers in the reserve per the 2022 census, concentrated in a compact core. The tourism zone is small enough that repeat sightings of known individuals are common across a 2-day visit. Leopards are present but shy, staying in the hillier terrain. Sloth bears are seen with reasonable frequency, especially around termite mounds. Gaur was reintroduced from Kanha in 2012 and the population has grown to about 170. Chital, sambar, nilgai, wild boar, and four-horned antelope fill the prey base. Birding is rich at 250 species with white-rumped vulture, Malabar pied hornbill, crested serpent eagle, and paradise flycatcher among the highlights.',
    wildlifeCards: [
      { name: 'Bengal Tiger', image: '/images/bandhavgarh-wildlife-bengal-tiger.jpg' },
      { name: 'Sloth Bear', image: '/images/bandhavgarh-wildlife-sloth-bear.jpg' },
      { name: 'Indian Leopard', image: '/images/bandhavgarh-wildlife-indian-leopard.jpg' },
      { name: 'Gaur', image: '/images/bandhavgarh-wildlife-gaur.jpg' },
      { name: 'Sambar Deer', image: '/images/bandhavgarh-wildlife-sambar-deer.jpg' },
      { name: 'Paradise Flycatcher', image: '/images/bandhavgarh-wildlife-paradise-flycatcher.jpg' },
    ],

    safari: {
      types: ['jeep'],
      bookingRequirement: 'Yes',
      coreZoneAccess: 'Yes',
      density: 'High',
      prose:
        'Three core zones: Tala (highest tiger density, most popular), Magdhi, and Khitauli. Buffer zones include Panpatha and Dhamokhar. Safaris run in morning and afternoon shifts of about 4 hours. Full-day safaris are available and offer the best experience, keeping you inside the park from dawn to dusk. Book through MP Forest Department portal (mponline.gov.in). Tuesday is the weekly closure.',
      gates: [
        { name: 'Tala Gate', qualifier: 'main gate, highest tiger density' },
        { name: 'Magdhi Gate' },
        { name: 'Khitauli Gate' },
      ],
    },

    networkQuality: 'Poor',
    stayQuality: 'Luxury',
    entryFeeINR: 2500,
    entryFeeForeigner: 4500,
    practicalProse:
      'Winter mornings in the open jeep can dip below 5°C, so layer up. March to May crosses 40°C. Carry cash as Tala village has limited ATMs. If Tala zone is sold out, Magdhi and Khitauli offer good alternatives with fewer vehicles. Full-day safaris are worth the premium for serious wildlife viewers.',

    connectivityProse:
      '32 km from Umaria. Jabalpur airport is 170 km west, Khajuraho airport is 230 km north.',
    transport: [
      { icon: 'plane', desc: 'Jabalpur Airport (JLR), 170 km. Flights from Delhi, Mumbai, Bhopal. Taxi to Tala gate takes 3.5 hours.' },
      { icon: 'train', desc: 'Umaria Railway Station (UMR), 32 km. Direct trains from Delhi, Varanasi, Kolkata, Jabalpur. Taxi to park 45 minutes.' },
      { icon: 'bus', desc: 'Limited state bus service from Jabalpur and Satna. Not reliable for tight schedules.' },
      { icon: 'car', desc: 'From Jabalpur via NH44 and state highways (3.5 hours). From Khajuraho via Satna (5 hours).' },
    ],

    photoProse:
      'Tala zone\'s open meadows backed by the fort hill make for dramatic compositions. Tigers here are habituated to vehicles, often walking within metres of the jeep, so even a 200-400mm lens delivers frame-filling portraits. Morning light filtering through bare sal canopy in April and May creates strong rim-lit opportunities. The Vishnu reclining statue near the fort is worth photographing for its historical significance.',
  },
  {
    status: 'draft',
    id: "bandipur",
    name: "Bandipur National Park",
    state: "Karnataka",
    region: "South India",
    coordinates: { lat: 11.67, lng: 76.63 },
  },
  {
    status: 'draft',
    id: "bannerghatta",
    name: "Bannerghatta National Park",
    state: "Karnataka",
    region: "South India",
    coordinates: { lat: 12.8, lng: 77.58 },
  },
  {
    status: 'draft',
    id: "betla",
    name: "Betla National Park",
    state: "Jharkhand",
    region: "East India",
    coordinates: { lat: 23.87, lng: 84.07 },
  },
  {
    status: 'draft',
    id: "bhitarkanika",
    name: "Bhitarkanika National Park",
    state: "Odisha",
    region: "East India",
    coordinates: { lat: 20.73, lng: 87 },
  },
  {
    status: 'draft',
    id: "bison-rajbari",
    name: "Bison (Rajbari) National Park",
    state: "Tripura",
    region: "Northeast India",
    coordinates: { lat: 23.9, lng: 91.6 },
  },
  {
    status: 'live',
    id: 'velavadar',
    name: 'Blackbuck National Park',
    state: 'Gujarat',
    region: 'West India',
    oneLiner: "Open grasslands with India's largest blackbuck herds and the world's biggest harrier roost",
    description:
      'A 34 km² patch of flat coastal grassland in the Bhal region of Saurashtra, bordering the Gulf of Khambhat. Former hunting ground of the Maharaja of Bhavnagar, who ran blackbuck down with trained cheetahs. Now protects over 2,000 blackbuck, a healthy Indian wolf population, and one of the world\'s largest winter harrier roosts.',
    tags: ['wildlife', 'birding', 'photography'],
    heroImage: '/images/velavadar.jpg',
    unescoStatus: false,
    permitRequired: false,

    established: 1976,
    areaKm2: 34,
    openMonths: [10, 6] as [number, number],
    elevationRange: [1, 15] as [number, number],
    recommendedDays: 1,
    nearestCity: 'Bhavnagar',
    nearestCityDistKm: 42,
    coordinates: { lat: 22.033, lng: 72.050 },

    scores: {
      wildlife: { score: 7, desc: 'Blackbuck herds guaranteed, wolves seen regularly' },
      scenic: { score: 6, desc: 'Flat open grassland, golden in winter, green in monsoon' },
      accessibility: { score: 6, desc: 'Bhavnagar airport 65 km, Ahmedabad 170 km' },
      crowdLevel: { score: 7, desc: 'Few visitors outside weekends and festivals' },
      remoteness: { score: 5, desc: 'Rural Gujarat, Bhavnagar town nearby' },
      infrastructure: { score: 5, desc: 'One good lodge, basic forest facilities, no guides' },
    },

    bestMonths: [11, 2] as [number, number],
    speciality: 'harrier roost',
    specialityMonths: [12, 2] as [number, number],
    seasonProse:
      'November to February is ideal. Blackbuck are active, migratory harriers roost in thousands, and the weather is pleasant. The harrier roost at dusk is the single best spectacle. Park closes mid-June to mid-October for monsoon breeding season.',

    trivia: [
      "One of the world's largest harrier roosts. Thousands of Montagu's, pallid, and marsh harriers gather at dusk from November to February.",
      'The Maharaja of Bhavnagar hunted blackbuck here with trained Asiatic cheetahs, now extinct in India.',
      'At 34 km², one of India\'s smallest national parks but one of the most important for grassland conservation.',
    ],

    climate: ['semi-arid'],
    terrain: ['flat', 'scrubland'],
    landscapeProse:
      'Dead flat. Short dry grass stretching to the horizon in every direction, broken only by scattered Prosopis thorn and low acacia scrub. Southern edge meets saline mudflats and tidal wetlands along the Gulf of Khambhat. No hills, no forest, no river. In winter the grass turns golden. After monsoon it briefly flushes green. The openness is the point.',
    landscapeImages: [
      '/images/velavadar-landscape-1.jpg',
      '/images/velavadar-landscape-2.jpg',
      '/images/velavadar-landscape-3.jpg',
    ],

    flagshipFauna: 'Blackbuck',
    sightingProb: 'near-guaranteed',
    birdingQuality: 'Exceptional',
    animalSpecies: 14,
    birdingSpecies: 300,
    wildlifeProse:
      'Blackbuck herds of 50 to 100 graze openly across the grassland. Males with spiralling horns and dark coats are easy to spot and photograph. Indian wolf is the top predator here, one of the most reliable places to see wolves in India. Striped hyena, jungle cat, Indian fox, and jackal round out the mammal list. Birding is exceptional at 300+ species, dominated by the winter harrier roost and including lesser florican, sarus crane, and a strong raptor list.',
    wildlifeCards: [
      { name: 'Blackbuck', image: '/images/velavadar-wildlife-blackbuck.jpg' },
      { name: 'Indian Wolf', image: '/images/velavadar-wildlife-indian-wolf.jpg' },
      { name: "Montagu's Harrier", image: '/images/velavadar-wildlife-montagus-harrier.jpg' },
      { name: 'Lesser Florican', image: '/images/velavadar-wildlife-lesser-florican.jpg' },
      { name: 'Striped Hyena', image: '/images/velavadar-wildlife-striped-hyena.jpg' },
    ],

    safari: {
      types: ['jeep'],
      bookingRequirement: 'No',
      coreZoneAccess: 'Yes',
      density: 'Low',
      prose:
        'Open jeep safaris on grassland tracks. No fixed zones or shifts. Enter at the main gate and drive through the park. Small enough to cover in half a day. Self-drive not allowed, hire a vehicle at the gate or through your lodge.',
      gates: [
        { name: 'Velavadar Gate' },
      ],
    },

    networkQuality: 'Poor',
    stayQuality: 'Mid-range',
    entryFeeINR: 20,
    entryFeeForeigner: 20,
    practicalProse:
      'Carry binoculars for the harrier roost. Winters are pleasant but mornings can be cold in the open jeep. No food vendors inside. Blackbuck Lodge near the gate is the only decent accommodation option.',

    connectivityProse:
      '42 km north of Bhavnagar, 170 km from Ahmedabad. On a rural road off NH-8E.',
    transport: [
      { icon: 'plane', desc: 'Bhavnagar Airport (BHU), 65 km. Limited domestic flights. Taxi 1.5 hours.' },
      { icon: 'train', desc: 'Bhavnagar Terminus, 42 km. Trains from Ahmedabad and Mumbai. Taxi to park.' },
      { icon: 'bus', desc: 'Gujarat GSRTC from Ahmedabad to Bhavnagar (4 hours). Then local taxi.' },
      { icon: 'car', desc: 'NH-8E from Ahmedabad via Botad to Velavadar (3 hours). Flat, easy drive.' },
    ],

    photoProse:
      'Open grassland means clean, uncluttered backgrounds for wildlife portraits. Blackbuck at golden hour with low-angle light is the signature shot. A 200-500mm lens covers most situations. The evening harrier roost, with thousands of birds descending in formation, needs a wider lens and fast shutter speed.',
  },
  {
    status: 'draft',
    id: "buxa",
    name: "Buxa Tiger Reserve",
    state: "West Bengal",
    region: "East India",
    coordinates: { lat: 26.63, lng: 89.55 },
  },
  {
    status: 'draft',
    id: "campbell-bay",
    name: "Campbell Bay National Park",
    state: "Andaman & Nicobar Islands",
    region: "South India",
    coordinates: { lat: 7.01, lng: 93.85 },
  },
  {
    status: 'draft',
    id: "chandoli",
    name: "Chandoli National Park",
    state: "Maharashtra",
    region: "West India",
    coordinates: { lat: 17.18, lng: 73.78 },
  },
  {
    status: 'draft',
    id: "city-forest-salim-ali",
    name: "City Forest National Park (Salim Ali)",
    state: "Jammu & Kashmir",
    region: "North India",
    coordinates: { lat: 34.12, lng: 74.85 },
  },
  {
    status: 'draft',
    id: "clouded-leopard",
    name: "Clouded Leopard National Park",
    state: "Tripura",
    region: "Northeast India",
    coordinates: { lat: 23.84, lng: 91.37 },
  },
  {
    status: 'draft',
    id: "dachigam",
    name: "Dachigam National Park",
    state: "Jammu & Kashmir",
    region: "North India",
    coordinates: { lat: 34.09, lng: 75.05 },
  },
  {
    status: 'live',
    id: 'desert',
    name: 'Desert National Park',
    state: 'Rajasthan',
    region: 'West India',
    oneLiner: "India's Thar Desert wilderness, last stronghold of the great Indian bustard",
    description:
      "Sand dunes, rocky pavements, and salt lake beds across 3,162 km² of the Thar Desert between Jaisalmer and Barmer. One of India's largest national parks and one of the least visited. Created to protect the critically endangered great Indian bustard, now down to fewer than 150 birds in the wild. Jurassic-era fossils, 180 million years old, are scattered through the park.",
    tags: ['birding', 'expedition', 'photography'],
    heroImage: '/images/desert.jpg',
    unescoStatus: false,
    permitRequired: false,

    established: 1981,
    areaKm2: 3162,
    openMonths: [1, 12] as [number, number],
    elevationRange: [200, 300] as [number, number],
    recommendedDays: 2,
    nearestCity: 'Jaisalmer',
    nearestCityDistKm: 40,
    coordinates: { lat: 26.000, lng: 70.500 },

    scores: {
      wildlife: { score: 5, desc: 'Chinkara common, bustard critically rare, no large predators' },
      scenic: { score: 7, desc: 'Rolling dunes, empty horizon, stark desert beauty' },
      accessibility: { score: 5, desc: 'Jaisalmer airport 40 km, limited flights' },
      crowdLevel: { score: 8, desc: 'Very few visitors, vast empty landscape' },
      remoteness: { score: 7, desc: 'Deep Thar, nothing for hours in any direction' },
      infrastructure: { score: 3, desc: 'Basic checkposts, no formal safari system, local guides' },
    },

    bestMonths: [11, 2] as [number, number],
    speciality: 'great Indian bustard',
    specialityMonths: [11, 2] as [number, number],
    seasonProse:
      'November to February is the only comfortable window. Daytime temperatures are pleasant and migratory raptors arrive. March to June is brutal, regularly crossing 48°C with sandstorms. The park is technically open year-round but summer visits are impractical.',

    trivia: [
      'The only place in Rajasthan where the state bird (GIB), state animal (chinkara), state tree (khejri), and state flower (rohida) all occur together.',
      'Contains Jurassic-era fossils dating back 180 million years, including dinosaur fossils from 60 million years ago.',
      "Seven of India's nine vulture species are found here, the highest concentration in any single Indian park.",
    ],

    climate: ['arid'],
    terrain: ['flat', 'scrubland'],
    landscapeProse:
      'Sand dunes covering 44% of the park, some reaching 150 metres in height. Between the dunes: rocky pavements, dry salt lake beds, sparse Prosopis and khejri trees, and patches of desert grass. No rivers, no water bodies except seasonal rain pools. The emptiness is immense. At dawn the dunes turn gold against a pale sky. After rare monsoon rain, the desert briefly flushes green.',
    landscapeImages: [
      '/images/desert-landscape-1.jpg',
      '/images/desert-landscape-2.jpg',
      '/images/desert-landscape-3.jpg',
    ],

    flagshipFauna: 'Great Indian Bustard',
    sightingProb: 'rare',
    birdingQuality: 'Rich',
    animalSpecies: null,
    birdingSpecies: 120,
    wildlifeProse:
      "The great Indian bustard is the reason this park exists. Fewer than 150 survive in the wild, and DNP is their last significant stronghold. Sightings are rare but possible with a knowledgeable local guide, especially around Sudashri waterhole. Chinkara graze openly across the desert. Desert fox, Indian fox, desert cat, Indian wolf, and nilgai are present. Reptiles thrive: spiny-tailed lizard, desert monitor, saw-scaled viper, and common krait. Birding is strong for raptors: seven vulture species, imperial eagle, tawny eagle, Laggar falcon, and Macqueen's bustard.",
    wildlifeCards: [
      { name: 'Great Indian Bustard', image: '/images/desert-wildlife-great-indian-bustard.jpg' },
      { name: 'Chinkara', image: '/images/desert-wildlife-chinkara.jpg' },
      { name: 'Desert Fox', image: '/images/desert-wildlife-desert-fox.jpg' },
      { name: 'Spiny-tailed Lizard', image: '/images/desert-wildlife-spiny-tailed-lizard.jpg' },
      { name: 'Egyptian Vulture', image: '/images/desert-wildlife-egyptian-vulture.jpg' },
    ],

    safari: {
      types: ['jeep'],
      bookingRequirement: 'No',
      coreZoneAccess: 'Yes',
      density: 'Low',
      prose:
        'No formal safari system. Hire a jeep and local guide from Jaisalmer or at the DNP office near Sudashri. Drive through the park on desert tracks. No fixed shifts or zones. A knowledgeable guide is essential for finding GIB habitat.',
      gates: [
        { name: 'Sudashri', qualifier: 'main checkpost and GIB habitat' },
        { name: 'Sam' },
      ],
    },

    networkQuality: 'Poor',
    stayQuality: 'Mid-range',
    entryFeeINR: 100,
    entryFeeForeigner: 100,
    practicalProse:
      'Carry water, sunscreen, and a head covering even in winter. Summer is genuinely dangerous without preparation. No food or shops inside the park. Jaisalmer has good accommodation ranging from havelis to desert camps. Hire a local guide who knows GIB locations.',

    connectivityProse:
      '40 km from Jaisalmer. Sudashri checkpost is the main entry point for GIB habitat.',
    transport: [
      { icon: 'plane', desc: 'Jaisalmer Airport (JSA), 40 km. Limited flights from Delhi and Jaipur.' },
      { icon: 'train', desc: 'Jaisalmer Railway Station, 40 km. Overnight trains from Delhi, Jodhpur, Jaipur.' },
      { icon: 'bus', desc: 'Rajasthan RSRTC from Jodhpur (5 hours) and Jaipur (12 hours) to Jaisalmer.' },
      { icon: 'car', desc: 'From Jodhpur via NH-15 (5 hours). From Jaisalmer, desert road to Sudashri (1 hour).' },
    ],

    photoProse:
      "GIB in the open desert is one of India's most coveted wildlife photographs. A 500-600mm lens is essential. Dawn light on sand dunes is spectacular for landscape work. Chinkara and desert fox are cooperative subjects. The spiny-tailed lizard, basking on rocks, makes an excellent reptile portrait.",
  },
  {
    status: 'draft',
    id: "dibru-saikhowa",
    name: "Dibru-Saikhowa National Park",
    state: "Assam",
    region: "Northeast India",
    coordinates: { lat: 27.61, lng: 95.4 },
  },
  {
    status: 'draft',
    id: "dihing-patkai",
    name: "Dihing Patkai National Park",
    state: "Assam",
    region: "Northeast India",
    coordinates: { lat: 27.28, lng: 95.46 },
  },
  {
    status: 'draft',
    id: "dinosaur-fossils",
    name: "Dinosaur Fossils National Park",
    state: "Madhya Pradesh",
    region: "Central India",
    coordinates: { lat: 22.6, lng: 75.3 },
  },
  {
    status: 'draft',
    id: "dudhwa",
    name: "Dudhwa National Park",
    state: "Uttar Pradesh",
    region: "North India",
    coordinates: { lat: 28.58, lng: 80.63 },
  },
  {
    status: 'live',
    id: 'eravikulam',
    name: 'Eravikulam National Park',
    state: 'Kerala',
    region: 'South India',
    oneLiner: "High-altitude grasslands with half the world's endangered Nilgiri tahr",
    description:
      "A rolling montane plateau above 2,000 metres in the Western Ghats, built around Anamudi, South India's highest peak at 2,695 metres. Kerala's first national park, established specifically to protect the Nilgiri tahr. Every 12 years, the hills turn blue-violet when Neelakurinji flowers bloom across the grasslands. Next bloom expected around 2030.",
    tags: ['wildlife', 'families', 'trekking'],
    heroImage: '/images/eravikulam.jpg',
    unescoStatus: true,
    permitRequired: false,

    established: 1978,
    areaKm2: 97,
    openMonths: [4, 1] as [number, number],
    elevationRange: [2000, 2695] as [number, number],
    recommendedDays: 1,
    nearestCity: 'Munnar',
    nearestCityDistKm: 15,
    coordinates: { lat: 10.2, lng: 77.083 },

    scores: {
      wildlife: { score: 6, desc: 'Tahr sightings almost certain, little else visible' },
      scenic: { score: 9, desc: 'Misty grasslands, shola patches, Anamudi backdrop' },
      accessibility: { score: 6, desc: '15 km from Munnar, but Munnar itself takes effort' },
      crowdLevel: { score: 4, desc: 'Heavy footfall, especially on weekends and holidays' },
      remoteness: { score: 4, desc: 'Munnar is a busy hill station, park is well-connected' },
      infrastructure: { score: 7, desc: 'Online ticketing, shuttle buses, regulated visitor flow' },
    },

    bestMonths: [9, 11] as [number, number],
    speciality: 'Nilgiri tahr',
    specialityMonths: [9, 11] as [number, number],
    seasonProse:
      'September to November is best. Post-monsoon greenery is at its peak, mist lifts early, and tahr herds graze openly on the slopes. The park closes in February and March for tahr calving season. April reopening brings fresh crowds. Summer (April to May) is pleasant but busy. Monsoon months are wet but the park stays open.',

    trivia: [
      'Neelakurinji (Strobilanthes kunthiana) blooms once every 12 years, turning the entire plateau blue-violet. Last bloom was 2018, next expected around 2030.',
      "Anamudi at 2,695 metres is the highest peak south of the Himalayas, and sits right on the park's southern boundary.",
      'Nilgiri tahr population recovered from under 100 in the 1960s to over 800 in Eravikulam alone by 2025.',
    ],

    climate: ['temperate'],
    terrain: ['mountainous', 'plateau'],
    landscapeProse:
      'Above 2,000 metres, the Western Ghats flatten into a rolling grassland plateau broken by dark shola forest patches in every fold and valley. Mist rolls in fast and burns off just as quickly, revealing long views across ridge after ridge. Rocky outcrops punctuate the grass, and streams cut shallow channels down towards the tea estates below. In post-monsoon months, the green is almost unreasonably vivid.',
    landscapeImages: [
      '/images/eravikulam-landscape-1.jpg',
      '/images/eravikulam-landscape-2.jpg',
      '/images/eravikulam-landscape-3.jpg',
    ],

    flagshipFauna: 'Nilgiri Tahr',
    sightingProb: 'near-guaranteed',
    birdingQuality: 'Good',
    animalSpecies: 26,
    birdingSpecies: 132,
    wildlifeProse:
      'Nilgiri tahr are remarkably approachable. Herds of 20 to 30 graze right beside the walking trail at Rajamalai, unbothered by visitors. Males with their distinctive curved horns and dark saddle patches are easy to photograph. Beyond the tahr, the shola forests shelter Nilgiri langur, Nilgiri marten, lion-tailed macaque, and Indian giant squirrel, though these are harder to spot. Birding is good for Western Ghats endemics: Nilgiri pipit, Kerala laughingthrush, white-bellied shortwing, and black-and-orange flycatcher.',
    wildlifeCards: [
      { name: 'Nilgiri Tahr', image: '/images/eravikulam-wildlife-nilgiri-tahr.jpg' },
      { name: 'Nilgiri Langur', image: '/images/eravikulam-wildlife-nilgiri-langur.jpg' },
      { name: 'Nilgiri Marten', image: '/images/eravikulam-wildlife-nilgiri-marten.jpg' },
      { name: 'Lion-tailed Macaque', image: '/images/eravikulam-wildlife-lion-tailed-macaque.jpg' },
      { name: 'Kerala Laughingthrush', image: '/images/eravikulam-wildlife-kerala-laughingthrush.jpg' },
    ],

    safari: {
      types: ['bus', 'walking'],
      bookingRequirement: 'Yes',
      coreZoneAccess: 'No access',
      density: 'High',
      prose:
        'Private vehicles are not allowed. Visitors take a forest department shuttle bus from the checkpoint at 5th Mile to Rajamalai, the tourism zone. From there, a 2 km walking trail loops through the grassland. Total visit time is about 2 hours. Online ticket booking is available and recommended for weekends.',
      gates: [
        { name: 'Rajamalai', qualifier: 'sole tourism zone entry' },
      ],
    },

    networkQuality: 'Decent',
    stayQuality: 'Luxury',
    entryFeeINR: 200,
    entryFeeForeigner: 500,
    practicalProse:
      'Carry a light jacket even in summer; temperatures at 2,000 metres drop quickly when clouds roll in. Wear proper walking shoes for the trail. No food vendors inside the park, so bring water. Munnar town, 15 km away, has everything from budget homestays to high-end tea estate resorts.',

    connectivityProse:
      '15 km north of Munnar on the Udumalpet road. Munnar is 130 km from Kochi and 165 km from Coimbatore.',
    transport: [
      { icon: 'plane', desc: 'Cochin International Airport (COK), 148 km. Taxi to Munnar takes 4 hours via hill roads.' },
      { icon: 'train', desc: 'Aluva station, 120 km, is nearest in Kerala. Coimbatore Junction (165 km) is an alternative.' },
      { icon: 'bus', desc: 'KSRTC and private buses run Kochi to Munnar (4-5 hours). Local taxi from Munnar to park.' },
      { icon: 'car', desc: 'Kochi via NH85 and hill roads (4 hours). Coimbatore via Udumalpet and Bodimettu (4.5 hours).' },
    ],

    photoProse:
      'Early morning mist lifting off the grasslands with tahr silhouettes makes the signature shot. A 70-200mm lens is enough since the animals are close. The Rajamalai viewpoint offers wide panoramic angles across the shola-grassland mosaic. No tripods allowed on the trail.',
  },
  {
    status: 'draft',
    id: "galathea",
    name: "Galathea National Park",
    state: "Andaman & Nicobar Islands",
    region: "South India",
    coordinates: { lat: 6.85, lng: 93.87 },
  },
  {
    status: 'draft',
    id: "gangotri",
    name: "Gangotri National Park",
    state: "Uttarakhand",
    region: "North India",
    coordinates: { lat: 31.02, lng: 79.08 },
  },
  {
    status: 'draft',
    id: "ghughua-fossil",
    name: "Ghughua Fossil National Park",
    state: "Madhya Pradesh",
    region: "Central India",
    coordinates: { lat: 22.75, lng: 81 },
  },
  {
    status: 'live',
    id: 'gir',
    name: 'Gir National Park',
    state: 'Gujarat',
    region: 'West India',
    oneLiner: 'The last wild home of the Asiatic lion, nowhere else on Earth',
    description:
      'The only place on the planet where Asiatic lions roam free. Former hunting ground of the Nawabs of Junagadh, now India\'s most successful big-cat conservation story. The 2025 census counted 891 lions across the Gir landscape, up from under 20 in the early 1900s. Dry deciduous teak forest over rugged, hilly terrain in the Saurashtra peninsula, with the Kamleshwar reservoir at its heart.',
    tags: ['wildlife', 'families', 'photography'],
    heroImage: '/images/gir.jpg',
    unescoStatus: false,
    permitRequired: false,

    established: 1965,
    areaKm2: 1412,
    openMonths: [10, 6] as [number, number],
    elevationRange: [150, 642] as [number, number],
    recommendedDays: 2,
    nearestCity: 'Junagadh',
    nearestCityDistKm: 60,
    coordinates: { lat: 21.136, lng: 70.797 },

    scores: {
      wildlife: { score: 8, desc: 'Asiatic lions sighted on most safaris, strong leopard population' },
      scenic: { score: 6, desc: 'Pleasant teak forest and reservoir, but not dramatic terrain' },
      accessibility: { score: 5, desc: 'Rajkot airport 160 km, or Junagadh by train then taxi' },
      crowdLevel: { score: 4, desc: 'Permits sell out weeks ahead in peak season' },
      remoteness: { score: 5, desc: 'Sasan Gir village has basic facilities, Junagadh is the nearest city' },
      infrastructure: { score: 7, desc: 'Online booking, trained guides, Devaliya interpretation zone as backup' },
    },

    bestMonths: [12, 3] as [number, number],
    speciality: 'Asiatic lion',
    specialityMonths: [12, 4] as [number, number],
    seasonProse:
      'December to March is ideal. Cool weather, thinning undergrowth, and lions resting in open clearings near water. April and May are scorching but sighting odds stay high as animals cluster around water bodies. The park closes mid-June to mid-October for monsoon. Devaliya Safari Park (interpretation zone) stays open year-round except Wednesdays.',

    trivia: [
      'Asiatic lion numbers dropped to under 20 in the early 1900s. The 2025 census counted 891 across the Gir landscape, one of the greatest conservation recoveries for any large carnivore.',
      'Gir is the only ecosystem in the world where lions and leopards coexist in significant numbers. Leopard density here is among the highest in India.',
      'The Maldhari pastoralists have coexisted with lions for centuries inside the sanctuary. About 10,000 Maldharis still live within or near the protected area, grazing cattle alongside wild ungulates.',
    ],

    climate: ['semi-arid'],
    terrain: ['hilly', 'dense-forest'],
    landscapeProse:
      'Dry deciduous teak forest with patches of thorny scrub and seasonal grassland. Rocky ridges and ravines create a rumpled terrain that flattens out near the Kamleshwar reservoir, the park\'s main water body and a gathering point for wildlife. Rivers like the Hiran, Machhundri, and Shetrunji cut through the sanctuary. In summer, most trees shed their leaves, opening up sightlines dramatically. The landscape is not conventionally dramatic but has a quiet, rugged beauty.',
    landscapeImages: [
      '/images/gir-landscape-1.jpg',
      '/images/gir-landscape-2.jpg',
      '/images/gir-landscape-3.jpg',
    ],

    flagshipFauna: 'Asiatic Lion',
    sightingProb: 'likely',
    birdingQuality: 'Rich',
    animalSpecies: 38,
    birdingSpecies: 300,
    wildlifeProse:
      'Asiatic lions are the undisputed draw. Prides of 3 to 5 are commonly spotted resting under teak trees or near waterholes. The park also has a large leopard population that coexists with the lions by staying in peripheral, more rugged terrain. Marsh crocodiles are reliably seen at Kamleshwar Dam. Spotted deer, sambar, nilgai, wild boar, and four-horned antelope make up the prey base. Striped hyena and Indian wolf are present but rarely seen. Birding is rich at 300 species, with six vulture species (of India\'s nine), Indian pitta, crested serpent eagle, and a strong winter waterbird population at the reservoir.',
    wildlifeCards: [
      { name: 'Asiatic Lion', image: '/images/gir-wildlife-asiatic-lion.jpg' },
      { name: 'Indian Leopard', image: '/images/gir-wildlife-indian-leopard.jpg' },
      { name: 'Marsh Crocodile', image: '/images/gir-wildlife-marsh-crocodile.jpg' },
      { name: 'Striped Hyena', image: '/images/gir-wildlife-striped-hyena.jpg' },
      { name: 'Spotted Deer', image: '/images/gir-wildlife-spotted-deer.webp' },
      { name: 'Indian Pitta', image: '/images/gir-wildlife-indian-pitta.jpg' },
    ],

    safari: {
      types: ['jeep'],
      bookingRequirement: 'Yes',
      coreZoneAccess: 'Yes',
      density: 'Moderate',
      prose:
        'Jungle Trail safaris run three times daily: morning (6-9 AM), mid-morning (9 AM-12 PM), and afternoon (3-6 PM). Six-seater open gypsies with an assigned guide. Permits booked online through girlion.in. Devaliya Safari Park is a fenced 4 km² interpretation zone offering guaranteed lion sightings on a shorter 1-hour bus ride, useful as a backup if core permits are unavailable. Wednesday is the weekly closure for Devaliya.',
      gates: [
        { name: 'Sinh Sadan', qualifier: 'main gate, Sasan Gir village' },
        { name: 'Devaliya', qualifier: 'interpretation zone, fenced area' },
      ],
    },

    networkQuality: 'Decent',
    stayQuality: 'Mid-range',
    entryFeeINR: 800,
    entryFeeForeigner: 2500,
    practicalProse:
      'Summers are brutal, regularly crossing 45°C. Carry water and sunscreen for afternoon safaris. Cash useful in Sasan Gir village. If core permits are sold out, Devaliya is a reliable fallback for lion sightings. Pair Gir with a visit to Somnath temple (55 km) for a two-destination trip.',

    connectivityProse:
      '60 km from Junagadh, 160 km from Rajkot, 370 km from Ahmedabad. Park headquarters at Sasan Gir village.',
    transport: [
      { icon: 'plane', desc: 'Rajkot Airport (RAJ), 160 km. Flights from Mumbai and Delhi. Taxi to Sasan Gir takes 3 hours.' },
      { icon: 'train', desc: 'Junagadh Junction, 60 km. Trains from Ahmedabad and Rajkot. Sasan Gir also has a small railway halt on the Junagadh-Veraval line.' },
      { icon: 'bus', desc: 'Gujarat GSRTC buses from Ahmedabad (7 hours), Rajkot (3 hours), and Junagadh (1.5 hours) to Sasan Gir.' },
      { icon: 'car', desc: 'NH-8E from Ahmedabad via Rajkot (6-7 hours). From Junagadh, state highway to Sasan Gir (1 hour).' },
    ],

    photoProse:
      'Lions resting under teak trees in dappled light is the classic Gir shot. A 200-400mm lens covers most situations as sighting distances are moderate. Kamleshwar Dam at golden hour is excellent for waterbird and crocodile photography. Leopards are harder to photograph but occasionally seen in the hillier eastern zones.',
  },
  {
    status: 'draft',
    id: "gorumara",
    name: "Gorumara National Park",
    state: "West Bengal",
    region: "East India",
    coordinates: { lat: 26.7, lng: 88.8 },
  },
  {
    status: 'draft',
    id: "govind-pashu-vihar",
    name: "Govind Pashu Vihar National Park",
    state: "Uttarakhand",
    region: "North India",
    coordinates: { lat: 31.07, lng: 78.12 },
  },
  {
    status: 'live',
    id: 'great-himalayan',
    name: 'Great Himalayan National Park',
    state: 'Himachal Pradesh',
    region: 'North India',
    oneLiner: 'A UNESCO-listed western Himalayan wilderness accessible only on foot',
    description:
      'Four pristine river valleys (Tirthan, Sainj, Jiwa Nal, Parvati) rising from temperate forest to alpine meadows and glaciers across a 4,100 m elevation range. No roads enter the park. All exploration is by multi-day trek through dense deodar, blue pine, and birch forests into high pastures where western tragopan and snow leopard roam. UNESCO World Heritage Site since 2014, recognised for outstanding biodiversity at the junction of the Indomalayan and Palearctic biogeographic realms.',
    tags: ['trekking', 'expedition', 'birding'],
    heroImage: '/images/gh.jpg',
    unescoStatus: true,
    permitRequired: true,
    permitDescription: 'Trekking permits issued by GHNP office at Sairopa or Shamshi (Kullu). Certified local guide required.',

    established: 1984,
    areaKm2: 1171,
    openMonths: [4, 11] as [number, number],
    elevationRange: [1500, 6000] as [number, number],
    recommendedDays: 5,
    nearestCity: 'Kullu',
    nearestCityDistKm: 60,
    coordinates: { lat: 31.733, lng: 77.550 },

    scores: {
      wildlife: { score: 5, desc: 'Rich mammal list but dense forest and high altitude make sightings uncommon' },
      scenic: { score: 10, desc: 'Glacial valleys, alpine meadows, deodar forests, 6,000 m peaks' },
      accessibility: { score: 3, desc: 'No roads inside the park, multi-day treks from the boundary' },
      crowdLevel: { score: 8, desc: 'Very few trekkers compared to mainstream Himalayan treks' },
      remoteness: { score: 8, desc: 'No habitation inside the park, no phone signal beyond the gate' },
      infrastructure: { score: 4, desc: 'Basic camping, local guides, eco-tourism homestays in buffer villages' },
    },

    bestMonths: [5, 6] as [number, number],
    speciality: 'western tragopan',
    specialityMonths: [4, 6] as [number, number],
    seasonProse:
      'April to June is the primary trekking window. Snow melts at lower elevations, wildflowers bloom, and western tragopan breeding calls are heard in the forests. September to November is the second window, with clear post-monsoon skies and animals descending to lower altitudes. July and August bring heavy monsoon rain, landslides, and leech-infested trails. December to March sees heavy snowfall above 2,500 m, restricting access to lower valley walks only.',

    trivia: [
      'GHNP sits at the junction of the Indomalayan and Palearctic biogeographic realms, hosting species from both. It shelters 26 Himalayan species and 42 species typical of the Western Ghats and Nilgiris.',
      'The western tragopan, the rarest of the five tragopan pheasants and among the most endangered birds globally, has one of its last strongholds in this park.',
      'It took 20 years from the first survey (1980) to formal national park status (1999 notification). UNESCO listing came in 2014.',
    ],

    climate: ['temperate'],
    terrain: ['mountainous', 'dense-forest'],
    landscapeProse:
      'Four parallel river valleys cut deep into the western Himalaya, each rising from temperate broadleaf forest at 1,500 m through dense conifer belts of deodar, blue pine, spruce, and fir, into birch and rhododendron zones, then alpine meadow, and finally rock, ice, and glaciers above 4,500 m. The valleys are steep-sided with narrow gorges at the lower end, opening into wide U-shaped glacial basins higher up. No roads, no power lines, no buildings inside the park. The silence and scale are complete.',
    landscapeImages: [
      '/images/gh-landscape-1.jpg',
      '/images/gh-landscape-2.jpg',
      '/images/gh-landscape-3.jpg',
    ],

    flagshipFauna: 'Western Tragopan',
    sightingProb: 'rare',
    birdingQuality: 'Rich',
    animalSpecies: 31,
    birdingSpecies: 181,
    wildlifeProse:
      "The western tragopan is the park's most important species and one of the world's rarest pheasants. Sightings are uncommon but breeding calls are heard in spring in the upper Tirthan and Sainj valleys. Snow leopard, Himalayan brown bear, Himalayan black bear, musk deer, Himalayan tahr, bharal, serow, and goral make up the mammal list. All are elusive in dense forest. Himalayan monal, koklass pheasant, cheer pheasant, and four other pheasant species are present. Raptors include golden eagle, lammergeier, and Himalayan griffon vulture. The 181 bird species span Himalayan to Palearctic ranges.",
    wildlifeCards: [
      { name: 'Western Tragopan', image: '/images/gh-wildlife-western-tragopan.jpg' },
      { name: 'Snow Leopard', image: '/images/gh-wildlife-snow-leopard.jpg' },
      { name: 'Himalayan Brown Bear', image: '/images/gh-wildlife-himalayan-brown-bear.jpg' },
      { name: 'Himalayan Monal', image: '/images/gh-wildlife-himalayan-monal.jpg' },
      { name: 'Himalayan Tahr', image: '/images/gh-wildlife-himalayan-tahr.jpg' },
      { name: 'Musk Deer', image: '/images/gh-wildlife-musk-deer.jpg' },
    ],

    safari: {
      types: ['walking'],
      bookingRequirement: 'Yes',
      coreZoneAccess: 'Yes',
      density: 'Low',
      prose:
        'All exploration is on foot. No vehicles allowed inside the park. Treks range from 1-day nature walks in the Tirthan valley to 7-day expeditions crossing the Pin-Parvati Pass (5,319 m). Trekking permits are mandatory and obtained from the GHNP office at Sairopa or Shamshi (Kullu). Certified local guides are required. Popular routes: Tirthan Valley (3 to 5 days), Sainj Valley (4 to 6 days), and the Tirthan to Parvati crossing (6 to 7 days).',
      gates: [
        { name: 'Sairopa', qualifier: 'Tirthan valley, main entry' },
        { name: 'Ropa', qualifier: 'Sainj valley entry' },
      ],
    },

    networkQuality: 'None',
    stayQuality: 'Homestays',
    entryFeeINR: 50,
    entryFeeForeigner: 200,
    practicalProse:
      'Carry all gear including tents, sleeping bags, and food for multi-day treks. No shops or facilities inside the park. Hire a local guide through the eco-tourism cooperative at Sairopa. Leeches are a problem in early and late season. Altitude sickness is a risk on high-altitude routes above 4,000 m. Buffer zone villages like Gushaini and Banjar have excellent homestays.',

    connectivityProse:
      '60 km from Kullu, 50 km from Bhuntar airport. Park boundary accessed from Tirthan or Sainj valley roads. No motor access inside.',
    transport: [
      { icon: 'plane', desc: 'Bhuntar Airport (KUU), 50 km. Flights from Delhi and Chandigarh. Taxi to Sairopa or Gushaini takes 2 hours.' },
      { icon: 'train', desc: 'Joginder Nagar, 143 km, is the nearest narrow-gauge railhead. Chandigarh (290 km) has better connectivity. Then bus or taxi.' },
      { icon: 'bus', desc: 'HRTC buses from Delhi to Kullu (12 hours) or Chandigarh to Kullu (8 hours). Then local bus to Banjar and Gushaini.' },
      { icon: 'car', desc: 'From Delhi via Chandigarh and Mandi to Aut, then Banjar road to Gushaini (12 to 14 hours). From Kullu via Banjar (2 hours).' },
    ],

    photoProse:
      'Wide-angle lenses dominate here. Alpine meadows with snow peaks behind, deodar forests in morning mist, and glacial streams are the signature compositions. For western tragopan and monal, a 300-500mm lens is needed, but sightings are unpredictable. Spring wildflowers in the upper valleys photograph beautifully at close range. Carry weather protection for gear as conditions change fast at altitude.',
  },
  {
    status: 'draft',
    id: "gugamal",
    name: "Gugamal National Park",
    state: "Maharashtra",
    region: "West India",
    coordinates: { lat: 21.38, lng: 77.03 },
  },
  {
    status: 'draft',
    id: "guindy",
    name: "Guindy National Park",
    state: "Tamil Nadu",
    region: "South India",
    coordinates: { lat: 13.01, lng: 80.24 },
  },
  {
    status: 'draft',
    id: "gulf-of-mannar-marine",
    name: "Gulf of Mannar Marine National Park",
    state: "Tamil Nadu",
    region: "South India",
    coordinates: { lat: 9.14, lng: 79.25 },
  },
  {
    status: 'draft',
    id: "guru-ghasidas",
    name: "Guru Ghasidas National Park",
    state: "Chhattisgarh",
    region: "Central India",
    coordinates: { lat: 23.8, lng: 82.13 },
  },
  {
    status: 'draft',
    id: "inderkilla",
    name: "Inderkilla National Park",
    state: "Himachal Pradesh",
    region: "North India",
    coordinates: { lat: 31.96, lng: 77.1 },
  },
  {
    status: 'draft',
    id: "indira-gandhi-annamalai",
    name: "Indira Gandhi National Park",
    state: "Tamil Nadu",
    region: "South India",
    coordinates: { lat: 10.33, lng: 77.28 },
  },
  {
    status: 'draft',
    id: "indravati",
    name: "Indravati National Park",
    state: "Chhattisgarh",
    region: "Central India",
    coordinates: { lat: 19.12, lng: 80.72 },
  },
  {
    status: 'draft',
    id: "intanki",
    name: "Intanki National Park",
    state: "Nagaland",
    region: "Northeast India",
    coordinates: { lat: 25.63, lng: 93.48 },
  },
  {
    status: 'draft',
    id: "jaldapara",
    name: "Jaldapara National Park",
    state: "West Bengal",
    region: "East India",
    coordinates: { lat: 26.67, lng: 89.35 },
  },
  {
    status: 'live',
    id: 'jim-corbett',
    name: 'Jim Corbett National Park',
    state: 'Uttarakhand',
    region: 'North India',
    oneLiner: "India's first national park, with the country's highest tiger count",
    description:
      'Established in 1936 as Hailey National Park, this was the first national park in India and the first to come under Project Tiger in 1973. Spread across the sub-Himalayan foothills where the Ramganga river cuts through sal forests, Corbett holds around 260 to 290 tigers. Dhikala, the overnight zone deep inside the park, remains one of the most coveted wildlife experiences in the country.',
    tags: ['wildlife', 'heritage', 'families'],
    heroImage: '/images/jim-corbett.jpg',
    unescoStatus: false,
    permitRequired: false,

    established: 1936,
    areaKm2: 521,
    openMonths: [10, 6] as [number, number],
    elevationRange: [385, 1220] as [number, number],
    recommendedDays: 2,
    nearestCity: 'Ramnagar',
    nearestCityDistKm: 12,
    coordinates: { lat: 29.549, lng: 78.935 },

    scores: {
      wildlife: { score: 8, desc: 'High tiger density, elephants common, excellent birding' },
      scenic: { score: 7, desc: 'Ramganga valley, sal forests, and Himalayan foothills' },
      accessibility: { score: 8, desc: '5-6 hours by road from Delhi, direct trains to Ramnagar' },
      crowdLevel: { score: 3, desc: 'Very high demand, Dhikala books out 45 days ahead' },
      remoteness: { score: 4, desc: 'Ramnagar is a small town but well-connected' },
      infrastructure: { score: 8, desc: 'Online booking, multiple zones, forest rest houses, luxury resorts' },
    },

    bestMonths: [11, 3] as [number, number],
    speciality: 'tiger safari',
    specialityMonths: [3, 6] as [number, number],
    seasonProse:
      'November to March is the most comfortable season, with clear skies and cool mornings. Tiger sighting probability climbs steeply from March to June as undergrowth thins and animals move towards water. Most zones close during monsoon (July to mid-October), though Jhirna and Dhela stay open year-round.',

    trivia: [
      'Named after Jim Corbett, the hunter-turned-conservationist who tracked and shot man-eating tigers and leopards in these very forests.',
      "India's first national park (1936) and first Project Tiger reserve (1973).",
      "Dhikala forest rest house, built in 1936, sits on a bluff overlooking the Patlidun valley and offers what many consider India's best overnight wildlife experience.",
    ],

    climate: ['subtropical'],
    terrain: ['hilly', 'river-heavy'],
    landscapeProse:
      "Sal forest dominates, making up about 73% of the park's cover. The Ramganga river runs through the centre, feeding marshes and a large reservoir. Grasslands and chaurs (open meadows) break up the canopy, especially around Dhikala and Bijrani. The terrain rises from flat riverine belts at 385 metres to forested ridges at 1,220 metres along the Himalayan foothills. Winter mornings bring dense fog that lifts dramatically around 9 AM.",
    landscapeImages: [
      '/images/jim-corbett-landscape-1.jpg',
      '/images/jim-corbett-landscape-2.jpg',
      '/images/jim-corbett-landscape-3.jpg',
    ],

    flagshipFauna: 'Bengal Tiger',
    sightingProb: 'likely',
    birdingQuality: 'Exceptional',
    animalSpecies: 50,
    birdingSpecies: 580,
    wildlifeProse:
      'Around 260 to 290 tigers roam the reserve, the highest count of any tiger reserve in India. Sightings are not guaranteed on a single safari but likely across a 2-day visit, especially in summer when vegetation thins. Asian elephants move in large herds through the sal corridors. Leopards, sloth bears, gharial, and mugger crocodile are present. Birding is outstanding: 580 recorded species including crested serpent eagle, great hornbill, wallcreeper, brown dipper, and winter migrants at the Ramganga reservoir.',
    wildlifeCards: [
      { name: 'Bengal Tiger', image: '/images/jim-corbett-wildlife-bengal-tiger.jpg' },
      { name: 'Asian Elephant', image: '/images/jim-corbett-wildlife-asian-elephant.jpg' },
      { name: 'Leopard', image: '/images/jim-corbett-wildlife-leopard.jpg' },
      { name: 'Sloth Bear', image: '/images/jim-corbett-wildlife-sloth-bear.jpg' },
      { name: 'Gharial', image: '/images/jim-corbett-wildlife-gharial.jpg' },
      { name: 'Great Hornbill', image: '/images/jim-corbett-wildlife-great-hornbill.jpg' },
    ],

    safari: {
      types: ['jeep', 'canter'],
      bookingRequirement: 'Yes',
      coreZoneAccess: 'Yes',
      density: 'High',
      prose:
        'Seven tourism zones, each with a separate gate and permit. Bijrani and Jhirna are the easiest to access from Ramnagar. Dhikala requires an overnight stay at forest rest houses and books out 45 days ahead. Safaris run in morning and afternoon shifts of about 3 hours. Canter safaris (20-seat vehicles) operate in Dhikala only. Private vehicles are not allowed.',
      gates: [
        { name: 'Amdanda Gate', qualifier: 'Bijrani zone' },
        { name: 'Dhela Gate', qualifier: 'Jhirna zone' },
        { name: 'Dhangadi Gate', qualifier: 'Dhikala zone' },
        { name: 'Durga Devi Gate' },
        { name: 'Phato Gate' },
        { name: 'Vatanbasa Gate', qualifier: 'Sonanadi, via Kotdwar' },
      ],
    },

    networkQuality: 'Decent',
    stayQuality: 'Luxury',
    entryFeeINR: 500,
    entryFeeForeigner: 1500,
    practicalProse:
      'Winter mornings can dip to 5°C inside the open jeep, so layer up. Carry binoculars and a long lens. Cash is useful for tips and smaller establishments in Ramnagar. If you book Dhikala, meals at the forest rest house canteen are basic but adequate.',

    connectivityProse:
      '12 km from Ramnagar, which sits on NH309. Delhi is 260 km (5-6 hours by road or overnight train).',
    transport: [
      { icon: 'plane', desc: 'Pantnagar Airport (PGH), 82 km. Limited domestic flights. Taxi to Ramnagar takes 2 hours.' },
      { icon: 'train', desc: 'Ramnagar Railway Station (RMR), 12 km. Direct trains from Delhi (Ranikhet Express, overnight).' },
      { icon: 'bus', desc: 'UTC and private buses from Delhi ISBT Anand Vihar to Ramnagar (6-7 hours).' },
      { icon: 'car', desc: 'NH309 from Delhi via Moradabad and Kashipur (5-6 hours). Well-maintained highway.' },
    ],

    photoProse:
      "Dhikala's Patlidun grasslands are the signature landscape. Early morning light on the Ramganga riverbed, with mist lifting off the water, makes for dramatic wide shots. A 200-500mm lens is ideal for tiger and elephant portraits. Bijrani's dense sal forest demands faster glass for low-light shooting.",
  },
  {
    status: 'draft',
    id: "kalesar",
    name: "Kalesar National Park",
    state: "Haryana",
    region: "North India",
    coordinates: { lat: 30.38, lng: 77.48 },
  },
  {
    status: 'draft',
    id: "kanger-ghati",
    name: "Kanger Ghati National Park",
    state: "Chhattisgarh",
    region: "Central India",
    coordinates: { lat: 18.85, lng: 81.96 },
  },
  {
    status: 'live',
    id: 'kanha',
    name: 'Kanha National Park',
    state: 'Madhya Pradesh',
    region: 'Central India',
    oneLiner: "Rudyard Kipling's jungle, and the last refuge of the hardground barasingha",
    description:
      "Sal forests, bamboo thickets, and sweeping grass meadows in the Maikal hills of the Satpura range. India's most well-managed tiger reserve, and the park that saved the hardground barasingha from extinction. Kipling based The Jungle Book on these forests. Four safari zones, each with a distinct character, spread across 940 km² of core area.",
    tags: ['wildlife', 'families', 'photography'],
    heroImage: '/images/kanha.jpg',
    unescoStatus: false,
    permitRequired: false,

    established: 1955,
    areaKm2: 940,
    openMonths: [10, 6] as [number, number],
    elevationRange: [600, 900] as [number, number],
    recommendedDays: 3,
    nearestCity: 'Mandla',
    nearestCityDistKm: 64,
    coordinates: { lat: 22.228, lng: 80.645 },

    scores: {
      wildlife: { score: 9, desc: 'High tiger density, barasingha herds, strong overall mammal diversity' },
      scenic: { score: 8, desc: 'Open meadows ringed by sal forest, Bamni Dadar sunset point' },
      accessibility: { score: 5, desc: 'Jabalpur airport 170 km, then 4 hours by road' },
      crowdLevel: { score: 4, desc: 'Peak season weekends are busy, weekdays are manageable' },
      remoteness: { score: 6, desc: 'Deep in rural MP, limited facilities beyond resort clusters' },
      infrastructure: { score: 8, desc: 'Online booking, excellent guides, luxury resorts near both gates' },
    },

    bestMonths: [2, 5] as [number, number],
    speciality: 'barasingha',
    specialityMonths: [11, 2] as [number, number],
    seasonProse:
      'February to May offers the best tiger sighting odds as deciduous trees shed leaves, water sources shrink, and animals concentrate around meadows. October and November are lush and cool but visibility through dense foliage is lower. The park closes July to September for monsoon. Wednesday is the weekly off day across all zones.',

    trivia: [
      "Rudyard Kipling's The Jungle Book draws directly from the Kanha landscape. Mowgli, Baloo, and Shere Khan roamed these sal forests.",
      "The hardground barasingha (Cervus duvauceli branderi) was down to 66 individuals in 1970. Kanha's breeding programme brought the count past 500.",
      "Bamni Dadar, a flat-topped plateau inside the park, is called 'Sunset Point' and offers one of the finest views in any Indian national park.",
    ],

    climate: ['subtropical'],
    terrain: ['hilly', 'dense-forest'],
    landscapeProse:
      'Wide, open meadows (maidans) form the heart of the park, where barasingha and chital herds graze under the watch of predators. Surrounding these clearings is dense sal forest with bamboo understorey that gives way to mixed deciduous woodland at higher elevations. Flat-topped plateaux (dadars) rise above the canopy, offering long views across the forest. The Banjar and Halon rivers run through the reserve, feeding seasonal nalas that dry up by March.',
    landscapeImages: [
      '/images/kanha-landscape-1.jpg',
      '/images/kanha-landscape-2.jpg',
      '/images/kanha-landscape-3.jpg',
    ],

    flagshipFauna: 'Bengal Tiger',
    sightingProb: 'likely',
    birdingQuality: 'Rich',
    animalSpecies: 43,
    birdingSpecies: 325,
    wildlifeProse:
      'Around 115 adult tigers across the reserve, with good sighting frequency in the Kanha and Mukki zones. Barasingha herds gather on the central meadows, especially in winter, making them easy to observe. Gaur (Indian bison) appear frequently in the sal forests. Dhole packs hunt cooperatively and are seen often enough to be a highlight. Sloth bears, leopards, four-horned antelope, and blackbuck round out a strong mammal list. Birding is rich at 325 species, with crested serpent eagle, Indian pitta, Malabar pied hornbill, paradise flycatcher, and lesser adjutant stork among the regulars.',
    wildlifeCards: [
      { name: 'Bengal Tiger', image: '/images/kanha-wildlife-bengal-tiger.jpg' },
      { name: 'Barasingha', image: '/images/kanha-wildlife-barasingha.jpg' },
      { name: 'Gaur', image: '/images/kanha-wildlife-gaur.jpg' },
      { name: 'Dhole', image: '/images/kanha-wildlife-dhole.jpg' },
      { name: 'Sloth Bear', image: '/images/kanha-wildlife-sloth-bear.jpg' },
      { name: 'Indian Pitta', image: '/images/kanha-wildlife-indian-pitta.jpg' },
    ],

    safari: {
      types: ['jeep'],
      bookingRequirement: 'Yes',
      coreZoneAccess: 'Yes',
      density: 'Moderate',
      prose:
        'Four core zones (Kanha, Kisli, Mukki, Sarhi) and four buffer zones. Two main entry gates: Khatia (for Kanha, Kisli, and Sarhi zones) and Mukki. Safaris run in morning and afternoon shifts of 4 to 5 hours. Vehicle limits per zone are strict. Book through the MP Forest Department portal (mponline.gov.in). Wednesday is a park-wide closure day.',
      gates: [
        { name: 'Khatia Gate', qualifier: 'Kanha, Kisli, and Sarhi zones' },
        { name: 'Mukki Gate', qualifier: 'Mukki zone' },
      ],
    },

    networkQuality: 'Poor',
    stayQuality: 'Luxury',
    entryFeeINR: 1370,
    entryFeeForeigner: 2690,
    practicalProse:
      'Carry warm layers for winter morning safaris when open-jeep temperatures can drop to 5°C. Afternoons in March to May cross 40°C. Cash is essential as ATMs near the park are unreliable. Both gates have resort clusters ranging from budget to high-end lodges.',

    connectivityProse:
      'Deep in central MP. Khatia gate is 170 km from Jabalpur, Mukki gate is 145 km from Gondia. No nearby town of significant size.',
    transport: [
      { icon: 'plane', desc: 'Jabalpur Airport (JLR), 170 km from Khatia gate. Flights from Delhi, Mumbai, Bhopal. Taxi 4 hours.' },
      { icon: 'train', desc: 'Jabalpur Junction (JBP), 165 km. Well-connected to Delhi, Mumbai, Kolkata, Varanasi. Taxi to park.' },
      { icon: 'bus', desc: 'State buses from Jabalpur and Mandla to Khatia. Infrequent, not recommended for tight schedules.' },
      { icon: 'car', desc: 'NH44 to Jabalpur, then state highways to Khatia (4 hours) or via Gondia to Mukki (3.5 hours).' },
    ],

    photoProse:
      'Morning light on the Kanha meadows with barasingha herds is the iconic shot. Tigers often emerge from sal forest into open grassland, giving clean backgrounds rare in Indian parks. A 200-500mm lens is ideal. Bamni Dadar at sunset provides dramatic wide-angle landscape opportunities. Dhole hunts, when witnessed, offer some of the most dynamic wildlife action photography in the country.',
  },
  {
    status: 'draft',
    id: "kasu-brahmananda-reddy",
    name: "Kasu Brahmananda Reddy National Park",
    state: "Telangana",
    region: "South India",
    coordinates: { lat: 17.42, lng: 78.44 },
  },
  {
    status: 'draft',
    id: "kazinag",
    name: "Kazinag National Park",
    state: "Jammu & Kashmir",
    region: "North India",
    coordinates: { lat: 34.08, lng: 74.13 },
  },
  {
    status: 'live',
    id: 'kaziranga',
    name: 'Kaziranga National Park',
    state: 'Assam',
    region: 'Northeast India',
    oneLiner: "Floodplain grasslands with two-thirds of the world's one-horned rhinos",
    description:
      'Sprawling across the Brahmaputra floodplain, Kaziranga holds the densest concentration of large mammals anywhere in Asia. Over 2,600 Indian one-horned rhinos graze its tall elephant grass, alongside wild water buffalo, swamp deer, and elephants. Annual monsoon floods reshape the landscape every year, keeping the habitat wild and productive.',
    tags: ['wildlife', 'birding', 'photography'],
    heroImage: '/images/kaziranga.jpg',
    unescoStatus: true,
    permitRequired: false,

    established: 1974,
    areaKm2: 430,
    openMonths: [11, 4] as [number, number],
    elevationRange: [40, 80] as [number, number],
    recommendedDays: 2,
    nearestCity: 'Golaghat',
    nearestCityDistKm: 35,
    coordinates: { lat: 26.667, lng: 93.35 },

    scores: {
      wildlife: { score: 9, desc: 'Rhinos on every safari, tigers regularly spotted' },
      scenic: { score: 7, desc: 'Vast grasslands and wetlands against Karbi Hills' },
      accessibility: { score: 5, desc: 'Fly to Guwahati or Jorhat, then 3-4 hour drive' },
      crowdLevel: { score: 5, desc: 'Busy in peak season, quieter in shoulder months' },
      remoteness: { score: 6, desc: 'Rural Assam, limited facilities outside Kohora' },
      infrastructure: { score: 7, desc: 'Four well-managed zones, trained guides, good lodges' },
    },

    bestMonths: [11, 2] as [number, number],
    speciality: 'rhinos',
    specialityMonths: [11, 3] as [number, number],
    seasonProse:
      'November to February is ideal. Cool mornings, low grass after monsoon, and excellent visibility across the floodplain. March and April get progressively hotter but wildlife concentrates around water. The park closes May to October due to Brahmaputra flooding, which regularly submerges two-thirds of the area.',

    trivia: [
      "Lady Curzon's 1904 visit, where she failed to spot a single rhino, directly led to the area's first protection order in 1905.",
      'Kaziranga has the highest density of tigers among all protected areas in India, declared a Tiger Reserve in 2006.',
      "Monsoon floods in 2019 killed 612 animals including 18 rhinos, roughly 0.7% of the park's total rhino count.",
    ],

    climate: ['subtropical'],
    terrain: ['flat', 'wetland'],
    landscapeProse:
      'Endless elephant grass, some growing over 5 metres tall, dominates the central and western ranges. Shallow beels (oxbow lakes) dot the landscape, fringed by patches of semi-evergreen forest along the southern edge near the Karbi Hills. In winter, burnt grasslands reveal mudflats and sandbars along the Brahmaputra. By late March, fresh green shoots push through charred ground.',
    landscapeImages: [
      '/images/kaziranga-landscape-1.jpg',
      '/images/kaziranga-landscape-2.jpg',
      '/images/kaziranga-landscape-3.jpg',
    ],

    flagshipFauna: 'Indian One-horned Rhinoceros',
    sightingProb: 'near-guaranteed',
    birdingQuality: 'Exceptional',
    animalSpecies: 37,
    birdingSpecies: 478,
    wildlifeProse:
      "Rhinos are everywhere. You will see them grazing in open meadows, wallowing in beels, and standing unbothered metres from your jeep. Kaziranga also shelters the largest wild water buffalo herds in the world and big breeding populations of eastern swamp deer. Tigers are present in high density but harder to spot in the tall grass. Birding is outstanding: Bengal florican, swamp francolin, Pallas's fish eagle, greater adjutant stork, and winter migrants including bar-headed geese and Baer's pochard.",
    wildlifeCards: [
      { name: 'Indian One-horned Rhinoceros', image: '/images/kaziranga-wildlife-indian-rhinoceros.jpg' },
      { name: 'Wild Water Buffalo', image: '/images/kaziranga-wildlife-wild-water-buffalo.jpg' },
      { name: 'Asian Elephant', image: '/images/kaziranga-wildlife-asian-elephant.jpg' },
      { name: 'Eastern Swamp Deer', image: '/images/kaziranga-wildlife-eastern-swamp-deer.jpg' },
      { name: 'Bengal Florican', image: '/images/kaziranga-wildlife-bengal-florican.jpg' },
      { name: 'Bengal Tiger', image: '/images/kaziranga-wildlife-bengal-tiger.jpg' },
    ],

    safari: {
      types: ['jeep', 'elephant'],
      bookingRequirement: 'Yes',
      coreZoneAccess: 'Yes',
      density: 'Moderate',
      prose:
        'Four zones open to visitors: Kohora (Central), Bagori (Western), Agaratoli (Eastern), and Burapahar. Jeep safaris run in morning and afternoon shifts of about 2 hours each. Elephant rides are available only in Central and Western zones during early morning. Booking is done at zone counters or through agents, not through a centralized online system.',
      gates: [
        { name: 'Kohora', qualifier: 'central range, main entry' },
        { name: 'Bagori', qualifier: 'western range' },
        { name: 'Agaratoli', qualifier: 'eastern range' },
        { name: 'Burapahar' },
      ],
    },

    networkQuality: 'Poor',
    stayQuality: 'Mid-range',
    entryFeeINR: 100,
    entryFeeForeigner: 650,
    practicalProse:
      'Pack warm layers for early morning safaris in December and January, when fog can linger until 9 AM. Leeches are common in November. Carry cash as Kohora has limited ATMs and most smaller lodges are cash-only.',

    connectivityProse:
      'On NH 37 between Guwahati (215 km west) and Jorhat (97 km east). Main gate at Kohora town.',
    transport: [
      { icon: 'plane', desc: 'Jorhat Airport (JRH), 97 km. Flights from Kolkata and Guwahati. Taxi 2.5 hours.' },
      { icon: 'plane', desc: 'Guwahati Airport (GAU), 215 km. Major hub with domestic and limited international flights.' },
      { icon: 'train', desc: 'Furkating Junction, 75 km. Trains from Guwahati, Delhi, Kolkata. Then taxi to Kohora.' },
      { icon: 'car', desc: 'NH 37 from Guwahati (4-5 hours) or Jorhat (2 hours). Road is well-maintained.' },
    ],

    photoProse:
      "Golden morning light over the grasslands is Kaziranga's signature shot. Rhinos are cooperative subjects at close range from jeep height. A 100-400mm lens covers most situations. Agaratoli (Eastern zone) is favoured by photographers for its Brahmaputra backdrop and fewer vehicles.",
  },
  {
    status: 'live',
    id: 'keibul-lamjao',
    name: 'Keibul Lamjao National Park',
    state: 'Manipur',
    region: 'Northeast India',
    oneLiner: "The world's only floating national park, last refuge of the sangai deer",
    description:
      "A 40 km² mass of floating phumdi (decomposed vegetation) on Loktak Lake, northeast India's largest freshwater lake. Created to protect the sangai, Manipur's brow-antlered dancing deer, which walks on these floating mats on specially adapted hooves. Declared extinct in 1951, rediscovered in 1953, and still critically low in numbers.",
    tags: ['wildlife', 'birding'],
    heroImage: '/images/keibul-lamjao.jpg',
    unescoStatus: false,
    permitRequired: false,

    established: 1977,
    areaKm2: 40,
    openMonths: [10, 3] as [number, number],
    elevationRange: [768, 817] as [number, number],
    recommendedDays: 1,
    nearestCity: 'Imphal',
    nearestCityDistKm: 53,
    coordinates: { lat: 24.500, lng: 93.767 },

    scores: {
      wildlife: { score: 5, desc: 'Sangai sightings possible with patience and binoculars' },
      scenic: { score: 7, desc: 'Floating grasslands on a vast lake, unlike anything else' },
      accessibility: { score: 5, desc: 'Imphal airport 53 km, then taxi to park gate' },
      crowdLevel: { score: 8, desc: 'Very few tourists visit Manipur at all' },
      remoteness: { score: 6, desc: 'Moirang town nearby, but Manipur itself is remote' },
      infrastructure: { score: 4, desc: 'Watchtowers, boat rides, two rest houses, basic guides' },
    },

    bestMonths: [11, 2] as [number, number],
    speciality: 'sangai deer',
    specialityMonths: [11, 2] as [number, number],
    seasonProse:
      'November to February is best. Cool weather, low water, and sangai come out to feed on exposed phumdi in early morning and late afternoon. Monsoon (June to September) floods the park and makes access difficult.',

    trivia: [
      'Only floating national park in the world. The ground is decomposed vegetation called phumdi, thick enough to walk on.',
      'Sangai were declared extinct in 1951. Rediscovered in 1953. Population peaked at 260 in 2016 but dropped to around 64 by 2023.',
      "On UNESCO's tentative list as Keibul Lamjao Conservation Area. Loktak Lake is a Ramsar wetland site.",
    ],

    climate: ['subtropical'],
    terrain: ['wetland', 'flat'],
    landscapeProse:
      'Floating mats of vegetation stretching to the horizon on Loktak Lake. The phumdi is a spongy, uneven surface of decomposed organic matter topped with tall grass and reeds. Three small hills, Pabot, Toya, and Chingjao, break the flatness and serve as dry refuge for animals during monsoon. Open water channels cut through the green expanse.',
    landscapeImages: [
      '/images/keibul-lamjao-landscape-1.jpg',
      '/images/keibul-lamjao-landscape-2.jpg',
      '/images/keibul-lamjao-landscape-3.jpg',
    ],

    flagshipFauna: 'Sangai Deer',
    sightingProb: 'possible',
    birdingQuality: 'Good',
    animalSpecies: null,
    birdingSpecies: 100,
    wildlifeProse:
      'Sangai deer are shy and best spotted from watchtowers or by boat in early morning. Around 64 individuals remain (2023 WII estimate). Hog deer are more numerous. Wild boar, otters, large Indian civet, and small Indian civet complete the mammal list. Migratory waterfowl arrive November to March, including black-necked stork, ferruginous pochard, and spot-billed pelican.',
    wildlifeCards: [
      { name: 'Sangai Deer', image: '/images/keibul-lamjao-wildlife-sangai-deer.jpg' },
      { name: 'Hog Deer', image: '/images/keibul-lamjao-wildlife-hog-deer.jpg' },
      { name: 'Black-necked Stork', image: '/images/keibul-lamjao-wildlife-black-necked-stork.jpg' },
      { name: 'Common Otter', image: '/images/keibul-lamjao-wildlife-common-otter.jpg' },
    ],

    safari: {
      types: ['boat', 'walking'],
      bookingRequirement: 'Yes',
      coreZoneAccess: 'Yes',
      density: 'Low',
      prose:
        'Boat rides from the park entrance navigate phumdi channels for 1-2 hours. Walking on the phumdi is possible with guides but the ground is spongy and uneven. Watchtowers on Pabot Hill offer scanning views. Best between 6 and 10 AM.',
      gates: [
        { name: 'Keibul Lamjao Gate', qualifier: '6 km south of Moirang' },
      ],
    },

    networkQuality: 'Poor',
    stayQuality: 'Budget',
    entryFeeINR: 50,
    entryFeeForeigner: 250,
    practicalProse:
      'Carry binoculars. Sangai are distant and skittish. Sturdy footwear for phumdi walks. No food vendors inside. Combine with Loktak Lake and the INA Memorial at Moirang for a full day trip from Imphal.',

    connectivityProse:
      '53 km from Imphal, 6 km south of Moirang. Park entrance on the Kumbi road.',
    transport: [
      { icon: 'plane', desc: 'Imphal Airport (IMF), 53 km. Flights from Delhi, Kolkata, Guwahati. Taxi 1.5 hours.' },
      { icon: 'train', desc: 'No railway in Manipur yet. Nearest station Dimapur (Nagaland), 215 km.' },
      { icon: 'bus', desc: 'Manipur state buses from Imphal to Moirang (1.5 hours). Autorickshaw to park gate.' },
      { icon: 'car', desc: 'NH2 from Imphal via Bishnupur to Moirang (1.5 hours). Then 6 km to park entrance.' },
    ],

    photoProse:
      'Sangai are distant subjects. A 500-600mm lens is essential. Morning light on the phumdi with mist rising off Loktak Lake is the signature shot. Boat gives better angles than the watchtower.',
  },
  {
    status: 'draft',
    id: "keoladeo",
    name: "Keoladeo Ghana National Park",
    state: "Rajasthan",
    region: "West India",
    coordinates: { lat: 27.17, lng: 77.52 },
  },
  {
    status: 'draft',
    id: "khangchendzonga",
    name: "Khangchendzonga National Park",
    state: "Sikkim",
    region: "Northeast India",
    coordinates: { lat: 27.6, lng: 88.35 },
  },
  {
    status: 'draft',
    id: "khirganga",
    name: "Khirganga National Park",
    state: "Himachal Pradesh",
    region: "North India",
    coordinates: { lat: 32.03, lng: 77.49 },
  },
  {
    status: 'draft',
    id: "kishtwar",
    name: "Kishtwar National Park",
    state: "Jammu & Kashmir",
    region: "North India",
    coordinates: { lat: 33.46, lng: 76.02 },
  },
  {
    status: 'draft',
    id: "kudremukh",
    name: "Kudremukh National Park",
    state: "Karnataka",
    region: "South India",
    coordinates: { lat: 13.25, lng: 75.25 },
  },
  {
    status: 'draft',
    id: "kuno",
    name: "Kuno National Park",
    state: "Madhya Pradesh",
    region: "Central India",
    coordinates: { lat: 25.35, lng: 77.31 },
  },
  {
    status: 'draft',
    id: "madhav",
    name: "Madhav National Park",
    state: "Madhya Pradesh",
    region: "Central India",
    coordinates: { lat: 25.44, lng: 77.72 },
  },
  {
    status: 'draft',
    id: "mahatma-gandhi-marine",
    name: "Mahatma Gandhi Marine National Park",
    state: "Andaman & Nicobar Islands",
    region: "South India",
    coordinates: { lat: 11.56, lng: 92.62 },
  },
  {
    status: 'draft',
    id: "mahavir-harina-vanasthali",
    name: "Mahavir Harina Vanasthali National Park",
    state: "Telangana",
    region: "South India",
    coordinates: { lat: 17.33, lng: 78.55 },
  },
  {
    status: 'live',
    id: 'manas',
    name: 'Manas National Park',
    state: 'Assam',
    region: 'Northeast India',
    oneLiner: 'A UNESCO comeback story at the Bhutan border, home to the last wild pygmy hogs',
    description:
      "Foothills grassland and semi-evergreen forest along the Manas river, which forms the border with Bhutan's Royal Manas National Park. UNESCO World Heritage Site since 1985, placed on the danger list in 1992 after insurgency wiped out its rhinos. Removed in 2011 after a remarkable recovery. Shelters several species found nowhere else on Earth.",
    tags: ['wildlife', 'birding'],
    heroImage: '/images/manas.jpg',
    unescoStatus: true,
    permitRequired: false,

    established: 1990,
    areaKm2: 850,
    openMonths: [11, 4] as [number, number],
    elevationRange: [61, 110] as [number, number],
    recommendedDays: 2,
    nearestCity: 'Barpeta Road',
    nearestCityDistKm: 44,
    coordinates: { lat: 26.717, lng: 90.933 },

    scores: {
      wildlife: { score: 7, desc: 'Rhinos reintroduced, tigers recovering, unmatched endemics' },
      scenic: { score: 7, desc: 'Manas river with Bhutan Himalayan foothills behind' },
      accessibility: { score: 4, desc: 'Guwahati 176 km, then 3.5 hours by road' },
      crowdLevel: { score: 8, desc: 'Very few tourists, far less visited than Kaziranga' },
      remoteness: { score: 7, desc: 'Deep in Bodoland, minimal facilities outside lodges' },
      infrastructure: { score: 5, desc: 'Jeep and elephant safaris, basic lodges, limited guides' },
    },

    bestMonths: [1, 3] as [number, number],
    speciality: 'pygmy hog',
    specialityMonths: [1, 3] as [number, number],
    seasonProse:
      'January to March is best. Burnt grasslands expose wildlife and migratory birds arrive in large numbers. November and December are good but grass can be tall. Park closes May to October for monsoon flooding.',

    trivia: [
      'The pygmy hog (25 cm tall) survives in the wild only here and at a few reintroduction sites stocked from Manas.',
      'UNESCO danger-listed from 1992 to 2011 after Bodo insurgency eliminated all rhinos. Since reintroduced from Kaziranga.',
      'The Manas river marks the India-Bhutan border, creating a transboundary protected area of over 2,800 km².',
    ],

    climate: ['subtropical'],
    terrain: ['flat', 'wetland'],
    landscapeProse:
      'Flat alluvial floodplain at the base of the Bhutan Himalayas. Tall elephant grass and savanna dominate the south, transitioning to semi-evergreen and riverine forest along the Manas river. The river is wide, braided, and turquoise in winter, running against the steep Bhutanese foothills. Monsoon flooding reshapes the landscape every year.',
    landscapeImages: [
      '/images/manas-landscape-1.jpg',
      '/images/manas-landscape-2.jpg',
      '/images/manas-landscape-3.jpg',
    ],

    flagshipFauna: 'Pygmy Hog',
    sightingProb: 'rare',
    birdingQuality: 'Exceptional',
    animalSpecies: 55,
    birdingSpecies: 450,
    wildlifeProse:
      "Pygmy hog is the headline species but almost impossible to spot in tall grass. Golden langur is more reliable in the canopy along the river. About 45 reintroduced rhinos and 9 to 12 tigers. Wild water buffalo, clouded leopard, hispid hare, and Assam roofed turtle add to the endemic list. Birding is exceptional at 450 species, with the world's largest Bengal florican population.",
    wildlifeCards: [
      { name: 'Pygmy Hog', image: '/images/manas-wildlife-pygmy-hog.jpg' },
      { name: 'Golden Langur', image: '/images/manas-wildlife-golden-langur.jpg' },
      { name: 'Indian Rhinoceros', image: '/images/manas-wildlife-indian-rhinoceros.jpg' },
      { name: 'Bengal Florican', image: '/images/manas-wildlife-bengal-florican.jpg' },
      { name: 'Wild Water Buffalo', image: '/images/manas-wildlife-wild-water-buffalo.jpg' },
      { name: 'Asian Elephant', image: '/images/manas-wildlife-asian-elephant.jpg' },
    ],

    safari: {
      types: ['jeep', 'elephant'],
      bookingRequirement: 'Yes',
      coreZoneAccess: 'Yes',
      density: 'Low',
      prose:
        'Three ranges: Bansbari (central, main entry), Panbari (west), Bhuiapara (east). Jeep safaris from Bansbari in morning and afternoon. Elephant safaris from Mathanguri go deeper into grasslands for rhino sightings. Permits at the Bansbari range office.',
      gates: [
        { name: 'Bansbari', qualifier: 'central range, main entry' },
        { name: 'Bhuiapara', qualifier: 'eastern range' },
      ],
    },

    networkQuality: 'Poor',
    stayQuality: 'Budget',
    entryFeeINR: 20,
    entryFeeForeigner: 250,
    practicalProse:
      'Carry mosquito repellent. Winter mornings are foggy and cold in the open jeep. Cash only. Accommodation is basic: forest rest houses and community cottages. Combine with Kaziranga (350 km east) for a two-park itinerary.',

    connectivityProse:
      '176 km from Guwahati, 44 km from Barpeta Road. Main entry at Bansbari gate.',
    transport: [
      { icon: 'plane', desc: 'Guwahati Airport (GAU), 176 km. Taxi to Bansbari takes 3.5 hours.' },
      { icon: 'train', desc: 'Barpeta Road station, 44 km. Trains from Guwahati, Kolkata, Delhi. Taxi to park.' },
      { icon: 'bus', desc: 'Assam state buses from Guwahati to Barpeta Road (3 hours). Local transport to gate.' },
      { icon: 'car', desc: 'NH27 from Guwahati via Nalbari to Barpeta Road, then to Bansbari (3.5 hours).' },
    ],

    photoProse:
      'Manas river with Bhutan foothills is a strong landscape subject. Golden langur portraits need a 400mm lens. Rhino photography requires elephant-back access. Bengal florican displaying in February and March is one of the rarest bird photography opportunities in India.',
  },
  {
    status: 'draft',
    id: "marine-gulf-of-kutch",
    name: "Marine National Park, Gulf of Kutch",
    state: "Gujarat",
    region: "West India",
    coordinates: { lat: 22.47, lng: 69.12 },
  },
  {
    status: 'draft',
    id: "mathikettan-shola",
    name: "Mathikettan Shola National Park",
    state: "Kerala",
    region: "South India",
    coordinates: { lat: 10.04, lng: 77.14 },
  },
  {
    status: 'draft',
    id: "middle-button-island",
    name: "Middle Button Island National Park",
    state: "Andaman & Nicobar Islands",
    region: "South India",
    coordinates: { lat: 12.3, lng: 93.07 },
  },
  {
    status: 'draft',
    id: "mollem",
    name: "Mollem National Park",
    state: "Goa",
    region: "West India",
    coordinates: { lat: 15.36, lng: 74.23 },
  },
  {
    status: 'draft',
    id: "mouling",
    name: "Mouling National Park",
    state: "Arunachal Pradesh",
    region: "Northeast India",
    coordinates: { lat: 28.52, lng: 94.6 },
  },
  {
    status: 'draft',
    id: "mount-harriet",
    name: "Mount Harriet National Park",
    state: "Andaman & Nicobar Islands",
    region: "South India",
    coordinates: { lat: 11.72, lng: 92.73 },
  },
  {
    status: 'draft',
    id: "mrugavani",
    name: "Mrugavani National Park",
    state: "Telangana",
    region: "South India",
    coordinates: { lat: 17.3, lng: 78.5 },
  },
  {
    status: 'draft',
    id: "mudumalai",
    name: "Mudumalai National Park",
    state: "Tamil Nadu",
    region: "South India",
    coordinates: { lat: 11.57, lng: 76.55 },
  },
  {
    status: 'draft',
    id: "mukundara-hills",
    name: "Mukundara Hills National Park",
    state: "Rajasthan",
    region: "West India",
    coordinates: { lat: 24.57, lng: 75.86 },
  },
  {
    status: 'draft',
    id: "mukurthi",
    name: "Mukurthi National Park",
    state: "Tamil Nadu",
    region: "South India",
    coordinates: { lat: 11.2, lng: 76.55 },
  },
  {
    status: 'draft',
    id: "murlen",
    name: "Murlen National Park",
    state: "Mizoram",
    region: "Northeast India",
    coordinates: { lat: 23.63, lng: 93.3 },
  },
  {
    status: 'live',
    id: 'nagarhole',
    name: 'Nagarhole National Park',
    state: 'Karnataka',
    region: 'South India',
    oneLiner: 'Where the Deccan Plateau meets the Western Ghats, with the world\'s best black panther sightings',
    description:
      'Part of the largest contiguous protected forest in South India, connected to Bandipur, Mudumalai, and Wayanad across four states. Former hunting ground of the Mysore Wodeyar kings. The Kabini reservoir on the park\'s southern edge draws massive elephant herds in summer and has become India\'s most reliable location for melanistic leopard (black panther) sightings. Tiger density here is among the highest anywhere.',
    tags: ['wildlife', 'birding', 'photography'],
    heroImage: '/images/nagarhole.jpg',
    unescoStatus: true,
    permitRequired: false,

    established: 1988,
    areaKm2: 643,
    openMonths: [10, 5] as [number, number],
    elevationRange: [687, 960] as [number, number],
    recommendedDays: 2,
    nearestCity: 'Mysuru',
    nearestCityDistKm: 80,
    coordinates: { lat: 12.06, lng: 76.151 },

    scores: {
      wildlife: { score: 9, desc: 'Three big predators coexist at high density, massive elephant herds' },
      scenic: { score: 8, desc: 'Kabini backwaters, moist deciduous forest, Western Ghat foothills' },
      accessibility: { score: 7, desc: '4 hours from Bengaluru, 2 hours from Mysuru' },
      crowdLevel: { score: 5, desc: 'Kabini side is popular, northern Nagarhole gate is quieter' },
      remoteness: { score: 5, desc: 'Well-connected by road, luxury resorts along Kabini' },
      infrastructure: { score: 7, desc: 'Jeep and boat safaris, government and private lodges, good guides' },
    },

    bestMonths: [10, 2] as [number, number],
    speciality: 'black panther',
    specialityMonths: [3, 5] as [number, number],
    seasonProse:
      'October to February is the most comfortable season with cool weather and lush post-monsoon forest. March to May is hot but excellent for wildlife as water sources dry up and animals concentrate along the Kabini backwaters. Summer is also the best window for black panther sightings. The park closes June to September for monsoon.',

    trivia: [
      'Nagarhole, Bandipur, Mudumalai, and Wayanad together form the Nilgiri Biosphere Reserve, roughly 2,200 km² of connected forest spanning four states.',
      'Each summer, 600 to 800 Asian elephants gather along the Kabini backwaters, the largest known congregation of Asian elephants at a single site.',
      'The park\'s name means \'snake stream\' in Kannada (naga = snake, hole = stream), referring to the many winding rivulets that run through the forest.',
    ],

    climate: ['tropical-wet', 'tropical-dry'],
    terrain: ['hilly', 'dense-forest'],
    landscapeProse:
      'Moist and dry deciduous forest with teak, rosewood, and sandalwood as dominant canopy species. Bamboo thickets break up the understorey, especially in the southern ranges. The terrain is gently undulating with shallow valleys carved by the Kabini, Lakshmana Teertha, and Nagarhole rivers. The Kabini reservoir along the southern boundary creates a dramatic open shoreline in summer, backed by dense forest. Monsoon transforms the landscape into deep green with seasonal streams running full.',
    landscapeImages: [
      '/images/nagarhole-landscape-1.jpg',
      '/images/nagarhole-landscape-2.jpg',
      '/images/nagarhole-landscape-3.jpg',
    ],

    flagshipFauna: 'Bengal Tiger',
    sightingProb: 'likely',
    birdingQuality: 'Exceptional',
    animalSpecies: 50,
    birdingSpecies: 270,
    wildlifeProse:
      'Tiger, leopard, and dhole coexist here at high densities, making Nagarhole one of the richest predator landscapes in Asia. Around 60 to 70 tigers in the reserve, with Kabini and Antharasanthe ranges being the best zones for sightings. Melanistic leopards (black panthers) are seen regularly at Kabini, particularly in summer. Asian elephant herds of 50 to 100 are common. Gaur, sambar, chital, wild boar, and four-horned antelope make up the prey base. Sloth bears are present but shy. Birding is excellent at 270 species, with Malabar pied hornbill, grey-headed fish eagle, changeable hawk-eagle, Malabar trogon, and blue-bearded bee-eater among the highlights.',
    wildlifeCards: [
      { name: 'Bengal Tiger', image: '/images/nagarhole-wildlife-bengal-tiger.jpg' },
      { name: 'Black Panther', image: '/images/nagarhole-wildlife-black-panther.jpg' },
      { name: 'Asian Elephant', image: '/images/nagarhole-wildlife-asian-elephant.jpg' },
      { name: 'Dhole', image: '/images/nagarhole-wildlife-dhole.jpg' },
      { name: 'Gaur', image: '/images/nagarhole-wildlife-gaur.jpg' },
      { name: 'Malabar Pied Hornbill', image: '/images/nagarhole-wildlife-malabar-pied-hornbill.jpg' },
    ],

    safari: {
      types: ['jeep', 'boat'],
      bookingRequirement: 'Yes',
      coreZoneAccess: 'Yes',
      density: 'Moderate',
      prose:
        'Two safari access points: the Nagarhole gate (north) for jeep safaris into the core forest, and the Kabini side (south) for both jeep and boat safaris along the reservoir. Jeep safaris run in morning and afternoon shifts of about 2 hours. Boat safaris on the Kabini are run by the forest department and private lodges. Bus (canter) safaris also available from the main gate. No online booking for the forest department safaris; tickets at the gate or through lodges.',
      gates: [
        { name: 'Nagarhole Gate', qualifier: 'northern entry, jeep and bus safaris' },
        { name: 'Kabini', qualifier: 'southern entry, jeep and boat safaris' },
      ],
    },

    networkQuality: 'Decent',
    stayQuality: 'Luxury',
    entryFeeINR: 150,
    entryFeeForeigner: 1500,
    practicalProse:
      'The Kabini side has luxury resorts (Orange County, Evolve Back, Red Earth) while the Nagarhole gate side is more budget-friendly with forest department lodges. Summer afternoons cross 35°C in the open jeep. Carry binoculars. Cash useful at the Nagarhole gate area, though Kabini resorts accept cards.',

    connectivityProse:
      '80 km from Mysuru, 220 km from Bengaluru. Two access sides: Nagarhole gate via Hunsur, Kabini via HD Kote.',
    transport: [
      { icon: 'plane', desc: 'Mysore Airport (MYQ), 80 km. Limited flights. Bengaluru Airport (BLR), 240 km, is the practical choice. Taxi 4 to 5 hours.' },
      { icon: 'train', desc: 'Mysuru Junction, 80 km. Well-connected to Bengaluru and Chennai. Taxi to park.' },
      { icon: 'bus', desc: 'KSRTC buses from Bengaluru and Mysuru to Hunsur or HD Kote. Then local taxi to the gate.' },
      { icon: 'car', desc: 'Bengaluru via Mysuru Road (SH17) to Hunsur, then to Nagarhole gate (4 to 5 hours). Or via HD Kote for Kabini side.' },
    ],

    photoProse:
      'Kabini backwaters in summer are among India\'s best wildlife photography locations. Morning boat safaris offer clean reflections of elephants and deer at the water\'s edge. The black panther is typically shot at range through dense foliage, so a 500-600mm lens helps. Forest safaris reward with dappled light on tigers and gaur. Malabar pied hornbills are cooperative subjects along the Kabini shore.',
  },
  {
    status: 'draft',
    id: "namdapha",
    name: "Namdapha National Park",
    state: "Arunachal Pradesh",
    region: "Northeast India",
    coordinates: { lat: 27.49, lng: 96.39 },
  },
  {
    status: 'draft',
    id: "nameri",
    name: "Nameri National Park",
    state: "Assam",
    region: "Northeast India",
    coordinates: { lat: 26.94, lng: 92.79 },
  },
  {
    status: 'live',
    id: 'nanda-devi',
    name: 'Nanda Devi National Park',
    state: 'Uttarakhand',
    region: 'North India',
    oneLiner: "A glacial fortress around India's second-highest peak, closed for 40 years",
    description:
      'A ring of peaks above 6,000 m encircling a glacial basin with Nanda Devi (7,817 m) at its centre. Closed to all entry in 1983 after trekking damaged the ecosystem. Sealed for three decades. Limited outer-zone access has recently resumed. UNESCO World Heritage Site since 1988, paired with Valley of Flowers.',
    tags: ['trekking', 'expedition'],
    heroImage: '/images/nanda-devi.jpg',
    unescoStatus: true,
    permitRequired: true,
    permitDescription: 'Forest Department permit from Joshimath required. Foreign nationals may need additional Home Ministry clearance.',

    established: 1982,
    areaKm2: 630,
    openMonths: [5, 10] as [number, number],
    elevationRange: [3500, 7817] as [number, number],
    recommendedDays: 5,
    nearestCity: 'Joshimath',
    nearestCityDistKm: 24,
    coordinates: { lat: 30.419, lng: 79.850 },

    scores: {
      wildlife: { score: 4, desc: 'Snow leopard and bharal present, almost never seen' },
      scenic: { score: 10, desc: '7,800 m peak ringed by 6,000 m walls and glaciers' },
      accessibility: { score: 2, desc: 'Multi-day trek from Lata, inner sanctuary closed' },
      crowdLevel: { score: 9, desc: 'Strict visitor caps, almost no tourists' },
      remoteness: { score: 10, desc: 'No habitation, no trails, total wilderness' },
      infrastructure: { score: 2, desc: 'Nothing inside, carry everything in and out' },
    },

    bestMonths: [5, 6] as [number, number],
    speciality: 'high-altitude wilderness',
    specialityMonths: [5, 6] as [number, number],
    seasonProse:
      'May and June offer clear pre-monsoon skies with snow melting at lower passes. September and October are crisp and cold but visible. July and August bring dangerous rain. November to April is buried in snow.',

    trivia: [
      'Inner sanctuary closed since 1983 after trekking damage. One of the strictest conservation closures in history.',
      "Nanda Devi (7,817 m) was once thought the world's highest peak. Still India's second-highest after Kangchenjunga.",
      'The Rishi Ganga Gorge was first navigated in 1934 by Shipton and Tilman. One of the deepest gorges on Earth.',
    ],

    climate: ['alpine'],
    terrain: ['mountainous', 'glacial'],
    landscapeProse:
      "A continuous wall of peaks between 6,000 m and 7,500 m encircles a glacial basin on three sides. The Rishi Ganga drains westward through one of the world's deepest gorges. Alpine meadows, moraine fields, glaciers, then the twin summits of Nanda Devi. Below the sanctuary wall, birch, juniper, and rhododendron cling to steep slopes. Everything above 3,500 m.",
    landscapeImages: [
      '/images/nanda-devi-landscape-1.jpg',
      '/images/nanda-devi-landscape-2.jpg',
      '/images/nanda-devi-landscape-3.jpg',
    ],

    flagshipFauna: 'Snow Leopard',
    sightingProb: 'rare',
    birdingQuality: 'Mediocre',
    animalSpecies: 14,
    birdingSpecies: 114,
    wildlifeProse:
      'Snow leopard, musk deer, bharal, Himalayan tahr, serow, and black bear inhabit the park but are rarely seen. Decades of human exclusion have helped populations recover, though no comprehensive census exists. Birding is 114 species: Himalayan monal, snow partridge, golden eagle, lammergeier, koklass pheasant.',
    wildlifeCards: [
      { name: 'Snow Leopard', image: '/images/nanda-devi-wildlife-snow-leopard.jpg' },
      { name: 'Bharal', image: '/images/nanda-devi-wildlife-bharal.jpg' },
      { name: 'Himalayan Musk Deer', image: '/images/nanda-devi-wildlife-himalayan-musk-deer.jpg' },
      { name: 'Himalayan Monal', image: '/images/nanda-devi-wildlife-himalayan-monal.jpg' },
      { name: 'Himalayan Tahr', image: '/images/nanda-devi-wildlife-himalayan-tahr.jpg' },
    ],

    safari: {
      types: ['walking'],
      bookingRequirement: 'Yes',
      coreZoneAccess: 'No access',
      density: 'Low',
      prose:
        'Inner sanctuary closed. Regulated trekking in outer zones only, from Lata village via Lata Kharak to Dharansi Pass. Permits from Forest Department at Joshimath. Group sizes capped. Local guide mandatory.',
      gates: [
        { name: 'Lata Village', qualifier: 'sole trailhead, outer zone only' },
      ],
    },

    networkQuality: 'None',
    stayQuality: 'Camps',
    entryFeeINR: 2500,
    entryFeeForeigner: 2500,
    practicalProse:
      'Expedition-grade trekking. Carry all food, fuel, tents, and gear rated to minus 15°C. Acclimatise in Joshimath for 2 days minimum. Not for casual trekkers.',

    connectivityProse:
      '24 km from Joshimath to Lata village trailhead. Then 2-3 day trek to the park boundary.',
    transport: [
      { icon: 'plane', desc: 'Jolly Grant Airport (DED), Dehradun, 280 km. Taxi via Rishikesh, 10 hours.' },
      { icon: 'train', desc: 'Rishikesh or Haridwar, 280 km. Bus or taxi to Joshimath, 8-9 hours.' },
      { icon: 'bus', desc: 'GMOU buses Rishikesh to Joshimath daily. Shared taxi to Lata village, 30 minutes.' },
      { icon: 'car', desc: 'NH58 from Delhi via Rishikesh to Joshimath (12-14 hours). Variable road beyond Chamoli.' },
      { icon: 'foot', desc: 'Lata village to park boundary, 2-3 day trek via Lata Kharak and Dharansi Pass.' },
    ],

    photoProse:
      'Ultra-wide lenses (14-24mm) for the peak wall at dawn. Landscape is the subject, not wildlife. Carry weather-sealed gear and spare batteries, cold kills power fast.',
  },
  {
    status: 'draft',
    id: "nawegaon",
    name: "Nawegaon National Park",
    state: "Maharashtra",
    region: "West India",
    coordinates: { lat: 21, lng: 79.98 },
  },
  {
    status: 'draft',
    id: "neora-valley",
    name: "Neora Valley National Park",
    state: "West Bengal",
    region: "East India",
    coordinates: { lat: 27.08, lng: 88.68 },
  },
  {
    status: 'draft',
    id: "nokrek",
    name: "Nokrek National Park",
    state: "Meghalaya",
    region: "Northeast India",
    coordinates: { lat: 25.47, lng: 90.32 },
  },
  {
    status: 'draft',
    id: "north-button-island",
    name: "North Button Island National Park",
    state: "Andaman & Nicobar Islands",
    region: "South India",
    coordinates: { lat: 12.33, lng: 93.07 },
  },
  {
    status: 'draft',
    id: "orang",
    name: "Orang National Park",
    state: "Assam",
    region: "Northeast India",
    coordinates: { lat: 26.56, lng: 92.27 },
  },
  {
    status: 'draft',
    id: "pambadum-shola",
    name: "Pambadum Shola National Park",
    state: "Kerala",
    region: "South India",
    coordinates: { lat: 10.12, lng: 77.24 },
  },
  {
    status: 'draft',
    id: "panna",
    name: "Panna National Park",
    state: "Madhya Pradesh",
    region: "Central India",
    coordinates: { lat: 24.72, lng: 80.02 },
  },
  {
    status: 'draft',
    id: "papikonda",
    name: "Papikonda National Park",
    state: "Andhra Pradesh",
    region: "South India",
    coordinates: { lat: 17.34, lng: 81.4 },
  },
  {
    status: 'draft',
    id: "pench-mh",
    name: "Pench National Park (Jawaharlal Nehru)",
    state: "Maharashtra",
    region: "West India",
    coordinates: { lat: 21.44, lng: 79.26 },
  },
  {
    status: 'live',
    id: 'pench',
    name: 'Pench National Park',
    state: 'Madhya Pradesh',
    region: 'Central India',
    oneLiner: "Kipling's Jungle Book forest, straddling Madhya Pradesh and Maharashtra",
    description:
      "Teak forest split down the middle by the Pench river, spreading across the Madhya Pradesh-Maharashtra border. Kipling set The Jungle Book in these forests. The highest herbivore density of any Indian tiger reserve (90 animals per km²), which makes it excellent predator country. BBC filmed 'Spy in the Jungle' here in 2008, following the legendary tigress Collarwali.",
    tags: ['wildlife', 'families', 'photography'],
    heroImage: '/images/pench.jpg',
    unescoStatus: false,
    permitRequired: false,

    established: 1983,
    areaKm2: 293,
    openMonths: [10, 6] as [number, number],
    elevationRange: [425, 620] as [number, number],
    recommendedDays: 2,
    nearestCity: 'Seoni',
    nearestCityDistKm: 35,
    coordinates: { lat: 21.672, lng: 79.303 },

    scores: {
      wildlife: { score: 8, desc: 'High tiger and prey density, good leopard sightings' },
      scenic: { score: 6, desc: 'Pleasant teak forest, nothing dramatic for landscape' },
      accessibility: { score: 7, desc: 'Nagpur airport 90 km, easy 2-hour drive' },
      crowdLevel: { score: 5, desc: 'Popular but less hectic than Kanha or Bandhavgarh' },
      remoteness: { score: 5, desc: 'Turia village has resort clusters, near NH-44' },
      infrastructure: { score: 7, desc: 'Online booking, multiple zones, walking and night safaris' },
    },

    bestMonths: [11, 3] as [number, number],
    speciality: 'prey density',
    specialityMonths: [3, 5] as [number, number],
    seasonProse:
      'November to March is comfortable with good sightings. March to May is hot but tiger visibility peaks as vegetation thins and water shrinks. Closed July to mid-October for monsoon. Wednesday is the weekly off for core zones.',

    trivia: [
      'Highest herbivore density of any Indian tiger reserve at 90.3 animals per km². More prey means more predator action.',
      "Collarwali, Pench's most famous tigress, raised 29 cubs in her lifetime and was the star of BBC's 'Spy in the Jungle'.",
      'Straddles two states. MP side has 3 core gates and 4 buffer zones. Maharashtra side has 6 gates.',
    ],

    climate: ['subtropical'],
    terrain: ['hilly', 'dense-forest'],
    landscapeProse:
      'Open-canopy teak forest with considerable ground cover and grassy clearings. The Pench river runs north to south, splitting the park into eastern and western halves. Low undulating hills, not steep. In summer the deciduous canopy thins to bare branches and golden leaf litter. The Meghdoot dam creates a reservoir that draws wildlife in the dry months.',
    landscapeImages: [
      '/images/pench-landscape-1.jpg',
      '/images/pench-landscape-2.jpg',
      '/images/pench-landscape-3.jpg',
    ],

    flagshipFauna: 'Bengal Tiger',
    sightingProb: 'likely',
    birdingQuality: 'Rich',
    animalSpecies: 39,
    birdingSpecies: 325,
    wildlifeProse:
      'Around 70 to 75 tigers across both state sides. Sighting probability is good, helped by open canopy and high prey density. Chital and sambar in enormous herds. Leopards are regularly seen, especially in buffer zones. Dhole packs hunt through the teak corridors. Gaur, nilgai, wild boar, and four-horned antelope complete the herbivore list. Birding is rich at 325 species, with Malabar pied hornbill, osprey, grey-headed fish eagle, Indian pitta, and white-eyed buzzard.',
    wildlifeCards: [
      { name: 'Bengal Tiger', image: '/images/pench-wildlife-bengal-tiger.jpg' },
      { name: 'Indian Leopard', image: '/images/pench-wildlife-indian-leopard.jpg' },
      { name: 'Dhole', image: '/images/pench-wildlife-dhole.jpg' },
      { name: 'Gaur', image: '/images/pench-wildlife-gaur.jpg' },
      { name: 'Malabar Pied Hornbill', image: '/images/pench-wildlife-malabar-pied-hornbill.jpg' },
      { name: 'Chital', image: '/images/pench-wildlife-chital.jpg' },
    ],

    safari: {
      types: ['jeep', 'walking', 'cycle'],
      bookingRequirement: 'Yes',
      coreZoneAccess: 'Yes',
      density: 'Moderate',
      prose:
        'Three core gates on the MP side: Turia, Karmajhiri, and Jamtara. Buffer zones offer night safaris, walking safaris, and cycling. Morning and evening jeep shifts. Book through mponline.gov.in for MP gates or Maharashtra Forest Department for Sillari and Khursapar gates.',
      gates: [
        { name: 'Turia Gate', qualifier: 'main entry, MP core zone' },
        { name: 'Karmajhiri Gate' },
        { name: 'Jamtara Gate' },
        { name: 'Sillari Gate', qualifier: 'Maharashtra side' },
      ],
    },

    networkQuality: 'Decent',
    stayQuality: 'Luxury',
    entryFeeINR: 2000,
    entryFeeForeigner: 5000,
    practicalProse:
      'Carry warm layers for winter mornings. Summer crosses 45°C. Cash useful in Turia village. Night safari in the buffer zones is a unique Pench offering not available in most MP parks. Combine with Kanha (200 km, 3.5 hours) for a two-park itinerary.',

    connectivityProse:
      '35 km from Seoni, 90 km from Nagpur. Main tourism area around Turia gate on NH-44.',
    transport: [
      { icon: 'plane', desc: 'Nagpur Airport (NAG), 90 km. Domestic and limited international. Taxi 2 hours.' },
      { icon: 'train', desc: 'Seoni station, 35 km. Or Nagpur Junction, 90 km, with wider connectivity.' },
      { icon: 'bus', desc: 'State buses from Nagpur and Jabalpur stop at Turia on NH-44.' },
      { icon: 'car', desc: 'NH-44 from Nagpur (2 hours) or Jabalpur (4 hours). Well-maintained highway.' },
    ],

    photoProse:
      'Open teak canopy gives cleaner light than denser sal forests. Chital herds in golden leaf litter make strong compositions. A 200-400mm lens covers most tiger situations. The Pench river crossing at dawn is a classic landscape shot.',
  },
  {
    status: 'live',
    id: 'periyar',
    name: 'Periyar National Park',
    state: 'Kerala',
    region: 'South India',
    oneLiner: 'A lake-centred wildlife sanctuary in the spice hills of the Western Ghats',
    description:
      'A century-old artificial lake surrounded by tropical evergreen forest in the Cardamom Hills, where elephants wade to the water\'s edge and the air smells of pepper and cardamom. Former hunting ground of the Travancore kings, now one of India\'s most visitor-friendly wildlife reserves. The boat safari on Periyar Lake is unlike anything offered at any other Indian national park.',
    tags: ['wildlife', 'birding', 'families'],
    heroImage: '/images/periyar.jpg',
    unescoStatus: false,
    permitRequired: false,

    established: 1982,
    areaKm2: 925,
    openMonths: [1, 12] as [number, number],
    elevationRange: [100, 2016] as [number, number],
    recommendedDays: 2,
    nearestCity: 'Kumily',
    nearestCityDistKm: 4,
    coordinates: { lat: 9.578, lng: 77.18 },

    scores: {
      wildlife: { score: 6, desc: 'Elephants reliable, tigers present but rarely seen' },
      scenic: { score: 8, desc: 'Lake, evergreen forest, spice plantations, Cardamom Hills' },
      accessibility: { score: 6, desc: '4 hours from Kochi or Madurai, well-connected by road' },
      crowdLevel: { score: 4, desc: 'Boat safaris are crowded, walking trails and rafting are quieter' },
      remoteness: { score: 4, desc: 'Kumily/Thekkady is a busy tourist town right at the gate' },
      infrastructure: { score: 8, desc: 'Multiple safari types, eco-tourism programmes, wide range of stays' },
    },

    bestMonths: [10, 3] as [number, number],
    speciality: 'boat safari',
    specialityMonths: [1, 4] as [number, number],
    seasonProse:
      'October to March is ideal. Cool, dry weather and good visibility across the lake. January to April is best for boat safaris as water levels drop and elephants concentrate at the lake edge. The park stays open year-round, unlike most Indian national parks. Monsoon (June to September) brings heavy rain and leeches but the forest is at its most dramatic.',

    trivia: [
      'Periyar Lake was created by the Mullaperiyar Dam, built by the British in 1895. The dead trees still standing in the water give the lake its eerie, photogenic character.',
      'The park pioneered eco-tourism in India. Former poachers and sandalwood smugglers were rehabilitated as forest guides and patrol members through community programmes in the late 1990s.',
      'Periyar is one of the few Indian national parks open all 12 months of the year.',
    ],

    climate: ['tropical-wet'],
    terrain: ['hilly', 'dense-forest'],
    landscapeProse:
      'Tropical evergreen and semi-evergreen forest on steep, undulating terrain in the Cardamom Hills. The canopy reaches 40 metres in the deep valleys, allowing almost no sunlight to the forest floor. At the centre sits Periyar Lake, 26 km² of still water dotted with the bleached trunks of submerged trees. Marshy grasslands fringe the lake edges. Spice plantations of pepper, cardamom, and tea press against the sanctuary boundary. Higher elevations have montane grasslands and shola patches.',
    landscapeImages: [
      '/images/periyar-landscape-1.jpg',
      '/images/periyar-landscape-2.jpg',
      '/images/periyar-landscape-3.jpg',
    ],

    flagshipFauna: 'Asian Elephant',
    sightingProb: 'likely',
    birdingQuality: 'Rich',
    animalSpecies: 49,
    birdingSpecies: 265,
    wildlifeProse:
      'Elephants are the main draw. Herds of 10 to 30 are regularly seen from the boat, wading into the lake or grazing on the marshy banks. About 1,900 elephants in the broader landscape. Tigers number around 40 to 50 but sightings from the boat are extremely rare due to dense forest cover. Gaur, sambar, wild boar, Nilgiri langur, lion-tailed macaque, and Indian giant squirrel are present. Otters are occasionally spotted in summer when water levels drop. Birding is rich at 265 species, including great hornbill, Malabar grey hornbill, Sri Lanka frogmouth, Nilgiri thrush, and Oriental darter.',
    wildlifeCards: [
      { name: 'Asian Elephant', image: '/images/periyar-wildlife-asian-elephant.jpg' },
      { name: 'Gaur', image: '/images/periyar-wildlife-gaur.jpg' },
      { name: 'Nilgiri Langur', image: '/images/periyar-wildlife-nilgiri-langur.jpg' },
      { name: 'Lion-tailed Macaque', image: '/images/periyar-wildlife-lion-tailed-macaque.jpg' },
      { name: 'Great Hornbill', image: '/images/periyar-wildlife-great-hornbill.jpg' },
      { name: 'Indian Giant Squirrel', image: '/images/periyar-wildlife-indian-giant-squirrel.jpg' },
    ],

    safari: {
      types: ['boat', 'walking'],
      bookingRequirement: 'Yes',
      coreZoneAccess: 'Yes',
      density: 'High',
      prose:
        'The signature experience is the 2-hour boat safari on Periyar Lake, run by the Kerala Forest Department. Five departures daily. Upper deck seats offer the best views but fill up fast. Beyond the boat, the park offers guided nature walks, bamboo rafting, the Periyar Tiger Trail (overnight trek with camping), jungle night patrols, and border hikes. These eco-tourism programmes are managed by the Periyar Tiger Reserve and must be booked at the Thekkady information centre.',
      gates: [
        { name: 'Thekkady Gate', qualifier: 'main entry, 4 km from Kumily' },
      ],
    },

    networkQuality: 'Decent',
    stayQuality: 'Mid-range',
    entryFeeINR: 25,
    entryFeeForeigner: 300,
    practicalProse:
      'Leeches are a serious nuisance during and just after monsoon. Carry salt or tobacco. The boat safari is the most popular activity but not always the best for wildlife. Bamboo rafting and guided walks offer far more intimate encounters. Kumily/Thekkady has everything from backpacker hostels to luxury resorts. Spice plantation tours are an easy add-on.',

    connectivityProse:
      '4 km from Kumily/Thekkady. Kochi is 190 km west, Madurai is 140 km east.',
    transport: [
      { icon: 'plane', desc: 'Cochin International Airport (COK), 190 km. Taxi to Thekkady takes 4.5 hours via hill roads. Madurai Airport (IXM), 140 km, 3.5 hours.' },
      { icon: 'train', desc: 'Kottayam station, 114 km. Well-connected to Kochi, Trivandrum, and Chennai. Then bus or taxi to Thekkady.' },
      { icon: 'bus', desc: 'Frequent KSRTC buses from Kochi (5 hours), Kottayam (3.5 hours), and Madurai (4 hours) to Kumily.' },
      { icon: 'car', desc: 'From Kochi via Muvattupuzha and Thodupuzha (4.5 hours). From Madurai via Theni (3.5 hours).' },
    ],

    photoProse:
      'Early morning boat safaris in low mist with elephants at the lake edge and dead trees reflected in still water make the iconic Periyar image. A 100-400mm lens covers most situations from the boat. Bamboo rafting gets you closer to the shoreline for better compositions. The forest walks are excellent for macro and bird photography. Low light under the evergreen canopy demands fast glass.',
  },
  {
    status: 'draft',
    id: "phawngpui",
    name: "Phawngpui Blue Mountain National Park",
    state: "Mizoram",
    region: "Northeast India",
    coordinates: { lat: 22.64, lng: 93.05 },
  },
  {
    status: 'draft',
    id: "pin-valley",
    name: "Pin Valley National Park",
    state: "Himachal Pradesh",
    region: "North India",
    coordinates: { lat: 31.97, lng: 78.03 },
  },
  {
    status: 'draft',
    id: "raimona",
    name: "Raimona National Park",
    state: "Assam",
    region: "Northeast India",
    coordinates: { lat: 26.68, lng: 89.9 },
  },
  {
    status: 'draft',
    id: "rajaji",
    name: "Rajaji National Park",
    state: "Uttarakhand",
    region: "North India",
    coordinates: { lat: 30.08, lng: 78.18 },
  },
  {
    status: 'draft',
    id: "rajiv-gandhi-rameswaram",
    name: "Rajiv Gandhi National Park",
    state: "Andhra Pradesh",
    region: "South India",
    coordinates: { lat: 15.8, lng: 78.87 },
  },
  {
    status: 'draft',
    id: "rani-jhansi-marine",
    name: "Rani Jhansi Marine National Park",
    state: "Andaman & Nicobar Islands",
    region: "South India",
    coordinates: { lat: 12.08, lng: 93.02 },
  },
  {
    status: 'live',
    id: 'ranthambore',
    name: 'Ranthambore National Park',
    state: 'Rajasthan',
    region: 'North India',
    oneLiner: "India's most famous tiger park, where big cats hunt among ancient ruins",
    description:
      "A dry deciduous forest wedged between the Aravalli and Vindhya ranges, built around a 10th-century Chauhan fort. Former hunting ground of the Jaipur maharajas, now one of India's flagship Project Tiger reserves. Tigers here are diurnal and remarkably unbothered by vehicles, making this the country's most reliable place for daytime tiger photography.",
    tags: ['wildlife', 'heritage', 'photography'],
    heroImage: '/images/ranthambore.jpg',
    unescoStatus: true,
    permitRequired: false,

    established: 1980,
    areaKm2: 392,
    openMonths: [10, 6] as [number, number],
    elevationRange: [215, 505] as [number, number],
    recommendedDays: 2,
    nearestCity: 'Sawai Madhopur',
    nearestCityDistKm: 14,
    coordinates: { lat: 26.017, lng: 76.503 },

    scores: {
      wildlife: { score: 8, desc: 'Diurnal tigers sighted on most 2-day visits' },
      scenic: { score: 7, desc: 'Fort ruins, lakes, and dry forest make striking backdrops' },
      accessibility: { score: 7, desc: 'Direct trains from Delhi, Jaipur, Mumbai to Sawai Madhopur' },
      crowdLevel: { score: 3, desc: 'Peak season permits sell out months ahead' },
      remoteness: { score: 4, desc: 'Small town nearby, well-connected by rail' },
      infrastructure: { score: 8, desc: 'Online booking, trained guides, luxury resorts nearby' },
    },

    bestMonths: [11, 3] as [number, number],
    speciality: 'tiger photography',
    specialityMonths: [3, 5] as [number, number],
    seasonProse:
      'Winter from November to February is the most comfortable time to visit, with cool mornings and active wildlife. March to May is scorching hot but arguably better for tiger sightings, since animals cluster around shrinking water bodies. Core zones 1 to 5 close during monsoon (July to September), though buffer zones 6 to 10 stay open with limited access.',

    trivia: [
      'Ranthambore Fort, built in 944 AD, is one of six Hill Forts of Rajasthan inscribed as a UNESCO World Heritage Site in 2013.',
      'Tigress Machli (T-16) was the most photographed tiger in history and lived to 20, the longest recorded wild lifespan for a tigress.',
      "Tiger population grew from 25 in 2005 to over 80 by 2024, despite the park's carrying capacity being around 50.",
    ],

    climate: ['semi-arid'],
    terrain: ['hilly', 'dense-forest'],
    landscapeProse:
      'Rocky Aravalli ridges and Vindhya plateau edges create a rumpled, undulating terrain of steep gorges and flat-topped hills. Three large lakes, Padam Talao, Rajbagh, and Malik Talao, break up the dry deciduous cover of dhok, banyan, and pipal trees. In summer the forest thins to bare branches and golden grass, exposing the sandstone bones of the land. The 10th-century fort looms above on a 500-metre hill, its crumbling walls tangled with roots and vines.',
    landscapeImages: [
      '/images/ranthambore-landscape-1.jpg',
      '/images/ranthambore-landscape-2.jpg',
      '/images/ranthambore-landscape-3.jpg',
    ],

    flagshipFauna: 'Bengal Tiger',
    sightingProb: 'likely',
    birdingQuality: 'Rich',
    animalSpecies: 40,
    birdingSpecies: 320,
    wildlifeProse:
      'Bengal tigers here behave unlike those in most other Indian parks. They hunt in broad daylight, patrol open lakeshores, and walk past jeeps without flinching. Over 80 tigers share the reserve, each tracked by ID number and known by name to the guides. Leopards and sloth bears are regularly spotted, and the lakes support healthy populations of marsh crocodile. Birding around the three main lakes is strong, with over 320 species including painted spurfowl, Indian grey hornbill, and winter migrants like greylag goose and ruddy shelduck.',
    wildlifeCards: [
      { name: 'Bengal Tiger', image: '/images/ranthambore-wildlife-bengal-tiger.jpg' },
      { name: 'Leopard', image: '/images/ranthambore-wildlife-leopard.jpg' },
      { name: 'Sloth Bear', image: '/images/ranthambore-wildlife-sloth-bear.jpg' },
      { name: 'Marsh Crocodile', image: '/images/ranthambore-wildlife-marsh-crocodile.jpg' },
      { name: 'Sambar Deer', image: '/images/ranthambore-wildlife-sambar-deer.jpg' },
      { name: 'Painted Spurfowl', image: '/images/ranthambore-wildlife-painted-spurfowl.jpg' },
    ],

    safari: {
      types: ['jeep', 'canter'],
      bookingRequirement: 'Months in advance',
      coreZoneAccess: 'Yes',
      density: 'High',
      prose:
        'Safaris run in two 3.5-hour shifts, morning and afternoon, across 10 zones. Zones 1 to 5 are core, 6 to 10 are buffer. Vehicles are 6-seat Gypsy jeeps or 20-seat open canters. Zone allocation happens at booking, not at the gate, so you cannot choose on the day. Permits for peak season weekends sell out 90 to 120 days in advance.',
      gates: [
        { name: 'Zone 1 Gate' },
        { name: 'Zone 2 Gate' },
        { name: 'Zone 3 Gate' },
        { name: 'Zone 4 Gate' },
        { name: 'Zone 5 Gate' },
        { name: 'Zone 6 Gate', qualifier: 'buffer zone' },
        { name: 'Zone 7 Gate', qualifier: 'buffer zone' },
        { name: 'Zone 8 Gate', qualifier: 'buffer zone' },
        { name: 'Zone 9 Gate', qualifier: 'buffer zone' },
        { name: 'Zone 10 Gate', qualifier: 'buffer zone' },
      ],
    },

    networkQuality: 'Decent',
    stayQuality: 'Luxury',
    entryFeeINR: 2200,
    entryFeeForeigner: 4200,
    practicalProse:
      'Carry sunscreen and a dust scarf for summer safaris, when temperatures cross 45°C inside the open jeeps. Cash is useful in Sawai Madhopur town, though most safari lodges accept cards. Pack a 200-500mm lens if you are serious about tiger portraits, since animals often appear at moderate range near lake edges.',

    connectivityProse:
      '14 km from Sawai Madhopur, a major junction on the Delhi-Mumbai rail line. Jaipur airport is 160 km away, roughly a 3-hour drive.',
    transport: [
      { icon: 'plane', desc: 'Jaipur International Airport (JAI), 160 km. Taxi or pre-arranged resort transfer, 3 hours.' },
      { icon: 'train', desc: 'Sawai Madhopur Junction (SWM), 14 km. Direct trains from Delhi, Jaipur, Mumbai, Agra.' },
      { icon: 'bus', desc: 'State buses from Jaipur (180 km, 4 hours) and Kota (137 km, 3 hours).' },
      { icon: 'car', desc: 'NH21 from Jaipur (3 hours) or NH27 from Delhi via Bharatpur (6 hours).' },
    ],

    photoProse:
      'Ranthambore is arguably the best park in India for tiger photography. Morning light on the lakes creates clean reflections, and tigers regularly walk through open clearings near Padam Talao and Rajbagh. A 200-500mm zoom covers most situations. Videography requires a separate permit and additional fees.',
  },
  {
    status: 'draft',
    id: "saddle-peak",
    name: "Saddle Peak National Park",
    state: "Andaman & Nicobar Islands",
    region: "South India",
    coordinates: { lat: 13.16, lng: 92.98 },
  },
  {
    status: 'draft',
    id: "sanjay-gandhi",
    name: "Sanjay Gandhi National Park",
    state: "Maharashtra",
    region: "West India",
    coordinates: { lat: 19.23, lng: 72.91 },
  },
  {
    status: 'draft',
    id: "sanjay-mp",
    name: "Sanjay National Park",
    state: "Madhya Pradesh",
    region: "Central India",
    coordinates: { lat: 24.09, lng: 81.73 },
  },
  {
    status: 'draft',
    id: "sariska",
    name: "Sariska Tiger Reserve",
    state: "Rajasthan",
    region: "West India",
    coordinates: { lat: 27.32, lng: 76.4 },
  },
  {
    status: 'live',
    id: 'satpura',
    name: 'Satpura National Park',
    state: 'Madhya Pradesh',
    region: 'Central India',
    oneLiner: 'India\'s most underrated national park, and one of the few where you can walk in the core zone',
    description:
      'Rugged sandstone peaks, deep gorges, and dense sal-teak forests in the Satpura Range. One of the few tiger reserves in India that offers walking safaris, canoe safaris, and cycling in the core zone. Low tourist density, high biodiversity, and a landscape that feels genuinely wild. Connects with Bori and Pachmarhi sanctuaries to form a 2,133 km² contiguous protected area.',
    tags: ['wildlife', 'expedition', 'trekking'],
    heroImage: '/images/satpura.jpg',
    unescoStatus: false,
    permitRequired: false,

    established: 1981,
    areaKm2: 524,
    openMonths: [10, 6] as [number, number],
    elevationRange: [300, 1352] as [number, number],
    recommendedDays: 3,
    nearestCity: 'Pipariya',
    nearestCityDistKm: 55,
    coordinates: { lat: 22.495, lng: 78.231 },

    scores: {
      wildlife: { score: 7, desc: 'Good mammal diversity, tigers present but sightings take patience' },
      scenic: { score: 9, desc: 'Deep gorges, sandstone peaks, Denwa river, Churna plateau' },
      accessibility: { score: 5, desc: 'Bhopal airport 170 km, then 3.5 hours by road' },
      crowdLevel: { score: 8, desc: 'Very few visitors compared to Kanha or Bandhavgarh' },
      remoteness: { score: 7, desc: 'Madhai village is small, limited facilities outside lodges' },
      infrastructure: { score: 6, desc: 'Multiple safari types, good private lodges, limited government facilities' },
    },

    bestMonths: [11, 3] as [number, number],
    speciality: 'walking safari',
    specialityMonths: [11, 4] as [number, number],
    seasonProse:
      'November to March offers cool weather and excellent visibility. March to May is hotter but animals concentrate near the Denwa river and water holes. The walking safaris are available throughout the open season (October to June). Park closes July to September for monsoon. No weekly closure day.',

    trivia: [
      'Satpura is one of the very few tiger reserves in India where walking safaris are permitted in the core zone. Most Indian parks restrict visitors to vehicles.',
      'The park sits at the biogeographic crossroads of the Satpura Range, hosting 26 species typical of the Himalayas and 42 species typical of the Western Ghats/Nilgiris.',
      'Bori Wildlife Sanctuary, which adjoins Satpura, was India\'s first forest reserve, declared in 1861, predating any national park by 75 years.',
    ],

    climate: ['subtropical'],
    terrain: ['mountainous', 'dense-forest'],
    landscapeProse:
      'Deeply folded terrain with sandstone cliffs, narrow gorges, and flat plateaux. The Denwa river winds through the western edge, its backwaters creating a calm ribbon of water ideal for canoeing. Dense sal and teak forests cover the lower hills, transitioning to bamboo thickets and scrub in the ravines. The Churna plateau, nearly flat at 1,000 m, offers panoramic views. Waterfalls appear during and just after the monsoon. The landscape is more varied and vertical than any of the other MP parks.',
    landscapeImages: [
      '/images/satpura-landscape-1.jpg',
      '/images/satpura-landscape-2.jpg',
      '/images/satpura-landscape-3.jpg',
    ],

    flagshipFauna: 'Bengal Tiger',
    sightingProb: 'possible',
    birdingQuality: 'Exceptional',
    animalSpecies: 52,
    birdingSpecies: 300,
    wildlifeProse:
      'Around 46 tigers and over 100 leopards, but the rugged terrain and dense cover mean tiger sightings require patience. Sloth bears are a genuine highlight here, spotted more frequently than in most other MP parks. Indian giant squirrel is common in the canopy, a species not found in Kanha or Bandhavgarh. Gaur, sambar, chital, blackbuck, four-horned antelope, chinkara, and wild dog round out the mammal list. Eurasian otter and smooth-coated otter are occasionally seen along the Denwa. Birding is exceptional at 300 species, with Indian skimmer, Malabar pied hornbill, paradise flycatcher, and large winter flocks of bar-headed geese at the Tawa reservoir.',
    wildlifeCards: [
      { name: 'Sloth Bear', image: '/images/satpura-wildlife-sloth-bear.jpg' },
      { name: 'Bengal Tiger', image: '/images/satpura-wildlife-bengal-tiger.jpg' },
      { name: 'Indian Giant Squirrel', image: '/images/satpura-wildlife-indian-giant-squirrel.jpg' },
      { name: 'Indian Leopard', image: '/images/satpura-wildlife-indian-leopard.jpg' },
      { name: 'Indian Skimmer', image: '/images/satpura-wildlife-indian-skimmer.jpg' },
      { name: 'Gaur', image: '/images/satpura-wildlife-gaur.jpg' },
    ],

    safari: {
      types: ['jeep', 'walking', 'boat'],
      bookingRequirement: 'Yes',
      coreZoneAccess: 'Yes',
      density: 'Low',
      prose:
        'Four tourism zones: Madhai (core, main entry), Churna (core, best for tigers), Parsapani (buffer, night safaris), and Pachmarhi (buffer, viewpoints and trekking). Jeep safaris, walking safaris, canoe safaris on the Denwa backwaters, boat safaris, cycling, and night safaris are all available. Walking safaris in the core zone are guided by trained naturalists and armed guards. Book through the MP Forest Department portal (mponline.gov.in).',
      gates: [
        { name: 'Madhai Gate', qualifier: 'main entry, all safari types' },
        { name: 'Churna Gate', qualifier: 'core zone, best for tigers' },
        { name: 'Parsapani Gate', qualifier: 'buffer zone, night safaris' },
      ],
    },

    networkQuality: 'Poor',
    stayQuality: 'Mid-range',
    entryFeeINR: 500,
    entryFeeForeigner: 1000,
    practicalProse:
      'Carry proper trekking shoes if you plan walking safaris. Mornings in December and January can be cold in the gorges. Leeches appear in early season (October to November). Cash is essential as Madhai has no ATMs. The private lodges (Denwa Backwater Escape, Reni Pani) are excellent but pricey; forest rest houses offer budget options.',

    connectivityProse:
      '55 km from Pipariya, 170 km from Bhopal. Main entry at Madhai village on the Pipariya-Bhopal road.',
    transport: [
      { icon: 'plane', desc: 'Raja Bhoj Airport (BHO), Bhopal, 170 km. Flights from Delhi, Mumbai, Hyderabad. Taxi to Madhai takes 3.5 hours.' },
      { icon: 'train', desc: 'Pipariya station, 55 km. On the Delhi-Chennai main line via Itarsi. Itarsi Junction (70 km) has wider connectivity.' },
      { icon: 'bus', desc: 'State buses from Bhopal to Pipariya or Pachmarhi. Then taxi to Madhai gate.' },
      { icon: 'car', desc: 'From Bhopal via NH69 to Itarsi, then state highway to Madhai (3.5 hours). From Nagpur via NH44 (5 hours).' },
    ],

    photoProse:
      'The Denwa backwaters at dawn during a canoe safari offer unique eye-level bird photography unavailable at any other Indian park. Walking safaris give ground-level perspective on forest textures and small life. A 200-400mm lens handles most situations. For Indian skimmer and other waterbirds at Tawa, a 500-600mm lens is worth having. The gorges and sandstone formations make strong landscape subjects.',
  },
  {
    status: 'draft',
    id: "shiroi",
    name: "Shiroi National Park",
    state: "Manipur",
    region: "Northeast India",
    coordinates: { lat: 25.15, lng: 94.47 },
  },
  {
    status: 'live',
    id: 'silent-valley',
    name: 'Silent Valley National Park',
    state: 'Kerala',
    region: 'South India',
    oneLiner: "One of India's last undisturbed tropical rainforests, saved by a protest movement",
    description:
      'Undisturbed tropical evergreen rainforest in the Nilgiri Hills, named for the eerie absence of cicada calls. Saved from a hydroelectric dam by India\'s fiercest environmental campaign in the 1970s. Core of the Nilgiri Biosphere Reserve. Holds the largest population of lion-tailed macaques, one of the most endangered primates on Earth.',
    tags: ['wildlife', 'birding', 'expedition'],
    heroImage: '/images/silent-valley.jpg',
    unescoStatus: true,
    permitRequired: false,

    established: 1984,
    areaKm2: 90,
    openMonths: [1, 12] as [number, number],
    elevationRange: [900, 2383] as [number, number],
    recommendedDays: 1,
    nearestCity: 'Mannarkkad',
    nearestCityDistKm: 40,
    coordinates: { lat: 11.133, lng: 76.467 },

    scores: {
      wildlife: { score: 6, desc: 'Lion-tailed macaques reliable, larger mammals elusive' },
      scenic: { score: 8, desc: 'Dense rainforest canopy, mist, Kunthipuzha river valley' },
      accessibility: { score: 5, desc: 'Coimbatore airport 120 km, then winding hill roads' },
      crowdLevel: { score: 7, desc: 'Visitor numbers actively restricted by forest department' },
      remoteness: { score: 6, desc: 'Mukkali is a small settlement, Mannarkkad 40 km' },
      infrastructure: { score: 5, desc: 'Guided jeep trips, nature trail, basic visitor centre' },
    },

    bestMonths: [12, 4] as [number, number],
    speciality: 'lion-tailed macaque',
    specialityMonths: [12, 3] as [number, number],
    seasonProse:
      'December to April is best. Post-monsoon forest is lush, humidity is manageable, and macaque troops are active and visible. Monsoon (June to September) brings 3,000-4,500 mm of rain and difficult trail conditions. Open year-round but entry closes at 1 PM daily.',

    trivia: [
      'Named for the near-absence of cicada noise. Theories range from altitude to dense canopy blocking wind vibrations.',
      "The 'Save Silent Valley' campaign (1973-1985) stopped a hydroelectric dam and became a landmark in Indian environmental history.",
      'Contains 1,000 flowering plant species, 108 orchid species, and 500 butterfly and moth species in just 90 km².',
    ],

    climate: ['tropical-wet'],
    terrain: ['mountainous', 'dense-forest'],
    landscapeProse:
      'Unbroken tropical evergreen canopy from 900 m up to the Anginda peak at 2,383 m. Steep escarpments and narrow ridges covered in moss, ferns, and epiphytes. The Kunthipuzha river runs through the valley, clear and cold. In monsoon, waterfalls appear on every rock face. Mist sits in the valleys most mornings and burns off by noon. The forest floor is dark even at midday.',
    landscapeImages: [
      '/images/silent-valley-landscape-1.jpg',
      '/images/silent-valley-landscape-2.jpg',
      '/images/silent-valley-landscape-3.jpg',
    ],

    flagshipFauna: 'Lion-tailed Macaque',
    sightingProb: 'likely',
    birdingQuality: 'Good',
    animalSpecies: 34,
    birdingSpecies: 211,
    wildlifeProse:
      'Lion-tailed macaque troops swing through the mid-canopy of Cullenia and Palaquium trees, their silver manes visible against dark fur. Largest population of this species anywhere. Nilgiri langur, Malabar giant squirrel, and Nilgiri marten are regularly spotted. Elephants, gaur, tigers, and leopards are present but rarely seen in the dense cover. Birding is good at 211 species, with great Indian hornbill, Ceylon frogmouth, Nilgiri wood pigeon, and Malabar parakeet among the highlights.',
    wildlifeCards: [
      { name: 'Lion-tailed Macaque', image: '/images/silent-valley-wildlife-lion-tailed-macaque.jpg' },
      { name: 'Nilgiri Langur', image: '/images/silent-valley-wildlife-nilgiri-langur.jpg' },
      { name: 'Malabar Giant Squirrel', image: '/images/silent-valley-wildlife-malabar-giant-squirrel.jpg' },
      { name: 'Great Indian Hornbill', image: '/images/silent-valley-wildlife-great-indian-hornbill.jpg' },
      { name: 'Nilgiri Marten', image: '/images/silent-valley-wildlife-nilgiri-marten.jpg' },
    ],

    safari: {
      types: ['jeep', 'walking'],
      bookingRequirement: 'Yes',
      coreZoneAccess: 'Yes',
      density: 'Low',
      prose:
        'Jeep safari from Mukkali gate to Sairandhri visitor centre, 22 km inside the park. A 1 km guided nature trail from Sairandhri to the Kunthipuzha river. Entry 8 AM to 1 PM, exit by 5 PM. Forest guard accompanies every group. Permission from the Mukkali or Mannarkkad wildlife office.',
      gates: [
        { name: 'Mukkali', qualifier: 'sole entry point' },
      ],
    },

    networkQuality: 'None',
    stayQuality: 'Budget',
    entryFeeINR: 50,
    entryFeeForeigner: 50,
    practicalProse:
      'Carry rain gear year-round. Leeches are common in and after monsoon. No food inside the park. Cash only at Mukkali. Sturdy shoes for the nature trail. Photography in dense canopy demands fast glass.',

    connectivityProse:
      '40 km from Mannarkkad, 55 km from Palakkad. Sole entry at Mukkali gate.',
    transport: [
      { icon: 'plane', desc: 'Coimbatore Airport (CJB), 120 km. Taxi via Anakkatty to Mukkali, 3 hours.' },
      { icon: 'train', desc: 'Palakkad Junction, 55 km. Well-connected to Chennai, Kochi, Delhi. Taxi to Mukkali.' },
      { icon: 'bus', desc: 'KSRTC buses from Palakkad to Mannarkkad (1 hour). Local bus to Mukkali.' },
      { icon: 'car', desc: 'From Coimbatore via Anakkatty (90 km, 2.5 hours). From Palakkad via Mannarkkad (55 km).' },
    ],

    photoProse:
      'Dense canopy means low light. Fast lenses (f/2.8) and high ISO are essential. Lion-tailed macaques in the mid-canopy need a 300-400mm lens aimed upward. The Kunthipuzha river is the best landscape subject.',
  },
  {
    status: 'draft',
    id: "simbalbara",
    name: "Simbalbara National Park",
    state: "Himachal Pradesh",
    region: "North India",
    coordinates: { lat: 30.51, lng: 77.43 },
  },
  {
    status: 'draft',
    id: "simlipal",
    name: "Simlipal National Park",
    state: "Odisha",
    region: "East India",
    coordinates: { lat: 21.83, lng: 86.37 },
  },
  {
    status: 'draft',
    id: "singalila",
    name: "Singalila National Park",
    state: "West Bengal",
    region: "East India",
    coordinates: { lat: 27.1, lng: 88 },
  },
  {
    status: 'draft',
    id: "south-button-island",
    name: "South Button Island National Park",
    state: "Andaman & Nicobar Islands",
    region: "South India",
    coordinates: { lat: 12.27, lng: 93.07 },
  },
  {
    status: 'draft',
    id: "sri-venkateswara",
    name: "Sri Venkateswara National Park",
    state: "Andhra Pradesh",
    region: "South India",
    coordinates: { lat: 13.66, lng: 79.35 },
  },
  {
    status: 'draft',
    id: "sultanpur",
    name: "Sultanpur National Park",
    state: "Haryana",
    region: "North India",
    coordinates: { lat: 28.47, lng: 76.89 },
  },
  {
    status: 'live',
    id: 'sundarbans',
    name: 'Sundarbans National Park',
    state: 'West Bengal',
    region: 'East India',
    oneLiner: 'Tidal mangrove delta where tigers swim between islands',
    description:
      "The world's largest mangrove forest, spread across 54 islands in the Ganges-Brahmaputra-Meghna delta. About 100 Royal Bengal tigers have adapted to this amphibious landscape, swimming between islands and hunting fish, crabs, and deer. No jeeps here. Everything happens by boat, through a maze of tidal creeks and mudflats that reshape with every tide cycle.",
    tags: ['wildlife', 'birding', 'marine'],
    heroImage: '/images/sundarbans.jpg',
    unescoStatus: true,
    permitRequired: true,
    permitDescription:
      'Permits are arranged through tour operators or the Sundarban Tiger Reserve office at Canning. Most visitors get them bundled with their boat booking.',

    established: 1984,
    areaKm2: 1330,
    openMonths: [9, 3] as [number, number],
    elevationRange: [0, 8] as [number, number],
    recommendedDays: 3,
    nearestCity: 'Kolkata',
    nearestCityDistKm: 100,
    coordinates: { lat: 21.838, lng: 88.885 },

    scores: {
      wildlife: { score: 7, desc: 'Tigers present but rarely seen; crocodiles and birds are reliable' },
      scenic: { score: 7, desc: 'Eerie, beautiful mangrove waterways unlike any other Indian park' },
      accessibility: { score: 4, desc: '3 hours by road from Kolkata, then boat-only access' },
      crowdLevel: { score: 6, desc: 'Moderate visitor numbers, spread across vast waterways' },
      remoteness: { score: 7, desc: 'Deep delta, no roads inside, limited connectivity' },
      infrastructure: { score: 5, desc: 'Basic lodges, watchtower network, limited English-speaking guides' },
    },

    bestMonths: [11, 2] as [number, number],
    speciality: 'mangrove tigers',
    specialityMonths: [12, 2] as [number, number],
    seasonProse:
      'November to February is ideal. Cool, dry weather, migratory birds arrive in huge numbers, and receding water levels push wildlife to visible banks and mudflats. March to May is hot and humid. The park closes informally during peak monsoon (June to August) when cyclone risk is high and waterways become dangerous.',

    trivia: [
      "Sundarbans tigers are the world's only mangrove-adapted tiger population. They swim between islands, drink saline water, and eat fish and crabs alongside their usual prey.",
      'Human-tiger conflict here is among the worst anywhere. Honey collectors and fishermen entering the forest historically lost 40 to 50 people per year to tiger attacks.',
      "The name comes from Sundari (Heritiera littoralis), the dominant mangrove species, not from the Bengali word for 'beautiful'.",
    ],

    climate: ['mangrove', 'tropical-wet'],
    terrain: ['flat', 'wetland'],
    landscapeProse:
      'Sea-level delta land. No hills, no dry ground. Dense mangrove canopy lines every creek and channel, roots arching into brackish water. Mudflats exposed at low tide stretch for hundreds of metres, covered with crab burrows and tracked by wading birds. At high tide the same flats disappear entirely, and the forest appears to float on the water. The landscape changes every six hours with the tides.',
    landscapeImages: [
      '/images/sundarbans-landscape-1.jpg',
      '/images/sundarbans-landscape-2.jpg',
      '/images/sundarbans-landscape-3.jpg',
    ],

    flagshipFauna: 'Royal Bengal Tiger',
    sightingProb: 'rare',
    birdingQuality: 'Rich',
    animalSpecies: 42,
    birdingSpecies: 300,
    wildlifeProse:
      "About 100 tigers on the Indian side, but spotting one from a boat is genuinely rare. Dense mangrove cover and the animals' semi-aquatic habits make sightings a matter of luck, not skill. What you will see: saltwater crocodiles basking on mudbanks, spotted deer herds on every island edge, water monitors, Gangetic and Irrawaddy dolphins in the channels, and fishing cats at dusk. Birding is strong, especially for raptors (white-bellied sea eagle, osprey, Brahminy kite) and waders (whimbrel, curlew, sandpipers). Winter brings large migratory flocks.",
    wildlifeCards: [
      { name: 'Royal Bengal Tiger', image: '/images/sundarbans-wildlife-royal-bengal-tiger.jpg' },
      { name: 'Saltwater Crocodile', image: '/images/sundarbans-wildlife-saltwater-crocodile.jpg' },
      { name: 'Fishing Cat', image: '/images/sundarbans-wildlife-fishing-cat.jpg' },
      { name: 'Gangetic Dolphin', image: '/images/sundarbans-wildlife-gangetic-dolphin.jpg' },
      { name: 'Spotted Deer', image: '/images/sundarbans-wildlife-spotted-deer.jpg' },
      { name: 'White-bellied Sea Eagle', image: '/images/sundarbans-wildlife-white-bellied-sea-eagle.jpg' },
    ],

    safari: {
      types: ['boat'],
      bookingRequirement: 'Yes',
      coreZoneAccess: 'Buffer zone only',
      density: 'Low',
      prose:
        'All exploration is by motorized boat through tidal creeks. You cannot step off the boat into the forest except at designated watchtower platforms. Day trips from Sajnekhali cover 2 to 3 watchtowers. Multi-day trips on houseboats or with lodge stays go deeper, reaching Sudhanyakhali, Dobanki, and Netidhopani. Permits are arranged through tour operators or the Sundarban Tiger Reserve office at Canning.',
      gates: [
        { name: 'Godkhali', qualifier: 'main jetty, road access from Kolkata' },
        { name: 'Sonakhali' },
        { name: 'Sajnekhali', qualifier: 'main watchtower and permit checkpoint' },
      ],
    },

    networkQuality: 'Poor',
    stayQuality: 'Budget',
    entryFeeINR: 100,
    entryFeeForeigner: 200,
    practicalProse:
      'Mosquito repellent is essential. Carry sunscreen and a hat for open-deck boat rides. Cash only inside the delta. Most guides speak Bengali with limited Hindi or English, so book through a Kolkata-based operator if language is a concern. Overnight houseboat stays are atmospheric but basic.',

    connectivityProse:
      '100 km from Kolkata by road to Godkhali jetty, then boat into the delta. No roads inside the park.',
    transport: [
      { icon: 'plane', desc: 'Netaji Subhas Chandra Bose International Airport (CCU), Kolkata. 100 km to Godkhali by road, 3 hours.' },
      { icon: 'train', desc: 'Canning station via Sealdah (Kolkata), 1.5 hours by local train. Then shared transport to Godkhali, 1 hour.' },
      { icon: 'bus', desc: 'Buses from Kolkata Esplanade to Sonakhali or Godkhali, 3-4 hours.' },
      { icon: 'car', desc: 'Drive from Kolkata to Godkhali via Baruipur-Canning road (3 hours). Parking available at the jetty.' },
    ],

    photoProse:
      'Dawn on the creeks, with mist hanging over still water and mangrove reflections, is the signature image. A 100-400mm lens covers most situations. Crocodiles and sea eagles are the most photogenic reliable subjects. If a tiger does appear on a creek bank, it will be at distance through dense foliage, so reach matters.',
  },
  {
    status: 'draft',
    id: "tadoba-andhari",
    name: "Tadoba Andhari National Park",
    state: "Maharashtra",
    region: "West India",
    coordinates: { lat: 20.25, lng: 79.35 },
  },
  {
    status: 'live',
    id: 'valley-of-flowers',
    name: 'Valley of Flowers National Park',
    state: 'Uttarakhand',
    region: 'North India',
    oneLiner: 'A Himalayan alpine meadow carpeted with 600+ wildflower species every monsoon',
    description:
      'A glacial valley at 3,350 to 3,658 metres in the Garhwal Himalayas, discovered by British mountaineer Frank Smythe in 1931 when he lost his way returning from Mt. Kamet. For about four months each year, the valley floor erupts into a dense carpet of alpine flowers, from blue poppies and cobra lilies to Brahma Kamal and primulas. Part of the Nanda Devi Biosphere Reserve and a UNESCO World Heritage Site alongside Nanda Devi National Park.',
    tags: ['trekking', 'photography'],
    heroImage: '/images/valley-of-flowers.jpg',
    unescoStatus: true,
    permitRequired: true,

    established: 1982,
    areaKm2: 88,
    openMonths: [6, 10] as [number, number],
    elevationRange: [3200, 6675] as [number, number],
    recommendedDays: 4,
    nearestCity: 'Joshimath',
    nearestCityDistKm: 25,
    coordinates: { lat: 30.73, lng: 79.618 },

    scores: {
      wildlife: { score: 3, desc: 'Mammals exist but are rarely seen; this is a flora park' },
      scenic: { score: 10, desc: 'Arguably the most visually stunning national park in India' },
      accessibility: { score: 2, desc: '17 km trek from Govindghat, no road access to the valley' },
      crowdLevel: { score: 5, desc: 'Busy in July-August peak bloom, quiet in June and October' },
      remoteness: { score: 8, desc: 'High Himalaya, trek-only access, basic facilities at Ghangaria' },
      infrastructure: { score: 4, desc: 'Guesthouses and dhabas at Ghangaria, nothing inside the valley' },
    },

    bestMonths: [7, 8] as [number, number],
    speciality: 'alpine wildflowers',
    specialityMonths: [7, 9] as [number, number],
    seasonProse:
      'July and August are peak bloom. The entire valley floor turns into a mosaic of colour, with hundreds of species flowering simultaneously. June is early season with patchy snow and fewer flowers. September brings late bloomers like Brahma Kamal and autumn composites. By late October, snowfall shuts the valley until the following June.',

    trivia: [
      "Frank Smythe stumbled upon the valley in 1931 and titled his book about it 'The Valley of Flowers'. The name stuck.",
      'Over 600 flowering plant species are recorded in just 88 km², one of the highest alpine flora densities anywhere in the Himalayas.',
      'Camping and overnight stays inside the valley are strictly prohibited. All visitors must return to Ghangaria by 5 PM.',
    ],

    climate: ['alpine'],
    terrain: ['mountainous', 'plateau'],
    landscapeProse:
      'A hanging glacial valley, 5 km long and 2 km wide, cradled between snow-covered ridges. The Pushpavati river runs through the centre, fed by seasonal waterfalls that cascade off the surrounding cliffs. Above the flower meadows, the terrain rises steeply through moraine and scree to peaks like Gauri Parbat (6,708 m) and Rataban (6,126 m). On clear mornings, the entire valley is framed by snow and rock with not a single man-made structure in sight.',
    landscapeImages: [
      '/images/valley-of-flowers-landscape-1.jpg',
      '/images/valley-of-flowers-landscape-2.jpg',
      '/images/valley-of-flowers-landscape-3.jpg',
    ],

    flagshipFauna: 'Himalayan Blue Poppy',
    sightingProb: 'near-guaranteed',
    birdingQuality: 'Good',
    animalSpecies: 13,
    birdingSpecies: 114,
    wildlifeProse:
      'This is a flora park. Wildlife exists but the dense flower meadows and high altitude mean sightings are uncommon. Himalayan tahr are the most frequently seen mammals. Musk deer, serow, bharal (blue sheep), and Asiatic black bear are present but elusive. Snow leopard territory extends into the higher reaches but sightings are essentially zero for trekkers. Birding is moderate for a Himalayan park: lammergeier, Himalayan vulture, Himalayan monal, koklass pheasant, yellow-billed and red-billed chough, and snow pigeon are regularly spotted along the trek route.',
    wildlifeCards: [
      { name: 'Himalayan Blue Poppy', image: '/images/valley-of-flowers-wildlife-blue-poppy.jpg' },
      { name: 'Brahma Kamal', image: '/images/valley-of-flowers-wildlife-brahma-kamal.jpg' },
      { name: 'Himalayan Monal', image: '/images/valley-of-flowers-wildlife-himalayan-monal.jpg' },
      { name: 'Himalayan Tahr', image: '/images/valley-of-flowers-wildlife-himalayan-tahr.jpg' },
      { name: 'Lammergeier', image: '/images/valley-of-flowers-wildlife-lammergeier.jpg' },
    ],

    safari: {
      types: ['walking'],
      bookingRequirement: 'Yes',
      coreZoneAccess: 'Yes',
      density: 'Moderate',
      prose:
        'No vehicles of any kind. You trek 17 km from Govindghat (via Pulna) to Ghangaria over one day, then 5 km from Ghangaria to the valley entrance the next morning. Inside the valley, a marked trail loops through the meadows. Entry permit checked at a forest checkpoint 1.5 km from Ghangaria. Must exit by 5 PM. No camping, no fires, no picking flowers.',
      gates: [
        { name: 'Ghangaria Checkpoint', qualifier: 'sole entry, 5 km from valley' },
      ],
    },

    networkQuality: 'None',
    stayQuality: 'Budget',
    entryFeeINR: 150,
    entryFeeForeigner: 600,
    practicalProse:
      'Carry rain gear. The valley is open only during monsoon, so rain is a certainty. Good trekking shoes with grip are essential as the trail gets muddy and slippery. No ATMs or reliable shops at Ghangaria. Carry enough cash from Joshimath. Ponies and porters are available from Govindghat for those who cannot trek the full distance.',

    connectivityProse:
      '25 km by road from Joshimath to Govindghat, then a 17 km trek to Ghangaria base camp. No road access to the valley.',
    transport: [
      { icon: 'plane', desc: 'Jolly Grant Airport (DED), Dehradun, 280 km from Govindghat. Taxi via Rishikesh and Joshimath, 10-12 hours.' },
      { icon: 'train', desc: 'Rishikesh or Haridwar, 273 km from Govindghat. Then shared taxi or bus to Joshimath, 8-9 hours.' },
      { icon: 'bus', desc: 'GMOU buses from Rishikesh and Haridwar to Joshimath. Local transport from Joshimath to Govindghat.' },
      { icon: 'car', desc: 'NH58 from Delhi to Joshimath via Rishikesh, Devprayag, Chamoli (12-14 hours). Road condition variable post-Chamoli.' },
    ],

    photoProse:
      'Wide-angle lenses (16-35mm) work best for the carpet-of-flowers landscape. A macro lens is worth the weight for individual flower portraits. Morning light between 8 and 10 AM is ideal before clouds build. The Pushpavati river with flowers in foreground and snow peaks behind is the classic composition. Rain can arrive by noon, so start early.',
  },
  {
    status: 'draft',
    id: "valmiki",
    name: "Valmiki National Park",
    state: "Bihar",
    region: "North India",
    coordinates: { lat: 27.33, lng: 83.95 },
  },
  {
    status: 'draft',
    id: "van-vihar",
    name: "Van Vihar National Park",
    state: "Madhya Pradesh",
    region: "Central India",
    coordinates: { lat: 23.23, lng: 77.35 },
  },
  {
    status: 'draft',
    id: "vansda",
    name: "Vansda National Park",
    state: "Gujarat",
    region: "West India",
    coordinates: { lat: 20.75, lng: 73.52 },
  },
  {
    status: 'live',
    id: 'hemis',
    name: 'Hemis National Park',
    state: 'Ladakh',
    region: 'North India',
    oneLiner: 'The best place on Earth to see a snow leopard in the wild',
    description:
      "South Asia's largest national park, 4,400 km² of high-altitude cold desert along the Zanskar Range. Named after the 400-year-old Hemis Monastery. A 2025 study recorded a snow leopard density of 2.07 per 100 km² here, the highest anywhere on Earth. Six villages and roughly 1,600 people live within its boundaries, coexisting with wildlife at extreme altitude. India's only national park lying entirely north of the Great Himalayan range.",
    tags: ['wildlife', 'trekking', 'expedition'],
    heroImage: '/images/hemis.jpg',
    unescoStatus: false,
    permitRequired: true,
    permitDescription:
      'Permits required from the Wildlife Office in Leh. Winter visits also require experienced guides.',

    established: 1981,
    areaKm2: 4400,
    openMonths: [5, 10] as [number, number],
    elevationRange: [3000, 6000] as [number, number],
    recommendedDays: 4,
    nearestCity: 'Leh',
    nearestCityDistKm: 50,
    coordinates: { lat: 33.983, lng: 77.433 },

    scores: {
      wildlife: {
        score: 7,
        desc: 'Highest snow leopard density on Earth, but sightings need winter trips and luck',
      },
      scenic: {
        score: 10,
        desc: 'Vast cold desert valleys, U-shaped glacial gorges, 6,000 m peaks',
      },
      accessibility: {
        score: 3,
        desc: 'Fly to Leh, then hours of driving plus multi-day treks',
      },
      crowdLevel: {
        score: 8,
        desc: 'Very few visitors, especially in winter tracking season',
      },
      remoteness: {
        score: 9,
        desc: 'High-altitude cold desert with no roads inside the park',
      },
      infrastructure: {
        score: 3,
        desc: 'Village homestays, no lodges, no vehicles inside the park',
      },
    },

    bestMonths: [7, 9] as [number, number],
    speciality: 'snow leopard',
    specialityMonths: [12, 3] as [number, number],
    seasonProse:
      'Two distinct seasons. May to October is open for trekking, with July to September offering the warmest weather and clearest trails. December to March is snow leopard season, when the cats descend into lower valleys following bharal herds. Winter visits require special permits, experienced guides, and tolerance for sub-zero temperatures. The Markha Valley trek is the most popular summer route.',

    trivia: [
      'A 2025 study (Raina et al., PLoS ONE) documented 2.07 snow leopards per 100 km² in Hemis, the highest density ever recorded for the species anywhere.',
      "Hemis is India's only national park entirely north of the Great Himalayan range. Ecologically, it is closer to Central Asia than to the rest of India.",
      'The Hemis Monastery hosts the annual Hemis Tsechu festival in June or July, featuring masked dances and the unfurling of a giant thangka every 12 years.',
    ],

    climate: ['cold-desert'],
    terrain: ['mountainous', 'plateau'],
    landscapeProse:
      "Bare brown ridges and U-shaped glacial valleys with almost no tree cover. Vegetation is sparse: juniper, dry birch, and alpine scrub at lower elevations, giving way to barren rock and scree above 4,500 m. The Indus river runs along the northern boundary. Rainfall is minimal, under 100 mm per year, as the park sits in the rain shadow of the Himalayas. In winter, snow covers the valleys and the landscape turns monochrome. The scale is immense and the silence is absolute.",
    landscapeImages: [
      '/images/hemis-landscape-1.jpg',
      '/images/hemis-landscape-2.jpg',
      '/images/hemis-landscape-3.jpg',
    ],

    flagshipFauna: 'Snow Leopard',
    sightingProb: 'rare',
    birdingQuality: 'Mediocre',
    animalSpecies: 16,
    birdingSpecies: 73,
    wildlifeProse:
      "Around 91 snow leopards estimated within the park (2025 study), with Rumbak valley being the most reliable sighting area. Winter tracking trips with experienced guides and spotting scopes offer roughly 50 to 60% success rates over a week-long stay. Bharal (blue sheep) herds of 30 to 50 are common on open slopes and are the primary prey species. Shapu (Ladakhi urial) survives here and almost nowhere else. Tibetan wolf, Eurasian brown bear, Asiatic ibex, red fox, Himalayan marmot, and Pallas's cat complete the mammal list. Birding is limited to 73 species but includes golden eagle, lammergeier, Himalayan griffon, Tibetan snowcock, and robin accentor.",
    wildlifeCards: [
      { name: 'Snow Leopard', image: '/images/hemis-wildlife-snow-leopard.jpg' },
      { name: 'Bharal', image: '/images/hemis-wildlife-bharal.jpg' },
      { name: 'Shapu', image: '/images/hemis-wildlife-shapu.jpg' },
      { name: 'Tibetan Wolf', image: '/images/hemis-wildlife-tibetan-wolf.jpg' },
      { name: 'Golden Eagle', image: '/images/hemis-wildlife-golden-eagle.jpg' },
      { name: 'Himalayan Marmot', image: '/images/hemis-wildlife-himalayan-marmot.jpg' },
    ],

    safari: {
      types: ['walking'],
      bookingRequirement: 'Yes',
      coreZoneAccess: 'Yes',
      density: 'Low',
      prose:
        'No vehicles allowed inside the park. All exploration is on foot, with multi-day treks between valleys. Summer treks follow the Markha Valley route (4 to 8 days). Winter snow leopard tracking is based out of Rumbak or Ulley villages, with daily hikes to scanning points. Permits required from the Wildlife Office in Leh. Checkposts at Skiu, Zingchen, and Shang Sumdo regulate entry.',
      gates: [
        { name: 'Zingchen', qualifier: 'Rumbak valley access' },
        { name: 'Skiu', qualifier: 'Markha Valley trek start' },
        { name: 'Shang Sumdo' },
      ],
    },

    networkQuality: 'None',
    stayQuality: 'Homestays',
    entryFeeINR: 20,
    entryFeeForeigner: 100,
    practicalProse:
      'Acclimatize in Leh for at least 2 days before entering the park. AMS (acute mountain sickness) is a real risk at these altitudes. Carry all supplies, including warm sleeping bags, layered clothing, and high-calorie food. Cash only. No shops, no ATMs, no phone signal inside the park. Winter trips require down jackets rated to minus 30°C.',

    connectivityProse:
      '50 km from Leh. Kushok Bakula Rimpochee Airport (IXL) in Leh has daily flights from Delhi. No roads inside the park.',
    transport: [
      {
        icon: 'plane',
        desc: 'Kushok Bakula Rimpochee Airport (IXL), Leh. Daily flights from Delhi. Airport is 5 km from Leh, 50 km from park boundary.',
      },
      {
        icon: 'train',
        desc: 'No railway access. Nearest railhead is Jammu Tawi (700 km) or Chandigarh (750 km), then 2-day road journey.',
      },
      {
        icon: 'bus',
        desc: 'HPTDC and JKSRTC buses run Manali to Leh (June to September only, 2 days) via Rohtang and Tanglang La.',
      },
      {
        icon: 'car',
        desc: 'Leh to Zingchen trailhead by taxi (1.5 hours). Leh to Skiu via road only possible in summer.',
      },
    ],

    photoProse:
      'Winter snow leopard photography demands patience, a 500-600mm lens, and a stable tripod or beanbag for long-distance scanning. Animals are typically spotted at 200 to 800 metres across a valley. Summer treks offer stunning wide-angle landscape opportunities. The Rumbak valley at dawn, with bharal silhouettes on a ridgeline and frosted peaks behind, is the classic Hemis image.',
  },
];
