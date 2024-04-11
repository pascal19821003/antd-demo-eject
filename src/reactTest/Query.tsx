import React from 'react'

export default function Query() {
    return (
        <div id="app">
            <label htmlFor="username-input">Username</label>
            <input id="username-input" />
            <div>Hello World</div>


            <main aria-hidden="true">
                <button>Open dialog</button>
            </main>
            <div role="dialog">
                <button>Close dialog</button>
            </div>

            <div role="tablist">
                <button role="tab" aria-selected="true">Native</button>
                <button role="tab" aria-selected="false">React</button>
                <button role="tab" aria-selected="false">Cypress</button>
            </div>

        </div>
    )
}
