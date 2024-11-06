/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#202124',
          surface: '#35363a',
          text: '#e8eaed',
          secondary: '#9aa0a6',
          border: '#35363a',
        },
      },
    },
  },
  plugins: [],
};