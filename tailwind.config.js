/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'chewy': "Chewy, system-ui",
        'balsamiq': "Balsamiq Sans, sans-serif",
      },
      container: {
        padding: "20px",
        center: true,
        screens: {
          'sm': "640px",
          'md': "768px",
          'lg': "1024px",
          'xl': "1180px",
        }
      },
      colors: {
        'green': "#0A4740",
        'yellow': "#FBA11D",
        'skyBlue': "#23AAAC",
        'orange': "#D45B07",
        'pink': "#FB5352",
        'liteGreen': "#8EC627",
      }
    },
  },
  plugins: [],
}