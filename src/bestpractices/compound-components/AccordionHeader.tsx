import React, { ReactNode } from 'react'

type MyProps = {
    isOpen: boolean;
    children: ReactNode;
    onClick: () => void;
}

export default function AccordionHeader({ isOpen, onClick, children }: MyProps) {
    return (
        <div onClick={onClick} >
            <h3 style={{ display: "inline-block" ,marginRight:10}}>{children}</h3>
            {isOpen ? <i>-</i> : <i>+</i>}
        </div>
    )
}
