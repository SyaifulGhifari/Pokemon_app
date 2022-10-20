/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: { 'custom-yellow': 'rgba(255, 210, 0, 0.4)' },
      spacing: { nav: '820px' },
    },
    fontFamily: {
      arcade: ['"Press Start 2P"'],
    },
  },
  plugins: [],
};
