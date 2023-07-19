/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "sm": "480px",
        "lg": "1024px",

      },
      spacing:{
        "big": "48rem"
      },
    
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
  },
  },
  plugins: [],
};
