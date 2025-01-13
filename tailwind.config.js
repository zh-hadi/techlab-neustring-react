/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-linear': 'bg-clip-text bg-gradient-to-r from-purple-400  to-red-500',
        'border-gradient': 'linear-gradient(78.86deg, #82BC34 6.42%, #CEDD45 96.24%)',
      },
    },
  },
  plugins: [],
}