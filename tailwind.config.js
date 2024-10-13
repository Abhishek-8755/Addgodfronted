/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        80: '20rem',  // Custom height for mobile (can be adjusted)
        120: '35rem',  // Custom height for larger screens (can be adjusted)
      },
    },
  },
  plugins: [],
}
