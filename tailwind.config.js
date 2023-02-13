module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      inset: {
        "-15px": "-15px",
      },
      colors: {
        icon: "#be9a78",
        capacity: "#777",
        button: "#eaeaea",
        customT: "#777",
        borderL: "#95a0a7",
      },
      width: {
        352: "22rem",
      },
      height: {
        544: "34rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
