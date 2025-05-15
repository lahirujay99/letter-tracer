
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Make sure this line covers your source files
  ],
  theme: {
    extend: {
      colors: { // Add your suggested colors here for easy use
        'guide-stroke': '#D1D5DB', // A light gray (Tailwind gray-300)
        'trace-stroke-kid': '#3B82F6', // A vibrant blue (Tailwind blue-500)
        'app-bg': '#EFF6FF', // A very light blue (Tailwind blue-100)
        'button-bg': '#2563EB', // A good blue for buttons (Tailwind blue-600)
        'button-text': '#FFFFFF', // White
      }
    },
  },
  plugins: [],
}