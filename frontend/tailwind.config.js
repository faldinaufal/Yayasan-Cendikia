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
        'gray3': '#484D56',
        'Text-Title' : '#262626',
        'Text-Paragraph' : '#484D56'
      },
      backgroundImage: {
        'vector': "url('/src/assets/image/Vector.png')",
        'Background-AboutUs' : "url('/src/assets/image/FrameBackgroundSectionAboutUs.svg')",
        bgLogin : "url('/src/assets/image/image-login.svg')"
      },
      backgroundColor: {
        admin: '#f0f2f5',
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
      'navbar': '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)',
      'navadmn': '0 4px 6px -1px rgb(0 0 0 / 0.1)',
      'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1)'
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
