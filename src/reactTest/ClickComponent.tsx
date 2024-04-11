import React, { ReactNode } from 'react'

type Props = { onClick: (e: any) => void, children: ReactNode }

export default function ClickComponent({ onClick, children }: Props) {
    return (
        <div>
            <button role="btn" onClick={onClick}>click me</button>

        </div>
    )
}
