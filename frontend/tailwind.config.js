/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all files in src for Tailwind classes
    "./public/index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
