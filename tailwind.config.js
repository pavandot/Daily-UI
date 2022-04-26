module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		screens: {
			xs: "475px",
			// => @media (min-width: 475px) { ... }

			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			colors: {
				ratingComponent: {
					orange: "hsl(25, 97%, 53%)",
					"very-dark-blue": "hsl(216, 12%, 8%)",
					white: "hsl(0, 0%, 100%)",
					"dark-blue": "hsl(213, 19%, 18%)",
					"light-gray": "hsl(217, 12%, 63%)",
					"medium-gray": "hsl(216, 12%, 54%)",
				},
				nftPreviewCard: {
					"ethereum-blue": "#00fff8",
					"text-gray": "#8bacd9",
				},
				tipCalculator: {
					"strong-cyan": "hsl(172, 67%, 45%)",
					white: "hsl(0, 0%, 100%)",
					"very-dark-cyan": "hsl(183, 100%, 15%)",
					"dark-grayish-cyan": "hsl(186, 14%, 43%)",
					"grayish-cyan": "hsl(184, 14%, 56%)",
					"light-grayish-cyan": "hsl(185, 41%, 84%)",
					"very-light-grayish-cyan": "hsl(189, 41%, 97%)",
				},
				ecommerceProductPage: {
					orange: "hsl(26, 100%, 55%)",
					"pale-orange": "hsl(25, 100%, 94%)",
					"vary-dark-blue": "hsl(220, 13%, 13%)",
					"dark-grayish-blue": "hsl(219, 9%, 45%)",
					"grayish-blue": "hsl(220, 14%, 75%)",
					"light-grayish-blue": "hsl(223, 64%, 98%) ",
					white: "hsl(0, 0%, 100%)",
					black: "hsl(0, 0%, 0%)",
				},
			},
		},
	},
	plugins: [],
};
