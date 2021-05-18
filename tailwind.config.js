/* eslint-disable no-undef */
module.exports = {
  purge: ['src/pages/**/*.{js,ts,jsx,tsx}', 'src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {},
  },
  theme: {
    extend: {
      colors: {
        'primary-green': '#2a5913',
        black: '#373b3e',
        'gray-600': '#606b76',
      },
      height: {
        120: '30rem',
      },
    },
  },
  plugins: [],
}
