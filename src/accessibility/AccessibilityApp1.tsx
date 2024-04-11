import React, { useEffect } from 'react';
import './style1.css'

export default function AccessibilityApp() {

    useEffect(() => {
        const buttons = document.querySelectorAll('button');

        for (let i = 0; i < buttons.length; i++) {
            addHandler(buttons[i]);
        }

        function addHandler(button: HTMLButtonElement) {
            button.addEventListener('click', function (e: any) {
                let message = e.target.getAttribute('data-message');
                alert(message);
            })
        }
    }, [])
    return (
        <>
            <h1>Links</h1>

            <p>This is a link to <a href="https://www.mozilla.org">Mozilla</a>.</p>

            <p>Another link, to the <a href="https://developer.mozilla.org">Mozilla Developer Network</a>.</p>

            <h2>Buttons</h2>

            <p>
                <button data-message="This is from the first button">Click me!</button>
                <button data-message="This is from the second button">Click me too!</button>
                <button data-message="This is from the third button">And me!</button>
            </p>

            <h2>Form</h2>

            <form>
                <div>
                    <label htmlFor="name">Fill in your name:</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div>
                    <label htmlFor="age">Enter your age:</label>
                    <input type="text" id="age" name="age" />
                </div>
                <div>
                    <label htmlFor="mood">Choose your mood:</label>
                    <select id="mood" name="mood">
                        <option>Happy</option>
                        <option>Sad</option>
                        <option>Angry</option>
                        <option>Worried</option>
                    </select>
                </div>
            </form>



        </>
    )
}

