/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            display: ['Dancing Script', 'cursive'],
            display_one: ['Qwitcher Grypen', 'cursive']
        },
        extend: {
            colors: {
                'soft-silver': '#BBC4CD',
                'soft-brown': '#67544E',
                'dark-brown': '#9B7065',
                'soft-brown2': '#D8B58B'
            },
        },
    },
    plugins: [],
}
