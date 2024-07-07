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
        'beige': 	{
          200: '#FAF0E6',
          500: '#EED9C4',
          700: '#D9B99B',
        }
      }
    },
  },
  plugins: [],
};
export default config;
