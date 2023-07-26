/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{html,js}'
  ],
  theme: {
    extend: {
      screens: {
        'xs': { 'raw': '(max-width: 639px)' },
        // => @media (max-width: 639px) { ... }
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'code': ['"Press Start 2P"', 'sans-serif']
      }
    }
  }

}