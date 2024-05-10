/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        primeryColor:'#a6c5f7',
        secondaryColor:'#c9d8f0',
        mainColor:'#1a331f'
      },
      textShadow:{
        sm: '0 1px 2px #a6c5f7',
        DEFAULT: '0 2px 4px #a6c5f7',
        lg: '0 8px 16px #a6c5f7',
      }
    },
  },
  plugins: [
    plugin(function({matchUtilities, theme }){
      matchUtilities({
        'text-shadow':(value)=>({
          textShadow:value,
        })
      },{
        values:theme('textShadow')
      })
    })
  ],
}