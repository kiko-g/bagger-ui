import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
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
          50: '#f5fffb',
          100: '#ddf0e9',
          200: '#c4e1d7',
          300: '#acd3c5',
          400: '#93c4b3',
          500: '#7bb5a2',
          600: '#62a690',
          700: '#4a977e',
          800: '#31896c',
          900: '#197a5a',
          950: '#005649',
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
