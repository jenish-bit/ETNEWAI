/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#FF6B35', hover: '#E85A24', light: 'rgba(255,107,53,0.15)' },
        accent: { DEFAULT: '#FFB347', light: 'rgba(255,179,71,0.15)' },
        bg: { DEFAULT: '#080C1A', 2: '#0D1326', 3: '#111827' },
        surface: { DEFAULT: 'rgba(255,255,255,0.05)', hover: 'rgba(255,255,255,0.09)', strong: 'rgba(255,255,255,0.12)' },
        border: { DEFAULT: 'rgba(255,255,255,0.10)', strong: 'rgba(255,255,255,0.18)', orange: 'rgba(255,107,53,0.35)' },
        fg: { DEFAULT: '#F0F4FF', muted: 'rgba(240,244,255,0.60)', dim: 'rgba(240,244,255,0.35)' },
        gold: '#D6B876',
        forest: '#183729',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};