// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed1: "#FF0000",
        CustomGray: "#D9D9D9",
      },
    },
    fontFamily: {
      fira: ["Fira Code", "monospace"],
    },
  },
  plugins: [],
};
