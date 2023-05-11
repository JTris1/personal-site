import { Link } from 'react-scroll'
import { useRouter } from 'next/router'
import React from 'react'
import { CSSTransition } from 'react-transition-group'

function NavMenu({ innerRef, setNavOpened }) {
    const router = useRouter();

    return (
        <div ref={innerRef} className='fixed z-20 flex items-center justify-center w-full h-full transition-transform bg-opacity-75 bg-neutral-50 backdrop-blur-3xl dark:bg-neutral-950'>
            <ul className='flex flex-col items-center h-fit'>
                <Link className={`mb-16 cursor-pointer hover:underline hover:underline-offset-4`}
                    activeClass={`font-bold`}
                    smooth
                    duration={350}
                    spy
                    to='home'
                >
                    <span className={`text-4xl `}>Home</span>
                </Link>
                <Link className={`mb-16 cursor-pointer hover:underline hover:underline-offset-4`}
                    activeClass={`font-bold`}
                    smooth
                    duration={350}
                    spy
                    to='about'
                >
                    <span className={`text-4xl`}>About Me</span>
                </Link>
                <Link className={`mb-16 cursor-pointer hover:underline hover:underline-offset-4`}
                    activeClass={`font-bold`}
                    smooth
                    duration={350}
                    spy
                    to='experience'
                >
                    <span className={`text-4xl`}>Experience</span>
                </Link>
                <Link className={`mb-16 cursor-pointer hover:underline hover:underline-offset-4`}
                    activeClass={`font-bold`}
                    smooth
                    duration={350}
                    spy
                    to='contact'
                >
                    <span className={`text-4xl`}>Contact</span>
                </Link>
            </ul>
        </div>

    )
}

export default NavMenu