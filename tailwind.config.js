module.exports = {
  purge: [],
  // purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["TT Commons", "ui-sans-serif", "system-ui"],
      cursive: ["WindSong", "cursive"],
    },
    extend: {
      colors: {
        primary: "#B79265",
        secondary: "#2C6E49",
      },
      minWidth: {
        "9/10": "90%",
      },
      lineHeight: {
        0: "0",
      },
      backgroundImage: (theme) => ({
        dot: "url('/images/index/dot.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
