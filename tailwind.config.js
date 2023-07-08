/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '50rem',
      },
      animationDelay: {
        275: '275ms',
        5000: '5s',
      },
      animationDuration: {
        2000: '2s',
        'long': '10s',
        'very-long': '20s',
      },
      backgroundImage: {
        'lightblue': "url('./public/lightblue.jpg')"
      }
    },
    plugins: [
      require('tailwindcss-animated')
    ],
  },
}

