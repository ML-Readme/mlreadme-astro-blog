/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,astro,mdx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: 'Oswald, ui-serif', // Adds a new `font-display` class
      },
      colors: {
        readme: {
          100: '#CCCCFF',
          200: '#9999FF',
          300: '#6666FF',
          400: '#3333FF',
          500: '#0000FF',
          600: '#0000CC',
          700: '#000099',
          800: '#000066',
          900: '#000033',
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

