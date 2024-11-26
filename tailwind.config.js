/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#FFA07A", // Light Salmon
          DEFAULT: "#FF7F50", // Coral
          dark: "#FF6347", // Tomato
        },
        secondary: {
          light: "#FFD700", // Gold
          DEFAULT: "#FFA500", // Orange
          dark: "#FF8C00", // Dark Orange
        },
        background: "#FFF5E6", // Very Light Peach
        text: "#4A4A4A", // Dark Gray
      },
      borderRadius: {
        none: "0",
      },
    },
  },
  plugins: [],
};
