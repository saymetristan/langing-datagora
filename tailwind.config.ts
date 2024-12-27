import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5B8FB9',
        secondary: '#301E67',
        accent: '#B6EADA',
        dark: '#03001C',
      },
    },
  },
  plugins: [],
} satisfies Config;
