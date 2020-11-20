const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: ['./src/**/*.js'],
  },
  theme: {
    typography: (theme) => ({
      default: {
        css: {
          h3: {
            color: theme('colors.gray.100'),
          },
        },
      },
      // this doesn't work.. with prose-custom class; not sure why
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
  variants: {
    shadowOutline: ['focus'],
    backgroundColor: ['disabled', 'hover'],
    cursor: ['disabled'],
    opacity: ['disabled', 'hover'],
    textColor: ['disabled', 'hover'],
    boxShadow: ['responsive', 'hover', 'focus', 'group-focus'],
  },
  plugins: [
    require('@tailwindcss/ui'),
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
