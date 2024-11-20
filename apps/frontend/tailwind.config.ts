import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50', // Primary green
        accent: {
          orange: '#FF5722', // Orange
          blue: '#00BCD4', // Blue accent
        },
        background: '#F5F5F5', // Light-gray
        text: {
          main: '#212121', // Black-gray
          secondary: '#757575', // Secondary-gray
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Primary font
        roboto: ['Roboto', 'sans-serif'], // Secondary font
      },
    },
  },
  plugins: [],
} satisfies Config;
