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
      colors: {
        background: {
          DEFAULT: gray[100],
          dark: gray[900],
        },
        primary: {
          DEFAULT: green[600],
        },
        text: {
          DEFAULT: green[400],
          darkt: green[600],
          dark: green[800],
        },
        textSec: {
          DEFAULT: emerald[400],
          dark: emerald[600],
        },
        border: {
          DEFAULT: green[300],
          dark: green[700],
        },
      },
    },
  },
  plugins: [],
}

