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
        'communtiy-head': 'linear-gradient(78.86deg, #45A2D1 6.42%, #F75C62 96.24%)',
        'green-gradient': 'linear-gradient(78.86deg, #82BC34 6.42%, #CEDD45 96.24%)',
        'blue-red-gradient': 'linear-gradient(78.86deg, #45A2D1 6.42%, #F75C62 96.24%)',
        'community-card': 'linear-gradient(130.34deg, rgba(217, 238, 246, 0.3) 0%, rgba(113, 135, 184, 0.3) 100%)',
        'gray-gradient': 'linear-gradient(78.86deg, rgba(216, 216, 216, 0.3) 6.42%, rgba(208, 208, 208, 0.3) 96.24%)',
      
      },
      fontFamily: {
        montserrat: ['Montserrat', 'serif'],
      },
      utilities: {
        ".scrollbar-hidden": {
          "-ms-overflow-style": "none", 
          "scrollbar-width": "none", 
          "&::-webkit-scrollbar": {
            display: "none", 
          },
        },
      },
    },
  },
  plugins: [],
}