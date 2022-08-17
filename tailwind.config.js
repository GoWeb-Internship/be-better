const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
  theme: {
    extend: {
      spacing: {
        you: '52%',
      },
      boxShadow: {
        you: '0px 1px 2px rgba(1, 66, 82, 0.3), 0px 1px 3px 1px rgba(1, 66, 82, 0.15)',
      },
      translate: {
        yS: '15%',
      },
      backgroundImage: {
        signature: "url('./src/images/signature.jpg')",
      },
      lineHeight: {
        1.36: '1.36',
      },
      margin: {
        13: '52px',
        6.5: '26px',
      },
      fontFamily: {
        caveat: 'Caveat,sans-serif',
      },
      width: {
        524: '524px',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      main: '#00A5CC',
      black: '#05202C',
      white: '#FAFCFC',
      likeGrey: '#9AC9D4',
      background: '#F5F9FA',
      backgroundSecond: '#FFF8F4',
      bright: '#ADF0FE',
      mainLight: '#CFEDF3',
      orangeContrast: '#FFCEB2',
      error: '#E74A3B',
      mainSecond: 'EF7229',
      mainSecondLight: 'FF9B62',
      orangeDark: '4D2107',
      orangeDirty: 'F3AE86',
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
          fontSize: 34,
          fontWeight: 600,
          lineHeight: 1.36,
          letterSpacing: 0.25,
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
