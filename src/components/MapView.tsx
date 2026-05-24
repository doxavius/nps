'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Map as MapboxMap,
  Marker,
  NavigationControl,
  type MapRef,
} from 'react-map-gl/mapbox';
import { parks } from '@/data/parks';
import { MAP_CONFIG } from '@/config/map';
import { Park } from '@/types/park';
import { ParkMarker } from './ParkMarker';
import { Sidebar } from './Sidebar';
import { MapStyleToggle } from './MapStyleToggle';

const SIDEBAR_WIDTH_PX = 448;
const TERRAIN_3D_ZOOM = 10.5;
const TERRAIN_3D_PITCH = 65;
const TERRAIN_3D_EXAGGERATION = 1.8;
const TERRAIN_3D_FLY_DURATION = 1800;
const ORBIT_DEG_PER_SEC = 4;

export function MapView() {
  const mapRef = useRef<MapRef | null>(null);
  const orbitRafRef = useRef<number | null>(null);
  const orbitStartTimeoutRef = useRef<number | null>(null);
  const cancelPendingTerrainOffRef = useRef<(() => void) | null>(null);
  // Terrain ref so the style.load listener (registered once) can re-attach
  // terrain after a satellite/map style swap without going stale.
  const terrainOnRef = useRef<boolean>(false);
  const [zoom, setZoom] = useState<number>(MAP_CONFIG.initialViewState.zoom);
  const [selectedParkId, setSelectedParkId] = useState<string | null>(null);
  const [displayPark, setDisplayPark] = useState<Park | null>(null);
  const [isSatellite, setIsSatellite] = useState<boolean>(false);

  const stopOrbit = useCallback(() => {
    if (orbitRafRef.current != null) {
      cancelAnimationFrame(orbitRafRef.current);
      orbitRafRef.current = null;
    }
    if (orbitStartTimeoutRef.current != null) {
      clearTimeout(orbitStartTimeoutRef.current);
      orbitStartTimeoutRef.current = null;
    }
  }, []);

  const startOrbit = useCallback(() => {
    const map = mapRef.current?.getMap();
    if (!map) return;
    let last = performance.now();
    const tick = (now: number) => {
      const m = mapRef.current?.getMap();
      if (!m) return;
      const dt = (now - last) / 1000;
      last = now;
      m.setBearing(m.getBearing() + dt * ORBIT_DEG_PER_SEC);
      orbitRafRef.current = requestAnimationFrame(tick);
    };
    orbitRafRef.current = requestAnimationFrame(tick);
  }, []);

  // Applies our basemap config + DEM source + fog. Runs on initial load AND
  // on every style swap (e.g. Map ↔ Satellite), since switching styles wipes
  // sources, terrain, and config properties.
  const applyBasemap = useCallback(() => {
    const map = mapRef.current?.getMap();
    if (!map) return;
    const cfg = MAP_CONFIG.standardConfig;
    const apply = (k: string, v: unknown) => {
      try {
        map.setConfigProperty('basemap', k, v as never);
      } catch {
        // Some properties don't apply on satellite (e.g. colorLand); ignore.
      }
    };
    apply('theme', cfg.theme);
    apply('lightPreset', cfg.lightPreset);
    apply('colorWater', cfg.colorWater);
    apply('colorGreenspace', cfg.colorGreenspace);
    apply('colorLand', cfg.colorLand);
    apply('font', cfg.font);
    apply('showPointOfInterestLabels', cfg.showPointOfInterestLabels);
    apply('showTransitLabels', cfg.showTransitLabels);
    apply('show3dObjects', cfg.show3dObjects);
    apply('showRoadLabels', cfg.showRoadLabels);
    apply('showPlaceLabels', cfg.showPlaceLabels);

    if (!map.getSource('mapbox-dem')) {
      map.addSource('mapbox-dem', {
        type: 'raster-dem',
        url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
        tileSize: 512,
        maxzoom: 14,
      });
    }
    // Subtle far-horizon fog so peaks dissolve cleanly into the bone background.
    // range [5,15] keeps fog out of the foreground entirely; only the distance
    // takes a slight tint. Active in both 2D and 3D — invisible at low pitch.
    map.setFog({
      range: [5, 15],
      'horizon-blend': 0.03,
      color: '#FAF7F2',
      'high-color': '#FAF7F2',
      'space-color': '#FAF7F2',
      'star-intensity': 0,
    });

    // Re-attach terrain after a style swap if we were mid-orbit on a park.
    if (terrainOnRef.current) {
      map.setTerrain({ source: 'mapbox-dem', exaggeration: TERRAIN_3D_EXAGGERATION });
    }
  }, []);

  const handleLoad = useCallback(() => {
    applyBasemap();
    const map = mapRef.current?.getMap();
    if (!map) return;
    map.on('style.load', applyBasemap);
  }, [applyBasemap]);

  // Clicking empty map area closes the sidebar. Park markers stop propagation,
  // so this only fires on background clicks.
  const handleMapClick = useCallback(() => {
    setSelectedParkId(null);
  }, []);

  const handleParkClick = useCallback((id: string) => {
    setSelectedParkId(id);
  }, []);

  const handleClose = useCallback(() => setSelectedParkId(null), []);

  // Cache park for sidebar so slide-out animation has content to render.
  useEffect(() => {
    const cancelPendingTerrainOff = () => {
      cancelPendingTerrainOffRef.current?.();
      cancelPendingTerrainOffRef.current = null;
    };
    const schedulePostMoveTerrainOff = (
      map: ReturnType<NonNullable<typeof mapRef.current>['getMap']>,
    ) => {
      cancelPendingTerrainOff();
      const handler = () => {
        map.setTerrain(null);
        terrainOnRef.current = false;
        cancelPendingTerrainOffRef.current = null;
      };
      map.once('moveend', handler);
      cancelPendingTerrainOffRef.current = () => map.off('moveend', handler);
    };

    if (!selectedParkId) {
      // Close: stop orbit, drop back to flat 2D, detach terrain after settle.
      stopOrbit();
      const map = mapRef.current?.getMap();
      if (!map) return;
      if (map.getPitch() > 0 || map.getBearing() !== 0) {
        map.easeTo({
          pitch: 0,
          bearing: 0,
          padding: { top: 0, right: 0, bottom: 0, left: 0 },
          duration: 1000,
        });
        schedulePostMoveTerrainOff(map);
      } else {
        cancelPendingTerrainOff();
        map.setTerrain(null);
        terrainOnRef.current = false;
      }
      return;
    }
    const p = parks.find((park) => park.id === selectedParkId) ?? null;
    if (!p) return;
    setDisplayPark(p);
    const map = mapRef.current?.getMap();
    if (!map) return;

    stopOrbit();
    cancelPendingTerrainOff();
    map.setTerrain({ source: 'mapbox-dem', exaggeration: TERRAIN_3D_EXAGGERATION });
    terrainOnRef.current = true;
    map.flyTo({
      center: [p.coordinates.lng, p.coordinates.lat],
      zoom: TERRAIN_3D_ZOOM,
      pitch: TERRAIN_3D_PITCH,
      bearing: 0,
      padding: { top: 0, right: SIDEBAR_WIDTH_PX, bottom: 0, left: 0 },
      duration: TERRAIN_3D_FLY_DURATION,
    });
    // Start orbit after the fly settles. Stop on any user interaction.
    orbitStartTimeoutRef.current = window.setTimeout(() => {
      startOrbit();
    }, TERRAIN_3D_FLY_DURATION);
    const onUserInput = () => stopOrbit();
    map.once('dragstart', onUserInput);
    map.once('wheel', onUserInput);
    map.once('rotatestart', onUserInput);
    map.once('pitchstart', onUserInput);
  }, [selectedParkId, startOrbit, stopOrbit]);

  // Cleanup on unmount.
  useEffect(() => stopOrbit, [stopOrbit]);

  // Escape closes the sidebar.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedParkId(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  if (!token) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-parchment p-8">
        <div className="max-w-md text-center">
          <div className="font-spectral text-2xl font-bold text-ink">
            Mapbox token missing
          </div>
          <p className="mt-3 font-inter text-sm text-slate">
            Set <span className="font-medium text-ink">NEXT_PUBLIC_MAPBOX_TOKEN</span>
            {' '}in <span className="font-medium text-ink">.env.local</span> and restart the dev server.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      <MapStyleToggle isSatellite={isSatellite} onChange={setIsSatellite} />
      <MapboxMap
        ref={mapRef}
        mapboxAccessToken={token}
        mapStyle={isSatellite ? MAP_CONFIG.satelliteStyle : MAP_CONFIG.style}
        initialViewState={MAP_CONFIG.initialViewState}
        maxBounds={[
          [40, -10],
          [110, 45],
        ]}
        minZoom={2}
        maxZoom={14}
        onLoad={handleLoad}
        onMoveEnd={(e) => setZoom(e.viewState.zoom)}
        onClick={handleMapClick}
        style={{ width: '100%', height: '100%' }}
      >
        {parks.map((p) => (
          <Marker
            key={p.id}
            longitude={p.coordinates.lng}
            latitude={p.coordinates.lat}
            anchor="center"
          >
            <ParkMarker park={p} zoom={zoom} onClick={handleParkClick} />
          </Marker>
        ))}

        <NavigationControl position="bottom-right" showCompass={false} />
      </MapboxMap>
      <Sidebar
        park={displayPark}
        isOpen={selectedParkId !== null}
        onClose={handleClose}
      />
    </div>
  );
}
