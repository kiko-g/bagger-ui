import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class', 'class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '2xs': '0.625rem',
        '3xs': '0.55rem',
      },
      colors: {
        slate: {
          '150': '#eaeef4',
        },
        primary: {
          50: '#f8faff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
          950: '#083344',
          DEFAULT: '#0e7490',
        },
        secondary: {
          '50': '#f0f9ff',
          '100': '#dde8f1',
          '200': '#cbd8e4',
          '300': '#b8c7d6',
          '400': '#a5b7c8',
          '500': '#93a6bb',
          '600': '#8095ad',
          '700': '#6d859f',
          '800': '#5a7491',
          '900': '#486484',
          '950': '#355376',
          DEFAULT: '#6d859f',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'), // npm i --save-dev tailwind-scrollbar
    require('@tailwindcss/forms'), // npm i --save-dev @tailwindcss/forms
    require('@tailwindcss/typography'), // npm i --save-dev @tailwindcss/typography
    require('tailwindcss-animate'),
  ],
}
export default config
