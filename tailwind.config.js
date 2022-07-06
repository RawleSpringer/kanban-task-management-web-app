/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        480: '30rem',
        523: '32.688rem',
        675: '42.188rem',
        416: '26rem',
        276: '17.25rem',
      },
    },
    colors: {
      black: '#000112',
      white: '#FFFFFF',
      red: '#EA5555',
      green: '#49C4E5',
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
