/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#040F49',
          50: '#0A1546',
          100: '#0E1A52',
          200: '#12215E',
          300: '#16296A',
        },
        primary: {
          DEFAULT: '#006BDF',
          50: '#E8F1FE',
          100: '#C5DBFC',
          200: '#8FB8F8',
          300: '#5A95F4',
          400: '#2E7AEE',
          500: '#006BDF',
          600: '#0058B8',
          700: '#004590',
          800: '#003268',
          900: '#001F40',
        },
        secondary: {
          DEFAULT: '#241446',
          50: '#2A1855',
          100: '#301C64',
          200: '#362073',
        },
        accent: {
          DEFAULT: '#F4F4F4',
          50: '#FFFFFF',
          100: '#F4F4F4',
          200: '#E0E0E0',
          300: '#CCCCCC',
          400: '#999999',
          500: '#666666',
          600: '#444444',
        },
        success: {
          DEFAULT: '#16A34A',
          light: '#DCFCE7',
        },
        warning: {
          DEFAULT: '#D97706',
          light: '#FEF3C7',
        },
        error: {
          DEFAULT: '#DC2626',
          light: '#FEE2E2',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px -1px rgba(0, 0, 0, 0.2)',
        'card-hover': '0 8px 24px -4px rgba(0, 0, 0, 0.4), 0 4px 8px -2px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          from: { opacity: '0', transform: 'translateY(-8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
