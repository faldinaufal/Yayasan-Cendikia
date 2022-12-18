/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#262626',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'century': ['Century Gothic', 'sans-serif']
      },
      fontWeight: {
        '400': '400',
        '600': '700',
        '700': '700',
      },
      container: {
        center: true,
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1200px',
        }
      }
    },
  },
  plugins: [],
}
