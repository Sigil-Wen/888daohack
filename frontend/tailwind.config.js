/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ['/**/*.{js,ts,jsx,tsx}'],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        EuclidSquareLight: ["Euclid-Square-Light", "sans-serif"],
        EuclidSquareRegular: ["Euclid-Square-Regular", "sans-serif"],
        EuclidSquareMedium: ["Euclid-Square-Medium", "sans-serif"],
        EuclidSquareSemiBold: ["Euclid-Square-SemiBold", "sans-serif"],
        EuclidSquareBold: ["Euclid-Square-Bold", "sans-serif"],
      },
    },
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      brand: {
        900: "#3981F6",
        800: "#82BEFF",
        700: "#ACD4FF",
        600: "#D5E9FF",
      },
      dark: {
        900: "#000",
        800: "#151515",
        700: "#2C2C2C",
        600: "#ADB2BE",
        500: "#CDCDDA",
      },
      light: {
        900: "#FCFCFC",
        800: "#F8F8F8",
        700: "#F4F4F4",
        600: "#EDEDED",
        500: "#E4E5E9",
      },
    },
  },
  plugins: [
  ],
};