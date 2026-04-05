import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#C9A96E',
          'gold-dark': '#B8944D',
          cream: '#F5F0EB',
          'cream-dark': '#EDE6DD',
          brown: '#3C2A21',
          'brown-dark': '#2C1E17',
          'brown-light': '#5C4033',
          charcoal: '#4A3B31',
          beige: '#F8F4EF',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    }
  },
  plugins: []
}
export default config
