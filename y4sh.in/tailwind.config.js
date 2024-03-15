/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fira: ["Fira Code", "sans-serif"],
        parth: ["Titillium Web", "sans-serif"],
      },
    },
  },
  plugins: [],
}