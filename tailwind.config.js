/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'glow': '0 0 15px rgba(255, 0, 0, 0.8)', // Custom red glow
      },
    },
  },
  plugins: [],
}
