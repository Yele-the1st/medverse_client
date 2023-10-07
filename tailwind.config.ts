import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1360px",
      },
    },
    extend: {
      boxShadow: {
        custom:
          "0px 2px 8px 0px rgba(0, 0, 0, 0.1), 0px 1px 0px 0px rgba(255, 255, 255, 0.3) inset",
      },
      fontFamily: {
        Poppins: ["var(--font-Poppins)"],
      },
      screens: {
        "400px": "400px",
        "640px": "640px",
        "700px": "700px",
        "800px": "800px",
        "900px": "900px",
        "950px": "950px",
        "1000px": "1000px",
        "1050px": "1050px",
        "1100px": "1100px",
        "1150px": "1150px",
        "1200px": "1200px",
        "1300px": "1300px",
        "1500px": "1500px",
      },
      colors: {
        primary: {
          DEFAULT: "#58C566",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#",
          foreground: "#FFFFFF",
        },
        // accent: "#ADFF2F",
        // background: "#ADFF2F",
        secondary: {
          DEFAULT: "#545F71",
          foreground: "#FFFFFF",
        },
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
export default config;
