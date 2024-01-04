const baseTheme = {
	media: {
		extraLarge: '(max-width: 1140px)',
		large: '(max-width: 960px)',
		medium: '(max-width: 720px)',
		small: '(max-width: 540px)',
	},

	// in px
	sizes: {
		navigationBar: { height: '54px' },
		// container: { width: 1200 },
	},

	// z-index
	order: {
		header: 50,
		modal: 100,
	},
};

export const darkTheme = {
	...baseTheme,

	...{
		colors: {
			// primary: '#7986cb',
			// secondary: '#2b2b2b',
			success: '#22E702D4',
			danger: '#E71002D4 ',

			bg: '#696969',
			font: '#19191B',
		},
	},
};

export const lightTheme = {
	...baseTheme,

	...{
		colors: {},
	},
};
