/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {},
    width: {
      dojo: "1000px",
    },
    maxWidth: {
      dojo: "1000px",
    },
    boxShadow: {
      button_1: "0px 0px 14px 4px rgba(0,67,152, 0.638822)",
      border_1:
        "0px 0px 4px 1px rgba(97,255,252, 1) inset, 0px 0px 4px 1px rgba(40,211,255, 0.778382)",
    },
  },
  plugins: [],
};
