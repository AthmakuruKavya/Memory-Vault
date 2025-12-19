/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff0f3', // Background (soft pink)
          100: '#fde8fb', // Accent tint (very light)
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#e05bc0', 
          600: '#c84db2', // ✅ Primary (light purple)
          700: '#b5179e', // Primary (hover / darker)
          800: '#9d1685',
          900: '#86198f',
        },
        'off-white': '#F5F5F4',
      }
    },
  },
  plugins: [],
}