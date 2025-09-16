/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        colors: {
        'bg-g': '#A3DC9A',
        'bg-p': '#FFD6BA',
        'bg-y':'#DEE791',
        'bg-n': '#FFF9BD'

      },
    },
  },
  plugins: [],
}
