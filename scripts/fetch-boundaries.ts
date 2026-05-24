/**
 * Fetch National Park Boundaries from OpenStreetMap
 * 
 * Run: npx tsx scripts/fetch-boundaries.ts
 * 
 * Queries the Overpass API for boundary polygons of live national parks,
 * simplifies them, and saves as individual GeoJSON files.
 * 
 * Output: public/boundaries/{park-id}.geojson
 */

import * as fs from 'fs';
import * as path from 'path';

// ─── YOUR 21 LIVE PARKS ─────────────────────────────────
// Map of park-id → OSM search name
// Adjust names if OSM uses a different spelling

const LIVE_PARKS: Record<string, string> = {
  'hemis': 'Hemis National Park',
  'ranthambore': 'Ranthambore National Park',
  'jim-corbett': 'Jim Corbett National Park',
  'kaziranga': 'Kaziranga National Park',
  'gir': 'Gir National Park',
  'kanha': 'Kanha National Park',
  'bandhavgarh': 'Bandhavgarh National Park',
  'periyar': 'Periyar National Park',
  'sundarbans': 'Sundarbans National Park',
  'valley-of-flowers': 'Valley of Flowers National Park',
  'nagarhole': 'Nagarhole National Park',
  'satpura': 'Satpura National Park',
  'pench-mp': 'Pench National Park',
  'eravikulam': 'Eravikulam National Park',
  'gh': 'Great Himalayan National Park',
  'desert': 'Desert National Park',
  'blackbuck': 'Blackbuck National Park',
  'keibul-lamjao': 'Keibul Lamjao National Park',
  'manas': 'Manas National Park',
  'nanda-devi': 'Nanda Devi National Park',
  'silent-valley': 'Silent Valley National Park',  // Add more as parks go live
};

const OVERPASS_URL = 'https://overpass-api.de/api/interpreter';
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'boundaries');
const DELAY_MS = 2000; // be polite to Overpass

// ─── FETCH BOUNDARY ──────────────────────────────────────

async function fetchBoundary(parkName: string): Promise<any | null> {
  // Try multiple query strategies
  const queries = [
    // Strategy 1: boundary=national_park with exact name
    `[out:json][timeout:30];
     relation["boundary"="national_park"]["name"="${parkName}"];
     out geom;`,
    
    // Strategy 2: boundary=national_park with English name
    `[out:json][timeout:30];
     relation["boundary"="national_park"]["name:en"="${parkName}"];
     out geom;`,
    
    // Strategy 3: leisure=nature_reserve as fallback
    `[out:json][timeout:30];
     relation["leisure"="nature_reserve"]["name"="${parkName}"];
     out geom;`,
    
    // Strategy 4: protect_class=2 (IUCN category II = national park)
    `[out:json][timeout:30];
     relation["boundary"="protected_area"]["protect_class"="2"]["name"~"${parkName.split(' ')[0]}"];
     out geom;`,
  ];

  for (const query of queries) {
    try {
      const resp = await fetch(OVERPASS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `data=${encodeURIComponent(query)}`,
      });

      if (!resp.ok) {
        console.log(`    HTTP ${resp.status}, trying next strategy...`);
        continue;
      }

      const data = await resp.json();
      
      if (data.elements && data.elements.length > 0) {
        return data.elements[0]; // take the first match
      }
    } catch (e: any) {
      console.log(`    Error: ${e.message}, trying next strategy...`);
    }
  }

  return null;
}

// ─── CONVERT OSM RELATION TO GEOJSON ─────────────────────

function relationToGeoJSON(element: any): any | null {
  if (!element.members) return null;

  // Extract outer way coordinates
  const outerWays = element.members.filter(
    (m: any) => m.type === 'way' && (m.role === 'outer' || m.role === '')
  );

  if (outerWays.length === 0) return null;

  // Build coordinate rings from ways
  const rings: [number, number][][] = [];
  let currentRing: [number, number][] = [];

  for (const way of outerWays) {
    if (!way.geometry) continue;
    
    const coords: [number, number][] = way.geometry.map(
      (pt: any) => [pt.lon, pt.lat]
    );

    if (currentRing.length === 0) {
      currentRing = coords;
    } else {
      // Check if this way connects to the current ring
      const lastPt = currentRing[currentRing.length - 1];
      const firstPt = coords[0];
      const lastPtOfNew = coords[coords.length - 1];

      if (
        Math.abs(lastPt[0] - firstPt[0]) < 0.0001 &&
        Math.abs(lastPt[1] - firstPt[1]) < 0.0001
      ) {
        // Connects forward
        currentRing = currentRing.concat(coords.slice(1));
      } else if (
        Math.abs(lastPt[0] - lastPtOfNew[0]) < 0.0001 &&
        Math.abs(lastPt[1] - lastPtOfNew[1]) < 0.0001
      ) {
        // Connects reversed
        currentRing = currentRing.concat(coords.reverse().slice(1));
      } else {
        // New ring
        if (currentRing.length > 3) rings.push(currentRing);
        currentRing = coords;
      }
    }
  }

  if (currentRing.length > 3) rings.push(currentRing);

  if (rings.length === 0) return null;

  // Close rings if not already closed
  for (const ring of rings) {
    const first = ring[0];
    const last = ring[ring.length - 1];
    if (first[0] !== last[0] || first[1] !== last[1]) {
      ring.push([...first]);
    }
  }

  // Build GeoJSON
  const geometry = rings.length === 1
    ? { type: 'Polygon', coordinates: [rings[0]] }
    : { type: 'MultiPolygon', coordinates: rings.map(r => [r]) };

  return {
    type: 'Feature',
    properties: {
      name: element.tags?.name || element.tags?.['name:en'] || 'Unknown',
    },
    geometry,
  };
}

