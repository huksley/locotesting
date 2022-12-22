/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { fontFamily: { "open-sans": "'Open Sans'" } },
    colors: {
      white: "#fff",
      brown: "#9b1010",
      gray: {
        "100": "#6b7b8c",
        "200": "#5b5b5b",
        "300": "#454d63",
        "400": "#323232",
        "500": "#202020",
        "600": "#092340",
      },
    },
    fontSize: { xs: "10px", sm: "12px", base: "14px", lg: "18px", xl: "21px" },
  },
  corePlugins: { preflight: false },
};
