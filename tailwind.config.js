/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',  // Add paths to your HTML and TS files
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-primeui')],
}