/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-bg': '#404258',
        'card-color': '#474E68'
      },
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}