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
        dgDarkPurple: "#150425",
        dgDarkPurple_Opacity: "#150425d9",
        dgFacebook: "#0981EC",
      },
    },
  },
  plugins: [],
};
