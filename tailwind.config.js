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
      darkBlue10: "#1E1E30",
      darkBlue20: "#27283C",
      darkblue30: "#38394e",

      gray10: "#c7c7c7",
      gray20: "#43445A",

      white: "#ffffff",
      white10: "#f5f5f5",
      white20: "#fffefe",
      white30:"#f2f2f2",
      white40:" #F3F4F6",
      

      orange: "#EAAB00",

      pink: "#c035a2",
      pink10: "#c74feb",
      pink20: "#FCDDEC",
      pink30: "#d25ff5",

      blue10: "#00b2a9",
      grey10: "#C7C7C7",
      gray20: "#5a5b70",
      blue10: "#38394E",
      blue20: "#00B2A9",

      gray100: "#d0d0d0",
      gray200: "#f3f4f6",
      gray300: "rgb(130, 130, 130)",
      gray400: "#7e7e7e",
      gray500: "rgb(39, 39, 39)",
      black: "#000000",
      black200: "rgb(24, 22, 23)",
      red500: "#DC2626",
      redUserModul: "#D63626",
      userText:"#828282" ,
      


      red100: "rgb(214, 54, 38)",
      white: "#ffffff",
      orange100: "rgb(251, 147, 0);",
      orange200: "rgb(255, 182, 79);",
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
      rotate: {
        22.82: "22.82deg",
        25.74: "-25.74deg",
        170.57: "170.57deg",
      },
      width: {
        350: "350px",
        1060: "1060px",
      },
      height: {
        420: "420px",
        370: "370px",
      },
      borderRadius: {
        50: "50px",
        30: "30px",
        20: "20px",
      },
      padding: {
        140: "140px",
      },
    },
  },
  plugins: [],
};
