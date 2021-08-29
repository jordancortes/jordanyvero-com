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
        primary: "#b79265",
        secondary: "#2c6e49",
        ash: "#373F41",
        rock: "#c3cbcd",
      },
      minWidth: {
        "9/10": "90%",
      },
      lineHeight: {
        0: "0",
      },
      backgroundImage: (theme) => ({
        dot: "url('/images/index/dot.png')",
        "dot-gray": "url('/images/global/dot-gray.png')",
        event: "url('/images/wedding/event.jpg')",
        transport: "url('/images/wedding/transport.jpg')",
        important: "url('/images/wedding/important.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
