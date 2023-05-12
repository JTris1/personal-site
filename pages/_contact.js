import React, { useState, useEffect } from 'react'
import PortfolioDivider from '~/components/PortfolioDivider'
import * as Form from '@radix-ui/react-form';
import * as Tooltip from '@radix-ui/react-tooltip';
import { Check, Copy, Envelope, ErrorCircle } from '~/icons'
import Notification from '~/components/Notification';
import Link from 'next/link';
import styles from '~/styles/Contact.module.css';

function Contact({ }) {
    const [messageSent, setMessageSent] = useState(null);

    useEffect(() => {
        if (messageSent === true || messageSent === false) {
            Notification({
                text: (messageSent ? "Your message was sent successfully! You should hear back from me shortly." : "Your message couldn't be delivered for some reason. Please try again later."),
                duration: 4000,
                id: 'renovations',
                position: 'bottom-center',
                icon: (messageSent ? <Check className={`fill-green-500 text-2xl`} /> : <ErrorCircle className={`fill-amber-500 text-2xl`} />)
            });


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
        <div className='flex flex-col items-center w-screen min-h-screen bg-neutral-300 dark:bg-neutral-900'>
            <div className='max-w-screen-xl'>
                <div className='flex flex-col items-center px-6 py-20 bg-neutral-300 dark:bg-neutral-900'>
                    <h1 className='mb-20 text-4xl font-bold'>Contact Me</h1>
                    <div className='flex flex-col items-center'>
                        <Form.Root className='flex flex-col w-80' onSubmit={(e) => handleSubmit(e)}>
                            <Form.Field name='name' className='mb-5'>
                                <div className='flex flex-col mb-2'>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Message match={'valueMissing'} className='mt-2'><span className='inline-flex items-center font-sans text-sm font-bold text-red-500 fill-red-500'><ErrorCircle className={'text-xl mr-2'} />Please enter your name</span></Form.Message>
                                </div>
                                <Form.Control asChild>
                                    <input type='text' className='w-full p-3 rounded-md h-9 bg-neutral-200 ring-2 ring-neutral-400 dark:bg-neutral-800 ring-opacity-40' required></input>
                                </Form.Control>
                            </Form.Field>
                            <Form.Field name='email' className='mb-5'>
                                <div className='flex flex-col mb-2'>
                                    <Form.Label className='mb-2'>Email</Form.Label>
                                    <Form.Message match={'valueMissing'} className='mt-2'><span className='inline-flex items-center font-sans text-sm font-bold text-red-500 fill-red-500'><ErrorCircle className={'text-xl mr-2'} />Please enter your email</span></Form.Message>
                                    <Form.Message match={'typeMismatch'} className='mt-2'><span className='inline-flex items-center font-sans text-sm font-bold text-red-500 fill-red-500'><ErrorCircle className={'text-xl mr-2'} />Please enter a valid email</span></Form.Message>
                                </div>
                                <Form.Control asChild>
                                    <input type='email' className='w-full p-3 rounded-md h-9 bg-neutral-200 ring-2 ring-neutral-400 dark:bg-neutral-800 dark:ring-2 ring-opacity-40' required></input>
                                </Form.Control>
                            </Form.Field>
                            <Form.Field name='message' className='mb-5'>
                                <div className='flex flex-col mb-2'>
                                    <Form.Label className='mb-2'>Message</Form.Label>
                                    <Form.Message match={'valueMissing'} className='mt-2'><span className='inline-flex items-center font-sans text-sm font-bold text-red-500 fill-red-500'><ErrorCircle className={'text-xl mr-2'} />Please enter a message</span></Form.Message>
                                </div>
                                <Form.Control asChild>
                                    <textarea required className='w-full h-32 p-3 rounded-md bg-neutral-200 ring-2 ring-neutral-400 dark:bg-neutral-800 dark:ring-2 ring-opacity-40'></textarea>
                                </Form.Control>
                            </Form.Field>
                            <Form.Submit asChild>
                                <button className='self-end p-3 font-sans font-bold text-white bg-blue-500 w-fit rounded-xl'>
                                    Send Message
                                </button>
                            </Form.Submit>
                        </Form.Root>

                        <h2 className='my-16 font-mono font-bold'>or...</h2>
                        <h3 className='my-5'>Just shoot me an email</h3>
                        <div className='flex justify-center w-80'>
                            <div className='flex items-center justify-between w-32'>
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
        </div>
    )
}

export default Contact