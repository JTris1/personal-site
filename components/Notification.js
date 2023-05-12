import React from 'react'
import { Close } from '~/icons'
import { toast } from 'react-hot-toast';

function Notification({ text, duration, id, position, icon }) {
    toast.custom((t) => {
        return (
            <div
                className={`${(position === "top-left" || position == "top-center" || position == "top-right") ? (t.visible ? 'animate-fadeInDown' : 'animate-fadeOutUp') : (t.visible ? 'animate-fadeInUp' : 'animate-fadeOutDown')} animate-faster max-w-xs bg-neutral-50 dark:bg-neutral-800 shadow-md rounded-lg pointer-events-auto ring-1 ring-neutral-600 ring-opacity-5 flex items-center px-2 py-3 font-sans`}
            >
                <div className='mr-4'>
                    {t.icon}
                </div>
                <div className="flex">
                    <p className=''>{text}</p>
                </div>
                <div className="flex">
                    <button
                        onClick={() => toast.dismiss(t.id)}
                        aria-label='Close notification'
                    >
                        <Close className={`text-3xl dark:fill-neutral-50`} />
                    </button>
                </div>
            </div>
        )
    }, {
        duration: duration,
        id: id,
        position: position,
        icon: icon
    })
}

export default Notification