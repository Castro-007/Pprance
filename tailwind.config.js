/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sma: { max: "429px" },
        mda: { min: "430px", max: "767px" },
        mdaa: { min: "768px", max: "820px" },
      },
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
        Varela: ["Varela Round", "sans-serif"],
        Playfair: ["Playfair Display", "serif"],
        Sora: ["Sora", "sans-serif"],
        Azeret: ["Azeret Mono", "monospace"],
        Anek: ["Anek Telugu", "sans-serif"],
        Manrope: ["Manrope", "sans-serif"],
      },
      backgroundImage: {
        'SewingBg': "url('/assets/Images/sewinghome.jpg')",
        'ServiceBg': "url('/assets/Images/AboutSuitss.jpg')",
      },
    },
  },
  plugins: [],
}

