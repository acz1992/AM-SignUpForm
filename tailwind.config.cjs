/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,ts}", "./index.html"],
	theme: {
		extend: {
			padding:
			{
				'1-3-1-3': '1vw 3vw 1vw 3vw',
			},
			colors: {
			'input-white': 'rgba(240, 248, 240, 1)', //also for the primary btn
			'background-white': 'rgba(214, 229, 214, 1)',
			'primary-green': 'rgba(44, 65, 38, 1)',
			'default-text': 'rgba(44, 62, 65, 1)',
			'border-grey': 'rgba(185, 215, 197, 1)'
			},

			borderRadius: {
				'default': '0.8vw',
			},

			fontFamily: {
				'quicksand': ['Quicksand', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
