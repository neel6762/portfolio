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
        // Refined Forest Green Palette (lighter, more premium)
        'forest-deep': '#1A3A2E',      // Lighter deep forest green
        'forest-olive': '#4A6F59',      // Brighter earthy olive green
        'forest-sage': '#7FA990',       // Lighter muted sage green
        'forest-eucalyptus': '#B8D4C8', // Softer, more premium eucalyptus
        'forest-cream': '#E8F3EC',      // Cleaner cream-green (background)
        'forest-accent': '#5D8A73',     // Mid-tone for hover states

        // Semantic Mapping (updated to refined colors)
        primary: '#7FA990',             // forest-sage (refined)
        secondary: '#4A6F59',           // forest-olive (refined)
        accent: '#B8D4C8',              // forest-eucalyptus (refined)

        light: '#E8F3EC',               // forest-cream (refined)
        dark: '#1A3A2E',                // forest-deep (refined)

        'dark-text': '#E8F3EC',         // Light text on dark bg (refined)
        'dark-card': '#1A3A2E',         // Card background (refined)
        'dark-border': '#4A6F59',       // Border color (refined)

        'text-muted': '#B8D4C8',        // Muted text (refined)
        'placeholder-color': '#7FA990', // Placeholder text (refined)
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
        'glass-xl': '16px',
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