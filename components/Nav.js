import React, { useState, useRef } from 'react'
import NavMenu from './NavMenu';
import { CSSTransition } from 'react-transition-group';

export default function Nav({ refProp, resetScroll, scrollTo, activeLink, setActiveLink }) {
    const [navOpened, setNavOpened] = useState(false);
    const [needToScroll, setNeedToScroll] = useState(false);
    const ref = useRef(null);

    return (
        <>
            <div ref={refProp} className='w-full h-16 flex justify-between items-center fixed backdrop-blur-md z-30'>
                <div className='w-[100px] h-[100px]'></div>
                <Hamburger className='scale-50 cursor-pointer' navOpened={navOpened} setNavOpened={setNavOpened} />
            </div>
            <CSSTransition timeout={150} in={navOpened} nodeRef={ref}
                classNames={{
                    enter: 'transition-transform',
                    enterActive: 'translate-x-[0vw] transition-transform',
                    enterDone: 'translate-x-[0vw]',
                    exit: 'translate-x-[0vw]',
                    exitActive: 'translate-x-[100vw] transition-transform',
                    exitDone: 'translate-x-[100vw]'
                }}
                onExited={() => {
                    if (needToScroll) {
                        scrollTo(activeLink);
                        setNeedToScroll(false);
                    }

                }}
            >
                <NavMenu innerRef={ref} activeLink={activeLink} setActiveLink={setActiveLink} setNavOpened={setNavOpened} setNeedToScroll={setNeedToScroll} />
            </CSSTransition>
        </>
    )
}

function Hamburger({ className, navOpened, setNavOpened }) {
    const line_style = 'stroke-[6] fill-none stroke-neutral-50 [transition:stroke-dasharray_200ms_cubic-bezier(0.4,0,0.2,1),stroke-dashoffset_200ms_cubic-bezier(0.4,0,0.2,1)]'

    return (
        <svg width={100} height={100} className={className} onClick={() => setNavOpened(!navOpened)}>
            <path
                d="M20 29h60s14.499-.183 14.533 37.711c.01 11.27-3.567 14.96-9.274 14.958C79.552 81.668 75 74.999 75 74.999L25 25"
                className={`${line_style} fill-none stroke-neutral-950 dark:stroke-neutral-50 [stroke-dasharray:60_207] ${navOpened ? '[stroke-dasharray:90_207] [stroke-dashoffset:-134]' : ''}`}
            />
            <path d="M20 50h60" className={`${line_style} fill-none stroke-neutral-950 dark:stroke-neutral-50 [stroke-dasharray:60_60] ${navOpened ? '[stroke-dasharray:0_60] [stroke-dashoffset:30]' : ''}`} />
            <path
                d="M20 71h60s14.499.183 14.533-37.711c.01-11.27-3.567-14.96-9.274-14.958-5.707.001-10.259 6.67-10.259 6.67L25 75"
                className={`${line_style} fill-none stroke-neutral-950 dark:stroke-neutral-50 [stroke-dasharray:60_207] ${navOpened ? '[stroke-dasharray:90_207] [stroke-dashoffset:-134]' : ''}`}
            />
        </svg>
    )
}