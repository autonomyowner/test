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
        // Gold and Black Color Palette
        kitchen: {
          white: {
            clean: '#FFFFFF',
            soft: '#F8F8F8',
          },
          black: {
            deep: '#000000',
            soft: '#1A1A1A',
            medium: '#2A2A2A',
          },
          gold: {
            light: '#FFD700',
            medium: '#FFC107',
            dark: '#FF8F00',
            deep: '#FF6F00',
            accent: '#FFF8DC',
          },
          marble: {
            gray: '#666666',
            'gray-light': '#888888',
          },
          warm: {
            light: '#FFF8DC',
            'light-soft': '#FFEAA7',
          },
          footer: {
            dark: '#000000',
          },
          lux: {
            gold: {
              50: '#fffdf7',
              100: '#fff9e6',
              200: '#fff3cc',
              300: '#ffecb3',
              400: '#ffe082',
              500: '#ffd54f',
              600: '#ffc107',
              700: '#ff8f00',
              800: '#ff6f00',
              900: '#e65100',
              950: '#bf360c',
            },
            black: {
              50: '#f8f9fa',
              100: '#e9ecef',
              200: '#dee2e6',
              300: '#ced4da',
              400: '#adb5bd',
              500: '#6c757d',
              600: '#495057',
              700: '#343a40',
              800: '#212529',
              900: '#000000',
              950: '#0a0a0a',
            }
          }
        },
        // Legacy colors for compatibility
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        'elegant': ['Playfair Display', 'serif'],
        'modern': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-elegant': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 