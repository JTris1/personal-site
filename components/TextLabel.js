import React from 'react'

function TextLabel({ children, className }) {
    return (
        <span className={`text-xs font-sans rounded-md w-fit h-fit px-2 py-1 text-center flex-shrink-0 ${className || ''}`}>
            {children}
        </span>
    )
}

export default TextLabel