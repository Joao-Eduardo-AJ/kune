import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        accent: '#14EA8A',
        'accent-aux': '#A0FF57',
        'grayscale-100': '#F5F8F5',
        'grayscale-200': '#E0E7E2',
        'grayscale-300': '#C6C9C7',
        'grayscale-400': '#A1A7A3',
        'grayscale-500': '#7B867E',
        'grayscale-600': '#5F6D63',
        'grayscale-700': '#4B564E',
        'grayscale-800': '#313E35',
        'grayscale-900': '#161D19'
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        rethink: ['var(--rethink-sans)']
      }
    }
  },
  plugins: []
} satisfies Config
