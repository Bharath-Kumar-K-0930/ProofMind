/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#74f0ed",
                secondary: "#ea445a",
                bg: "#000000",
                panel: "#111111",
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            webkitTextStroke: {
                '2': '2px',
            }
        },
    },
    plugins: [],
}
