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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        gunsan: ['var(--font-gunsan)', 'sans-serif']
      },
      backgroundColor: {
        cream: '#f1e2d3'
      },
      textColor: {
        cream: '#f1e2d3'
      },
      screens: {
        '4xl': '2250px',
        '3xl': '2000px'
      }
    },
  },
  plugins: [],
};
export default config;
