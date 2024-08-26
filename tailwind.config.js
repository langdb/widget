import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter var", ...defaultTheme.fontFamily.sans],
    },
    colors: {
      ...colors,
      darkContainer: '#202020',  
      darkHeader: '#2c2c2c',
      primary: {
        100: '#f3d8e8',
        200: '#e5aed1',
        300: '#d983b9',
        400: 'rgb(176, 72, 140)',
        500: '#bf2e8a',
        600: '#a52675',
        700: '#811e5e',
        800: '#5d1647',
        900: '#370d2f',
        DEFAULT: 'rgb(176, 72, 140)'
      }
    },
    keyframes: {
      slideDown: {
        from: { height: "0px" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      slideUp: {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0px" },
      },
    },
    animation: {
      slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      fadeIn: "fadeIn 500ms ease-in-out",
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
  ],
};
