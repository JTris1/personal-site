import localFont from 'next/font/local'
import { Inter } from 'next/font/google';

export const jbMono = localFont({ src: '../fonts/JetBrainsMono[wght].ttf', variable: '--font-jb-mono', display: 'swap' });

export const inter = Inter({ subsets: ['latin'], variable: '--font-inter', weight: ['100', '300', '400', '700', '900'], display: 'swap' });