import Image from 'next/image'
import Label from './Label'

function Skills({ title, img, labels, className, children }) {
    return (
        <div className={`flex flex-col items-center my-10 overflow-hidden cursor-default ${className}`}>
            {img}
            <h2 className='font-bold text-xl mb-4'>{title}</h2>
            <div className='flex flex-wrap justify-center'>
                {labels.map((l) => (
                    <Label key={l.name} className={'group flex'}>
                        <p className='mr-2 translate-x-3 transition group-hover:translate-x-0 group-hover:font-bold group-hover:text-blue-500'>{l.name}</p>
                        {l.img}
                    </Label>
                ))}
                {children}
            </div>
        </div>
    )
}

export default Skills