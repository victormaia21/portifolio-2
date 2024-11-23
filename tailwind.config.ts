import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      gridTemplateColumns: {
        "habilitiys": "repeat(auto-fit, minmax(8em, 1fr))",
        "projects": "repeat(auto-fit, minmax(4em, 1fr))"
      },
      
    },
  },
  plugins: [],
} satisfies Config;
