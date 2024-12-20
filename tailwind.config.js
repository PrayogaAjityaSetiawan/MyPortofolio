/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Primary: ['Oswald', 'sans-serif'],
        Secondary: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

