module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {


    extend: {
      colors: {
        main: '#1890ff'
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
