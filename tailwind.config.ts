import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F766E",
        secondary: "#0F172A",
        accent: "#14B8A6",
        background: "#F8FAFC",
        foreground: "#0F172A",
      },
    },
  },
  plugins: [],
};
export default config;
