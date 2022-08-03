/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
  },
  theme: {
    extend: {
      colors: {
        'Bright-Gray': '#E5E8F0',
        'American-Blue': '#2B2B36',
        Shark: '#22242c',
      },
    },
  },
};
