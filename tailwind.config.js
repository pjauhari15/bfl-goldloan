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
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        navy: {
          DEFAULT: '#002953',
          light: '#D3DAE1',
          dark: '#0d2640',
        },
        tangerine: {
          DEFAULT: '#FF6700',
          light: '#FFF2EA',
        },
        gray: {
          40: '#666666',
          60: '#999999',
        },
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}