/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(-4deg)' },
          '20%': { transform: 'rotate(0deg)' },
          '30%': { transform: 'rotate(-4deg)' },
          '40%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(-4.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        'waving-flag': 'wave 10s linear infinite',
      }
    },
  },
  plugins: [],
}