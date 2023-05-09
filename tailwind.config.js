/* eslint-disable no-undef */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    transparent: "transparent", // remove?
    current: "currentColor", // remove?
    "base-blue": "#1F7BE5", // remove?
    "hover-blue": "#005CC6", // remove?
    extend: {
      colors: {
        // primary: {
        //   muted: "#bae6fd", //canvasbackground
        //   subtle: "#7dd3fc", // lightbackground
        //   default: "#3b82f6", // background
        //   emphasis: "#1d4ed8", // darkbackground
        //   inverted: "#eff6ff", // new
        // },
        background: {
          muted: "#f9fafb", //canvasbackground
          subtle: "#f3f4f6", // lightbackground
          default: "#ffffff", // background
          emphasis: "#4b5563", // darkbackground
          strong: "#1f2937", // darkestbackground
          inverted: "#030712", // new
        },
        border: {
          muted: "#f3f4f6", // new
          subtle: "#e5e7eb", //lightBorder
          default: "#6b7280", //border
          emphasis: "#374151", //darkborder
        },
        ring: {
          subtle: "#e5e7eb", //lightring
          default: "#d1d5db", //ring
        },
        content: {
          subtle: "#9ca3af", //lighttext
          default: "#6b7280", //text, //icon
          emphasis: "#374151", //darktext
          strong: "#1f2937", //darkesttext
          inverted: "#ffffff", //new
        },
      },
    },
  },
  plugins: [],
};
