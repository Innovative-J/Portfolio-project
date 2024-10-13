const { DEFAULT_RUNTIME_WEBPACK } = require('next/dist/shared/lib/constants');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
	container: {
		center: true,
		padding: "15px",
		screens: {
			sm: "640px",
			md: "768px",
			lg: "960px",
			xl: "1200px",
		},
	},
	fontFamily: {
		primary: "var(--font-playfair)",
	},
  	extend: {
  		colors: {
			// maybe reconsider changing the colors 
			// textColor: "#B9C1C4",
			primary: "#9fb1bcff",
			accent: {
				// default is the hover thats already clicked
				DEFAULT: "#344850",
				hover: "#2e5266ff"
				// Hex codes: Sapphire (#2E5266FF), Light Slate Gray (#6E8898FF), Cadet Gray (#9FB1BCFF), and American Silver (#D3D0CBFF)
			},
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};