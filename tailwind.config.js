/** @type {import('tailwindcss').Config} */
let colors = {
  blue: {
    50: '#f1f7fd',
    100: '#e0edf9',
    200: '#b7d7f2',
    300: '#a2cdee',
    400: '#76b2e4',
    500: '#5695db',
    600: '#417ccf',
    700: '#3868bd',
    800: '#33559a',
    900: '#2d497b'
  },
  indigo: {
    50: '#f4f2fc',
    100: '#e6e3f6',
    200: '#d2cdf0',
    300: '#b2aae6',
    400: '#8f81d9',
    500: '#7a63ce',
    600: '#6f4fc1',
    700: '#6945b0',
    800: '#583b8b',
    900: '#4a3573'
  },

  purple: {
    50: '#f7f7fb',
    100: '#f2eff8',
    200: '#e7e2f2',
    300: '#d3cae8',
    400: '#bcacd9',
    500: '#ad95ce',
    600: '#926fb8',
    700: '#805ca5',
    800: '#6c4d8a',
    900: '#5a4072'
  },
  pink: {
    50: '#fbf4f7',
    100: '#f8ebf0',
    200: '#f2d8e4',
    300: '#edc6d6',
    400: '#da8cab',
    500: '#cb698c',
    600: '#b74b6d',
    700: '#9d3956',
    800: '#823247',
    900: '#6d2e3f'
  },
  red: {
    50: '#fef3f2',
    100: '#fee3e2',
    200: '#fecdca',
    300: '#fda9a4',
    400: '#f8665e',
    500: '#f04c43',
    600: '#dd2f25',
    700: '#ba231b',
    800: '#9a211a',
    900: '#80211c'
  },
  orange: {
    50: '#fff7eb',
    100: '#fde9c8',
    200: '#fbd18c',
    300: '#f8ae44',
    400: '#f79828',
    500: '#f07510',
    600: '#d5530a',
    700: '#b1360c',
    800: '#8f2b11',
    900: '#762411'
  },
  yellow: {
    50: '#fdfee8',
    100: '#fffdd6',
    200: '#fbff89',
    300: '#f5ff41',
    400: '#feff0d',
    500: '#fff200',
    600: '#f2c94c',
    700: '#e2a521',
    800: '#89650a',
    900: '#74520f'
  },
  green: {
    50: '#f0fdf9',
    100: '#ccfbec',
    200: '#99f6db',
    300: '#5eeac6',
    400: '#2dd4ae',
    500: '#14bb98',
    600: '#0d947b',
    700: '#0f7664',
    800: '#115e51',
    900: '#134e44'
  },
  teal: {
    50: '#effcfc',
    100: '#d6f6f7',
    200: '#b3ebee',
    300: '#7edbe2',
    400: '#42c2ce',
    500: '#28adbb',
    600: '#238797',
    700: '#226d7c',
    800: '#245966',
    900: '#224b57'
  },
  white: '#fff',
  black: '#1d1d1d',
  gray: {
    100: '#f8f9fa',
    200: '#e9ecef',
    300: '#dee2e6',
    400: '#ced4da',
    500: '#adb5bd',
    600: '#868e96',
    700: '#495057',
    800: '#292e32',
    900: '#212529'
  }
}

module.exports = {
  darkMode: 'selector',
  content: ['./**/*.html', './src/**/*.js'],
  theme: {
    extend: {
      colors: {
        ...colors,
        brand: "#66AAB0",
      },
      container: {
        center: true
      },
      fontSize: {
        sm: '0.875rem',
        standard: '0.938rem',
        base: '1rem',
        med: '1.125rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '1.875rem',
        '3xl': '2.275rem',
        '4xl': '3.25rem'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
