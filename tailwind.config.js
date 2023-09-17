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
        72: "72px",
        470: "470px"
      },
      spacing:{
        'three': "3px",
        'twoHalf': "2.8px"
      },
      screens:{
        670: "670px",
        480: "485px"
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}

