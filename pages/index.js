import Typewriter from 'typewriter-effect';
import Expand from '~/icons/Expand';
import { useEffect, useState } from 'react';
import GitHub from '~/icons/GitHub';
import LinkedIn from '~/icons/LinkedIn';
import About from './about';
import Portfolio from './portfolio';
import Links from './links';

export default function Home({ scrolled, resetScroll, scrollTo, activeLink, setActiveLink }) {
  const [typewriterStoped, setTypewriterStopped] = useState(false);

  return (
    <main className={`flex flex-col min-h-screen justify-between font-sans`}>
      <div id="home" className='min-h-screen w-full p-8 flex'>
        <div className={`text-2xl w-full mt-[65%] relative`}>
          <div className='mb-40 text-center'>
            <Typewriter
              options={{
                cursor: '',
                deleteSpeed: 30,
                delay: 75
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('<span class="text-sm text-center">Hello, </span>')
                  .typeString('<span class="text-sm">my name is</span><br/><span class="text-3xl font-bold">Johnathon Trisler</span>')
                  .start()
                  .callFunction(() => setTypewriterStopped(true))
              }}
            />


            <div className={`flex justify-center mt-12 [transition:opacity_1500ms_ease] ${typewriterStoped ? `opacity-100` : `opacity-0`}`}>
              <GitHub className={'mr-6 scale-125'} />
              <LinkedIn className={'mr-6 scale-125'} />
            </div>
          </div>



          {
            typewriterStoped ?
              <div className='text-sm'>
                <Typewriter
                  options={{
                    cursor: '_',
                    deleteSpeed: 30,
                    delay: 75
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(2000)
                      .typeString('I am a Junior Frontend Developer.')
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString('This website was built with React').pauseFor(500).deleteChars(5).typeString('Next.js, TailwindCSS, and more.')
                      .changeDeleteSpeed(10)
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString('Scroll down to learn more, or check out the menu options to explore.')
                      .start()
                  }}
                />
              </div> : <></>
          }

          <div className='w-fit absolute bottom-0 left-1/2 -translate-x-1/2' onClick={() => scrollTo('#about')}>
            <Expand className={`animate-bounce transition-opacity ${scrolled ? `opacity-0` : undefined}`} />
          </div>
          <div className={`transition-opacity opacity-0 fixed bottom-3 right-3 bg-blue-500 rounded-xl fill-white ${scrolled ? `opacity-100` : `pointer-events-none`}`} onClick={() => resetScroll()}>
            <Expand className={`rotate-180 scale-75`} />
          </div>
        </div>
      </div>
      <div className='w-full'>
        <About />
        <Portfolio />
        <Links />
      </div>
    </main>
  )
}
