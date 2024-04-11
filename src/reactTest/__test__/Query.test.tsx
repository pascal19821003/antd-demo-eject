import React from 'react';

import { render } from '@testing-library/react';

import { screen, getByLabelText } from '@testing-library/dom'
import '@testing-library/jest-dom'


import Query from '../Query';



describe('query', () => {
    test('query1', () => {
        render(<Query></Query>)
        // With screen:
        const inputNode1 = screen.getByLabelText('Username')
        expect(inputNode1).toBeInTheDocument();
    })

    test('query2', () => {
        render(<Query></Query>)
        // Without screen, you need to provide a container:
        const container = document.querySelector('#app')
        if (container) {
            const inputNode2 = getByLabelText(container as HTMLElement, 'Username')
            screen.debug()
            expect(inputNode2).toBeInTheDocument();
        }
    })

    test('query3', () => {
        render(<Query></Query>)
        let div = screen.getByText('Hello World') // full string match
        expect(div).toBeInTheDocument();
    })


    test('ByRole1', () => {
        render(<Query></Query>)
        let div = screen.getByRole('button') // full string match
        expect(div).toBeInTheDocument();
    })


    test('ByRole2', () => {
        render(<Query></Query>)
        let div = screen.getByRole('tab', {selected: true}) // full string match
        expect(div).toBeInTheDocument();
    })
})