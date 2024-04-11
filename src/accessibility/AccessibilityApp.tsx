import React, { useEffect } from 'react';
import './style.css'
import quoteJson from './quote.json'

export default function AccessibilityApp() {

    useEffect(() => {
         
    }, [])
    return (
        <>
            <div data-message="This is from the first button" tabIndex={0} role="button">
                Click me!
            </div>

        </>
    )
}

