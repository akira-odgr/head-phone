/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#aa6d6b",
                brandDark: "#151616",
            },
            fontFamily: {
                poppins: ["Popins", "sans-serif"],
                varela: ["Varela Round", "sans-serif"],
            },
            container: {
                center: true, //margin-inline: auto
                padding: {
                    DEFAULT: "1rem",
                    sm: "2rem",
                    lg: "4rem",
                    xl: "5rem",
                    "2xl": "6rem",
                },
            },
        },
    },
    plugins: [],
};
