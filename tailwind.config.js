/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navbar: "#171a21",
        main: "#1b2838",
        main2: "#2a475e",
        bglight: "#95bbd4",
        text1: "#c5c3c0",
        text2: "#66c0f4",
        text3: "#4f94bc",
      },
      screens: {
        "2xl": "1450px",
      },
    },
  },
  plugins: [],
};
