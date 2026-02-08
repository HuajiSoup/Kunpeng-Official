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
        primary: {
          DEFAULT: "#2563eb", // 低饱和度蓝色（Apple风格）
          dark: "#1e40af",
          light: "#3b82f6",
        },
        secondary: {
          DEFAULT: "#6b7280",
          light: "#9ca3af",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      lineClamp: {
        3: "3",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'gradient-radial-at-t': 'radial-gradient(circle at top, var(--tw-gradient-stops))',
        'gradient-radial-at-b': 'radial-gradient(circle at bottom, var(--tw-gradient-stops))',
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'grid-scroll': 'grid-scroll 20s linear infinite',
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
  safelist: [
    'md:col-span-1',
    'md:col-span-2',
    'md:col-span-3',
    'md:col-span-4',
  ],
};
export default config;
