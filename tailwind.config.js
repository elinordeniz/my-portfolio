/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", './node_modules/@my-company/tailwind-components/**/*.js',],
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
