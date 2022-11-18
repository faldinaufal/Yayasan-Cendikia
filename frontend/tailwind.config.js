/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,tsx}'
  ],
  theme: {
    fontFamily: {
      "century": ['Century Gothic', 'sans-serif'],
      "poppins": ['Poppins', 'sans-serif']
    },
    borderWidth: {
      '0.5': '0.5px'
    },
    fontSize: {
      '44': '44px',
      '22':'22px',
      '18':'18px'
    },
    extend: {},
  },
  plugins: [],
}
