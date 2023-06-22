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
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1200px",
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
