'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Park,
  LivePark,
  DraftPark,
  TransportIcon,
  ExperienceScore,
} from '@/types/park';
import {
  DISPLAY,
  formatMonthRange,
  formatElevation,
  formatArea,
} from '@/lib/display';

type Props = {
  park: Park | null;
  isOpen: boolean;
  onClose: () => void;
};

export function Sidebar({ park, isOpen, onClose }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Reset scroll to top on every open and on park change.
  useEffect(() => {
    if (!isOpen) return;
    const el = scrollRef.current;
    if (el) el.scrollTop = 0;
  }, [isOpen, park?.id]);

  return (
    <aside
      aria-hidden={!isOpen}
      className="fixed right-0 top-0 z-50 h-screen w-[448px] bg-bone shadow-[-4px_0_24px_rgba(26,26,23,0.12)] transition-transform duration-300 ease-out"
      style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
    >
      {park && park.status === 'live' && (
        <LiveContent park={park} onClose={onClose} scrollRef={scrollRef} />
      )}
      {park && park.status === 'draft' && (
        <DraftView park={park} onClose={onClose} />
      )}
    </aside>
  );
}

// ── Live content (full sidebar) ────────────────────────

function LiveContent({
  park,
  onClose,
  scrollRef,
}: {
  park: LivePark;
  onClose: () => void;
  scrollRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div ref={scrollRef} className="flex h-full flex-col overflow-y-auto bg-bone pb-5">
      <Hero park={park} onClose={onClose} />
      <TitleBlock park={park} />
      <IdentitySection park={park} />
      <ExperienceScoreSection park={park} />
      <BestSeasonSection park={park} />
      {park.trivia.length > 0 && <TriviaSection park={park} />}
      <LandscapeSection park={park} />
      <WildlifeSection park={park} />
      {park.safari && <SafariSection park={park} />}
      <PracticalSection park={park} />
      <HowToReachSection park={park} />
      <PhotographySection park={park} />
    </div>
  );
}

// ── Draft content (minimal) ────────────────────────────

function DraftView({
  park,
  onClose,
}: {
  park: DraftPark;
  onClose: () => void;
}) {
  const location = `${park.state}, ${park.region}`.toUpperCase();
  return (
    <div className="relative flex h-full flex-col bg-bone px-5 pt-16">
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-ink/10 text-ink transition-colors hover:bg-ink/20"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M2 2 L12 12 M12 2 L2 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <div className="flex flex-col gap-1.5">
        <h2 className="font-averia text-[34px] font-normal leading-[1.1] tracking-[-1.36px] text-ink">
          {park.name}
        </h2>
        <p className="font-mallory text-[14px] font-medium uppercase leading-[1.4] tracking-[0.56px] text-slate">
          {location}
        </p>
      </div>
      <p className="mt-6 font-mallory text-[14px] font-normal leading-[1.4] tracking-[0.28px] text-slate">
        Detailed information for this park is being prepared.
      </p>
    </div>
  );
}

// ── Hero ───────────────────────────────────────────────

function Hero({ park, onClose }: { park: LivePark; onClose: () => void }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    setFailed(false);
  }, [park.heroImage]);
  return (
    <div className="relative w-full shrink-0" style={{ aspectRatio: '1280 / 720' }}>
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #7C9AAF 0%, #6B7B8D 55%, #5A6B7D 100%)',
        }}
      />
      {park.heroImage && !failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={park.heroImage}
          src={park.heroImage}
          alt={park.name}
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      )}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(252,247,243,0) 70%, #FAF7F2 100%)',
        }}
      />
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-black/45"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M2 2 L12 12 M12 2 L2 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}

// ── Title ──────────────────────────────────────────────

function TitleBlock({ park }: { park: LivePark }) {
  const location = `${park.state}, ${park.region}`.toUpperCase();
  return (
    <div className="flex w-full flex-col gap-1.5 px-5 py-2">
      <h2 className="font-averia text-[34px] font-normal leading-[1.1] tracking-[-1.36px] text-ink">
        {park.name}
      </h2>
      <p className="font-mallory text-[14px] font-medium uppercase leading-[1.4] tracking-[0.56px] text-slate">
        {location}
      </p>
    </div>
  );
}

// ── Section 1: Identity ────────────────────────────────

