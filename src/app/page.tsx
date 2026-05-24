import dynamic from 'next/dynamic';

const MapView = dynamic(
  () => import('@/components/MapView').then((m) => m.MapView),
  { ssr: false },
);

export default function Home() {
  return (
    <main className="fixed inset-0 h-screen w-screen overflow-hidden">
      <MapView />
    </main>
  );
}
