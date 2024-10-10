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
          50: '#f8fbff',
          100: '#f2f9ff',
          200: '#e2eafa',
          300: '#cbd7ec',
          400: '#94a7c3',
          500: '#647796',
          600: '#475874',
          700: '#334460',
          800: '#1e2c46',
          900: '#0f1a35',
          950: '#020922',
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
