/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#ffffff',
      'blue': '#4083a1',
      'blue-light': '#9dc5d5',
      'orange': '#eb6448',
      'black': '#362722',
      'gray': '#333333',
      'gray-light': '#d3dce6',
    },
  },
  plugins: [],
};
