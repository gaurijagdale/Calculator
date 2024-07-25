/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'M': '#a2bbd4'
      },
      fontFamily: {
        'Robo': ['Roboto Slab', 'sans-serif'],
        'Josef': ['Josefin Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

