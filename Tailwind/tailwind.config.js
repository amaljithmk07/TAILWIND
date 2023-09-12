/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
// Initialization for ES Users
import {
  Carousel,
  initTE,
} from "tw-elements";

initTE({ Carousel });