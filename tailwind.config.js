/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        color1: "#EFEFEF"
      },
      width:{
        312: "312px",
        72: "72px"
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}

