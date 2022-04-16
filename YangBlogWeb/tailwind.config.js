module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily:{
      'mySan':["Comic Sans MS", 'cursive', 'sans-serif']
    },
    boxShadow:{
      smm:'0px 1px 5px 3px rgba(0, 0, 0, 0.3)',
      sml:'2px 2px 5px 3px rgba(0, 0, 0, 0.3)',
      smr:'-2px 2px 5px 3px rgba(0, 0, 0, 0.3)'
    },
    textColor: theme => theme('colors'),
    extend: {},
  },
  plugins: [],
}
