import type { Metadata } from 'next';
import { Spectral, Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-spectral',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
});

const averia = localFont({
  src: [
    {
      path: '../fonts/AveriaSerifLibre-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/AveriaSerifLibre-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/AveriaSerifLibre-Regular.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/AveriaSerifLibre-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-averia',
  display: 'swap',
});

const mallory = localFont({
  src: [
    {
      path: '../fonts/Mallory Compact Book.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Mallory Compact Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Mallory Compact Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-mallory',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'India National Parks',
  description: 'A directory of India’s national parks.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spectral.variable} ${inter.variable} ${averia.variable} ${mallory.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
