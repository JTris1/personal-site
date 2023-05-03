import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { CSSTransition } from 'react-transition-group'

function NavMenu({ innerRef, activeLink, setActiveLink, setNavOpened, setNeedToScroll }) {

    function handleClick(selector) {
        console.log('Handling click for ' + selector)
        setActiveLink(selector);
        setNeedToScroll(true);
        setNavOpened(false);
    }

    return (
        <div ref={innerRef} className='fixed translate-x-[100vw] w-full h-full bg-neutral-50 dark:bg-neutral-950 flex justify-center z-20'>
            <ul className='flex flex-col items-center h-fit mt-[60%]'>
                <Link href={'/'} className='mb-16'><span className={`text-4xl underline-offset-[6px] ${activeLink === '#home' ? `underline` : undefined}`} onClick={() => handleClick('#home')}>Home</span></Link>
                <Link href={'/'} className='mb-16'><span className={`text-4xl underline-offset-[6px] ${activeLink === '#about' ? `underline` : undefined}`} onClick={() => handleClick('#about')}>About Me</span></Link>
                <Link href={'/'} className='mb-16'><span className={`text-4xl underline-offset-[6px] ${activeLink === '#portfolio' ? `underline` : undefined}`} onClick={() => handleClick('#portfolio')}>Portfolio</span></Link>
                <Link href={'/'} className='mb-16'><span className={`text-4xl underline-offset-[6px] ${activeLink === '#links' ? `underline` : undefined}`} onClick={() => handleClick('#links')}>Links</span></Link>
            </ul>
        </div>

    )
}

export default NavMenu