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
  			'3xs': '0.55rem'
  		},
  		colors: {
  			slate: {
  				'150': '#eaeef4'
  			},
  			primary: {
  				'50': '#f8faff',
  				'100': '#e0e6f1',
  				'200': '#c8d1dd',
  				'300': '#b0bdcc',
  				'400': '#98a9ba',
  				'500': '#8095a9',
  				'600': '#688097',
  				'700': '#506c85',
  				'800': '#385873',
  				'900': '#204362',
  				'950': '#082f4f',
  				DEFAULT: '#506c7f'
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
  				DEFAULT: '#6d859f'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    require('tailwind-scrollbar'), // npm i --save-dev tailwind-scrollbar
    require('@tailwindcss/forms'), // npm i --save-dev @tailwindcss/forms
    require('@tailwindcss/typography'), // npm i --save-dev @tailwindcss/typography
      require("tailwindcss-animate")
],
}
export default config
