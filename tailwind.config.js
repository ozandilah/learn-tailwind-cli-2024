/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./*.js",
    "public/styles/**/*.css",
    "./public/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        customGray: "#f9f9f9",
        grapeColor: "#A0199A",
        slateColor: "#4E4E4E",
      },
    },
  },
  plugins: [],
};