function IdentitySection({ park }: { park: LivePark }) {
  return (
    <div className="flex w-full flex-col gap-4 border-b border-ink/[0.08] px-5 pb-7 pt-3">
      <div className="flex w-full flex-col gap-2">
        <p className="font-averia text-[20px] font-normal leading-[1.3] tracking-[-0.2px] text-wine">
          {park.oneLiner}
        </p>
        {park.tags.length > 0 && <TagsRow tags={park.tags} />}
        <p className="font-mallory text-[14px] font-normal leading-[1.4] tracking-[0.28px] text-ink">
          {park.description}
        </p>
        {(park.unescoStatus || park.permitRequired) && (
          <div className="flex w-full flex-col gap-1 py-1">
            {park.unescoStatus && <UnescoBadge />}
            {park.permitRequired && park.permitDescription && (
              <PermitAlert text={park.permitDescription} />
            )}
          </div>
        )}
      </div>

      <div className="flex w-full flex-col gap-1">
        <StatRow>
          <StatCard label="Established" value={String(park.established)} />
          <StatCard label="Area" value={formatArea(park.areaKm2)} />
        </StatRow>
        <StatRow>
          <StatCard label="Open" value={formatMonthRange(park.openMonths)} />
          <StatCard label="Elevation" value={formatElevation(park.elevationRange)} />
        </StatRow>
        <StatRow>
          <StatCard
            label="Recommended stay"
            value={`${park.recommendedDays} days`}
          />
          <StatCard
            label="Nearest city"
            value={`${park.nearestCity}, ${park.nearestCityDistKm} km`}
          />
        </StatRow>
      </div>
    </div>
  );
}

function TagsRow({ tags }: { tags: LivePark['tags'] }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5 py-1">
      {tags.map((t, i) => (
        <span key={t} className="flex items-center gap-1.5">
          <span className="font-mallory text-[14px] font-medium leading-none tracking-[0.14px] text-ink">
            {DISPLAY.tags[t]}
          </span>
          {i < tags.length - 1 && (
            <span className="inline-block h-[3px] w-[3px] rounded-full bg-ink/60" />
          )}
        </span>
      ))}
    </div>
  );
}

function UnescoBadge() {
  return (
    <div className="flex w-full items-center gap-3 rounded-[2px] bg-[#ffe0e5] px-3 py-2.5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/unesco.png"
        alt=""
        className="h-5 w-5 shrink-0 object-contain"
      />
      <p className="font-mallory text-[14px] font-normal leading-[1.4] tracking-[0.28px] text-ink">
        This park is a{' '}
        <span className="font-medium text-wine tracking-[0.16px]">
          UNESCO World Heritage Site
        </span>
      </p>
    </div>
  );
}

function PermitAlert({ text }: { text: string }) {
  return (
    <div className="flex w-full items-center gap-3 rounded-[2px] bg-white px-3 py-2.5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/permit.png"
        alt=""
        className="h-5 w-5 shrink-0 object-contain"
      />
      <p className="font-mallory text-[14px] font-normal leading-[1.4] tracking-[0.28px] text-ink">
        {text}
      </p>
    </div>
  );
}

// ── Section: Experience Score ──────────────────────────

function ExperienceScoreSection({ park }: { park: LivePark }) {
  const entries: { key: string; label: string; score: ExperienceScore }[] = [
    { key: 'wildlife', label: 'Wildlife sightings', score: park.scores.wildlife },
    { key: 'scenic', label: 'Scenic beauty', score: park.scores.scenic },
    { key: 'accessibility', label: 'Accessibility', score: park.scores.accessibility },
    { key: 'crowdLevel', label: 'Crowd level', score: park.scores.crowdLevel },
    { key: 'remoteness', label: 'Remoteness', score: park.scores.remoteness },
    { key: 'infrastructure', label: 'Infrastructure', score: park.scores.infrastructure },
  ];
  const total = entries.reduce((sum, e) => sum + e.score.score, 0);

  return (
    <Section>
      <div className="flex w-full items-center justify-between">
        <SectionHeader>EXPERIENCE SCORE</SectionHeader>
        <p className="font-mallory text-[13px] font-medium uppercase leading-[1.4] tracking-[0.52px] text-wine">
          {total} / 60
        </p>
      </div>
      <div className="flex w-full flex-col gap-1">
        {entries.map((e) => (
          <ScoreRow
            key={e.key}
            score={e.score.score}
            label={e.label}
            desc={e.score.desc}
          />
        ))}
      </div>
    </Section>
  );
}

