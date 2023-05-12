import React from 'react'
import * as Seperator from '@radix-ui/react-separator';
import TextLabel from '~/components/TextLabel'

function Experience({ scrollTo }) {
    return (
        <div className='flex flex-col items-center w-screen bg-neutral-100 dark:bg-neutral-800'>
            <div className='flex flex-col items-center max-w-screen-xl'>
                <div className='flex flex-col items-center px-6 py-20'>
                    <h1 className='mb-32 font-sans text-4xl font-bold'>About Me</h1>
                    <h1 className='text-3xl font-bold'>Education</h1>
                    <div className='flex flex-col self-start' >
                        <section className='w-full my-20'>
                            <div className='flex items-center justify-between w-full mb-2'>
                                <h2 className='w-2/3 font-mono text-2xl font-bold'>{"Bachelor's of Science"}</h2>
                            </div>
                            <div className='mb-6'>
                                <h3 className='font-mono text-lg font-bold'>Purdue University</h3>
                                <h3 className='font-mono text-lg font-semibold'>Computer Information Technology (Web Development)</h3>

                            </div>
                            <div>
                                <ul className='px-5 list-disc'>
                                    <li className='my-3'>Learned all about different forms of technology such as: Databases, CyberSecurity, Networking, and Web Development.</li>
                                    <li className='my-3'>Gained exposure and experience with many different languages such as: Java, Python, Kotlin, and more.</li>
                                    <li className='my-3'>Learned useful career skills, including: Project Management, Statistics, UI/UX Design and Development, and more.</li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>


                <Seperator.Root orientation='horizontal' className='w-10/12 h-0.5 bg-neutral-400' />


                <div className='flex flex-col items-center px-6 py-20'>
                    <h1 className='text-3xl font-bold'>Work</h1>
                    <div className='flex flex-col self-start' >
                        <section className='w-full my-20'>
                            <div className='flex items-center justify-between w-full mb-2'>
                                <h2 className='w-2/3 font-mono text-2xl font-bold'>Preventive Health Care Researcher</h2>
                                <TextLabel className={'bg-green-100 text-green-700'}>Part Time</TextLabel>
                            </div>
                            <div className='mb-6'>
                                <h3 className='font-mono text-lg font-medium'>National Institutes of Health</h3>
                                <h3 className='font-mono text-lg font-medium'>Indiana University</h3>
                            </div>
                            <div>
                                <ul className='px-5 list-disc'>
                                    <li className='my-3'>Created an interface for Physicians to use in order to view patient recordsd and compare them to medical guidelines.</li>
                                    <li className='my-3'>Developed an API to retrieve data from MongoDB, dynamically parse it, and display it to the user.</li>
                                    <li className='my-3'>Experimented with Natural Language Processing. Tools used were BioBERT and Spacy (SciSpacy, NegSpacy)</li>
                                </ul>
                            </div>
                        </section>
                        <section className='flex flex-col items-center my-10'>
                            <div className='flex items-center justify-center w-full mb-5'>
                                <h2 className='font-mono font-extrabold'>...and hopefully you!</h2>
                            </div>
                            <p className=''>{`If you are a recruiter and you want to get in contact for any reason, please do! I'd love to chat, no matter the topic.`}</p>
                            <button className='p-3 my-10 font-sans font-bold text-white bg-blue-500 rounded-xl' onClick={() => scrollTo('#contact')}>Contact Me!</button>
                        </section>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Experience