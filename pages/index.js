import { useEffect, useState } from 'react';
import Home from './_home';
import About from './_about';
import Experience from './_experience';
import Contact from './_contact';
import Expand from '~/icons/Expand';
import { ErrorCircle, Close } from '~/icons';
import { Toaster, ToastBar, toast } from 'react-hot-toast';
import Notification from '~/components/Notification';


export default function Layout({ refs, scrolled, resetScroll, scrollTo, links, setLinks }) {

  useEffect(() => {
    Notification({ text: 'This site is functional, but it is undergoing some overhauls!', duration: 4000, id: 'renovations', position: 'top-left', icon: <ErrorCircle className={`fill-amber-500 text-2xl`} /> })
  }, [])

  return (
    <main className={`flex flex-col min-h-screen justify-between`}>
      <Toaster toastOptions={{ className: 'toaster' }}>
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <div className='flex'>
                <span className='self-center'>{icon}</span>
                <span className='font-sans text-sm'>{message}</span>
                <button className='self-center text-3xl h-fit' onClick={() => toast.dismiss(t.id)}><Close /></button>
              </div>
            )}
          </ToastBar>
        )}
      </Toaster>

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
