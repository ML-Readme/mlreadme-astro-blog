/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
            'blue': {
				'50': '#e8f1ff',
				'100': '#d5e4ff',
				'200': '#b3ccff',
				'300': '#85a8ff',
				'400': '#5676ff',
				'500': '#2f45ff',
				'600': '#0c0eff',
				'700': '#0000ff',
				'800': '#0609cd',
				'900': '#10169f',
				'950': '#0a0b5c',
			},
            'purple': '#7e5bef',
            'pink': '#ff49db',
            'orange': '#ff7849',
            'green': '#13ce66',
            'yellow': '#ffc82c',
            'gray-dark': '#273444',
            'gray': '#8492a6',
            'gray-light': '#d3dce6',
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
		container: {
			center: true,
			padding: '2rem',
		  },
		screens: {
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
		},
        extend: {
            spacing: {
                '8xl': '96rem',
                '9xl': '128rem',
            },
            borderRadius: {
                '4xl': '2rem',
            }
        }    
    },
	plugins: [
		require('@tailwindcss/typography'),
	],
}
