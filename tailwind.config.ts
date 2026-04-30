import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAFAF7',
        'ivory-dark': '#F0EFE8',
        'royal-blue': '#1B3A7A',
        'royal-blue-light': '#2B5099',
        'royal-blue-deep': '#0F2554',
        gold: '#C9993A',
        'gold-light': '#E8B84B',
        'gold-pale': '#F5E6C4',
        crimson: '#8B1A2E',
        'crimson-light': '#A82038',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
