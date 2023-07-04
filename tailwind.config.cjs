/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#f9004d",
        primary: "#191919",
        DimPink: "#fcfc",
      },
      fontFamily: {
        Josefin: ["Josefin Sans", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      ls: "1450px",
      xl: "1700px",
    },
  },
  plugins: [],
};
