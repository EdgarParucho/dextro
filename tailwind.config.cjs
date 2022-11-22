const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          dark: colors.neutral['800'],
          darker: colors.neutral['900'],
          light: colors.neutral['100'],
          lighter: colors.white,
        },
        'secondary': {
          light: colors.neutral['400'],
          dark: colors.neutral['700']
        },
        'accent': colors.red['600'],
        'accent-darker': colors.red['700']
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
  darkMode: 'media'
}