/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],

  //kendi tema ayarlarımızı eklemek için theme  kullanıyoruz
  theme: {
       //eger tailwindin default theme ayarlarını kullanmaya devam etmek istiyorsak mutlaka kendi ayarlarımızı extend içine eklemeliyiz diger türlü kendi default değerlerini kullanamayız

    extend: {
      colors:{
        "gray-dark-main": "#23242a",
        "gray-dark-second": "#28292d",
        "gray-light":"#d3dce6",
        "red-main":"#ff4b45",
      }
    },
  },
  darkMode: 'class',
  plugins: [require("tw-elements/dist/plugin")],
};
