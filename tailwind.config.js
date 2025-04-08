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
        primary: '#4F46E5', // Indigo
        secondary: '#4F46E5', // Indigo secondary
        accent: '#10B981', // Emerald
        light: '#F9FAFB', // Light background
        dark: '#111827', // Dark background
        
        // Dark mode colors
        'dark-bg': '#111827', // Dark mode background
        'dark-card': '#1F2937', // Card background in dark mode
        'dark-border': '#374151', // Dark border
        'dark-text': '#F9FAFB', // Light text for dark mode
        'dark-text-secondary': '#D1D5DB', // Secondary text for dark mode
        'dark-input': '#1F2937', // Input background for dark mode
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
          '0%': { boxShadow: '0 0 5px rgba(79, 70, 229, 0.5), 0 0 10px rgba(79, 70, 229, 0.3)' },
          '100%': { boxShadow: '0 0 10px rgba(79, 70, 229, 0.8), 0 0 20px rgba(79, 70, 229, 0.5), 0 0 30px rgba(79, 70, 229, 0.3)' },
        },
      },
      boxShadow: {
        'neumorphic-light': '9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.8)',
        'neumorphic-dark': '9px 9px 16px rgba(0, 0, 0, 0.4), -9px -9px 16px rgba(75, 85, 99, 0.3)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
      },
      backdropBlur: {
        'glass': '8px',
      },
    },
  },
  plugins: [],
} 