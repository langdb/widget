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
      darkContainer: '#212121',  
      darkHeader: '#2c2c2c',
      darkcolorGray: 'rgb(155 155 155)',
      darkcolorWhite: 'rgb(236, 236, 236)',
      primary: {
        50: 'var(--widget-primary-50)',
        100: 'var(--widget-primary-100)',
        200: 'var(--widget-primary-200)',
        300: 'var(--widget-primary-300)',
        400: 'var(--widget-primary-400)',
        500: 'var(--widget-primary-500)',
        600: 'var(--widget-primary-600)',
        700: 'var(--widget-primary-700)',
        800: 'var(--widget-primary-800)',
        900: 'var(--widget-primary-900)',
        DEFAULT: 'var(--widget-primary-default)',
      },
      text: {
        DEFAULT: 'var(--widget-text-color)',
      },
      background: 'var(--widget-background-color)',
      header: 'var(--widget-header-color)',
      border: 'var(--widget-border-color)',
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
