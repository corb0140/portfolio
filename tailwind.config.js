/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background-image": "url('/bg.jpg')",
        "carousel-image": "url('/billie_bg.png')",
      },
      colors: {
        primary: `#252A34`,
        secondary: `#FF2E63`,
        accent: `#08D9D6`,
        textColor: `#EAEAEA`,
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Fira: ["Fira Mono", "monospace"],
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
