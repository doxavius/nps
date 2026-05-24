import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      parchment: '#F0EBE0',
      ink: '#1A1A17',
      terracotta: '#C05E3C',
      forest: '#2B3A2E',
      slate: '#6B7B8D',
      sage: '#8A9A7B',
      bone: '#FAF7F2',
      water: '#7C9AAF',
      wine: '#992E40',
    },
    extend: {
      fontFamily: {
        spectral: ['var(--font-spectral)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        averia: ['var(--font-averia)', 'serif'],
        mallory: ['var(--font-mallory)', 'sans-serif'],
      },
      width: {
        sidebar: '480px',
      },
      maxWidth: {
        sidebar: '480px',
      },
      minWidth: {
        sidebar: '480px',
      },
    },
  },
  plugins: [],
};
export default config;
