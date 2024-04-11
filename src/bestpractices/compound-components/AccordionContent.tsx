import React, { ReactNode } from 'react'

type MyProps = {
    isOpen: boolean;
    children: ReactNode;
}

export default function AccordionContent({ isOpen, children }: MyProps) {
    return isOpen ? (<>{children}</>) : null
}
