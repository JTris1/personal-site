import { useEffect, useState } from 'react';
import Home from './_home';
import About from './_about';
import Experience from './_experience';
import Contact from './_contact';
import Expand from '~/icons/Expand';
import Notification from '~/components/Notification';
import { ErrorCircle } from '~/icons';


export default function Layout({ refs, scrolled, resetScroll, scrollTo, links, setLinks }) {
  return (
    <main className={`flex flex-col min-h-screen justify-between`}>
      <Notification text={'This site is functional, but it is undergoing some overhauls!'} icon={<ErrorCircle className={`fill-amber-500 text-2xl`} />} duration={4000} position={'top-left'} />
      <div className='w-full'>
        <Home scrolled={scrolled} scrollTo={scrollTo} resetScroll={resetScroll} />
        <About />
        <Experience scrollTo={scrollTo} />
        <Contact />
      </div>
      <div className={`transition-opacity opacity-0 fixed bottom-3 right-3 bg-blue-500 rounded-xl fill-white cursor-pointer ${scrolled ? `opacity-100` : `pointer-events-none`}`} onClick={() => resetScroll()}>
        <Expand className={`rotate-180 scale-75`} />
      </div>
    </main>
  )
}
