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
          50: "#fdfbf7",
          100: "#f8f5ee",
          200: "#eee7d8",
          300: "#dfd2b9",
          800: "#2d2822",
          900: "#1a1612",
        },
        ink: {
          50: "#f6f6f7",
          100: "#e3e3e5",
          800: "#27272a",
          900: "#18181b",
          950: "#09090b",
        },
        gold: {
          400: "#e6c35c",
          500: "#d4af37",
          600: "#b59127",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
        hindi: ["var(--font-noto-hindi)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      backgroundImage: {
        "paper-texture": "radial-gradient(#e5e7eb 1px, transparent 1px)",
        "vignette": "radial-gradient(circle, transparent 60%, rgba(0,0,0,0.4) 100%)",
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
export default config;
