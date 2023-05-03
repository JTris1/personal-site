import React, { useState } from 'react'
import NavMenu from './NavMenu';

export default function Nav({ }) {
    const [navOpened, setNavOpened] = useState(false);


    return (
        <>
            <div className='w-full h-16 flex justify-between items-center'>
                <div className='w-[100px] h-[100px]'></div>
                <Hamburger className='scale-50 cursor-pointer' navOpened={navOpened} setNavOpened={setNavOpened} />
            </div>
            {
                navOpened ?
                    <NavMenu />
                    :
                    undefined
            }
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
            <path d="M20 50h60" className={`${line_style} fill-none stroke-neutral-950 dark:stroke-neutral-50 [stroke-dasharray:60_60] ${navOpened ? '[stroke-dasharray:2_60] [stroke-dashoffset:30]' : ''}`} />
            <path
                d="M20 71h60s14.499.183 14.533-37.711c.01-11.27-3.567-14.96-9.274-14.958-5.707.001-10.259 6.67-10.259 6.67L25 75"
                className={`${line_style} fill-none stroke-neutral-950 dark:stroke-neutral-50 [stroke-dasharray:60_207] ${navOpened ? '[stroke-dasharray:90_207] [stroke-dashoffset:-134]' : ''}`}
            />
        </svg>
    )
}