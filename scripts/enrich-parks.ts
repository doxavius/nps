/**
 * Park Data Enrichment Script
 *
 * Run with: npx tsx scripts/enrich-parks.ts
 *
 * Requires: ANTHROPIC_API_KEY in .env.local or environment
 *
 * Pass 1: Generates wildlifeText, landscapeText, bestSeasonText for ALL parks
 * Pass 2: Generates howToReach, trivia, elevationRange, entry fees for TOP parks (web search)
 */

import * as fs from 'fs';
import * as path from 'path';

// ─── CONFIG ────────────────────────────────────────────────────────

const API_KEY = process.env.ANTHROPIC_API_KEY || '';
const API_URL = 'https://api.anthropic.com/v1/messages';
const MODEL = 'claude-sonnet-4-20250514';
const CONCURRENT_LIMIT = 2; // stay well within rate limits
const DELAY_MS = 8000; // delay between requests

// Top parks that get the full Pass 2 treatment (howToReach, trivia, elevation, fees)
const TOP_PARK_IDS = new Set([
  'jim-corbett', 'kaziranga', 'ranthambore', 'gir', 'kanha', 'bandhavgarh',
  'periyar', 'sundarbans', 'valley-of-flowers', 'nanda-devi', 'bandipur',
  'nagarhole', 'pench-mp', 'satpura', 'kuno', 'tadoba-andhari',
  'keoladeo', 'dudhwa', 'simlipal', 'great-himalayan', 'pin-valley',
  'namdapha', 'khangchendzonga', 'eravikulam', 'silent-valley',
  'sanjay-gandhi', 'desert', 'dachigam', 'manas', 'bhitarkanika',
]);

// ─── SYSTEM PROMPT ─────────────────────────────────────────────────

const VOICE_RULES = `You are writing content for an Indian national parks directory website. Follow these voice rules strictly:

1. Write like a knowledgeable friend who has actually been there, not a tourism board. Be direct and specific.
2. Use specific facts: numbers, species names, elevations, river names. Vague superlatives are banned.
3. Mix short punchy sentences with longer ones. Not everything needs to be a compound sentence.
4. Be honest about limitations. If a park is hard to reach, say so. If it is basically a zoo, say that. If it is closed due to Naxal activity, do not pretend otherwise.
5. NEVER use em dashes (—). Use commas, full stops, or "and" instead.
6. NEVER use these tourism cliches: "paradise," "haven," "treasure trove," "nature lovers," "flora and fauna," "pristine beauty," "breathtaking," "must-visit," "a treat for," "nature enthusiasts."
7. Mild editorial voice is fine. "One of the most underrated parks in India" is okay. But do not oversell.
8. Do not start any field with "The park" or "This park." Vary your openings.
9. Keep each text field to 2-4 sentences. Concise, not exhaustive.`;

const HEMIS_EXAMPLES = `
Here are examples from Hemis National Park showing the exact tone and format:

wildlifeText: "Cold desert fauna. The snow leopard is the headliner, but the supporting cast is strong: bharal (blue sheep), Tibetan wolf, Eurasian brown bear, Asiatic ibex, red fox, Himalayan marmot, and the shapu (Ladakhi urial), found nowhere else in India. 16 mammal species, 73 recorded bird species, golden eagles and lammergeiers overhead. Best spotted on early-morning hikes through the Rumbak and Markha catchments."

landscapeText: "High-altitude cold desert and alpine steppe. Juniper scrub, birch, and willow cling to the river courses. Above that: barren ridges, glacial valleys, the Indus gorge, and snowbound peaks past 6,000 m. Sits in the rain shadow of the Himalayas, so it barely rains. Over 90% of precipitation falls as snow."

bestSeasonText: "May-Oct for trekking. Dec-Mar for snow leopards. The park opens May to October for trekking and general visits. But if you're here for snow leopards, come in winter (Dec to Mar), when they descend into the lower valleys and are actually spottable. Winter visits require special permits from the Government Wildlife Office in Leh. Entry checkpoints at Skiu, Zingchen, and Shang Sumdo. Wildlife fee: ₹20 (Indians), ₹100 (foreigners)."`;

// ─── PASS 1: PROSE FIELDS ──────────────────────────────────────────

