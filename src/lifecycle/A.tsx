import React, { useEffect, useRef } from 'react'

export default function A() {
    let divRef = useRef<HTMLDivElement | null>(null)

    console.log("----A----")

    useEffect(() => {
        console.log("----useEffect A----")

        return () => {
            console.log("----unmount useEffect A ----")
        }
    }, [])

    return (
        <div ref={(e) => {
            console.log("----A div ref-----");
            divRef.current = e;
        }}>A</div>
    )
}
