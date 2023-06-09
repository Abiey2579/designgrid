/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dgWhite: "#FFFFFF",
        dgBlack: "#000000",
        dgLightPurple: "#F3EFFE",
        dgPurple: "#7026ED",
        dgMagenta: "#E93558",
        dgDarkPurple: "#241F38",
        dgDarkPurple_Opacity: "#241F38d9",
        dgFacebook: "#0981EC",
        dgBorder: "rbga(21,4,37,12%)",
        dgLightPurple_Opacity: "#f3effe1f",
        dgPurple_Opacity: "#7026ed1f",
      },
    },
  },
  plugins: [],
};
