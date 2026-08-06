/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          light: '#F6F6F6',
          white: '#FFFFFF',
          card: '#FFFFFF',
          hover: '#F0F0F0',
          subtle: '#F1F1F0',
        },
        editorial: {
          dark: '#111111',
          heading: '#1A1A1A',
          muted: '#666666',
          border: '#E5E5E5',
        },
        accent: {
          orange: '#FF5733',
          coral: '#FF7755',
          amber: '#FF8C66',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        heading: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'radial': 'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
