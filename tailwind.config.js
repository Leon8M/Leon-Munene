/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        accent: "#00AEEF", // Light Blue
        light: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
