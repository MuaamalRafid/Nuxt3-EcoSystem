/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      brandColors: {
        accent: "#2D68FF",
        primary: "#001834",
        accentLight: "#A1C7FF",
      },
      textColors: {
        txtInverse: "#FFFFFF",
        txtMain: "#0A2540",
        txtLight: "#425466",
        txtLighter: "#5E7790",
      },
      BackgroundColors: {
        bgMain: "#FFFFFF",
        bgLight: "#F1F5FB",
        bgLightest: "#FAFBFE",
      },
      BorderColors: {
        border: "#E4E4E4",
        borderLight: "#F4F4F4",
      },
      CategoryColors: {
        gaming: "#00FFF0",
        desktopPc: "#2DFF81",
        mobilesTablets: "#FFAB2D",
      },
      transparent: "rgba(0, 0, 0, 0)",
    },
    theme: {},
  },
  plugins: [],
};

