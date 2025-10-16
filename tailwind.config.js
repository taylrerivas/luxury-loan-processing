/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        luxe: {
          black: "#0E0E0E",
          charcoal: "#1B1B1B",
          gold: "#B79A5B",
          warm: "#F9F7F3"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)"
      },
      borderRadius: {
        xl2: "1rem"
      }
    },
  },
  plugins: [],
}
