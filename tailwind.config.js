module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue", "./src/**/*.ts"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      dosis: ["Dosis"],
      inconsolata: ["Inconsolata"],
      pacifico: ["Pacifico"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  important: "html",
  plugins: [require("@tailwindcss/typography")],
};