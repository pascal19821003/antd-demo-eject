import React, { useEffect } from 'react'
import A from './A'

export default function ParentA() {

    console.log("----ParentA----")

    useEffect(() => {
        console.log("----useEffect ParentA----")

        return () => {
            console.log("----unmount useEffect ParentA ----")
        }
    }, [])

    return (
        <div>ParentA
            <A />
        </div>
    )
}
