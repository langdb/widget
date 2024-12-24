/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}",
  ],
  theme: {
    fontFamily: {
      'be-vietnam': ['"Be Vietnam Pro"', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '1rem',
        lg: '1rem',
        xl: '3rem',
        '2xl': '14rem',
      },
    },
    extend: {
      colors: {
        lightContainer: '#ffffff', // Light container color
        darkContainer: '#202020',  // Dark container color
        darkHeader: '#2c2c2c',
        secondary: 'var(--secondary-background)',
        slate: {
          800: 'var(--secondary-background)'
        },
        primary: {
          50: 'var(--primary-50)',
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          500: 'var(--primary-500)',
          600: 'var(--primary-600)',
          700: 'var(--primary-700)',
          800: 'var(--primary-800)',
          900: 'var(--primary-900)',
          DEFAULT: 'var(--primary-default)',
        },
        dark: {
          background: '#171717'
        },
        text: {
          DEFAULT: 'var(--text-color)',
          title: {
            light: colors.gray[900],
            dark: colors.white,
            DEFAULT: colors.gray[900]
          }
        },
        disabled: 'var(--disable-color)',
        background: 'var(--background-color)',
        header: 'var(--header-color)',
        border: 'var(--border-color)',
        secondaryBorder: 'var(--secondary-border-color)',
        secondaryText: 'var(--secondary-text)',
        // other color definitions...
      },

      borderColor: (theme) => ({
        ...theme('colors'),
        'dark-default': 'rgb(46, 46, 46)', // Default border color for dark mode
      }),
    },
    variants: {
      extend: {
        borderColor: ['dark'], // Enable dark variant for borderColor
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require("tailwindcss-animate"),
  ],
}