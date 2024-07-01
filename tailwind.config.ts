import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#fff',
        /*'darkBlue': '#151320',
        'mainPurple': '#6A267B',

        'gray800': '#202024',
        'gray300': '#c4c4cc',
        'gray100': '#e1e1e6',

        'green500': '#00875f',
        'green300': '#00b37e'*/
      }
    },
  },
  plugins: [],
};
export default config;
