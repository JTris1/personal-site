import * as Popover from '@radix-ui/react-popover'
import React from 'react'

function Notification() {
    return (
        <Popover.Root open={true}>
            <Popover.Anchor asChild />
            <Popover.Portal>
                {/* I need to transform the Content left when loaded. That will allow me to animate its entry on screen. */}
                <Popover.Content className="absolute top-16" sideOffset={5}>
                    <div className='bg-red-500'>
                        TEST
                    </div>
                    <Popover.Close className="" aria-label="Close">
                        x
                    </Popover.Close>
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>

    )
}

export default Notification