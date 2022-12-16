/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    backgroundColor: {
      'dark': '#262626',
      'white': '#FFFFFF',
      'fb': '#1877F2',
      'ig': '#E4405F',
      'twitter': '#1DA1F2',
      'tiktok': '#EE1D51',
      'yt': '#CD201F',
      'wa': '#25D366',
      'gmail': '#9146ff',
      'btn-art': '#009FCC',
      'hr': '#6B7280'
    },
    width: {
      '80%': '80%',
      '92%': '92%',
      '100%': '100%',
      '70': '70px',
      '150': '150px',
      '230': '230px',
      '530': '530px'
    },
    borderWidth: {
      '1': '1px'
    },
    fontSize: {
      '13': '13px',
      '14': '14px',
      '15': '15px',
      '16': '16px',
      '17': '17px',
      '18': '18px',
      '20': '20px',
    },
    fontWeight: {
      '400': '400',
      '500': '500',
      '600': '700',
      '700': '700',
      '800': '800',
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
      'century': ['Century Gothic', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
