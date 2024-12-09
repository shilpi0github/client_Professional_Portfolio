module.exports = {
  darkMode: 'class', // Enable dark mode using a class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "357px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      colors: {
        bodyColor: "#36454F",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg , #1e2024, #23272b",
        designColor: "#FF00FF",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #36454F",
      },

      hover:{
          hoveer:"hover:bg-gradient-to-b hover:from-gray-900  bg-gradient-to-r from-bodyColor to-[#hover:gray-900 transition-colors duration-1000"
      },
    },
  },
  plugins: [],
};
