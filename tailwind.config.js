/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { boxShadow: {
      'custom-shadow': '0 4px 6px rgba(0, 0, 0, 0.8)',
    },},
  },
  plugins: [],
};