function ScoreRow({
  score,
  label,
  desc,
}: {
  score: number;
  label: string;
  desc: string;
}) {
  return (
    <div className="flex w-full items-center gap-3 rounded-[2px] bg-white px-3 py-2 pr-4">
      <ScoreRing score={score} />
      <div className="flex flex-1 flex-col gap-0.5">
        <p className="font-mallory text-[14px] font-normal leading-[1.4] tracking-[0.28px] text-slate">
          {label}
        </p>
        <p className="font-mallory text-[14px] font-normal leading-[1.4] tracking-[0.28px] text-ink">
          {desc}
        </p>
      </div>
    </div>
  );
}

function ScoreRing({ score }: { score: number }) {
  const size = 40;
  const stroke = 2.5;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const fraction = Math.max(0, Math.min(1, score / 10));
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="rgba(0,0,0,0.08)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="#992E40"
          strokeWidth={stroke}
          strokeDasharray={`${fraction * c} ${c}`}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-averia text-[20px] font-normal leading-none tracking-[-0.2px] text-ink">
          {score}
        </span>
      </div>
    </div>
  );
}

// ── Section: Best Season ───────────────────────────────

function BestSeasonSection({ park }: { park: LivePark }) {
  return (
    <Section>
      <SectionHeader>BEST SEASON TO VISIT</SectionHeader>
      <StatRow>
        <StatCard
          label="Best season"
          value={formatMonthRange(park.bestMonths)}
        />
        <StatCard
          label={`For ${park.speciality}`}
          value={formatMonthRange(park.specialityMonths)}
        />
      </StatRow>
      <Prose>{park.seasonProse}</Prose>
    </Section>
  );
}

// ── Section: Trivia ────────────────────────────────────

function TriviaSection({ park }: { park: LivePark }) {
  return (
    <Section>
      <SectionHeader>DID YOU KNOW</SectionHeader>
      <div className="flex w-full flex-col gap-1">
        {park.trivia.map((fact, i) => (
          <NumberedCard key={i} num={i + 1}>
            {fact}
          </NumberedCard>
        ))}
      </div>
    </Section>
  );
}

// ── Section: Landscape ─────────────────────────────────

function LandscapeSection({ park }: { park: LivePark }) {
  return (
    <Section>
      <SectionHeader>LANDSCAPE</SectionHeader>
      <div className="flex w-full flex-col gap-1">
        <FullWidthStatCard
          label="Climate"
          value={park.climate.map((c) => DISPLAY.climate[c]).join(' · ')}
        />
        <FullWidthStatCard
          label="Terrain"
          value={park.terrain.map((t) => DISPLAY.terrain[t]).join(' · ')}
        />
      </div>
      <Prose>{park.landscapeProse}</Prose>
      <ImageStrip srcs={park.landscapeImages} />
    </Section>
  );
}

// ── Section: Wildlife ──────────────────────────────────

