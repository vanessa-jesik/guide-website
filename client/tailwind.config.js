/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        lapis: { light: "#0AB3F6", DEFAULT: "#05668D", dark: "#044964" },
        sky: { light: "#74A4C6", DEFAULT: "#427AA1", dark: "#2F5672" },
        alice: { light: "#F1F6FB", DEFAULT: "#EBF2FA", dark: "#76A6DD" },
        hunter: { light: "#60A86E", DEFAULT: "#386641", dark: "#27472E" },
        asparagus: { light: "#94BC7D", DEFAULT: "#6A994E", dark: "#496A37" },
        parchment: { light: "#F6EFDD", DEFAULT: "#F2E8CF", dark: "#D5B565" },
        shimmer: { light: "#D17E80", DEFAULT: "#BC4749", dark: "#863032" },
      },
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
};
