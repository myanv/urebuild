/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
  ],
  theme: {
    extend: {
      colors: {
        'ur-1-dark': '#12263A',
        'ur-1-blue': '#06BCC1',
        'ur-1-green': '#C5D8D1',
        'ur-1-light': '#F4EDEA',
        'ur-1-yellow': '#F4D1AE',
      }
    },
  },
  plugins: [require("daisyui")],
}