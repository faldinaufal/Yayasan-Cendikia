/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
      "century": ['Century Gothic', 'sans-serif'],
      "poppins": ['Poppins', 'sans-serif']
    },
    borderWidth: {
      '0.5': '0.5px',
      '2': '2px',
      '1':'1px',
      '4':'4px'
    },
    fontSize: {
      '44': '44px',
      '70':'70px',
      '60': '60px',
      '22':'22px',
      '30':'30px',
      '35':'35px',
      '25':'25px',
      '23':'23px',
      '20':'20px',
      '18':'18px',
      '16':'16px',
      '15':'15px'
    },
    extend: {},
  },
  plugins: [],
}
