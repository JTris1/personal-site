import * as Popover from '@radix-ui/react-popover'
import React, { useEffect } from 'react'
import toast, { ToastBar, Toaster } from 'react-hot-toast'
import { ErrorCircle, Close } from '~/icons'

function Notification({ text, duration, icon, position, id }) {

    useEffect(() => {
        toast(text, { id: id, icon: icon })
    }, [text])

    return (
        <div>
            <Toaster
                position={position}
                gutter={8}
                containerClassName=''
                toastOptions={{
                    id: id,
                    className: '',
                    duration: duration,
                }}
            >
                {(t) => (
                    <ToastBar toast={t}>
                        {({ icon, message }) => (
                            <div className='flex'>
                                <span className='self-center'>{icon}</span>
                                <span className='font-sans text-sm'>{message}</span>
                                {t.type !== 'loading' && (
                                    <button className='h-fit text-3xl self-center' onClick={() => toast.dismiss(t.id)}><Close /></button>
                                )}
                            </div>
                        )}
                    </ToastBar>
                )}
            </Toaster>
        </div>
    )
}

export default Notification