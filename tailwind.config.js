/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#050A18',
        navy: { light: '#1E293B', DEFAULT: '#0F172A', dark: '#020617' },
        gold: { light: '#E5C97F', DEFAULT: '#D4AF37', dark: '#B8860B' },
        champagne: '#F7E7CE',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
