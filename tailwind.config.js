/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", //it will take CSS files only, it won't take JS, JSX, TS, TSX
  ],
  theme: {
    extend: {
      borderColor:{
        'primary':'rgb(129, 125, 205)',
        'secondary':'#2b2d77'
      }
    },
    fontFamily: {
      'hero-font' : 'Sriracha',
    }
  },
  plugins: [],
}


