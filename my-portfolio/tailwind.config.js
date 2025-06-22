/** @type {import('tailwindcss').Config} */
import { green, emerald, gray, black, white } from "tailwindcss/colors"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s ease-in-out infinite',
      },
      colors: {
        background: {
          DEFAULT: gray[100],
          dark: gray[900],
        },
        primary: {
          DEFAULT: green[600],
          light: green[400],
        },
        secondary: {
          DEFAULT: emerald[700],
          light: emerald[500],
        },
        text: {
          DEFAULT: green[400],
          darkt: green[600],
          dark: green[700],
        },
        textSec: {
          DEFAULT: emerald[400],
          dark: emerald[600],
        },
        border: {
          DEFAULT: green[300],
          dark: green[700],
        },
        hover: {
          lighter: green[500],                
          darkerSel: green[700],                    
          darkerNor: green[100],                
        },
      },
    },
  },
  plugins: [],
}

