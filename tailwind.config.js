/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'true-black': '#000000',
        'ogilvy-red': '#D62828',
        'slate-gray': '#2E2E2E'
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'haas': ['Neue Haas Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },
      spacing: {
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px'
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.4, 0, 0.2, 1)'
      },
      transitionDuration: {
        '300': '300ms',
        '500': '500ms'
      }
    },
  },
  plugins: [],
};