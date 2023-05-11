import React from 'react'
import AboutDivider from '~/components/AboutDivider'
import TextLabel from '~/components/TextLabel'

function Experience({ scrollTo }) {
    return (
        <div id='experience' className='flex flex-col items-center w-screen bg-neutral-100 dark:bg-neutral-800'>
            <div className='max-w-screen-xl'>
                <div className='flex flex-col items-center px-6 py-20 bg-neutral-100 dark:bg-neutral-800'>
                    <h1 className='text-3xl font-bold'>Experience</h1>
                    <div className='flex flex-col self-start' >
                        <section className='w-full my-20'>
                            <div className='flex items-center justify-between w-full mb-2'>
                                <h2 className='w-2/3 font-mono text-2xl font-bold'>Health Preventative Care Researcher</h2>
                                <TextLabel className={'bg-green-100 text-green-700'}>Part Time</TextLabel>
                            </div>
                            <div className='mb-6'>
                                <h3 className='font-mono text-md'>National Institues of Health</h3>
                                <h3 className='font-mono text-md'>Indiana University</h3>
                            </div>
                            <div>
                                <ul className='list-disc list-inside'>
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
        </div>
    )
}

export default Experience