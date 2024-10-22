// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Path to your source files
    './public/index.html',         // Path to your HTML files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6400',   // Custom color - orange
        royalBlue: '#4169e1', // Custom color - royal blue
        darkGray: '#2e2e2e',  // Custom color - dark gray
        lightGray: '#f5f5f5', // Custom color - light gray
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Using Poppins as default font
      },
    },
  },
  plugins: [
    require('daisyui'), // Integrating DaisyUI
  ],
  daisyui: {
    themes: ['cyberpunk', 'dark'], // DaisyUI themes
  },
};
