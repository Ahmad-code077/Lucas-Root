/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Abril: ['Abril Fatface', 'sans'],
        Roboto: ['Roboto Static', 'sans'],
        // arrow: ['Preahvihear'],
        // nav: ['Plus Jakarta Sans'],
        // poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'custom-light': '0 10px 20px 0 #00000040',
      },
    },
  },
  plugins: [],
};
