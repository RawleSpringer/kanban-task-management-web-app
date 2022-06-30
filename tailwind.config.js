/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      black: '#000112',
      white: '#FFFFFF',
      red: '#EA5555',
      'main-purple': '#635FC7',
      'main-purple-hover': '#A8A4FF',
      'light-grey': '#E4EBFA',
      'very-dark-grey': '#20212C',
      'dark-grey': '#2B2C37',
      'medium-grey': '#828FA3',
      'dark-lines': '#3E3F4E',
      'light-lines': '#E4EBFA',
      'light-grey': '#F4F7FD',
      'red-hover': '#FF9898',
    },
  },
  plugins: [],
};
