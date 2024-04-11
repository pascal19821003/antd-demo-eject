import React, { useEffect } from 'react';
import './style.css'

export default function AccessibilityApp() {

    useEffect(() => {

    }, [])
    return (
        <>
            {/* <p>
                Whales are really awesome creatures.
                <a href="whales.html">Find out more about whales</a>.
            </p> */}

            {/* Fill in your name: <input type="text" id="name" name="name" /> */}

            <div>
                <label htmlFor="name">Fill in your name:</label>
                <input type="text" id="name" name="name" />
            </div>


        </>
    )
}

