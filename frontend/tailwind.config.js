/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#262626',
        'gray1': '#9CA3AF',
        'gray2': '#6B7280',
        'gray3': '#484D56'
      },
      backgroundImage: {
        'vector': "url('/src/assets/image/Vector.png')",
        'image-login': "url('/src/assets/image/image-login.png')"
      },
      fontWeight: {
        '400': '400',
        '600': '600',
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
        xl: '1200px',
      }
    },
    boxShadow: {
      'card': '0px 8px 16px rgba(0, 0, 0, 0.15)',
      'box':  '0px 8px 12px rgba(0, 0, 0, 0.25)',
      'navbar': '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)'
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
