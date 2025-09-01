import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#f3f5ff",
          100: "#e8ecff",
          200: "#cfd6ff",
          300: "#aab6ff",
          400: "#7c8bff",
          500: "#5566ff",   // primary
          600: "#3f4fe0",
          700: "#2f3bb3",
          800: "#242e8a",
          900: "#1f276f",
        }
      }
    },
  },
  plugins: [],
};
export default config;
