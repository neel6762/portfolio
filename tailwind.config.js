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
        primary: '#00FFFF', // Neon Blue
        secondary: '#A020F0', // Electric Purple
        accent: '#00FF7F', // Cyber Green
        light: '#EDEDED', // Cool White
        dark: '#0D0D0D', // Deep Blue/Almost Black
        
        // Dark mode colors (now with futuristic theme)
        'dark-bg': '#000000', // Jet Black
        'dark-card': '#111111', // Slightly lighter black
        'dark-border': '#1A1A1A', // Dark border
        'dark-text': '#D1D1D1', // Light Gray
        'dark-text-secondary': '#999999', // Medium Gray
        'dark-input': '#181818', // Slightly lighter than bg
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
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
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
        glow: {
          '0%': { textShadow: '0 0 5px rgba(0, 255, 255, 0.5), 0 0 10px rgba(0, 255, 255, 0.3)' },
          '100%': { textShadow: '0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.5), 0 0 30px rgba(0, 255, 255, 0.3)' },
        },
      },
      boxShadow: {
        'neon-blue': '0 0 5px #00FFFF, 0 0 10px #00FFFF',
        'neon-purple': '0 0 5px #A020F0, 0 0 10px #A020F0',
        'neon-green': '0 0 5px #00FF7F, 0 0 10px #00FF7F',
      },
    },
  },
  plugins: [],
} 