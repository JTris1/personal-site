import { useEffect } from 'react';
import Home from './_home';
import About from './_about';
import Experience from './_experience';
import Contact from './_contact';
import Expand from '~/icons/Expand';
import { ErrorCircle, Close } from '~/icons';
import { Toaster, ToastBar, toast } from 'react-hot-toast';
import Notification from '~/components/Notification';
import SpaceDivider from '~/components/SpaceDivider';
import AboutDivider from '~/components/AboutDivider';
import PortfolioDivider from '~/components/PortfolioDivider';
import Head from 'next/head';


export default function Layout({ refs, scrolled, resetScroll, scrollTo, links, setLinks }) {

  useEffect(() => {
    Notification({ text: 'This site is functional, but it is undergoing some overhauls!', duration: 4000, id: 'renovations', position: 'top-left', icon: <ErrorCircle className={`fill-amber-500 text-2xl`} /> })
  }, [])

  return (
    <>
      <Head>
        <title>Johnathon Trisler</title>
      </Head>
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
      <div className='flex flex-col items-center w-full'>
        <div id="home">
          <Home scrolled={scrolled} scrollTo={scrollTo} resetScroll={resetScroll} />
          <SpaceDivider width={'100%'} />
        </div>
        <div id="about">
          <About />
          <div className='w-screen bg-neutral-200 dark:bg-neutral-900'>
            <AboutDivider />
          </div>
        </div>
        <div id="experience">
          <Experience scrollTo={scrollTo} />
          <div className='w-screen bg-neutral-300 dark:bg-neutral-900'>
            <PortfolioDivider />
          </div>
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
      <div className={`transition-opacity opacity-0 fixed bottom-3 right-3 bg-blue-500 rounded-xl fill-white cursor-pointer ${scrolled ? `opacity-100` : `pointer-events-none`}`} onClick={() => resetScroll()}>
        <Expand className={`rotate-180 scale-75`} />
      </div>
    </>
  )
}
