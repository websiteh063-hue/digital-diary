import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          50: "#FCFBF7",
          100: "#F7F3E9",
          200: "#EFE6D5",
          300: "#DFCFA5",
          800: "#2B241F",
          900: "#1A1512",
        },
        rosewood: {
          50: "#fff1f2",
          100: "#ffe4e6",
          500: "#f43f5e",
          800: "#9f1239",
          900: "#4c0519",
        },
        gold: {
          300: "#F3E5AB",
          400: "#E6C35C",
          500: "#D4AF37",
          600: "#B59127",
          700: "#8A6D19",
        },
        emeraldish: {
          900: "#064e3b",
        },
        midnight: {
          800: "#1e1b4b",
          900: "#0f172a",
          950: "#050814",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
        calligraphy: ["var(--font-dancing-script)", "var(--font-satisfy)", "cursive", "serif"],
        hindi: ["var(--font-noto-hindi)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      backgroundImage: {
        "paper-texture": "radial-gradient(#d1d5db 1px, transparent 1px)",
        "hero-gradient-light": "radial-gradient(ellipse at top, rgba(251, 191, 36, 0.15), rgba(244, 63, 94, 0.08), transparent 70%)",
        "hero-gradient-dark": "radial-gradient(ellipse at top, rgba(212, 175, 55, 0.2), rgba(159, 18, 57, 0.25), transparent 70%)",
        "card-gradient": "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(253,251,247,0.4) 100%)",
        "dark-card-gradient": "linear-gradient(135deg, rgba(24,24,27,0.8) 0%, rgba(9,9,11,0.6) 100%)",
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
export default config;
