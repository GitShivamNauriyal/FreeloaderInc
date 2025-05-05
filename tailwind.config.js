// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                logo: ['"Agrandir"', "sans-serif"],
                heading: ['"Barlow"', "sans-serif"],
                para: ['"Telegraf"', "sans-serif"],
            },
        },
    },
    plugins: [],
};