function buildPass1Prompt(park: any): string {
  return `Generate three prose fields for this Indian national park. Return ONLY valid JSON, no markdown backticks, no preamble.

Park data:
- Name: ${park.name}
- State: ${park.state}
- Region: ${park.region}
- Description: ${park.description}
- Biomes: ${park.biomes.join(', ')}
- Key Wildlife: ${park.keyWildlife.join(', ')}
- Landscapes: ${park.landscapes.join(', ')}
- Open months: ${park.openMonths[0]} to ${park.openMonths[1]}
- Best months: ${park.bestMonths[0]} to ${park.bestMonths[1]}
- Season notes: ${park.seasonNotes || 'none'}
- Area: ${park.areaKm2} km2
- Established: ${park.established}

Return JSON with exactly these three fields:
{
  "wildlifeText": "2-4 sentences about the wildlife. Start with a characterful opening, not 'The park has...' Mention specific species from the list above, their significance, and what makes the wildlife here distinctive.",
  "landscapeText": "2-4 sentences about the terrain and landscape. Be specific about what you physically see. Mention rivers, elevation, vegetation types, geological features.",
  "bestSeasonText": "2-4 sentences about when to visit and why. Include which months, what the weather is like, and any practical notes (closures, permits, best activities per season)."
}`;
}

// ─── PASS 2: FACTUAL FIELDS (WITH WEB SEARCH) ──────────────────────

function buildPass2Prompt(park: any): string {
  return `Research and generate factual fields for this Indian national park. Use web search to verify facts. Return ONLY valid JSON, no markdown backticks, no preamble.

Park: ${park.name}, ${park.state}
Coordinates: ${park.coordinates.lat}, ${park.coordinates.lng}
Area: ${park.areaKm2} km2

Return JSON with these fields (use null for any field you cannot verify):
{
  "elevationRange": [minMetres, maxMetres],
  "entryFeeINR": number or null,
  "entryFeeForeigner": number or null,
  "trivia": ["fact 1", "fact 2", "fact 3"],
  "howToReach": {
    "overview": "1-2 sentences about general access",
    "transport": [
      { "mode": "By Plane", "text": "nearest airport, code, distance, flight connections" },
      { "mode": "By Train", "text": "nearest station, distance, practical notes" },
      { "mode": "By Bus", "text": "bus availability and routes" },
      { "mode": "By Taxi / Shuttle", "text": "last mile options and approximate costs" },
      { "mode": "By Car", "text": "driving access and parking rules" }
    ]
  }
}

Rules for trivia: 3 short, genuinely interesting facts. Each should be specific (with a number, date, or name) and surprising. Not generic "rich biodiversity" statements.
Rules for howToReach: Be specific with airport codes, distances in km, and approximate costs in ₹ where possible. If a transport mode is not relevant (e.g. no useful train connection), still include it but say so honestly.
Rules for elevationRange: Min and max altitude of the park in metres. Search if unsure.
Rules for fees: Current entry fees in INR for Indian citizens and foreigners. Use null if you cannot find reliable current data.`;
}

// ─── API CALL ──────────────────────────────────────────────────────

async function callClaude(
  userPrompt: string,
  useWebSearch: boolean = false,
): Promise<any> {
  const body: any = {
    model: MODEL,
    max_tokens: 1500,
    system: VOICE_RULES + '\n\n' + HEMIS_EXAMPLES,
    messages: [{ role: 'user', content: userPrompt }],
  };

  if (useWebSearch) {
    body.tools = [{ type: 'web_search_20250305', name: 'web_search' }];
  }

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`API error ${response.status}: ${err}`);
  }

  const data = await response.json();

  // Extract text from response (may have multiple content blocks with web search)
  const text = data.content
    .filter((block: any) => block.type === 'text')
    .map((block: any) => block.text)
    .join('\n');

  // Parse JSON from response, stripping any markdown fences
  const cleaned = text.replace(/```json\s?/g, '').replace(/```/g, '').trim();

  try {
    return JSON.parse(cleaned);
  } catch (e) {
    console.error(`Failed to parse JSON for response. Raw text:\n${cleaned}`);
    return null;
  }
}

// ─── HELPERS ───────────────────────────────────────────────────────

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function processInBatches<T>(
  items: T[],
  batchSize: number,
  delayMs: number,
  fn: (item: T, index: number) => Promise<void>,
) {
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    await Promise.all(batch.map((item, j) => fn(item, i + j)));
    if (i + batchSize < items.length) {
      await sleep(delayMs);
    }
  }
}

// ─── MAIN ──────────────────────────────────────────────────────────

