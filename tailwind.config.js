module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1140px',
    },
    extend: {
      container: {
        center: true,
        padding: '1rem',

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
