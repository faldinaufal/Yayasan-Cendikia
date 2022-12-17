/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        'dark': '#262626',
        'white': '#FFFFFF',
        'sosmed': '#484D56',
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
        '40': '40px',
        '65': '65px',
        '58': '48px',
        '49': '49px',
        '43': '43px',
        '80%': '80%',
        '95%': '95%',
        '100%': '100%',
        '230': '230px',
        '260': '260px',
        '282': '282px',
        '340': '340px',
        '400': '400px',
        '500': '500px',
        '588': '588px',
      },
      height: {
        '2': '2px',
        '40': '40px',
      },
      borderWidth: {
        '1': '1px'
      },
      colors: {
        'dark': '#262626',
        'gray2': '#6B7280',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'century': ['Century Gothic', 'sans-serif']
      },
      fontSize: {
        '12': '12px',
        '16': '16px',
        '18': '18px',
        '22': '22px',
        '24': '24px',
        '34': '34px',
        '36': '36px',
      },
      lineHeight: {
        '24': '24px',
        '30': '30px'
      },
      fontWeight: {
        '400': '400',
        '600': '700',
        '700': '700',
      },
    },
  },
  plugins: [],
}
