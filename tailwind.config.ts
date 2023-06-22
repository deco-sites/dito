import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      fontSize: {
        title: ["55px", "1"],
        secondaryTitle: ["40px", "1.1"],
      },
      colors: {
        "main": "#39C881",
      },
      boxShadow: {
        "form": "inset 0px 2px 3px #dddddd",
      },
    },
  },
};
