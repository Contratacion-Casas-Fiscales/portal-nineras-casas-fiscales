/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '13': '3.25rem',
        '21': '5.25rem',
        '34': '8.5rem'
      }
    },
  },
  plugins: [],
}
