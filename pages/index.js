import Typewriter from 'typewriter-effect';
import SpaceDivider from '~/components/SpaceDivider';
import AboutDivider from '~/components/AboutDivider';
import Expand from '~/icons/Expand';
import { useEffect, useState } from 'react';
import PortfolioDivider from '~/components/PortfolioDivider';
import GitHub from '~/icons/GitHub';
import LinkedIn from '~/icons/LinkedIn';
import Image from 'next/image';
import desktopUrl from '~/icons/desktop.svg?url';
import terminalUrl from '~/icons/terminal.svg?url';
import dataUrl from '~/icons/data.svg?url';
import reactUrl from '~/icons/react.svg?url';
import javasriptUrl from '~/icons/javascript.svg?url';
import firebaseUrl from '~/icons/firebase.svg?url';
import flaskUrl from '~/icons/flask.svg?url';
import gcloudUrl from '~/icons/gcloud.svg?url';
import mongodbUrl from '~/icons/mongodb.svg?url';
import nextjsUrl from '~/icons/nextjs.svg?url';
import tailwindUrl from '~/icons/tailwind.svg?url';
import jwtUrl from '~/icons/jwt.svg?url';
import expressUrl from '~/icons/express.svg?url';
import mysqlUrl from '~/icons/mysql.svg?url';
import Skills from '~/components/Skills';

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
        {/* ABOUT */}
        <div id='about' className='bg-neutral-50 dark:bg-black'>
          <SpaceDivider width={'100%'} />
          <div className='min-h-screen bg-neutral-200 dark:bg-neutral-900 flex flex-col items-center py-20 px-6'>
            <h1 className='font-bold text-3xl'>About Me</h1>
            <Image alt={'Johnathon Trisler'} src={'/me.jpg'} width={425} height={425} className='rounded-full scale-50 transition-transform hover:scale-[55%]' />
            <p className='mb-10'>{"Front-end Developer and INSERT SOMETHING MAYBE GOOFY HERE. I specialize in frontend development with a current focus of React. I have experience with a wide variety of technologies, including many different languages. I'm an adaptable team player with great indepedent skills, and a desire to succeed."}</p>

            <h2 className='font-bold text-2xl underline underline-offset-4'>Development Skills</h2>
            <Skills imgSrc={desktopUrl} imgAlt={'Desktop Icon'} title={'Front End'} labels={[
              { name: 'React', imgSrc: reactUrl },
              { name: 'Next.js', imgSrc: nextjsUrl },
              { name: 'JavaScript', imgSrc: javasriptUrl },
              { name: 'TailwindCSS', imgSrc: tailwindUrl },
              { name: 'JWT Auth', imgSrc: jwtUrl }
            ]} />
            <Skills imgSrc={terminalUrl} imgAlt={'Terminal Prompt Icon'} title={'Back End'} labels={[
              { name: 'Express', imgSrc: expressUrl },
              { name: 'Flask', imgSrc: flaskUrl }
            ]} />
            <Skills imgSrc={dataUrl} imgAlt={'Database Icon'} title={'Database'} labels={[
              { name: 'MongoDB', imgSrc: mongodbUrl },
              { name: 'MySQL', imgSrc: mysqlUrl },
              { name: 'Firestore', imgSrc: firebaseUrl },
              { name: 'BigQuery', imgSrc: gcloudUrl }
            ]} />

            <h2 className='font-bold text-2xl underline underline-offset-4 m-10'>Fun Stuff</h2>
            <div>
              <p className='mb-2'>I spend my free time scrolling through memes, listening to music, playing video games, or watching a good movie or series. </p>
              <p className='mb-2'>For music, I am very particular about what I like. But, in general, my go-to genres are Rap and EDM.</p>
              <p className='mb-2'>My favorite video games are Counter Strike, The Witcher 3, Stray, and Spider-Man (PS4) just to name a few.</p>
              <p className='mb-2'>Lastly, my favorite movie franchises are Star Wars, James Bond (Daniel Craig) and Marvel (before phase 4).</p>
            </div>
          </div>
        </div>

        {/* PORTFOLIO */}
        <div id='portfolio' className='bg-neutral-200 dark:bg-neutral-900'>
          <AboutDivider />
          <div className='min-h-screen bg-neutral-100 dark:bg-neutral-800 flex flex-col items-center py-20 px-6'>
            <h1 className='font-bold text-3xl'>Portfolio</h1>
          </div>
        </div>

        {/* LINKS */}
        <div id='links' className='bg-neutral-300 dark:bg-neutral-900'>
          <PortfolioDivider />
          <div className='min-h-screen bg-neutral-300 dark:bg-neutral-900 flex flex-col items-center py-20 px-6'>
            <h1 className='font-bold text-3xl'>Links</h1>
          </div>
        </div>
      </div>
    </main>
  )
}
