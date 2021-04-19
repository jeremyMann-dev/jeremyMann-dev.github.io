module.exports = {
  purge: [
    './*.html',
    './*.css',
    './script/*.js'
  ],
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
