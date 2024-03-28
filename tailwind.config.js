/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      animation: {
        "spin-once": "spin-once 2s linear 2",
      },
      keyframes: {
        "spin-once": {
          "0%, 100%": { transform: "rotateY(0deg)" },
          "50%": { transform: "rotateY(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
