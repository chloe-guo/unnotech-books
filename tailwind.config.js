module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xl: { 'max': '1440px' },
      lg: { 'max': '960px' },
      md: { 'max': '640px' },
      sm: {'max': '425px'},
    },
    fontFamily: {
      display: ["Montserrat", "sans-serif"],
      body: ["Montserrat", "sans-serif"],
    },
    fontSize: {
      sm: ['12px', '18px'],
      base: ['14px', '22px'],
      lg: ['16px', '26px'],
      xl: ['18px', '36px'],
      '24': ['24px', '26px'],
    },
    fontWeight: {
      normal: 500,
      bold: 700,
    },
    colors: {
      dark: "#204051",
      deep: "#3b6978",
      light: "#84a9ac",
      pale: "#e4e3e3",
      white: "#ffffff",
      black: "#000000"
    },
    spacing: {
      '0': '0',
      '5': '5px',
      '8': '8px',
      '10': '10px',
      '15': '15px',
      '20': '20px',
      '25': '25px',
      '30': '30px',
      '35': '35px',
      '40': '40px',
      '53': '53px',
      '60': '60px',
    },
    inset: {
      '35': '35px',
    },
    borderRadius: {
      'none': '0',
      default: '15px',
    },
    boxShadow: {
      none: 'none',
      sm: '6px 6px 8px rgba(32, 64, 81, .8)',
      default: '10px 10px 15px rgba(32, 64, 81, .4)',
      inner: 'inset 0px 0px 5px rgba(32, 64, 81, .2)',
    },
    transitionProperty: {
      'card': 'box-shadow, transform',
    },
    flex: {
      '1/3': '0 0 calc(33% - 40px)',
      '1/2sm': '0 0 calc(50% - 40px)',
      '1/2lg': '0 0 calc(50% - 20px)',
    },
    extend: {
      width: {
        '1280': '1280px',
        '325': '325px',
        '120': '120px',
        '36': '36px',
        '30': '30px',
        '95p': '95%',
      },
      height: {
        '400': '400px',
        '36': '36px',
        '7/10': '70%',
        '3/10': '30%',
        '35vw': '35vw',
        '26vw': '26vw',
        '55vw': '55vw',
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
