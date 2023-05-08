/* eslint-disable no-undef */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    transparent: "transparent",
    current: "currentColor",
    "base-blue": "#1F7BE5",
    "hover-blue": "#005CC6",
    extend: {
      colors: {
        bg: {
          muted: 50, //cancasbackground
          subtle: 100, // lightbackground
          default: 500, //background
          emphasis: 600, //darkbackground
          strong: 800, //darkestbackground
          inverted: 950, //new
        },
        border: {
          muted: 100, // new
          subtle: 200, //lightBorder
          default: 500, //border
          emphasis: 700, //darkborder
        },
        ring: {
          subtle: 200, //lightring
          default: 300, //ring
        },
        content: {
          subtle: 400, //lighttext
          default: 500, //text, //icon
          emphasis: 700, //darktext
          strong: 800, //darkesttext
          inverted: WHITE, //new
        },
      },
    },
  },
  plugins: [],
};
