/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      purple: '#3f3cbb',
      midnight: '#121063',
      metal: '#565584',
      tahiti: '#3ab7bf',
      silver: '#ecebff',
      bubbleGum: '#ff77e9',
      bermuda: '#78dcca',
      black: '#000000',
      red: '#ef4444',
    },
  },
  theme: {
    screens: {
      'tablet': '320px',
      // => @media (min-width: 320px) { ... }

      'laptop': '768px',
      // => @media (min-width: 768px) { ... }

      'desktop': '1440px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
