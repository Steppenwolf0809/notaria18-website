/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#E9F2FC",
          500: "#0E5AA7",
          600: "#0B4E92",
          700: "#0A437E",
          800: "#083A66"
        },
        accent: "#27B3E6",
        ink: "#0F172A",
        muted: "#64748B",
        surface: "#F8FAFC",
        blue: {
          700: "#0078A0",
          800: "#006080",
          900: "#004C66",
        },
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(180deg,#0E5AA7 0%,#083A66 100%)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"]
      }
    }
  },
  plugins: []
};