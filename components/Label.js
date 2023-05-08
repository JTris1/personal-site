import React from 'react'

function Label({ children, className }) {
    return (
        <div className={`w-fit px-2 py-2 border-2 border-blue-500 rounded-md mx-1 my-1 ${className || ''}`}>
            <div className='text-sm flex'>{children}</div>
        </div>
    )
}

export default Label