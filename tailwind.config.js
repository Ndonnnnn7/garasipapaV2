/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackSoft: "#1A1A1A",
        whiteSoft: "#F5F5F5",
        dark: "#121321",
      },
    },
  },
  plugins: [],
}