/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-gray": "#565656",
        "theme-white": "#EFEFEF",
        "theme-dark-purple": "#3D00B7",
        "theme-light-purple": "#2639ED",
      },
    },
  },
  plugins: [],
};
