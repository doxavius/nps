'use client';

type Props = {
  isSatellite: boolean;
  onChange: (next: boolean) => void;
};

export function MapStyleToggle({ isSatellite, onChange }: Props) {
  return (
    <div className="absolute left-3 top-3 z-10 flex items-center rounded-full bg-bone/95 p-1 shadow-[0_4px_16px_rgba(26,26,23,0.12)] ring-1 ring-ink/10 backdrop-blur">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-1 left-1 top-1 w-[calc(50%-0.25rem)] rounded-full bg-ink transition-transform duration-300 ease-out"
        style={{ transform: isSatellite ? 'translateX(100%)' : 'translateX(0)' }}
      />
      <button
        type="button"
        onClick={() => onChange(false)}
        aria-pressed={!isSatellite}
        className={`relative z-10 flex min-w-[92px] flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-1.5 font-inter text-xs font-medium tracking-wide transition-colors ${
          isSatellite ? 'text-ink/55 hover:text-ink' : 'text-bone'
        }`}
      >
        <MapIcon />
        Map
      </button>
      <button
        type="button"
        onClick={() => onChange(true)}
        aria-pressed={isSatellite}
        className={`relative z-10 flex min-w-[92px] flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-1.5 font-inter text-xs font-medium tracking-wide transition-colors ${
          isSatellite ? 'text-bone' : 'text-ink/55 hover:text-ink'
        }`}
      >
        <SatelliteIcon />
        Satellite
      </button>
    </div>
  );
}

function MapIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z" />
      <path d="M9 4v14" />
      <path d="M15 6v14" />
    </svg>
  );
}

function SatelliteIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a13.5 13.5 0 010 18" />
      <path d="M12 3a13.5 13.5 0 000 18" />
    </svg>
  );
}
