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
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1200px',
        }
      },
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      colors: {
        "main": "#39C881",
      },
    },
  },
};
