/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      lightgrey: "#D8D8D8",
      darkgrey: "#2B3844",
      darkblue: "#202C36",
      white: "#fff",
      black: "#111517",
    },
  },
  plugins: [],
};
