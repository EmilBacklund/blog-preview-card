/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: '#F4D04E',
        black: '#111111',
        grey: '#7F7F7F',
        'pure-white': '#FFFFFF',
      },
      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
      },
      boxShadow: {
        blogShadow: '8px 8px 0px 0px #000',
        blogShadowHover: '16px 16px 0px 0px #000',
      },
    },
  },
  plugins: [],
};
