import { type Config } from 'tailwindcss'
import formsPlugin from '@tailwindcss/forms'
import animatePlugin from 'tailwindcss-animate'
import scrollbarPlugin from 'tailwind-scrollbar'
import headlessuiPlugin from '@headlessui/tailwindcss'
import typographyPlugin from '@tailwindcss/typography'
import { fontFamily } from 'tailwindcss/defaultTheme'

import typographyStyles from './typography'

const config: Config = {
  content: ['./src/**/*.{js,mjs,jsx,ts,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      '3xs': ['0.60rem', { lineHeight: '0.75rem' }],
      '2xs': ['0.75rem', { lineHeight: '1.2rem' }],
      xs: ['0.8125rem', { lineHeight: '1.25rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    fontFamily: {
      sans: ['var(--font-geist-sans)', ...fontFamily.sans],
      mono: ['var(--font-geist-mono)', ...fontFamily.mono],
    },
    typography: 'typographyStyles',
    extend: {
      colors: {
        background: 'var(--background-color)',
        slate: {
          '150': '#eaeef4',
        },
        zinc: {
          '150': '#f0f0f1',
          '925': '#121215',
        },
        primary: {
          DEFAULT: '#1474d6',
          '50': '#f0f8ff',
          '100': '#dff1fe',
          '200': '#bce0fd',
          '300': '#85cafe',
          '400': '#4db0f9',
          '500': '#3393f8',
          '600': '#1474d6',
          '700': '#115ea4',
          '800': '#114a97',
          '900': '#132f78',
          '950': '#0d2a4d',
        },
        secondary: {
          DEFAULT: '#7bb5a2',
          '50': '#f5fffb',
          '100': '#ddf0e9',
          '200': '#c4e1d7',
          '300': '#acd3c5',
          '400': '#93c4b3',
          '500': '#7bb5a2',
          '600': '#62a690',
          '700': '#4a977e',
          '800': '#31896c',
          '900': '#197a5a',
          '950': '#005649',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        glow: '0 0 4px rgb(0 0 0 / 0.1)',
      },
      maxWidth: {
        lg: '33rem',
        '2xl': '40rem',
        '3xl': '50rem',
        '5xl': '66rem',
        '8xl': '88rem',
      },
      opacity: {
        '1': '0.01',
        '15': '0.15',
        '2.5': '0.025',
        '7.5': '0.075',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [scrollbarPlugin, formsPlugin, animatePlugin, typographyPlugin, headlessuiPlugin],
}
export default config
