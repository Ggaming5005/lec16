/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },

    extend: {
      colors: {
        primaryRed: 'hsl(0, 100%, 74%)',
        primaryGreen: 'hsl(154, 59%, 51%)',
        accentBlue: 'hsl(248, 32%, 49%)',
        neutralDarkBlue: 'hsl(249, 10%, 26%)',
        neutralGrayishBlue: 'hsl(246, 25%, 77%)',
      },
    },
  },
  plugins: [],
}
