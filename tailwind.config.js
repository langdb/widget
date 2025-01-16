/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	darkMode: ['selector', '[data-mode="dark"]', 'class'],
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}",
		'./node_modules/react-tailwindcss-datetimepicker/dist/react-tailwindcss-datetimepicker.js',

	],
	theme: {
		fontFamily: {
			sans: [
				'system-ui',
			],
			body: [
				'system-ui',
			]
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '1rem',
				md: '1rem',
				lg: '1rem',
				xl: '3rem',
				'2xl': '14rem'
			}
		},
		extend: {
			colors: {
				lightContainer: '#ffffff',
				darkContainer: '#202020',
				darkHeader: '#2c2c2c',
				secondary: 'var(--secondary-background)',
				slate: {
					'800': 'var(--secondary-background)'
				},
				primary: {
					'50': 'var(--primary-50)',
					'100': 'var(--primary-100)',
					'200': 'var(--primary-200)',
					'300': 'var(--primary-300)',
					'400': 'var(--primary-400)',
					'500': 'var(--primary-500)',
					'600': 'var(--primary-600)',
					'700': 'var(--primary-700)',
					'800': 'var(--primary-800)',
					'900': 'var(--primary-900)',
					DEFAULT: 'var(--primary-default)'
				},
				dark: {
					background: '#171717'
				},
				text: {
					DEFAULT: 'var(--text-color)',
					title: {
						light: 'colors.gray[900]',
						dark: 'colors.white',
						DEFAULT: 'colors.gray[900]'
					}
				},
				disabled: 'var(--disable-color)',
				background: 'var(--background-color)',
				header: 'var(--header-color)',
				border: 'var(--border-color)',
				secondaryBorder: 'var(--secondary-border-color)',
				secondaryText: 'var(--secondary-text)',
				sidebar: {
					DEFAULT: 'transparent',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderColor: (theme) => ({
				...theme('colors'),
				'dark-default': 'rgb(46, 46, 46)', // Default border color for dark mode
			}),
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		},
		variants: {
			extend: {
				borderColor: [
					'dark'
				]
			}
		}
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require("tailwindcss-animate"),
	],
}