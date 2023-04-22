/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f8f9fa",
        black: "#000",
        linen: "#f8eee3",
        lightgray: "#d0d0d0",
        "black-4": "#5e6366",
        white: "#fff",
        green: "#097150",
        darkgray: "#abafb1",
        normal: "#f58850",
        "black-5": "#2b2f32",
        "gray-300": "#d0d5dd",
        "grey-grey-700": "#48505e",
        "primary-primary-700": "#0f50aa",
        "grey-grey-500": "#667085",
        "primary-primary-600": "#1366d9",
        coral: "#f5884e",
        "gray-900": "#101828",
        "grey-grey-800": "#383e49",
        darkslategray: "#064f38",
        "grey-grey-900": "#2b2f38",
      },
      fontFamily: {
        "input-placeholder": "Inter",
        roboto: "Roboto",
        poppins: "Poppins",
      },
      borderRadius: {
        "6xl": "25px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "6xl": "25px",
      xs: "12px",
      sm: "14px",
      "11xl": "30px",
    },
    screens: {
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};