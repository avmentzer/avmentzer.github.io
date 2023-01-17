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
      }
    }
  }

}