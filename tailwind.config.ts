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
      fontSize: {
        h1: '56px',
        h2: '48px',
        h3: '40px'
      },
      animation: {
        waves: 'waves 2s linear infinite',
        status: 'status 2s linear infinite',
        'project-card': 'project-card 1.5s ease-in-out forwards'
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
        },
        'project-card': {
          '50%': {
            'max-width': '560px',
            padding: '20px',
            bottom: '180px',
            left: '16px'
          },
          '100%': {
            'max-width': '592px',
            padding: '0px',
            bottom: '0px',
            left: '0px',
            'z-index': '2'
          }
        }
      }
    }
  },
  plugins: []
} satisfies Config
