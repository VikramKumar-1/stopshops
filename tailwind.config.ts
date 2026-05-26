import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Semantic tokens — auto-switch via CSS variables
        surface: "var(--surface)",
        "surface-card": "var(--surface-card)",
        "surface-hover": "var(--surface-hover)",
        "surface-elevated": "var(--surface-elevated)",
        heading: "var(--heading)",
        body: "var(--body)",
        muted: "var(--muted)",
        subtle: "var(--subtle)",
        border: "var(--border)",

        // Bronze accent — same in both themes
        bronze: {
          50: "#faf6f1",
          100: "#f0e5d5",
          200: "#e0c9a9",
          300: "#cda876",
          400: "#bf8d51",
          500: "#b17a3f",
          600: "#9a6234",
          700: "#7d4b2c",
          800: "#683e2a",
          900: "#583526",
          950: "#311a12",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(191, 141, 81, 0.2)" },
          "100%": { boxShadow: "0 0 40px rgba(191, 141, 81, 0.4)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
