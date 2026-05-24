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

const SIDEBAR_OFFSET_PX = -224;
const FLY_TO_ZOOM = 8;
const FLY_TO_DURATION = 800;

export function MapView() {
  const mapRef = useRef<MapRef | null>(null);
  const [zoom, setZoom] = useState<number>(MAP_CONFIG.initialViewState.zoom);
  const [selectedParkId, setSelectedParkId] = useState<string | null>(null);
  const [displayPark, setDisplayPark] = useState<Park | null>(null);

  const handleLoad = useCallback(() => {
    const map = mapRef.current?.getMap();
    if (!map) return;
    const cfg = MAP_CONFIG.standardConfig;
    const apply = (k: string, v: unknown) => {
      try {
        map.setConfigProperty('basemap', k, v as never);
      } catch {
        // Some properties may not be available depending on style version; ignore.
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
  }, []);

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
    if (!selectedParkId) return;
    const p = parks.find((park) => park.id === selectedParkId) ?? null;
    if (!p) return;
    setDisplayPark(p);
    const map = mapRef.current?.getMap();
    if (!map) return;
    map.flyTo({
      center: [p.coordinates.lng, p.coordinates.lat],
      zoom: FLY_TO_ZOOM,
      offset: [SIDEBAR_OFFSET_PX, 0],
      duration: FLY_TO_DURATION,
    });
  }, [selectedParkId]);

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
      <MapboxMap
        ref={mapRef}
        mapboxAccessToken={token}
        mapStyle={MAP_CONFIG.style}
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
