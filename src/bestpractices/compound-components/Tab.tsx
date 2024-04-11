import React, { ReactNode } from 'react'


type TabProp = {
    isActive: boolean,
    onClick: () => void,
    children: ReactNode
}
export function Tab({ isActive, onClick, children }: TabProp) {
    return (
        <div onClick={onClick}>
            <h3 style={{ color: isActive ? 'red' : 'black' }}>{children}</h3>
        </div>
    )
}



type TabContentProp = {
    isActive: boolean,
    children: ReactNode
}

export function TabContent({ isActive, children }: TabContentProp) {
    return isActive ? <div>{children}</div> : null;
}