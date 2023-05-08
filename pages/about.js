import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import SpaceDivider from '~/components/SpaceDivider'
import Skills from '~/components/Skills'
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

function About() {
    const router = useRouter();

    return (
        <div id='about' className='bg-neutral-50 dark:bg-black'>
            <SpaceDivider width={'100%'} />
            <div className='min-h-screen bg-neutral-200 dark:bg-neutral-900 flex flex-col items-center py-20 px-6'>
                <h1 className='font-bold text-3xl'>About Me</h1>
                <Image alt={'Johnathon Trisler'} src={'/me.jpg'} width={425} height={425} className='rounded-full scale-50 transition-transform hover:scale-[55%]' />
                <p className='mb-10'>{"Front-end Developer and INSERT SOMETHING MAYBE GOOFY HERE. I specialize in frontend development with a current focus of React. I have experience with a wide variety of technologies, including many different languages. I'm an adaptable team player with great indepedent skills, and a desire to succeed."}</p>

                <div className='flex flex-col items-center my-20'>
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
                </div>

                <h2 className='font-bold text-2xl underline underline-offset-4 m-10'>Fun Stuff</h2>
                <div>
                    <p className='mb-2'>I spend my free time scrolling through memes, listening to music, playing video games, or watching a good movie or series.</p>
                    <p className='mb-2'>For music, I am very particular about what I like. But, in general, my go-to genres are Rap and EDM.</p>
                    <p className='mb-2'>My favorite video games are Counter Strike, The Witcher 3, Stray, and Spider-Man (PS4) just to name a few.</p>
                    <p className='mb-2'>Lastly, my favorite movie franchises are Star Wars, James Bond, and Marvel (before phase 4).</p>
                </div>
            </div>
        </div>
    )
}

export default About