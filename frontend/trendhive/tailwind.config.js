/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        colors: {
        'bg-o': '#33372C',
        'bg-b': '#FEFAE0',
        'bg-y':'#DEE791',
        'bg-n': '#FFF9BD'

      },
    },
  },
  plugins: [],
}
