/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**.tsx"
  ],
  theme: {
    extend: {
      colors: {
        greenote: {
          600: '#04D361'
        }
      }
    },
  },
  plugins: [],
}

