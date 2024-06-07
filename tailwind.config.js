/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: {
        50: "#eff6ff",
        100: "#dbeafe",
        500: "#3b82f6",
      },
      darkBlue10: "#1E1E30",
      darkBlue20: "#27283C",
      darkblue30: "#38394e",

      gray10: "#c7c7c7",
      gray20: "#43445A",

      white: "#ffffff",
      white10: "#f5f5f5",
      white20: "#fffefe",
      white30: "#f2f2f2",
      white40: "#F3F4F6",
      white50: "#BDBDBD",
      white60: "#E0E0E0",

      orange: "#EAAB00",
      orange100: "rgb(251, 147, 0);",
      orange200: "rgb(255, 182, 79);",

      pink: "#c035a2",
      pink10: "#c74feb",
      pink20: "#FCDDEC",
      pink30: "#d25ff5",
      pink40: "#eb5757",
      blue10: "#00b2a9",
      grey10: "#C7C7C7",
      gray20: "#5a5b70",

      blue10: "#00b2a9",
      grey10: "#C7C7C7",
      gray20: "#5a5b70",
      blue10: "#38394E",
      blue20: "#00B2A9",

      gray100: "#d0d0d0",
      gray200: "#F3F4F6",
      gray300: "rgb(130, 130, 130)",
      gray400: "#7e7e7e",
      gray500: "rgb(39, 39, 39)",
      gray600: "rgb(79, 79, 79)",
      gray700: "#4F4F4F",

      black: "#000000",
      black200: "rgb(24, 22, 23)",
      black300: "rgb(51, 51, 51)",

      red100: "rgb(214, 54, 38)",
      red400: "#d63626",
      red500: "#DC2626",
      redUserModul: "#ed5d53",
      redUserModul10: "#D63626",

      userText: "#828282",
      ordersBg: "#00072B",
      green: "#6fcf97",

      yellow100: "rgb(223, 179, 0);",
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      mmd: "935px",
      lg: "1024px",
      llg: "1094px",
      xl: "1280px",
      xxl: "1440px",
    },
    extend: {
      keyframes: {
        slideIn: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        wiggle: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(5px) translateY(5px)" },
        },
      },
      animation: {
        slideIn: "slideIn 0.5s ease-out",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      rotate: {
        22.82: "22.82deg",
        25.74: "-25.74deg",
        170.57: "170.57deg",
      },
      width: {
        350: "350px",
        1060: "1060px",
        948: "948px",
      },
      height: {
        420: "420px",
        370: "370px",
        1086: "1086px",
      },
      borderRadius: {
        70: "90px",
        50: "50px",
        30: "30px",
        20: "20px",
      },
      padding: {
        140: "140px",
      },
      inset: {
        492: "492px",
      },
    },
  },
  plugins: [],
};
