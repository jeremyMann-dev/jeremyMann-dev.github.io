module.exports = {
  purge: [],
  darkMode: 'media', // or 'false' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      fontStyle: ['hover', 'focus'],
      fontWeight: ['hover', 'focus'],
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