function WildlifeSection({ park }: { park: LivePark }) {
  return (
    <Section>
      <SectionHeader>WILDLIFE</SectionHeader>
      <div className="flex w-full flex-col gap-1">
        {park.flagshipFauna && (
          <FullWidthStatCard label="Flagship fauna" value={park.flagshipFauna} />
        )}
        <StatRow>
          {park.sightingProb ? (
            <StatCard
              label="Sighting probability"
              value={DISPLAY.sightingProb[park.sightingProb]}
            />
          ) : (
            <div className="flex-[1_0_0]" />
          )}
          <StatCard
            label="Animal species"
            value={park.animalSpecies != null ? `${park.animalSpecies}+` : 'DNA'}
          />
        </StatRow>
        <StatRow>
          <StatCard
            label="Birding quality"
            value={DISPLAY.birdingQuality[park.birdingQuality]}
          />
          {park.birdingSpecies != null ? (
            <StatCard label="Bird species" value={`${park.birdingSpecies}+`} />
          ) : (
            <div className="flex-[1_0_0]" />
          )}
        </StatRow>
      </div>
      <Prose>{park.wildlifeProse}</Prose>
      {park.wildlifeCards.length > 0 && (
        <div className="-mx-5 flex items-start gap-2 overflow-x-auto px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {park.wildlifeCards.map((card) => (
            <div key={card.name} className="flex shrink-0 flex-col gap-1">
              <ImagePlaceholder src={card.image} width={240} height={160} />
              <p className="font-mallory text-[14px] font-medium leading-[1.5] text-ink">
                {card.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}

// ── Section: Safari ────────────────────────────────────

function SafariSection({ park }: { park: LivePark }) {
  const safari = park.safari!;
  const typeText = safari.types.map((t) => DISPLAY.safariType[t]).join(' · ');
  return (
    <Section>
      <SectionHeader>SAFARI SYSTEM</SectionHeader>
      <div className="flex w-full flex-col gap-1">
        <StatRow>
          <StatCard label="Type" value={typeText} />
          <StatCard
            label="Booking"
            value={DISPLAY.bookingRequirement[safari.bookingRequirement]}
          />
        </StatRow>
        <StatRow>
          <StatCard
            label="Core zone access"
            value={DISPLAY.coreZoneAccess[safari.coreZoneAccess]}
          />
          <StatCard
            label="Safari density"
            value={DISPLAY.safariDensity[safari.density]}
          />
        </StatRow>
      </div>
      <Prose>{safari.prose}</Prose>
      {safari.gates.length > 0 && (
        <>
          <p className="font-mallory text-[14px] font-bold leading-[1.4] tracking-[0.28px] text-ink">
            Gates
          </p>
          <div className="flex w-full flex-col gap-1">
            {safari.gates.map((g, i) => (
              <NumberedCard key={g.name} num={i + 1}>
                {g.qualifier ? `${g.name} (${g.qualifier})` : g.name}
              </NumberedCard>
            ))}
          </div>
        </>
      )}
    </Section>
  );
}

// ── Section: Practical Info ────────────────────────────

function PracticalSection({ park }: { park: LivePark }) {
  const showFees =
    park.entryFeeINR != null || park.entryFeeForeigner != null;
  return (
    <Section>
      <SectionHeader>PRACTICAL INFO</SectionHeader>
      <div className="flex w-full flex-col gap-1">
        <StatRow>
          <StatCard label="Network" value={DISPLAY.networkQuality[park.networkQuality]} />
          <StatCard label="Stays" value={DISPLAY.stayQuality[park.stayQuality]} />
        </StatRow>
        {showFees && (
          <StatRow>
            {park.entryFeeINR != null ? (
              <StatCard label="Entry fee for Indians" value={`INR ${park.entryFeeINR}`} />
            ) : (
              <div className="flex-[1_0_0]" />
            )}
            {park.entryFeeForeigner != null ? (
              <StatCard
                label="Entry fee for foreigners"
                value={`INR ${park.entryFeeForeigner}`}
              />
            ) : (
              <div className="flex-[1_0_0]" />
            )}
          </StatRow>
        )}
      </div>
      <Prose>{park.practicalProse}</Prose>
    </Section>
  );
}

// ── Section: How to Reach ──────────────────────────────

function HowToReachSection({ park }: { park: LivePark }) {
  return (
    <Section>
      <SectionHeader>HOW TO REACH</SectionHeader>
      <Prose>{park.connectivityProse}</Prose>
      {park.transport.length > 0 && (
        <div className="flex w-full flex-col gap-1">
          {park.transport.map((t, i) => (
            <TransportRow
              key={`${t.icon}-${i}`}
              icon={t.icon}
              label={DISPLAY.transportIcon[t.icon]}
              text={t.desc}
            />
          ))}
        </div>
      )}
    </Section>
  );
}

// ── Section: Photography ───────────────────────────────

function PhotographySection({ park }: { park: LivePark }) {
  return (
    <Section last>
      <SectionHeader>PHOTOGRAPHY</SectionHeader>
      <Prose>{park.photoProse}</Prose>
    </Section>
  );
}

// ── Reusable layout primitives ─────────────────────────

function Section({
  children,
  last = false,
}: {
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <section
      className={`flex w-full flex-col gap-4 p-5 ${last ? '' : 'border-b border-ink/[0.08]'}`}
    >
      {children}
    </section>
  );
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-mallory text-[13px] font-medium uppercase leading-[1.4] tracking-[0.52px] text-wine">
      {children}
    </h3>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mallory text-[14px] font-normal leading-[1.4] tracking-[0.28px] text-ink">
      {children}
    </p>
  );
}

function StatRow({ children }: { children: React.ReactNode }) {
  return <div className="flex w-full gap-1">{children}</div>;
}

function StatCard({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex flex-[1_0_0] min-w-0 flex-col rounded-[2px] bg-white px-3 py-2">
      <p className="font-mallory text-[14px] font-normal leading-[1.4] tracking-[0.28px] text-slate">
        {label}
      </p>
      <p className="font-averia text-[20px] font-normal leading-[28px] tracking-[-0.2px] text-ink">
        {value}
      </p>
    </div>
  );
}

function FullWidthStatCard({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col rounded-[2px] bg-white px-3 py-2">
      <p className="font-mallory text-[14px] font-normal leading-[1.4] tracking-[0.28px] text-slate">
        {label}
      </p>
      <p className="font-averia text-[20px] font-normal leading-[28px] tracking-[-0.2px] text-ink">
        {value}
      </p>
    </div>
  );
}

function NumberedCard({
  num,
  children,
}: {
  num: number;
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full items-center gap-3 rounded-[2px] bg-white p-3">
      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-wine">
        <span className="font-mallory text-[13px] font-bold leading-none text-white">
          {num}
        </span>
      </div>
      <p className="font-mallory text-[14px] font-normal leading-[1.4] tracking-[0.28px] text-ink">
        {children}
      </p>
    </div>
  );
}

function TransportRow({
  icon,
  label,
  text,
}: {
  icon: TransportIcon;
  label: string;
  text: string;
}) {
  return (
    <div className="flex w-full items-center gap-3 rounded-[2px] bg-white p-3">
      <div className="flex h-5 w-5 shrink-0 items-center justify-center text-ink">
        <TransportIconSvg icon={icon} />
      </div>
      <div className="flex flex-1 flex-col gap-0.5">
        <p className="font-mallory text-[14px] font-normal leading-[1.4] tracking-[0.28px] text-slate">
          {label}
        </p>
        <p className="font-mallory text-[14px] font-normal leading-[1.4] tracking-[0.28px] text-ink">
          {text}
        </p>
      </div>
    </div>
  );
}

// ── Image strip + placeholder ──────────────────────────

function ImageStrip({ srcs }: { srcs: string[] }) {
  if (srcs.length === 0) return null;
  return (
    <div className="-mx-5 flex gap-2 overflow-x-auto px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {srcs.map((src, i) => (
        <ImagePlaceholder key={i} src={src} width={240} height={160} />
      ))}
    </div>
  );
}

