import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        guardian: {
          bg: "#070B16",
          card: "#111827",
          soft: "#172033",
          blue: "#2F6BFF",
          cyan: "#38BDF8",
          green: "#22C55E",
          amber: "#F59E0B"
        }
      },
      boxShadow: {
        glow: "0 0 50px rgba(47,107,255,.25)"
      }
    },
  },
  plugins: [],
};
export default config;
