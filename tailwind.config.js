/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        brick: ['"NT Brick Sans"', 'sans-serif'],
        lilita: ['"LilitaOne"', 'sans-serif'],
        monoton: ['"Monoton"', 'cursive'],
        newamsterdam: ['"NewAmsterdam"', 'sans-serif'],
        rocksalt: ['"RockSalt"', 'cursive'],
        sigmar: ['"Sigmar"', 'sans-serif'],
        silkscreenbold: ['"SilkscreenBold"', 'monospace'],
        silkscreenregular: ['"SilkscreenRegular"', 'monospace'],
      },
    },
  },
  plugins: [],
};
