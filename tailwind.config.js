module.exports = {
  mode: "jit",
  content: ["./src/components/*.{js,jsx}"],
  theme: {
    colors: {
      navbar: "#283149",
      redish: "red",
      white: "white",
    },
    extend: {},
  },
  variants: {},
  plugins: [
    require("@fortawesome/react-fontawesome"),
    require("@fortawesome/free-solid-svg-icons"),
  ],
};