// ─── SIMPLIFY POLYGON ────────────────────────────────────
// Douglas-Peucker simplification

function simplifyRing(coords: [number, number][], tolerance: number): [number, number][] {
  if (coords.length <= 3) return coords;

  let maxDist = 0;
  let maxIdx = 0;
  const first = coords[0];
  const last = coords[coords.length - 1];

  for (let i = 1; i < coords.length - 1; i++) {
    const dist = perpendicularDistance(coords[i], first, last);
    if (dist > maxDist) {
      maxDist = dist;
      maxIdx = i;
    }
  }

  if (maxDist > tolerance) {
    const left = simplifyRing(coords.slice(0, maxIdx + 1), tolerance);
    const right = simplifyRing(coords.slice(maxIdx), tolerance);
    return left.slice(0, -1).concat(right);
  }

  return [first, last];
}

function perpendicularDistance(
  point: [number, number],
  lineStart: [number, number],
  lineEnd: [number, number],
): number {
  const dx = lineEnd[0] - lineStart[0];
  const dy = lineEnd[1] - lineStart[1];
  const norm = Math.sqrt(dx * dx + dy * dy);
  if (norm === 0) return Math.sqrt(
    (point[0] - lineStart[0]) ** 2 + (point[1] - lineStart[1]) ** 2
  );
  return Math.abs(
    dy * point[0] - dx * point[1] + lineEnd[0] * lineStart[1] - lineEnd[1] * lineStart[0]
  ) / norm;
}

function simplifyGeoJSON(geojson: any, tolerance: number = 0.001): any {
  const geom = geojson.geometry;
  
  if (geom.type === 'Polygon') {
    geom.coordinates = geom.coordinates.map(
      (ring: [number, number][]) => simplifyRing(ring, tolerance)
    );
  } else if (geom.type === 'MultiPolygon') {
    geom.coordinates = geom.coordinates.map(
      (polygon: [number, number][][]) =>
        polygon.map((ring) => simplifyRing(ring, tolerance))
    );
  }

  return geojson;
}

// ─── MAIN ────────────────────────────────────────────────

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  // Create output directory
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const parkIds = Object.keys(LIVE_PARKS);
  console.log(`Fetching boundaries for ${parkIds.length} parks...\n`);

  const results: { id: string; status: string; vertices?: number; fileSize?: string }[] = [];

  for (const parkId of parkIds) {
    const parkName = LIVE_PARKS[parkId];
    process.stdout.write(`  ${parkName}...`);

    const element = await fetchBoundary(parkName);

    if (!element) {
      console.log(' NOT FOUND');
      results.push({ id: parkId, status: 'not found' });
      await sleep(DELAY_MS);
      continue;
    }

    const geojson = relationToGeoJSON(element);

    if (!geojson) {
      console.log(' NO GEOMETRY');
      results.push({ id: parkId, status: 'no geometry' });
      await sleep(DELAY_MS);
      continue;
    }

    // Count vertices before simplification
    const beforeCount = JSON.stringify(geojson.geometry.coordinates).split(',').length / 2;

    // Simplify
    const simplified = simplifyGeoJSON(geojson, 0.002);
    const afterCount = JSON.stringify(simplified.geometry.coordinates).split(',').length / 2;

    // Write file
    const outputPath = path.join(OUTPUT_DIR, `${parkId}.geojson`);
    const content = JSON.stringify(simplified);
    fs.writeFileSync(outputPath, content);

    const fileSize = `${(Buffer.byteLength(content) / 1024).toFixed(1)}KB`;
    console.log(` OK (${Math.round(afterCount)} vertices, ${fileSize})`);
    results.push({ id: parkId, status: 'ok', vertices: Math.round(afterCount), fileSize });

    await sleep(DELAY_MS);
  }

  // Summary
  console.log('\n── Summary ──\n');
  const found = results.filter(r => r.status === 'ok');
  const missing = results.filter(r => r.status !== 'ok');

  console.log(`Found: ${found.length}/${parkIds.length}`);
  for (const r of found) {
    console.log(`  ✓ ${r.id} (${r.vertices} vertices, ${r.fileSize})`);
  }

  if (missing.length > 0) {
    console.log(`\nMissing: ${missing.length}`);
    for (const r of missing) {
      console.log(`  ✗ ${r.id} (${r.status})`);
    }
    console.log('\nFor missing parks, you can try:');
    console.log('  1. Check OSM for alternate spellings');
    console.log('  2. Search protectedplanet.net individually');
    console.log('  3. Fall back to area-based circles in the UI');
  }

  console.log(`\nOutput: ${OUTPUT_DIR}/`);
}

main().catch(console.error);
