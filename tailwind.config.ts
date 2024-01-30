import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "purple-gradient": "linear-gradient(111deg, #9F8BFF 0%, #7053FF 100%)",
        "dark-purple-gradient":
          "linear-gradient(111deg, #9F8BFF 0%, #5031C1 100%)",
      },

      colors: {
        "color-secondary": "#FAFAFAB2",
        "color-tertiary": "#FAFAFA4D",
        "border-gray": "rgba(128, 128, 128, 0.05)",
        "color-surface": "#333331",
      },
      backgroundColor: {
        "surface-black": "#101010",
      },
      boxShadow: {
        custom: "0 3px 3px 3px rgba(128, 128, 128, 0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
