module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          secondary: "var(--color-text-secondary)",
          heading: "var(--color-text-heading)",
          muted: "var(--color-text-muted)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--color-fill)",
          "fill-hover": "var(--color-fill-hover)",
          "light-pink": "var(--color-light-pink)",
          "pink-secondary": "var(--color-pink-secondary)",
        },
      },
      gradientColorStops: {
        skin: {
          first: "var(--color-gradient-first)",
          mid: "var(--color-gradient-mid)",
          last: "var(--color-gradient-last)",
        },
      },
      fontFamily: {
        lato: "Lato",
        mulish: "Mulish",
        uthmanic: "Uthmanic",
      },
      animation: {
        light: "light 3s infinite",
      },
      keyframes: {
        light: {
          "0%, 100%": {
            opacity: ".2",
          },
          "33%": {
            opacity: ".5",
          },
          "66%": {
            opacity: "1",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
