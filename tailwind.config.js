import { fontFamily } from 'tailwindcss/defaultTheme'
import { neutral } from 'tailwindcss/colors'
import { withAnimations } from 'animated-tailwindcss'

/** @type {import('tailwindcss').Config} */
module.exports = withAnimations({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-jb-mono)', ...fontFamily.mono],
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
      animation: {
        'divider-on-scroll': 'spaceship-on-scroll 1s linear infinite',
        'divider-on-scroll-small': 'spaceship-on-scroll-small 1s linear infinite',
        'divider-on-scroll-x-small': 'spaceship-on-scroll-x-small 1s linear infinite',
        'slide-in': 'slide-in 200ms cubic-bezier(0.075, 0.82, 0.165, 1) forwards',
        'slide-out': 'slide-in 200ms cubic-bezier(0.075, 0.82, 0.165, 1) reverse',
      },
      keyframes: {
        'spaceship-on-scroll': {
          '0%': { transform: 'translate(0%, 0%)', },
          '6%': { transform: 'translate(6%, 6%) rotate(-1.5deg)', },
          '12%': { transform: 'translate(12%, 10%) rotate(-3deg)', },
          '18%': { transform: 'translate(18%, 16%) rotate(-12deg)', },
          '25%': { transform: 'translate(25%, 17%) rotate(-19deg)', },
          '31%': { transform: 'translate(31%, 15%) rotate(-26deg)', },
          '37%': { transform: 'translate(37%, 8%) rotate(-29deg)', },
          '43%': { transform: 'translate(43%, -1%) rotate(-30deg)', },
          '50%': { transform: 'translate(50%, -12%) rotate(-27deg)', },
          '56%': { transform: 'translate(56%, -20%) rotate(-23deg)', },
          '62%': { transform: 'translate(62%, -27%) rotate(-16deg)', },
          '68%': { transform: 'translate(68%, -31%) rotate(-10.5deg)', },
          '75%': { transform: 'translate(75%, -31.5%) rotate(-5deg)', },
          '81%': { transform: 'translate(81%, -29.5%) rotate(-1deg)', },
          '87%': { transform: 'translate(87%, -25%) rotate(2deg)', },
          '94%': { transform: 'translate(94%, -18%) rotate(4deg)', },
          '100%': { transform: 'translate(100%, -10%) rotate(4deg)', },
        },
        'spaceship-on-scroll-small': {
          '0%': { transform: 'translate(0%, 0%) scale(.5) translateY(50%)', },
          '6%': { transform: 'translate(6%, 6%) rotate(-1.5deg) scale(.5) translateY(50%)', },
          '12%': { transform: 'translate(12%, 10%) rotate(-3deg) scale(.5) translateY(50%)', },
          '18%': { transform: 'translate(18%, 16%) rotate(-12deg) scale(.5) translateY(50%)', },
          '25%': { transform: 'translate(25%, 17%) rotate(-19deg) scale(.5) translateY(50%)', },
          '31%': { transform: 'translate(31%, 15%) rotate(-26deg) scale(.5) translateY(50%)', },
          '37%': { transform: 'translate(37%, 8%) rotate(-29deg) scale(.5) translateY(50%)', },
          '43%': { transform: 'translate(43%, -1%) rotate(-30deg) scale(.5) translateY(50%)', },
          '50%': { transform: 'translate(50%, -12%) rotate(-27deg) scale(.5) translateY(50%)', },
          '56%': { transform: 'translate(56%, -20%) rotate(-23deg) scale(.5) translateY(50%)', },
          '62%': { transform: 'translate(62%, -27%) rotate(-16deg) scale(.5) translateY(50%)', },
          '68%': { transform: 'translate(68%, -31%) rotate(-10.5deg) scale(.5) translateY(50%)', },
          '75%': { transform: 'translate(75%, -31.5%) rotate(-5deg) scale(.5) translateY(50%)', },
          '81%': { transform: 'translate(81%, -29.5%) rotate(-1deg) scale(.5) translateY(50%)', },
          '87%': { transform: 'translate(87%, -25%) rotate(2deg) scale(.5) translateY(50%)', },
          '94%': { transform: 'translate(94%, -18%) rotate(4deg) scale(.5) translateY(50%)', },
          '100%': { transform: 'translate(100%, -10%) rotate(4deg) scale(.5) translateY(50%)', },
        },
        'spaceship-on-scroll-x-small': {
          '0%': { transform: 'translate(0%, 0%) scale(.25) translateY(150%)', },
          '6%': { transform: 'translate(6%, 6%) rotate(-1.5deg) scale(.25) translateY(150%)', },
          '12%': { transform: 'translate(12%, 10%) rotate(-3deg) scale(.25) translateY(150%)', },
          '18%': { transform: 'translate(18%, 16%) rotate(-12deg) scale(.25) translateY(150%)', },
          '25%': { transform: 'translate(25%, 17%) rotate(-19deg) scale(.25) translateY(150%)', },
          '31%': { transform: 'translate(31%, 15%) rotate(-26deg) scale(.25) translateY(150%)', },
          '37%': { transform: 'translate(37%, 8%) rotate(-29deg) scale(.25) translateY(150%)', },
          '43%': { transform: 'translate(43%, -1%) rotate(-30deg) scale(.25) translateY(150%)', },
          '50%': { transform: 'translate(50%, -12%) rotate(-27deg) scale(.25) translateY(150%)', },
          '56%': { transform: 'translate(56%, -20%) rotate(-23deg) scale(.25) translateY(150%)', },
          '62%': { transform: 'translate(62%, -27%) rotate(-16deg) scale(.25) translateY(150%)', },
          '68%': { transform: 'translate(68%, -31%) rotate(-10.5deg) scale(.25) translateY(150%)', },
          '75%': { transform: 'translate(75%, -31.5%) rotate(-5deg) scale(.25) translateY(150%)', },
          '81%': { transform: 'translate(81%, -29.5%) rotate(-1deg) scale(.25) translateY(150%)', },
          '87%': { transform: 'translate(87%, -25%) rotate(2deg) scale(.25) translateY(150%)', },
          '94%': { transform: 'translate(94%, -18%) rotate(4deg) scale(.25) translateY(150%)', },
          '100%': { transform: 'translate(100%, -10%) rotate(4deg) scale(.25) translateY(150%)', },
        },
        'slide-in': {
          'from': { transform: 'translateX(100vw)' },
          'to': { transform: 'translateX(0vw)' }
        },
      },
      colors: {
        neutral: neutral
      },
      screens: {
        '3xl': '1920px',
        '4xl': '2240px',
        '5xl': '2560px',
      }
    },
    plugins: [],
  }
})