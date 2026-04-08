import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: "#E8603D",
          light: "#ff7b57",
          dark: "#cf4b2d",
        },
        navy: {
          DEFAULT: "#0a0e1a",
          light: "#111827",
          mid: "#0f172a",
        },
        gold: {
          DEFAULT: "#c9a84c",
          light: "#e2c47e",
          dark: "#a07830",
        },
        cream: "#f8f7f4",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-playfair)"],
      },
    },
  },
  plugins: [],
};

export default config;
