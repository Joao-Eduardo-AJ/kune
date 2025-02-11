import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      animation: {
        bloom: 'bloom 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        customers: 'customers 20s linear infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        project: 'project 1.5s ease-in-out forwards'
      },
      backgroundPosition: {
        'pos-0': '0%',
        'pos-100': '100%'
      },
      colors: {
        grayscale: {
          50: '#FFFFFF',
          100: '#F5F8F5',
          200: '#E0E7E2',
          300: '#C6C9C7',
          400: '#A1A7A3',
          500: '#7B867E',
          600: '#626A64',
          700: '#4C554E',
          800: '#333C36',
          900: '#161D19'
        },
        accent: {
          light: '#A0FF57',
          DEFAULT: '#14EA8A'
        }
      },
      lineHeight: {
        '6.5': '1.625rem' /* 26 px */
      },
      fontFamily: {
        outfit: ['var(--font-outfit)']
      },
      screens: {
        xs: '360px'
      },
      keyframes: {
        bloom: {
          '75%, 100%': {
            transform: 'scale(1.1, 1.41)',
            opacity: '0'
          }
        },
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
        }
      }
    }
  },
  plugins: []
} satisfies Config
