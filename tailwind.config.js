// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    typography: (theme) => ({
      default: {
        css: {
          h3: {
            color: theme('colors.gray.100'),
          },
        },
      },
      custom: {
        css: {
          h3: {
            color: theme('colors.gray.100'),
          },
        },
      },
    }),
    fontFamily: {
      'ez-light': ['EZLight'],
      'ez-medium': ['EZMedium'],
      'ez-bold': ['EZBold'],
    },
    extend: {
      backgroundImage: (theme) => ({
        'site-bg':
          "linear-gradient(to top, rgba(175,175,201,0.42), rgba(175,175,201,0.42)), url('/bg.jpg')",
      }),
      backgroundColor: (theme) => ({
        'nav-bg': 'rgba(0,19,67,.95)',
        'trans-bg': 'rgba(34,36,43,.859)',
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addBase, addComponents, theme }) {
      addBase([
        {
          '@font-face': {
            fontFamily: 'EZLight',
            src: 'url("/fonts/ez-sans-light.woff2") format("woff2")',
          },
        },
        {
          '@font-face': {
            fontFamily: 'EZMedium',
            src: 'url("/fonts/ez-sans-medium.woff2") format("woff2")',
          },
        },
        {
          '@font-face': {
            fontFamily: 'EZBold',
            src: 'url("/fonts/ez-sans-bold.woff2") format("woff2")',
          },
        },
      ]);
    },
  ],
};
