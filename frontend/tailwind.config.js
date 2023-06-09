/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        off: "#f371ff",
        light: "rgb(209,213,219)",
        dark: "rgb(36,36,36)",
      },
    },
    fontFamily: {
      mont: ["Montserrat", "sans-serif"],
      rob: ["Roboto", "sans-serif"],
      danc: ["Dancing Script", "cursive"],
      popp: ["Poppins", "sans-serif"],
      open: ["Open Sans", "sans-serif"],
      vibes: ["Great Vibes", "cursive"],
      rubik: ["Rubik", "sans-serif"],
    },
  },
  plugins: [],
};
