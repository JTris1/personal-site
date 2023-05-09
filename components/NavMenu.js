// import Link from 'next/link'
import { Link } from 'react-scroll'
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
                {/* <Link href={'/'} className='mb-16'><span className={`text-4xl underline-offset-[6px] ${activeLink === '#home' ? `underline` : undefined}`} onClick={() => handleClick('#home')}>Home</span></Link> */}
                <Link className={`mb-16 cursor-pointer hover:underline hover:underline-offset-4`} activeClass={`font-bold`} smooth duration={350} spy to='home'><span className={`text-4xl `}>Home</span></Link>
                <Link className={`mb-16 cursor-pointer hover:underline hover:underline-offset-4`} activeClass={`font-bold`} smooth duration={350} offset={30} spy to='about'><span className={`text-4xl`}>About Me</span></Link>
                <Link className={`mb-16 cursor-pointer hover:underline hover:underline-offset-4`} activeClass={`font-bold`} smooth duration={350} offset={30} spy to='portfolio'><span className={`text-4xl`}>Portfolio</span></Link>
                <Link className={`mb-16 cursor-pointer hover:underline hover:underline-offset-4`} activeClass={`font-bold`} smooth duration={350} offset={30} spy to='links'><span className={`text-4xl`}>Links</span></Link>
            </ul>
        </div>

    )
}

export default NavMenu