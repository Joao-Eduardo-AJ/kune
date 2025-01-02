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
        'accent-shadow': '#14EA8A3D',

        'accent-aux': '#A0FF57',
        'accent-aux-shadow': '#A0FF573D',

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
        outfit: ['var(--font-outfit)']
      },
      animation: {
        waves: 'waves 2s linear infinite',
        status: 'status 2s linear infinite'
      },
      keyframes: {
        waves: {
          '100%': {
            width: 'calc(100% + 32px)',
            height: 'calc(100% + 32px)',
            opacity: '0',
            'border-radius': '24px'
          }
        },
        status: {
          '100%': {
            width: 'calc(100% + 16px)',
            height: 'calc(100% + 16px)',
            opacity: '0'
          }
        }
      }
    }
  },
  plugins: []
} satisfies Config
