/* eslint-disable no-undef */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {},
  },
  theme: {
    extend: {
      colors: {
        'primary-green': '#2a5913',
      },
      height: {
        120: '30rem',
      },
    },
  },
  plugins: [],
}
