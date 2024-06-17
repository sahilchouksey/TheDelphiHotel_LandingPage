/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      // Add this to remove default max-width
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "100%",
        "2xl": "100%",
      },
    },
    extend: {
      screens: {
        "2xl": { max: "1436px" },
        xl: { max: "1200px" },
        lg: { max: "1024px" },
        mdlg: { max: "960px" },
        md: { max: "786px" },
        sm: { max: "686px" },
        xs: { max: "480px" },
        xxs: { max: "380px" },
      },

      colors: {
        background: "var(--color-bg)",
        primary: "var(--color-primary)",
        border: "var(--color-border)",
        border_light: "var(--color-border-light)",
      },
      fontSize: {
        events: "clamp(6rem, calc(3.7962rem + 5.8768vw), 12.2rem)",
      },
      width: {
        "custom-min": "min(31%, 44rem)",
        "custom-room-min": "min(100%, 26rem)",
        "custom-room-min-2": "min(100%, 48rem)",
        "custom-event-min": "min(100%, 93.5rem)",
        "custom-event-min-2": "min(100%, 42rem)",
        "custom-review-min": "min(80%, 81rem)",
      },
      filter: {
        "custom-filter":
          "brightness(0) saturate(100%) invert(99%) sepia(2%) saturate(21%) hue-rotate(339deg) brightness(107%) contrast(100%)",
      },
      maxWidth: {
        "stretch-60": "calc(var(--max-stretch) * 60%)",
      },
      height: {
        custom: "calc(100% + 5rem)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".filter-custom": {
          filter:
            "brightness(0) saturate(100%) invert(99%) sepia(2%) saturate(21%) hue-rotate(339deg) brightness(107%) contrast(100%)",
        },
      });
    },
  ],
};
