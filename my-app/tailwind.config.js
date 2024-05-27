/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    boxShadow: {
      '3xl': '0px 5px 7px  rgba(27, 27, 27)',
      '2xl': '0px 3px 5px rgba(43, 42, 42)'
    }, 
    
    extend: {},
  },
  plugins: [],
}