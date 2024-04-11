import React, { useEffect, useState } from 'react'
import ParentA from './ParentA'
import B from './B'

export default function LifeCyleApp() {

    const [showA, setShowA] = useState(false)

    console.log("----LifeCyleApp-----");

    useEffect(() => {
        console.log("----useEffect LifeCyleApp----")

        return () => {
            console.log("----unmount useEffect LifeCyleApp ----")
        }
    }, [])


    return (
        <div>LifeCyleApp
            {showA && (

                <>
                    <ParentA />
                    <B />
                </>
            )}

            <button onClick={() => {
                console.log("----toggle A----");
                setShowA(!showA)
            }}>toggle A</button>
        </div>
    )
}
