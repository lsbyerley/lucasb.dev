// tailwind.config.js
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        'display': ['EZLight', 'sans-serif'],
        'display-medium': ['EZMedium', 'sans-serif'],
        'display-bold': ['EZBold', 'sans-serif']
      },
      fontSize: {
        xxs: ".5rem"
      }
    }
  },
  variants: {},
  plugins: []
};