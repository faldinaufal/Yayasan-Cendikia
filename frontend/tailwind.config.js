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
      '70':'70px',
      '60': '60px',
      '22':'22px',
      '30':'30px',
      '35':'35px',
      '25':'25px',
      '20':'20px',
      '18':'18px'
    },
    extend: {},
  },
  plugins: [],
}
