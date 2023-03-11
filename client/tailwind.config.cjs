/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'eth': "url('../src/assets/Rectangle.png')",
      },
    },
    
   
  },
  plugins: [],
}