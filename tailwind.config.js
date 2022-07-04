/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
	presets: [require("./tailwind-preset")],
	theme: {
		extend: {},
	},
	plugins: [],
};
