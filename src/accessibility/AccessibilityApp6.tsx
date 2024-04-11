import React, { useEffect } from 'react';
import './style6.css'

export default function AccessibilityApp() {

    useEffect(() => {

    }, [])
    return (
        <>
            <h1>Form CSS example</h1>
            <form>
                <div>
                    <label htmlFor="name">Enter your name:</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div>
                    <label htmlFor="age">Enter your age:</label>
                    <input type="text" name="age" id="age" />
                </div>
                <div></div>
            </form>


        </>
    )
}

