import type { Config } from 'tailwindcss'

// Ported verbatim from the tailwind.config block in the original index.html.
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#081B33',
        emerald: '#0F8B6F',
        saffron: '#F28C28',
        ivory: '#FAFAF7',
        golden: '#E9B949',
        charcoal: '#111111',
      },
      fontFamily: {
        /* Type system mirrors youngintach.org: Roboto Condensed for text + headings,
           Roboto for nav/labels, Gotham for hero display, DK Brush Crush for accents. */
        head: ['Roboto Condensed', 'sans-serif'],
        body: ['Roboto Condensed', 'sans-serif'],
        label: ['Roboto', 'sans-serif'],
        brush: ['DK Brush Crush', 'cursive'],
        brushield: ['brushield', 'cursive'],
        gotham: ['Gotham', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
