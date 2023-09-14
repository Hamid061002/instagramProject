/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        color1: "#EFEFEF"
      },
      width:{
        312: "312px"
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}

