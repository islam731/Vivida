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
      backgroundImage: {
        'bg-qazaq': "url('./public/qazaq.jpg')",
      }
    },
    plugins: [
      require('tailwindcss-animated')
    ],
  },
}

