/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        'Axiforma': ['Axiforma', 'sans-serif'],
      },

      colors: {
        'dark': '#222222',
        'brandGreen': '#66ae33',
        'success' : '#40a829',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}