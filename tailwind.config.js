/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html', './src/**/*.js'],
  theme: {
    extend: {
      colors: {
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
