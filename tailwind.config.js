const { DEFAULT_RUNTIME_WEBPACK } = require('next/dist/shared/lib/constants');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  prefix: "",
  theme: {
	container: {
		center: true,
		padding: "15px",
		screens: {
			sm: "640px",
			md: "768px",
			lg: "960px",
			xl: "1280px",
		},
	},
	fontFamily: {
		primary: "var(--font-playfair)",
	},
  	extend: {
  		colors: {
			// maybe reconsider changing the colors 
			primary: "#9fb1bcff", /*light slate gray*/
			accent: {
				// default is the hover thats already clicked
				DEFAULT: "#344850", /*accent for light mode*/
				hover: "#2e5266ff" /*sapphire hover*/
				// Hex codes: Sapphire (#2E5266FF), Light Slate Gray (#6E8898FF), Cadet Gray (#9FB1BCFF), and American Silver (#D3D0CBFF)
			},
			secondary: {
				DEFAULT: "#9FB1BCFF", /*space cadet gray light mode*/
				hover: "#6e8898ff", /*light slate gray hover for secondary */
				dark: "#24347FF", /*gunmetal in dark mode*/
			},
  		},
		// Defined shadows for light and dark mode
		// modify boxshadow to the nav or logo
		dropShadow: {
			//light mode shadow
			glow: [
				"0 0px 20px rgba(0, 0, 255, 70)", 
				"0 0px 65px rgba(0, 0, 255, 8)"
			],
			darkGlow: [
				"0 0px 20px rgba(255, 255, 255, 70)",
				"0 0px 65px rgba(255, 255, 255, 8)",
			],
		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};