import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function NavMenu() {
    const router = useRouter()

    return (
        <div className='slide-in absolute w-full h-full bg-neutral-50 dark:bg-neutral-950 translate-x-[100vw] flex justify-center z-50'>
            <ul className='flex flex-col items-center h-fit mt-[33%]'>
                <Link href={'/'} className='mb-16'><span className={`text-4xl underline-offset-[6px] ${router.pathname === '/' ? 'underline' : undefined}`}>Home</span></Link>
                <Link href={'/'} className='mb-16'><span className={`text-4xl ${router.pathname === '/about' ? 'underline' : undefined}`}>About Me</span></Link>
                <Link href={'/'} className='mb-16'><span className={`text-4xl ${router.pathname === '/portfolio' ? 'underline' : undefined}`}>Portfolio</span></Link>
                <Link href={'/'} className='mb-16'><span className={`text-4xl ${router.pathname === '/links' ? 'underline' : undefined}`}>Links</span></Link>
            </ul>
        </div>
    )
}

export default NavMenu