async function main() {
  if (!API_KEY) {
    console.error('Set ANTHROPIC_API_KEY in your environment or .env.local');
    process.exit(1);
  }

  // Read current parks data
  // We'll import dynamically since it's a TS file
  const parksModule = await import('../src/data/parks');
  const parks: any[] = [...parksModule.parks];

  console.log(`Loaded ${parks.length} parks\n`);

  // ── PASS 1: Prose fields for all parks ──

  console.log('─── PASS 1: Generating prose fields (no web search) ───\n');

  const pass1Results: Record<string, any> = {};
  let pass1Done = 0;

  await processInBatches(parks, CONCURRENT_LIMIT, DELAY_MS, async (park) => {
    // Skip Hemis - it already has full data
    if (park.id === 'hemis') {
      pass1Done++;
      return;
    }

    // Skip if already has wildlifeText (in case of re-runs)
    if (park.wildlifeText) {
      pass1Done++;
      return;
    }

    try {
      const result = await callClaude(buildPass1Prompt(park), false);
      if (result) {
        pass1Results[park.id] = result;
      }
      pass1Done++;
      console.log(`  [${pass1Done}/${parks.length}] ${park.name} ✓`);
    } catch (e: any) {
      pass1Done++;
      console.error(`  [${pass1Done}/${parks.length}] ${park.name} ✗ ${e.message}`);
    }
  });

  console.log(`\nPass 1 complete: ${Object.keys(pass1Results).length} parks enriched\n`);

  // ── PASS 2: Factual fields for top parks ──

  const topParks = parks.filter((p) => TOP_PARK_IDS.has(p.id) && p.id !== 'hemis');

  console.log(`─── PASS 2: Generating factual fields with web search (${topParks.length} parks) ───\n`);

  const pass2Results: Record<string, any> = {};
  let pass2Done = 0;

  // Pass 2 is slower (web search), so process one at a time
  await processInBatches(topParks, 1, DELAY_MS * 2, async (park) => {
    try {
      const result = await callClaude(buildPass2Prompt(park), true);
      if (result) {
        pass2Results[park.id] = result;
      }
      pass2Done++;
      console.log(`  [${pass2Done}/${topParks.length}] ${park.name} ✓`);
    } catch (e: any) {
      pass2Done++;
      console.error(`  [${pass2Done}/${topParks.length}] ${park.name} ✗ ${e.message}`);
    }
  });

  console.log(`\nPass 2 complete: ${Object.keys(pass2Results).length} parks enriched\n`);

  // ── MERGE RESULTS ──

  console.log('─── Merging results ───\n');

  const enrichedParks = parks.map((park) => {
    const p1 = pass1Results[park.id];
    const p2 = pass2Results[park.id];

    const enriched = { ...park };

    if (p1) {
      if (p1.wildlifeText) enriched.wildlifeText = p1.wildlifeText;
      if (p1.landscapeText) enriched.landscapeText = p1.landscapeText;
      if (p1.bestSeasonText) enriched.bestSeasonText = p1.bestSeasonText;
    }

    if (p2) {
      if (p2.elevationRange) enriched.elevationRange = p2.elevationRange;
      if (p2.entryFeeINR != null) enriched.entryFeeINR = p2.entryFeeINR;
      if (p2.entryFeeForeigner != null) enriched.entryFeeForeigner = p2.entryFeeForeigner;
      if (p2.trivia && p2.trivia.length > 0) enriched.trivia = p2.trivia;
      if (p2.howToReach) enriched.howToReach = p2.howToReach;
    }

    return enriched;
  });

  // ── WRITE OUTPUT ──

  const outputPath = path.join(__dirname, '..', 'src', 'data', 'parks-enriched.ts');

  // Generate the TypeScript file
  let output = `import { Park } from '@/types/park';\n\n`;
  output += `export const parks: Park[] = ${JSON.stringify(enrichedParks, null, 2)};\n`;

  // Fix the JSON output to be valid TypeScript
  // JSON.stringify produces valid TS for our data types, but we should
  // ensure tuple types work by adding 'as const' or type assertions if needed

  fs.writeFileSync(outputPath, output, 'utf-8');

  console.log(`Written to ${outputPath}`);
  console.log(`\nNext steps:`);
  console.log(`  1. Review the output file for quality`);
  console.log(`  2. Rename to parks.ts: mv src/data/parks-enriched.ts src/data/parks.ts`);
  console.log(`  3. Run npm run build to verify`);
  console.log(`  4. Spot-check a few parks in the browser`);
}

main().catch(console.error);
