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
          50: '#f8fafd',
          100: '#f1f5fa',
          200: '#e2e8f1',
          300: '#cbd5e2',
          400: '#94a3b9',
          500: '#64748c',
          600: '#47556a',
          700: '#334156',
          800: '#1e293c',
          900: '#0f172b',
          950: '#020618',
          DEFAULT: '#47556a',
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
