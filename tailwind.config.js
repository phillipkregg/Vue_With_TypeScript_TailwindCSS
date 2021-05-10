module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      dosis: ["Dosis"],
      inconsolata: ["Inconsolata"],
      pacifico: ["Pacifico"],
      dancingScript: ["Dancing Script"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  //important: "html",
  plugins: [require("@tailwindcss/typography")],
};
