/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                white: "#fff",
                "neutral-1000": "#e6e7e9",
                "neutral-400": "#5a6475",
                "neutral-200": "#363c46",
                "neutral-100": "#24282f",
                "neutral-1300": "#f1f1f2",
                "neutral-1200": "#eeefef",
                "pri-purple-400": "#582066",
                "neutral-50": "#121417",
                ghostwhite: "#faf9ff",
                mediumpurple: "rgba(197, 152, 255, 0.5)",
                lavender: "#efe4f2",
                "pri-purple-900": "#f4eff6",
            },
            spacing: {},
            fontFamily: {
                "h50-16-bold": "Inter",
                "h300-32-medium": "Manrope",
            },
            borderRadius: {
                smi: "13px",
                "221xl": "240px",
            },
        },
        fontSize: {
            sm: "14px",
            base: "16px",
            "21xl": "40px",
            "13xl": "32px",
            "29xl": "48px",
            smi: "13px",
            "13xl-5": "32.5px",
            "lgi-5": "19.5px",
            lg: "18px",
            "43xl": "62px",
            xs: "12px",
            inherit: "inherit",
        },
    },
    corePlugins: {
        preflight: false,
    },
};