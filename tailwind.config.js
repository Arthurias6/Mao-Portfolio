/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.jsx"],
    theme: {
        extend: {
            colors: {
                primary: "#00060e",
                secondary: "#b7c1de",
                tertiary: "#ff2a6d",
                quaternary: "rgba(88, 103, 221, 1)",
            },
            boxShadow: {
                photoShadow1:
                    "0 0 10px 2px #ac61b9, 0 0 20px 4px #ac61b9, 0 0 30px 6px #ac61b9",
                photoShadow2:
                    "0 0 10px 4px #00bfff, 0 0 20px 6px #00bfff, 0 0 30px 8px #00bfff",
            },
            animation: {
                ["infinite-slider"]: "infiniteSlider 10s linear infinite",
                ["scanlines"]: "scanlines 1s steps(60) infinite",
            },
            keyframes: {
                infiniteSlider: {
                    "0%": { transform: "translateX(0)" },
                    "100%": {
                        transform: "translateX(calc(-750px * 7))", // 7 is the half the number of icons to display, 500 px is how much of width
                    },
                },
                scanlines: {
                    "0%": { "background-position": "0 50%" },
                },
            },
        },
        fontFamily: {
            sans: ['"DotGothic16"', "sans-serif"],
            serif: ['"VT323"', "sans-serif"],
        },
    },
    plugins: [],
};
