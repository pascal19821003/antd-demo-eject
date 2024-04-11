import React, { useEffect } from 'react';
import './style2.css'

export default function AccessibilityApp() {

    useEffect(() => {
        const buttons = document.querySelectorAll('.box');

        for (let i = 0; i < buttons.length; i++) {
            addHandler(buttons[i] as HTMLDivElement);
        }

        function addHandler(button: HTMLDivElement) {
            button.onclick = function (e: any) {
                let message = e.target.getAttribute('data-message');
                alert(message);
            }
        }

        document.onkeydown = function (e) {
            if (e.key === 'Enter') { // The Enter/Return key
                if (document.activeElement) {
                    (document.activeElement as any).onclick(e);
                }
            }
        };
    }, [])
    return (
        <>
            <div >
                <h2>Fake buttons</h2>

                <div className='box' data-message="This is from the first button" tabIndex={0} >Click me!</div>
                <div className='box' data-message="This is from the second button" tabIndex={0}>Click me too!</div>
                <div className='box' data-message="This is from the third button" tabIndex={0}>And me!</div>
            </div>


        </>
    )
}

