/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		"./index.html",
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				purple_Dark: "#635FC7",
				purple_Light: "#A8A4FF",
				purple_superLight: "#635fc71a",
				_dark: "#000112",
				almost_Dark: "#20212C",
				dark_Gray: "#2B2C37",
				medium_Gray: "#3E3F4E",
				_gray: "#828FA3",
				light_Blue: "#E4EBFA",
				almost_White: "#F4F7FD",
				_red: "#EA5555",
				light_Red: "#FF9898",
				modalParentBgLight: "#0000007f",
			}
		},
	},
	plugins: [],
}
