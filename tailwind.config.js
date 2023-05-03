import { fontFamily } from 'tailwindcss/defaultTheme'
import { neutral } from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-jb-mono)', ...fontFamily.mono],
      },
      animation: {
        'divider-on-scroll': 'spaceship-on-scroll 1s linear infinite',
      },
      keyframes: {
        'spaceship-on-scroll': {
          '0%': { transform: 'translate(0%, 0%)' },
          '6%': { transform: 'translate(6%, 6%) rotate(-1.5deg)' },
          '12%': { transform: 'translate(12%, 10%) rotate(-3deg)' },
          '18%': { transform: 'translate(18%, 16%) rotate(-12deg)' },
          '25%': { transform: 'translate(25%, 17%) rotate(-19deg)' },
          '31%': { transform: 'translate(31%, 15%) rotate(-26deg)' },
          '37%': { transform: 'translate(37%, 8%) rotate(-29deg)' },
          '43%': { transform: 'translate(43%, -1%) rotate(-30deg)' },
          '50%': { transform: 'translate(50%, -12%) rotate(-27deg)' },
          '56%': { transform: 'translate(56%, -20%) rotate(-23deg)' },
          '62%': { transform: 'translate(62%, -27%) rotate(-16deg)' },
          '68%': { transform: 'translate(68%, -31%) rotate(-10.5deg)' },
          '75%': { transform: 'translate(75%, -31.5%) rotate(-5deg)' },
          '81%': { transform: 'translate(81%, -29.5%) rotate(-1deg)' },
          '87%': { transform: 'translate(87%, -25%) rotate(2deg)' },
          '94%': { transform: 'translate(94%, -18%) rotate(4deg)' },
          '100%': { transform: 'translate(100%, -10%) rotate(4deg)' },
        },
      },
      colors: {
        neutral: neutral
      }
    },
    plugins: [],
  }
}