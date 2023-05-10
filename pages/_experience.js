import React from 'react'
import AboutDivider from '~/components/AboutDivider'
import TextLabel from '~/components/TextLabel'

function Experience({ scrollTo }) {
    return (
        <div id='experience' className='bg-neutral-200 dark:bg-neutral-900'>
            <AboutDivider />
            <div className='bg-neutral-100 dark:bg-neutral-800 flex flex-col items-center py-20 px-6'>
                <h1 className='font-bold text-3xl'>Experience</h1>
                <div className='flex flex-col self-start' >
                    <section className='my-20 w-full'>
                        <div className='flex justify-between items-center mb-2 w-full'>
                            <h2 className='font-bold text-2xl font-mono w-2/3'>Health Preventative Care Researcher</h2>
                            <TextLabel className={'bg-green-100 text-green-700'}>Part Time</TextLabel>
                        </div>
                        <div className='mb-6'>
                            <h3 className='text-md font-mono'>National Institues of Health</h3>
                            <h3 className='text-md font-mono'>Indiana University</h3>
                        </div>
                        <div>
                            <ul className='list-disc list-inside'>
                                <li className='my-3'>Created an interface for Physicians to use in order to view patient recordsd and compare them to medical guidelines.</li>
                                <li className='my-3'>Developed an API to retrieve data from MongoDB, dynamically parse it, and display it to the user.</li>
                                <li className='my-3'>Experimented with Natural Language Processing. Tools used were BioBERT and Spacy (SciSpacy, NegSpacy)</li>
                            </ul>
                        </div>
                    </section>

                    <section className='my-10 flex flex-col items-center'>
                        <div className='flex justify-center items-center mb-5 w-full'>
                            <h2 className='font-extrabold font-mono'>...and hopefully you!</h2>
                        </div>
                        <p className=''>{`If you are a recruiter and you want to get in contact for any reason, please do! I'd love to chat, no matter the topic.`}</p>
                        <button className='bg-blue-500 font-sans font-bold p-3 rounded-xl text-white my-10' onClick={() => scrollTo('#contact')}>Contact Me!</button>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Experience