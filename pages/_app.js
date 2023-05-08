import '~/styles/globals.css'
import localFont from 'next/font/local'
import Nav from '~/components/Nav';
import { useState, useEffect } from 'react';

const jbMono = localFont({ src: '../fonts/JetBrainsMono[wght].ttf', variable: '--font-jb-mono' });


export default function App({ Component, pageProps }) {
  const [activeLink, setActiveLink] = useState('#home');
  const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     document.body.style.setProperty('--scroll', window.scrollY / ((document.body.offsetHeight / 2 - window.innerHeight)));
  //     if (window.scrollY > 0) setScrolled(true);
  //     else setScrolled(false);

  //     const homeScrollHeight = -95;
  //     const aboutScrollHeight = document.getElementById('about').offsetHeight + homeScrollHeight;
  //     const portfolioScrollHeight = document.getElementById('portfolio').offsetHeight + aboutScrollHeight;
  //     const linksScrollHeight = document.getElementById('links').offsetHeight + portfolioScrollHeight;

  //     if (window.scrollY >= homeScrollHeight && window.scrollY < aboutScrollHeight) {
  //       console.log('Setting activeLink to home')
  //       setActiveLink('#home');
  //     }
  //     else if (window.scrollY >= aboutScrollHeight && window.scrollY < portfolioScrollHeight) {
  //       console.log('Setting activeLink to about')
  //       setActiveLink('#about');
  //     }
  //     else if (window.scrollY >= portfolioScrollHeight && window.scrollY < linksScrollHeight) {
  //       console.log('Setting activeLink to portfolio')
  //       setActiveLink('#portfolio');
  //     }
  //     else if (window.scrollY >= linksScrollHeight) {
  //       console.log('Setting activeLink to links')
  //       setActiveLink('#links');
  //     }
  //   }, false);
  // });

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
        <Nav activeLink={activeLink} setActiveLink={setActiveLink} resetScroll={resetScroll} scrollTo={scrollTo} />
        <Component {...pageProps} scrolled={scrolled} resetScroll={resetScroll} scrollTo={scrollTo} activeLink={activeLink} setActiveLink={setActiveLink} />
      </main>
    </>

  )
}
