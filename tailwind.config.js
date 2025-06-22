/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./app/*.{ts,tsx,js,jsx}",    // Expo Router pages
    "./components/**/*.{ts,tsx,js,jsx}",    // Components/screens
  ],
  
  presets: [require("nativewind/preset")],

  theme: {
    extend: {},
  },
  plugins: [],
};