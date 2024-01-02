/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mob: "320px",
        // => @media (min-width: 640px) { ... }

        tab: "768px",
        // => @media (min-width: 768px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1500px",
        // => @media (min-width: 1536px) { ... }
      },
      container: {
        center: true,
      },
      colors: {
        "red-color": "#EB2A2E",
        "text-primary-color": "#323232",
        "text-secondary-color": "#808080",
        "border-color": "#D9D9D9",
      },
      backgroundImage: {
        "footer-img": "url('/images/Footer.png')",
      },
    },
  },
  plugins: [],
};
