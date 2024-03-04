/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,ts,svelte}"],
    theme: {
        extend: {
            colors: {
                black: "#171717",
                white: "#f5f5f5",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
