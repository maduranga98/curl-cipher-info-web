/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Animations
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      // Colors
      colors: {
        purple: "#6A0DAD", // Royal Purple
        violet: "#8E24AA", // Electric Violet
        navy: "#1B1F3B", // Deep Navy Blue
        gold: "#FFD700", // Soft Gold
        cyan: "#00B8D4", // Cyan Blue
        white: "#F4F4F4", // Soft White (for text)
        lightGray: "#B0B0B0", // Light Gray (for subtext)
        charcoal: "#333333", // Charcoal for dark text
      },
      // Fonts
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        dancing: ["Dancing Script", "cursive"],
        raleway: ["Raleway", "sans-serif"],
      },
      // Screens (Breakpoints)
      screens: {
        xs: "375px", // Extra small devices (e.g., iPhone SE)
        sm: "640px", // Small devices (e.g., mobile phones)
        md: "768px", // Medium devices (e.g., tablets)
        lg: "1024px", // Large devices (e.g., laptops)
        xl: "1280px", // Extra-large devices (e.g., desktops)
        "2xl": "1536px", // 2x extra-large devices (e.g., large monitors)
      },
      // Spacing (Optional: Add custom spacing if needed)
      spacing: {
        "1/2": "0.125rem", // 2px
        "1/4": "0.25rem", // 4px
        "1/3": "0.333rem", // ~5px
        "2/3": "0.666rem", // ~10px
        "3/4": "0.75rem", // 12px
        "1/5": "0.2rem", // ~3px
        "4/5": "0.8rem", // ~13px
      },
      // Container Widths
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem", // Default padding for all screen sizes
          sm: "1.5rem", // Padding for small screens
          md: "2rem", // Padding for medium screens
          lg: "3rem", // Padding for large screens
          xl: "4rem", // Padding for extra-large screens
          "2xl": "5rem", // Padding for 2x extra-large screens
        },
      },
    },
  },
  plugins: [],
};
