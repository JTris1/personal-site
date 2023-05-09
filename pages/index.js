import { useEffect, useState } from 'react';
import Home from './_home';
import About from './_about';
import Portfolio from './_portfolio';
import Links from './_links';
import Expand from '~/icons/Expand';

export default function Layout({ refs, scrolled, resetScroll, scrollTo, links, setLinks }) {
  return (
    <main className={`flex flex-col min-h-screen justify-between font-sans`}>
      <div className='w-full'>
        <Home scrolled={scrolled} scrollTo={scrollTo} resetScroll={resetScroll} />
        <About />
        <Portfolio />
        <Links />
      </div>
      <div className={`transition-opacity opacity-0 fixed bottom-3 right-3 bg-blue-500 rounded-xl fill-white cursor-pointer ${scrolled ? `opacity-100` : `pointer-events-none`}`} onClick={() => resetScroll()}>
        <Expand className={`rotate-180 scale-75`} />
      </div>
    </main>
  )
}
