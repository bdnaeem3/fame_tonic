// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ["var(--font-urbanist)", "sans-serif"],
        figtree: ["var(--font-figtree)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
