/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // The design uses a clean sans-serif like Inter
      },
      colors: {
        red: {
          50: '#fef2f2',
          100: '#fee2e2',
          600: '#dc2626', // Main brand color
          700: '#b91c1c', // Hover state
        }
      }
    },
  },
  plugins: [],
}