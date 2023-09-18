/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        color1: "#EFEFEF"
      },
      width:{
        66: "62px",
        72: "72px",
        185: "185px",
        190: "190px",
        287: "287px",
        312: "312px",
        400: "400px",
        470: "470px",
        450: "450px",
        500: "500px",
        550: "550px",
        600: "600px",
      },
      height:{
        66: "62px"
      },
      spacing:{
        'three': "3px",
        3.5:"3.5px",
        'twoHalf': "2.8px",
        1: "1px",
        '4px': "4px"
      },
      screens:{
        670: "670px",
        480: "485px",
        1160: "1160px"
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}

