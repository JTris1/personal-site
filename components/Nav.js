import React, { useState, useRef } from 'react'
import NavMenu from './NavMenu';
import { CSSTransition } from 'react-transition-group';
import styles from '~/styles/Nav.module.css';

export default function Nav({ refProp, resetScroll, scrollTo, activeLink, setActiveLink }) {
    const [navOpened, setNavOpened] = useState(false);
    const ref = useRef(null);

    return (
        <>
            <div ref={refProp} className='fixed z-30 flex items-center justify-between w-full h-16 backdrop-blur-md'>
                <div className='w-[100px] h-[100px]'></div>
                <button className={`${styles['hamburger']} ${styles['hamburger--squeeze']} ${navOpened ? styles['is-active'] : ``}`} type='button' onClick={() => setNavOpened(!navOpened)} aria-label='Open navigation menu'>
                    <span className={`${styles['hamburger-box']}`}>
                        <span className={`${styles['hamburger-inner']}`}></span>
                    </span>
                </button>
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
                mountOnEnter
                unmountOnExit
            >
                <NavMenu innerRef={ref} setNavOpened={setNavOpened} />
            </CSSTransition>
        </>
    )
}