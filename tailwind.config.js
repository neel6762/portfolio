/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#58A6FF', // Bright Blue (Accent)
        secondary: '#F97583', // Coral (Secondary Accent)
        accent: '#58A6FF', // Bright Blue
        light: '#F9FAFB', // Light background
        dark: '#0D1117', // GitHub Dark (Background)
        'dark-text': '#C9D1D9', // Light Slate (Primary Text)
        'dark-card': '#161B22', // Slightly lighter than background
        'dark-border': '#30363D', // Cool Gray (Divider/Border)
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        subheading: ['Inter', 'sans-serif'],
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
          '0%': { boxShadow: '0 0 5px rgba(88, 166, 255, 0.5), 0 0 10px rgba(88, 166, 255, 0.3)' },
          '100%': { boxShadow: '0 0 10px rgba(88, 166, 255, 0.8), 0 0 20px rgba(88, 166, 255, 0.5), 0 0 30px rgba(88, 166, 255, 0.3)' },
        },
      },
      boxShadow: {
        'neumorphic-light': '9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.8)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
        'neon-blue': '0 0 5px rgba(88, 166, 255, 0.5), 0 0 10px rgba(88, 166, 255, 0.3)',
        'neon-coral': '0 0 5px rgba(249, 117, 131, 0.5), 0 0 10px rgba(249, 117, 131, 0.3)',
        'neon-gray': '0 0 5px rgba(48, 54, 61, 0.5), 0 0 10px rgba(48, 54, 61, 0.3)',
      },
      backdropBlur: {
        'glass': '8px',
      },
    },
  },
  plugins: [],
} 