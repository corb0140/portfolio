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
      screens: {
        xs: "375px",
        sm: "440px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Fira: ["Fira Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
