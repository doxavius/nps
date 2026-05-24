'use client';

import { useEffect, useRef, useState } from 'react';
import { Park } from '@/types/park';

type Props = {
  park: Park;
  zoom: number;
  onClick?: (id: string) => void;
};

export function ParkMarker({ park, zoom, onClick }: Props) {
  const [hover, setHover] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const isLive = park.status === 'live';
  const baseSize = isLive ? (zoom > 8 ? 16 : 12) : (zoom > 8 ? 10 : 8);
  const size = hover ? (isLive ? 20 : 14) : baseSize;
  const clickable = typeof onClick === 'function';

  // Native click listener: stop propagation BEFORE mapbox-gl's click listener
  // (which lives on the map container) fires and closes the sidebar.
  useEffect(() => {
    if (!clickable) return;
    const el = ref.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      e.stopPropagation();
      onClick!(park.id);
    };
    el.addEventListener('click', handler);
    return () => el.removeEventListener('click', handler);
  }, [clickable, onClick, park.id]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ width: size, height: size, cursor: clickable ? 'pointer' : 'default' }}
    >
      <div
        className={`rounded-full border-2 border-bone transition-all duration-200 ease-out ${
          isLive ? 'bg-terracotta' : 'bg-slate/50'
        }`}
        style={{
          width: size,
          height: size,
          boxShadow: hover ? '0 4px 12px rgba(26, 26, 23, 0.18)' : 'none',
        }}
      />
      {hover && (
        <div
          className="pointer-events-none absolute z-10 whitespace-nowrap rounded border border-slate/30 bg-bone px-2.5 py-1.5 shadow-sm"
          style={{
            left: '50%',
            bottom: 'calc(100% + 8px)',
            transform: 'translateX(-50%)',
          }}
        >
          <div className="font-inter text-sm font-medium text-ink leading-tight">
            {park.name}
          </div>
          <div className="font-inter text-xs font-normal text-slate leading-tight">
            {park.state}
          </div>
        </div>
      )}
    </div>
  );
}
