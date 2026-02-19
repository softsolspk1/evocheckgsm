import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#00A9E0", // PharmEvo Light Blue
                    dark: "#0087B3",
                    light: "#E0F5FC",
                },
                secondary: {
                    DEFAULT: "#1E293B", // Navy/Slate
                    light: "#334155",
                },
            },
            borderRadius: {
                lg: "1rem",
                md: "0.75rem",
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
