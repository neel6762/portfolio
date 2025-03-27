/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF3E6C', // Magenta
        secondary: '#00C2CB', // Turquoise
        accent: '#F2C94C', // Mustard yellow
        light: '#F8F9FA', // Light neutral tone
        dark: '#333333', // Dark text color
        
        // Dark mode colors (now the default)
        'dark-bg': '#121212',
        'dark-card': '#1E1E1E',
        'dark-border': '#2A2A2A',
        'dark-text': '#E0E0E0',
        'dark-text-secondary': '#A0A0A0',
        'dark-input': '#2A2A2A',
      },
      fontFamily: {
        heading: ['Caveat', 'cursive'],
        subheading: ['Patrick Hand', 'cursive'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'wave': 'wave 2.5s infinite',
        'tilt': 'tilt 10s infinite linear',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(20deg)' },
          '75%': { transform: 'rotate(-15deg)' },
        },
        tilt: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
      },
    },
  },
  plugins: [],
} 