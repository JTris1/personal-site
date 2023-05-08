import React from 'react'
import PortfolioDivider from '~/components/PortfolioDivider'

function Links() {
    return (
        <div id='links' className='bg-neutral-300 dark:bg-neutral-900'>
            <PortfolioDivider />
            <div className='min-h-screen bg-neutral-300 dark:bg-neutral-900 flex flex-col items-center py-20 px-6'>
                <h1 className='font-bold text-3xl'>Links</h1>
            </div>
        </div>
    )
}

export default Links