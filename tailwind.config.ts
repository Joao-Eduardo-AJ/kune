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
        'accent-shadow': 'rgba(20, 234, 138, 0.4)',

        'accent-aux': '#A0FF57',
        'accent-aux-shadow': 'rgba(160, 255, 87, 0.4)',

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
        'h1-xs': '32px',
        'h1-md': '44px',
        'h1-xl': '56px',

        'h2-xs': '28px',
        'h2-md': '38px',
        'h2-xl': '48px',

        'h3-xs': '24px',
        'h3-md': '32px',
        'h3-xl': '40px'
      },
      lineHeight: {
        'h1-xs': '42px',
        'h1-md': '54px',
        'h1-xl': '66px',

        'h2-xs': '38px',
        'h2-md': '48px',
        'h2-xl': '58px',

        'h3-xs': '34px',
        'h3-md': '42px',
        'h3-xl': '50px'
      },
      screens: {
        xs: '360px'
      },
      animation: {
        customers: 'customers linear infinite',
        project: 'project 1.5s ease-in-out forwards',
        status: 'status 2s linear infinite',
        waves: 'waves 2s linear infinite'
      },
      keyframes: {
        customers: {
          '100%': { transform: 'translateX(-100%)' }
        },
        project: {
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
        },
        status: {
          '100%': {
            width: 'calc(100% + 16px)',
            height: 'calc(100% + 16px)',
            opacity: '0'
          }
        },
        waves: {
          '100%': {
            width: 'calc(100% + 32px)',
            height: 'calc(100% + 32px)',
            opacity: '0',
            'border-radius': '24px'
          }
        }
      }
    }
  },
  plugins: []
} satisfies Config
