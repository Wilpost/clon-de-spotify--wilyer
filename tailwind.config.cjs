/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react')
// import animations from '@midudev/tailwind-animations'
// const plugin = require('tailwindcss/plugin')

export default {
  content: [
    'index.html',
    './src/**/*.{jsx,js}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui']
    },
    gridTemplateColumns: {
      tableGrid: '26px repeat(auto-fit, minmax(100px, 1fr))',
      recentCardsGrid: 'repeat(auto-fit, minmax(221px, 229px))',
      gridSectionTrend: 'repeat(auto-fit, minmax(100px, auto))'
    },
    colors: {
      groundColor: '#121212',
      tempBarColor: '#4d4d4d',
      textGray: '#b3b3b3',
      textComun: '#f4f4f4',
      textGreenSpotify: '#1ed760',
      groundDark: '#242424',
      textWhite: '#ffff',
      arrowGround: '#050505',
      cardGround: '#181818'
    },
    boxShadow: {
      '3xl': '0px 0px 10px 3px #201f1f1a',
      '4xl': '0px 0px 32px 3px #16161696',
      rigth: '1px 1px 10px #333'
    },
    backgroundImage: {
      gradientRadial: 'linear-gradient(0deg, #12121200 31%, #65677e 113%)'
    },
    keyframse: {
      fadeIn: {
        '0%, 100%': { opacity: 0.6 },
        '50%': { opacity: 0.9 }
      }
    },
    animation: {
      fadeIn: 'fadeIn 1s ease-in-out infinite'
    }
  },
  darkMode: 'class',
  plugins: [nextui()]
}
