const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#4A4A4A", // Gris principal del logo
          hover: "#2D2D2D",
          light: "#7A7A7A",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#8B0000", // Rojo del logo
          hover: "#6B0000",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#FF4500", // Naranja del logo
          hover: "#CC3700",
          foreground: "#FFFFFF",
        },
        highlight: {
          DEFAULT: "#FFD700", // Amarillo del logo
          hover: "#CCB000",
          foreground: "#000000",
        },
        muted: {
          DEFAULT: "#F5F5F5",
          foreground: "#666666",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 3s ease-in-out infinite",
        gradient: "gradient 3s ease infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
