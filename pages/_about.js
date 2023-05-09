import Image from 'next/image'
import { useRouter } from 'next/router'
import SpaceDivider from '~/components/SpaceDivider'
import Skills from '~/components/Skills'
import { Data, Desktop, Express, Firebase, Flask, Gcloud, Javascript, Jwt, Mongodb, Mysql, Nextjs, React, Tailwind, Terminal } from '~/icons';

function About({ }) {
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
                    <Skills img={<Desktop className={`text-5xl mb-3`} />} title={'Front End'} labels={[
                        { name: 'React', img: <React className={`text-lg opacity-0 transition-opacity group-hover:opacity-100 group-hover:`} /> },
                        { name: 'Next.js', img: <Nextjs className={`text-lg opacity-0 transition-opacity group-hover:opacity-100`} /> },
                        { name: 'JavaScript', img: <Javascript className={`text-lg opacity-0 transition-opacity group-hover:opacity-100`} /> },
                        { name: 'TailwindCSS', img: <Tailwind className={`text-lg opacity-0 transition-opacity group-hover:opacity-100`} /> },
                        { name: 'JWT Auth', img: <Jwt className={`text-lg opacity-0 transition-opacity group-hover:opacity-100`} /> }
                    ]} />
                    <Skills img={<Terminal className={`text-5xl mb-3`} />} title={'Back End'} labels={[
                        { name: 'Express', img: <Express className={`text-lg opacity-0 transition-opacity group-hover:opacity-100`} /> },
                        { name: 'Flask', img: <Flask className={`text-lg opacity-0 transition-opacity group-hover:opacity-100`} /> }
                    ]} />
                    <Skills img={<Data className={`text-5xl mb-3`} />} title={'Database'} labels={[
                        { name: 'MongoDB', img: <Mongodb className={`text-lg opacity-0 transition-opacity group-hover:opacity-100`} /> },
                        { name: 'MySQL', img: <Mysql className={`text-lg opacity-0 transition-opacity group-hover:opacity-100`} /> },
                        { name: 'Firestore', img: <Firebase className={`text-lg opacity-0 transition-opacity group-hover:opacity-100`} /> },
                        { name: 'BigQuery', img: <Gcloud className={`text-lg opacity-0 transition-opacity group-hover:opacity-100`} /> }
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