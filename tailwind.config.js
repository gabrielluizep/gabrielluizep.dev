module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        backgroundDarker: '#001122',
        backgroundLighter: '#001133',
        border: '#102A44',
        text: '#8BADC1',
        primary: 'var(--primary-color)',
      },
      fontFamily: {
        IntegralCF: ['IntegralCF', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
