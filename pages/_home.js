import { useState } from 'react'
import Typewriter from 'typewriter-effect';
import GitHub from '~/icons/GitHub';
import LinkedIn from '~/icons/LinkedIn';
import Link from 'next/link';
import Expand from '~/icons/Expand';

function Home({ scrolled, scrollTo }) {
    const [typewriterStoped, setTypewriterStopped] = useState(false);


    return (
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
                        <Link href={'https://github.com/JTris1'}>
                            <GitHub className={'mr-6 scale-125'} />
                        </Link>
                        <Link href={'https://www.linkedin.com/in/johnathon-trisler-79760a231/'}>
                            <LinkedIn className={'mr-6 scale-125'} />
                        </Link>
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
                    <Expand className={`animate-bounce transition-opacity cursor-pointer ${scrolled ? `opacity-0` : undefined}`} />
                </div>
            </div>
        </div>
    )
}

export default Home