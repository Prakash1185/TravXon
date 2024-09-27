/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "bgColor":"#090910",
        "yellowColor":"#FFC600"
      }
    },
  },
  plugins: [],
}