/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{jsx,js}'],
  theme: {
    colors: {
      groundColor: '#121212',
      textGray: '#b3b3b3',
      textComun: '#f4f4f4',
      textGreenSpotify: '#1ed760',
      groundDark: '#242424',
      textWhite: '#fff',
      arrowGround: '#050505',
      cardGround: '#181818',
    },
    dropShadow: {
      '3xl': '0px 0px 10px 3px #050505',
    },
    backgroundImage: {
      gradientRadial:
        'linear-gradient(180deg, rgba(30,215,96,1) -300px, rgba(101,44,209,0) 30%)',
    },
    extend: {
      keyframes: {
        'fade-in-y': {
          '0%': { opacity: 0, transform: 'translateY(25px)' },
          '100%': { opacity: 1, transform: 'translateY(0px)' },
        },
      },
      animation: {
        'fade-in-y': 'fade-in-y 1s linear',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
}
