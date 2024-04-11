import React, { useEffect } from 'react';
import './style.css'
import quoteJson from './quote.json'

export default function AccessibilityApp() {

    useEffect(() => {
        const quotePara = document.querySelector("section p")!;

         

        window.setInterval(showQuote, 5000);
         

       
        function showQuote() {
            let random = Math.floor(Math.random() * 25);
            quotePara.textContent = `${quoteJson[random].quote} -- ${quoteJson[random].author}`;
        }
    }, [])
    return (
        <>
            <section aria-live="assertive" aria-atomic="true">
                <h1>Random quote</h1>
                <blockquote>
                    <p></p>
                </blockquote>
            </section>
        </>
    )
}

