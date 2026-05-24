export const MAP_CONFIG = {
  style: 'mapbox://styles/mapbox/standard',
  initialViewState: {
    longitude: 82.5,
    latitude: 22.5,
    zoom: 3.5,
  },
  standardConfig: {
    theme: 'faded',
    lightPreset: 'day',
    colorWater: '#7C9AAF',
    colorGreenspace: '#A3B0A0',
    colorLand: '#F0EBE0',
    font: 'Inter',
    showPointOfInterestLabels: false,
    showTransitLabels: false,
    show3dObjects: false,
    show3dBuildings: false,
    show3dTrees: false,
    showRoadLabels: false,
    showPlaceLabels: true,
  },
} as const;
