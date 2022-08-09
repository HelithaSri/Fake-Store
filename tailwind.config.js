/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: '#root',
  theme: {
    extend: {
      backgroundImage:{
        'login-img':"url('assets/images/background/loginBack.jpg')"
      }
    },
  },
  plugins: [],
}
