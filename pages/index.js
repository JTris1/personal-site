import Typewriter from 'typewriter-effect';
import Divider from '~/components/Divider';
import Expand from '~/icons/Expand';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      document.body.style.setProperty('--scroll', window.scrollY / (document.body.offsetHeight - window.innerHeight));
    }, false);
  });

  return (
    <main
      className={`flex flex-col min-h-[calc(100vh-64px)] justify-between font-sans`}
    >
      <div className='min-h-[calc(100vh-64px)] w-full p-8 flex'>
        <div className={`text-2xl w-full mt-[60%] relative`}>
          <Typewriter
            options={{
              cursor: '_',
              deleteSpeed: 30,
              delay: 75
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString('Hello, <br/>')
                .typeString('My name is Johnathon Trisler.')
                .pauseFor(1500)
                .deleteAll()
                .typeString('I am a junior software developer.')
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
          <div className='w-fit absolute bottom-0 left-1/2 -translate-x-1/2'>
            <Expand className={'animate-bounce'} />
          </div>
        </div>
      </div>
      <div className='w-full'>
        <Divider width={'auto'} />
        <div className='h-screen bg-neutral-200 dark:bg-neutral-900'>
        </div>
      </div>
    </main>
  )
}
