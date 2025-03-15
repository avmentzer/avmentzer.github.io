/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{html,js}',
    './styles/*.css'  // Add this line to include the components.css file
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
      },
      keyframes: {
        fadeInSlideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fadeInSlideLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        shimmer: {
          '0%': {
            'background-position': '200% 0'
          },
          '100%': {
            'background-position': '-200% 0'
          }
        }
      },
      animation: {
        fadeInSlideUp: 'fadeInSlideUp 0.5s ease-out forwards',
        fadeInSlideLeft: 'fadeInSlideLeft 0.8s ease-out forwards',
        shimmer: 'shimmer 3s linear infinite'
      },
      backgroundImage: {
        'shimmer-gradient': 'linear-gradient(90deg, rgba(59, 130, 246, 0) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(59, 130, 246, 0) 100%)'
      },
      transitionDelay: {
        '0': '0ms',
        '200': '200ms',
        '400': '400ms',
        '600': '600ms',
      },
      clipPath: {
        'diagonal': 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
      },
      colors: {
        'power-primary': '#742774',
        'power-secondary': '#464EB8',
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.clip-diagonal': {
          clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
  corePlugins: {
    // ...existing core plugins...
  },
  variants: {
    extend: {
      // ...existing variants...
    },
  }
}