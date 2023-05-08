import React from 'react'
import Image from 'next/image'
import Label from './Label'

function Skills({ title, imgSrc, imgAlt, labels, className, children }) {
    return (
        <div className={`flex flex-col items-center my-10 ${className}`}>
            <Image src={imgSrc} alt={imgAlt} width={50} className='mb-4' />
            <h2 className='font-bold text-xl mb-4'>{title}</h2>
            <div className='flex flex-wrap justify-center'>
                {labels.map((l) => (
                    <Label key={l.name} className={'group flex'}>
                        <p className='translate-x-3 transition-transform group-hover:translate-x-0 group-hover:font-bold'>{l.name}</p>
                        <Image src={l.imgSrc} alt={l.name} width={15} className={`h-auto ml-2 opacity-0 transition-opacity group-hover:block group-hover:opacity-100`} />
                    </Label>
                ))}
                {children}
            </div>
        </div>
    )
}

export default Skills