/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/images/test.png')",
      },
      colors: {
        "light-blue": "#F2F6FF",
        "dark-blue": "#18183A",
        golden: "#6CC57C",
        "light-gray": "#73879F",
      },
    },
  },
  plugins: [],
}
