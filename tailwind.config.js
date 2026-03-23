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
        'brand': {
          '50': '#f0faff',
          '100': '#e0f4ff',
          '200': '#b9eaff',
          '300': '#7ccfff',
          '400': '#36b0ff',
          '500': '#099cff',
          '600': '#0084e6',
          '700': '#0069b8',
          '800': '#005695',
          '900': '#00497a',
          '950': '#002c4a',
        },
        'primary': '#2563eb',
        'secondary': '#475569',
        'light-bg': '#f8fafc',
        'dark-bg': '#0f172a',
        'dark-card': '#1e293b',
      },
      backgroundImage: {
        'rgb-gradient': 'linear-gradient(90deg, #ef4444, #f97316, #eab308, #84cc16, #22c55e, #14b8a6, #06b6d4, #3b82f6, #8b5cf6, #d946ef, #ef4444)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'background-pan': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'background-pan': 'background-pan 10s linear infinite',
      },
    },
  },
  plugins: [],
};