import '~/styles/globals.css'
import localFont from 'next/font/local'
import Nav from '~/components/Nav';
import { useState, useEffect, useRef } from 'react';

const jbMono = localFont({ src: '../fonts/JetBrainsMono[wght].ttf', variable: '--font-jb-mono' });


export default function App({ Component, pageProps }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      document.body.style.setProperty('--scroll', window.scrollY / ((document.body.offsetHeight / 2 - window.innerHeight)));
      if (window.scrollY > 0) setScrolled(true);
      else setScrolled(false);
    }, { passive: true });
  });

  function scrollTo(selector) {
    console.log('Scrolling to ' + selector);
    document.querySelector(`${selector}`).scrollIntoView({ behavior: 'smooth' });
  }

  function resetScroll() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <main className={`${jbMono.className} font-mono h-full overflow-hidden relative`}>
        <Nav />
        <Component {...pageProps} scrolled={scrolled} resetScroll={resetScroll} scrollTo={scrollTo} />
      </main>
    </>

  )
}
