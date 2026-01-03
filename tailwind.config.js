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
        // B&W Palette Inspired Names
        'jet-black': '#121212',
        'charcoal': '#2C2C2C',
        'gunmetal': '#484848',
        'smoke': '#999999',
        'ash-gray': '#B2B2B2',
        'silver': '#C0C0C0',
        'light-gray': '#E0E0E0',
        'off-white': '#FAFAFA',

        // Semantic Mapping
        primary: 'var(--color-silver)',
        secondary: 'var(--color-smoke)',
        accent: 'var(--color-silver)',

        light: 'var(--color-off-white)',
        dark: 'var(--color-charcoal)',

        'dark-text': 'var(--color-off-white)',
        'dark-card': 'var(--color-jet-black)',
        'dark-border': 'var(--color-gunmetal)',

        'text-muted': 'var(--color-smoke)',
        'placeholder-color': 'var(--color-ash-gray)',

        // iOS 26 Liquid Glass Colors
        'glass-white': 'rgba(255, 255, 255, 0.1)',
        'glass-black': 'rgba(0, 0, 0, 0.3)',
        'glass-border': 'rgba(255, 255, 255, 0.2)',
      },
      fontFamily: {
        heading: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        subheading: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Text', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        body: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Text', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        'glass-sm': '8px',
        'glass-md': '12px',
        'glass-lg': '16px',
        'glass-xl': '24px',
      },
      borderRadius: {
        'glass': '20px',
        'glass-lg': '28px',
        'glass-xl': '36px',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'wave': 'wave 2.5s infinite',
        'tilt': 'tilt 10s infinite linear',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'liquid-morph': 'liquidMorph 8s ease-in-out infinite',
        'glass-shine': 'glassShine 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
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
        liquidMorph: {
          '0%, 100%': {
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            transform: 'rotate(0deg) scale(1)'
          },
          '50%': {
            borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
            transform: 'rotate(180deg) scale(1.1)'
          },
        },
        glassShine: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        'neumorphic-light': '9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.8)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
        'glass-sm': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'glass-md': '0 8px 16px rgba(0, 0, 0, 0.15)',
        'glass-lg': '0 16px 32px rgba(0, 0, 0, 0.2)',
        'glass-inset': 'inset 0 1px 1px rgba(255, 255, 255, 0.1)',
        'liquid': '0 8px 32px rgba(31, 38, 135, 0.2), 0 2px 8px rgba(0, 0, 0, 0.1)',
        'neon-blue': '0 0 5px rgba(88, 166, 255, 0.5), 0 0 10px rgba(88, 166, 255, 0.3)',
        'neon-coral': '0 0 5px rgba(249, 117, 131, 0.5), 0 0 10px rgba(249, 117, 131, 0.3)',
        'neon-gray': '0 0 5px rgba(48, 54, 61, 0.5), 0 0 10px rgba(48, 54, 61, 0.3)',
      },
    },
  },
  plugins: [
    // Plugin to define CSS variables from the theme colors
    function ({ addBase, theme }) {
      function extractColorVars(colorObj, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];
          const cssVariable = colorKey === 'DEFAULT' ? `--color${colorGroup}` : `--color${colorGroup}-${colorKey}`; 

          const newVars = typeof value === 'string'
            ? { [cssVariable]: value }
            : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      });
    },
  ],
} 