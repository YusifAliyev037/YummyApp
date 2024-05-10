/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './shared/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      darkBlue10: '#1E1E30',
      darkBlue20: '#27283C',
      darkblue30:"#38394e",

      gray10: '#c7c7c7',

      white10: '#f5f5f5',
      white20: '#fffefe',

      orange: '#EAAB00',

      pink: '#c035a2',
      pink10: '#c74feb',
      pink20: '#FCDDEC',
      pink30: '#d25ff5',
<<<<<<< Updated upstream

      blue10:"#00b2a9"
=======
      grey10:'C7C7C7',
      blue10:'38394E',
>>>>>>> Stashed changes
    },
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      mmd: '935px',
      lg: '1024px',
      llg: '1094px',
      xl: '1280px',
      xxl: '1440px',
    },
    extend: {},
  },
  plugins: [],
};
