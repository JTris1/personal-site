// import Link from 'next/link'
import { Link } from 'react-scroll'
import { useRouter } from 'next/router'
import React from 'react'
import { CSSTransition } from 'react-transition-group'

function NavMenu({ innerRef, setNavOpened }) {
    const router = useRouter();

    function handleClick(id) {
        router.push('/', id, { shallow: true })
    }

    return (
        <div ref={innerRef} className='transition-transform fixed w-full h-full bg-neutral-50 bg-opacity-75 backdrop-blur-3xl dark:bg-neutral-950 flex justify-center z-20'>
            <ul className='flex flex-col items-center h-fit mt-[60%]'>
                <Link className={`mb-16 cursor-pointer hover:underline hover:underline-offset-4`}
                    activeClass={`font-bold`}
                    // onSetActive={() => handleClick('/')}
                    smooth
                    duration={350}
                    spy
                    to='home'
                >
                    <span className={`text-4xl `}>Home</span>
                </Link>
                <Link className={`mb-16 cursor-pointer hover:underline hover:underline-offset-4`}
                    activeClass={`font-bold`}
                    // onSetActive={() => handleClick('/about')}
                    smooth
                    duration={350}
                    offset={30}
                    spy
                    to='about'
                >
                    <span className={`text-4xl`}>About Me</span>
                </Link>
                <Link className={`mb-16 cursor-pointer hover:underline hover:underline-offset-4`}
                    activeClass={`font-bold`}
                    // onSetActive={() => handleClick('/portfolio')}
                    smooth
                    duration={350}
                    offset={30}
                    spy
                    to='portfolio'
                >
                    <span className={`text-4xl`}>Portfolio</span>
                </Link>
                <Link className={`mb-16 cursor-pointer hover:underline hover:underline-offset-4`}
                    activeClass={`font-bold`}
                    // onSetActive={() => handleClick('/links')}
                    smooth
                    duration={350}
                    offset={30}
                    spy
                    to='links'
                >
                    <span className={`text-4xl`}>Links</span>
                </Link>
            </ul>
        </div>

    )
}

export default NavMenu