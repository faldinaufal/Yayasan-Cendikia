/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
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
        '92%': '92%',
        '100%': '100%',
        '260': '260px',
        '282': '282px',
        '588': '588px',
      },
      height: {
        '40': '40px',
      },
      borderWidth: {
        '1': '1px'
      },
      fontSize: {
        '16': '16px',
        '18': '18px',
        '24': '24px'
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
      fontFamily: {
        inter: ['Inter'],
        century : ['Century Gothic']
      },
    },
    container: {
      center: true,
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
      }
    },
  },
  plugins: [],
}
