const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
  theme: {
    extend: {
      spacing: {
        44: '44%',
        9: '9%',
        icon: '20%',
        iconBG: '30%',
      },
      boxShadow: {
        you: '0px 1px 2px rgba(1, 66, 82, 0.3), 0px 1px 3px 1px rgba(1, 66, 82, 0.15)',
      },
      translate: {
        yS: '15%',
      },

      lineHeight: {
        1.36: '1.36',
      },
      padding: {
        6.5: '26px',
        13: '52px',
        15: '60px',
        46: '188px',
        54: '218px',
      },
      margin: {
        6.5: '26px',
        13: '52px',
        22: '92px',
        50: '200px',
      },
      fontFamily: {
        caveat: 'Caveat,sans-serif',
      },
      fontSize: {
        34: ['34px', '46.3px'],
      },
      width: {
        50: '200px',
        70: '280px',
        81: '324px',
        524: '524px',
        630: '630px',
        648: '648px',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      main: '#00A5CC',
      black: '#05202C',
      white: '#FAFCFC',
      hoverPrice: '#E5FBFF',
      likeGrey: '#9AC9D4',
      background: '#F5F9FA',
      backgroundSecond: '#FFF8F4',
      bright: '#ADF0FE',
      mainLight: '#CFEDF3',
      orangeContrast: '#FBF1EB',
      error: '#E74A3B',
      mainSecond: '#EF7229',
      mainSecondLight: '#FF9B62',
      orangeDark: '#4D2107',
      orangeDirty: '#F3AE86',
      realWrite: '#FFFFFF',
      iconBg: '#DCF2F6',
      buttonMobile: '#01BBD4',
    },
    screens: {
      tablet: '320px',
      // => @media (min-width: 320px) { ... }

      laptop: '768px',
      // => @media (min-width: 768px) { ... }

      desktop: '1440px',
      // => @media (min-width: 1280px) { ... }
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
    plugin(({ addUtilities, addComponents, theme }) => {
      addComponents({
        '.btn-primary': {
          color: theme('colors.white'),
          backgroundColor: theme('colors.main'),
          display: 'block',
          fontSize: 18,
          fontWeight: 600,
          lineHeight: 1.36,
          marginRight: 'auto',
          marginLeft: 'auto',
        },
        '.title-primary': {
          color: theme('colors.main'),
          fontSize: 20,
          fontWeight: 600,
          lineHeight: 1.32,
          textAlign: 'center',
          letterSpacing: 0.15,
        },
        '.title-secondary': {
          color: theme('colors.orangeDark'),
          fontSize: 20,
          fontWeight: 500,
          lineHeight: 1.32,
          textAlign: 'center',
          letterSpacing: 0.15,
        },
        '.text-caveat': {
          color: theme('colors.main'),
          fontFamily: 'Caveat,sans-serif',
          fontSize: 24,
          lineHeight: 1.36,
          letterSpacing: 0.25,
        },
      });
    }),
  ],
};
