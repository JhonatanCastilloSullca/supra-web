import flowbite from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js"

  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',
      },
      colors: {
        primarySupra: '#6D6E71',
        morado: '#5363A9',
        naranja: '#F07D46',
        celeste: '#3EC0C9',
        amarillo: '#F5C92D',
      },
    },
  },
  plugins: [
    flowbite,
  ],

}

