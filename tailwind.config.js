/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'romantic-cream': '#fdfbf7',
        'romantic-blush': '#f5e6e8',
        'romantic-rose': '#e2a7a9',
        'romantic-warm': '#e8d5c4',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        handwriting: ['"Caveat"', 'cursive'],
      }
    },
  },
  plugins: [],
}
