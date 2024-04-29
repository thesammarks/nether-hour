import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'nh-black': 'rgba(0, 0, 0, 0.2)',
        'nh-white': 'rgb(229,227,211,1)',
        'nh-white-light': 'rgb(229,227,211,0.4)',
      },
    },
  },
  plugins: [],
};
export default config;
