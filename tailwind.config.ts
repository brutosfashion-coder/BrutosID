import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#C9A96E",
          "gold-dark": "#B8944D",
          cream: "#F5F0EB",
          beige: "#EDE6DD",
          brown: "#3C2A21",
          "brown-light": "#4A3728",
          charcoal: "#3B2F2F",
          muted: "#8C7E74",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
