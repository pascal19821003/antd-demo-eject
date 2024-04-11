import React, { useEffect, useRef } from 'react'

export default function B() {

    let divRef = useRef<HTMLDivElement | null>(null)
    console.log("----B----")

    useEffect(() => {
        console.log("----useEffect B----")

        return () => {
            console.log("----unmount useEffect B ----")
        }
    }, [])

    return (
        <div ref={(e)=>{
                console.log("----B div ref-----");
                divRef.current=e;
            }}
        >B</div>
    )
}
