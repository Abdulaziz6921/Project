/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a3048",
        secondary: "#FFA200",
        dark_like: "#4F46E5",
        gray_like: "#2A2931",
      },
    },
  },
  plugins: [],
};
