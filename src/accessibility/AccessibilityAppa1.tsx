import React, { useEffect } from 'react';
import './style.css'
import quoteJson from './quote.json'

export default function AccessibilityApp() {

    useEffect(() => {
        const inputs = document.querySelectorAll('input');
        const labels = document.querySelectorAll('label');
        const form = document.querySelector('form')! as any;

        let formItems = [] as any[];

        const errorField = document.querySelector('.errors')! as any;
        const errorList = document.querySelector('.errors ul')! as any;

        for (let i = 0; i < inputs.length - 1; i++) {
            let obj = {} as any;
            obj.label = labels[i];
            obj.input = inputs[i];
            formItems.push(obj);
        }

        errorField.style.left = '-100%';

        form.onsubmit = validate;

        function validate(e: any) {
            errorList.innerHTML = '';
            for (let i = 0; i < formItems.length; i++) {
                let testItem = formItems[i];
                if (testItem.input.value === '') {
                    errorField.style.left = '360px';
                    createLink(testItem);
                }
            }

            if (errorList.innerHTML !== '') {
                e.preventDefault();
            }
        }

        function createLink(testItem: any) {
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.textContent = testItem.input.name + ' field is empty: fill in your ' + testItem.input.name + '.';
            anchor.href = '#' + testItem.input.name;
            anchor.onclick = function () {
                testItem.input.focus();
            };
            listItem.appendChild(anchor);
            errorList.appendChild(listItem);
        }
    }, [])
    return (
        <>
            <h1>Form validation example</h1>
            <div className="errors" role="alert" aria-relevant="all">
                <ul>

                </ul>
            </div>
            <form>
                <p>Fields marked with an asterisk (*) are required.</p>

                <div>
                    <label htmlFor="name">Enter your name:</label>
                    <input type="text" name="name" id="name" aria-required="true" />
                </div>
                <div>
                    <label htmlFor="age">Enter your age:</label>
                    <input type="number" name="age" id="age" aria-required="true" placeholder="Enter 1 to 150"
                        required />
                </div>
                <div>
                    <input type="submit" />
                </div>
                <div></div>
            </form>
        </>
    )
}

