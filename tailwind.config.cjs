/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  // media:跟随系统（win10在个性化-颜色-选择默认应用模式  中修改）   class:手动通过事件改变
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [],
  variants: {
    extend: {}
  },
}
