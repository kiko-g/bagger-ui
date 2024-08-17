import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "2xs": "0.625rem",
        "3xs": "0.55rem",
      },
      colors: {
        slate: {
          150: "#eaeef4",
        },
        primary: {
          DEFAULT: "#506c7f",
          50: "#f8faff",
          100: "#e0e6f1",
          200: "#c8d1dd",
          300: "#b0bdcc",
          400: "#98a9ba",
          500: "#8095a9",
          600: "#688097",
          700: "#506c85",
          800: "#385873",
          900: "#204362",
          950: "#082f4f",
        },
        secondary: {
          DEFAULT: "#6d859f",
          50: "#f0f9ff",
          100: "#dde8f1",
          200: "#cbd8e4",
          300: "#b8c7d6",
          400: "#a5b7c8",
          500: "#93a6bb",
          600: "#8095ad",
          700: "#6d859f",
          800: "#5a7491",
          900: "#486484",
          950: "#355376",
        },
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"), // npm i --save-dev tailwind-scrollbar
    require("@tailwindcss/forms"), // npm i --save-dev @tailwindcss/forms
    require("@tailwindcss/typography"), // npm i --save-dev @tailwindcss/typography
  ],
}
export default config
