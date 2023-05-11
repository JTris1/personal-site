import React, { useState, useEffect } from 'react'
import PortfolioDivider from '~/components/PortfolioDivider'
import * as Form from '@radix-ui/react-form';
import * as Tooltip from '@radix-ui/react-tooltip';
import { Check, Copy, Envelope, ErrorCircle, Close } from '~/icons'
import Link from 'next/link';
import styles from '~/styles/Contact.module.css';
import { ToastBar, Toaster, toast } from 'react-hot-toast';

function Contact({ }) {
    const [messageSent, setMessageSent] = useState(null);

    useEffect(() => {
        if (messageSent === true || messageSent === false) {
            if (messageSent) {
                toast('Your message was sent successfully! You should hear back from me shortly.', {
                    duration: 5000,
                    icon: <Check className={`fill-green-500 text-2xl`} />,
                    position: 'bottom-center',
                    id: 'message_success'
                });
            }
            else if (messageSent === false) {
                toast("Your message couldn't be delivered for some reason. Please try again later.", {
                    duration: 5000,
                    icon: <ErrorCircle className={`fill-amber-500 text-2xl`} />,
                    position: 'bottom-center',
                    id: 'message_success'
                });
            }


            setTimeout(() => {
                setMessageSent(null);
            }, 3000)
        }

    }, [messageSent])

    async function copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
        }
        catch (err) {
            console.error('Failed to copy: ', err);
            console.log('Here is the text you were trying to copy: ', text);
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const formdata = { name: e.target['0'].value, email: e.target['1'].value, message: e.target['2'].value }

        const res = await fetch('/api/email', {
            body: JSON.stringify(formdata),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });

        const { error } = await res.json();
        if (error) {
            console.error(error);
            setMessageSent(false);
            return;
        }
        else {
            setMessageSent(true);
        }
    }

    return (
        <div id='contact' className='bg-neutral-300 dark:bg-neutral-900'>
            <Toaster toastOptions={{ id: 'message_success' }}>
                {(t) => (
                    <ToastBar toast={t}>
                        {({ icon, message }) => (
                            <div className='flex'>
                                <span className='self-center'>{icon}</span>
                                <span className='font-sans text-sm'>{message}</span>
                                <button className='h-fit text-3xl self-center' onClick={() => toast.dismiss(t.id)}><Close /></button>
                            </div>
                        )}
                    </ToastBar>
                )}
            </Toaster>
            <PortfolioDivider />
            <div className='bg-neutral-300 dark:bg-neutral-900 flex flex-col items-center py-20 px-6'>
                <h1 className='font-bold text-3xl mb-20'>Contact Me</h1>
                <div className='flex flex-col items-center'>
                    <Form.Root className='w-80 flex flex-col' onSubmit={(e) => handleSubmit(e)}>
                        <Form.Field name='name' className='mb-5'>
                            <div className='mb-2 flex flex-col'>
                                <Form.Label>Name</Form.Label>
                                <Form.Message match={'valueMissing'} className='mt-2'><span className='inline-flex fill-red-500 text-red-500 text-sm font-sans font-bold items-center'><ErrorCircle className={'text-xl mr-2'} />Please enter your name</span></Form.Message>
                            </div>
                            <Form.Control asChild>
                                <input type='text' className='w-full rounded-md h-9 p-3' required />
                            </Form.Control>
                        </Form.Field>
                        <Form.Field name='email' className='mb-5'>
                            <div className='mb-2 flex flex-col'>
                                <Form.Label className='mb-2'>Email</Form.Label>
                                <Form.Message match={'valueMissing'} className='mt-2'><span className='inline-flex fill-red-500 text-red-500 text-sm font-sans font-bold items-center'><ErrorCircle className={'text-xl mr-2'} />Please enter your email</span></Form.Message>
                                <Form.Message match={'typeMismatch'} className='mt-2'><span className='inline-flex fill-red-500 text-red-500 text-sm font-sans font-bold items-center'><ErrorCircle className={'text-xl mr-2'} />Please enter a valid email</span></Form.Message>
                            </div>
                            <Form.Control asChild>
                                <input type='email' className='w-full rounded-md h-9 p-3' required />
                            </Form.Control>
                        </Form.Field>
                        <Form.Field name='message' className='mb-5'>
                            <div className='mb-2 flex flex-col'>
                                <Form.Label className='mb-2'>Message</Form.Label>
                                <Form.Message match={'valueMissing'} className='mt-2'><span className='inline-flex fill-red-500 text-red-500 text-sm font-sans font-bold items-center'><ErrorCircle className={'text-xl mr-2'} />Please enter a message</span></Form.Message>
                            </div>
                            <Form.Control asChild>
                                <textarea required className='w-full rounded-md h-32 p-3' />
                            </Form.Control>
                        </Form.Field>
                        <Form.Submit asChild>
                            <button className='bg-blue-500 w-fit font-sans font-bold p-3 rounded-xl text-white self-end'>
                                Send Message
                            </button>
                        </Form.Submit>
                    </Form.Root>

                    <h2 className='font-mono font-bold my-16'>or...</h2>
                    <h3 className='my-5'>Just shoot me an email</h3>
                    <div className='w-80 flex justify-center'>
                        <div className='flex justify-between items-center w-32'>
                            <Link href={'mailto:johnathontrisler@gmail.com'}>
                                <Envelope className={'text-5xl transition cursor-pointer fill-white hover:fill-blue-500 hover:scale-110'} />
                            </Link>


                            <Tooltip.Provider delayDuration={300}>
                                <Tooltip.Root>
                                    <Tooltip.Trigger asChild>
                                        <button onClick={() => copyToClipboard('johnathontrisler@gmail.com')}>
                                            <Copy className={'text-4xl transition cursor-pointer fill-white hover:fill-blue-500 hover:scale-110'} />
                                        </button>
                                    </Tooltip.Trigger>
                                    <Tooltip.Portal>
                                        <Tooltip.Content className={`${styles.TooltipContent} bg-neutral-50 p-3 rounded-lg transition text-sm`} sideOffset={5} avoidCollisions>
                                            johnathontrisler@gmail.com
                                            <Tooltip.TooltipArrow className='fill-neutral-50' />
                                        </Tooltip.Content>
                                    </Tooltip.Portal>
                                </Tooltip.Root>
                            </Tooltip.Provider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact