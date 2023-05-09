import React from 'react'
import AboutDivider from '~/components/AboutDivider'

function Portfolio({ }) {
    return (
        <div id='portfolio' className='bg-neutral-200 dark:bg-neutral-900'>
            <AboutDivider />
            <div className='min-h-screen bg-neutral-100 dark:bg-neutral-800 flex flex-col items-center py-20 px-6'>
                <h1 className='font-bold text-3xl'>Portfolio</h1>
            </div>
        </div>
    )
}

export default Portfolio