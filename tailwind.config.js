// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",  // appフォルダ内の全JS/TS/JSX/TSX
    "./src/**/*.{js,ts,jsx,tsx}",  // srcフォルダ内も必要に応じて
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