function ImagePlaceholder({
  src,
  width,
  height,
}: {
  src?: string;
  width: number;
  height: number;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-[2px] bg-parchment"
      style={{
        width,
        height,
        backgroundImage:
          'linear-gradient(135deg, rgba(107,123,141,0.10) 0%, rgba(107,123,141,0.04) 60%, rgba(107,123,141,0.14) 100%)',
      }}
    >
      {src && !failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

// ── Icons ──────────────────────────────────────────────

const TRANSPORT_PNG: Partial<Record<TransportIcon, string>> = {
  plane: '/images/plane.png',
  train: '/images/train.png',
  bus: '/images/bus.png',
  car: '/images/car.png',
};

function TransportIconSvg({ icon }: { icon: TransportIcon }) {
  const src = TRANSPORT_PNG[icon];
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt="" className="h-5 w-5 object-contain" />
    );
  }
  switch (icon) {
    case 'boat':
      return <BoatIcon />;
    case 'ferry':
      return <FerryIcon />;
    case 'foot':
      return <FootIcon />;
    case 'helicopter':
      return <HelicopterIcon />;
    default:
      return null;
  }
}

const ICON_PROPS = {
  width: 20,
  height: 20,
  viewBox: '0 0 20 20',
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeWidth: 1.25,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

function BoatIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M3 13 L17 13 L15 16 L5 16 Z" />
      <line x1="10" y1="3" x2="10" y2="13" />
      <path d="M10 4 L15 12" />
      <path d="M2 17 Q4 16 6 17 T10 17 T14 17 T18 17" />
    </svg>
  );
}

function FerryIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M3 11 L17 11 L15 15 L5 15 Z" />
      <rect x="6" y="6" width="8" height="5" />
      <line x1="8" y1="6" x2="8" y2="11" />
      <line x1="12" y1="6" x2="12" y2="11" />
      <path d="M2 17 Q4 16 6 17 T10 17 T14 17 T18 17" />
    </svg>
  );
}

function FootIcon() {
  return (
    <svg {...ICON_PROPS}>
      <circle cx="9" cy="3.5" r="1.5" />
      <path d="M9 5 L7.5 10.5 L10 12.5 L12.5 17.5" />
      <path d="M7.5 10.5 L5 16" />
      <path d="M7.5 8 L11.5 9" />
    </svg>
  );
}

function HelicopterIcon() {
  return (
    <svg {...ICON_PROPS}>
      <line x1="3" y1="6" x2="17" y2="6" />
      <line x1="10" y1="6" x2="10" y2="9" />
      <path d="M5 9 L15 9 L14 13 L9 13 L6 15 L5 13 Z" />
      <line x1="12" y1="13" x2="14" y2="16" />
      <line x1="11" y1="16" x2="17" y2="16" />
    </svg>
  );
}
