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
        base: 'hsl(var(--base))',
        primary: 'hsl(var(--primary))',
        'primary-dark': 'hsl(var(--primary-dark))',
      },
    },
  },
  plugins: [],
}; 