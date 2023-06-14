import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {

    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      colors:{
        'main': '#39C881'
      },
    },
  },
};
