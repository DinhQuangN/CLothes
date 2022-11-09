/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderColor:{
        border1px:'1px solid rgba(255,255,255,0.1'
      },
      boxShadow:{
        border20px:'0 0 20px rgba(7,15,15,0.5)',
      },
      borderRadius:{
        borderInherit:'inherit'
      }
    },
  },
  plugins: [],
}
