import React from 'react';

import { render } from '@testing-library/react';

import { screen, getByLabelText } from '@testing-library/dom'
import fireEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import UserEvent from '../UserEvent';
import ClickComponent from '../ClickComponent';

describe('user-event', () => {

    test('userevent1', () => {
        render(<UserEvent />)
        let ele = screen.getByRole('username');
        fireEvent.type(ele, 'aaaa')
        // screen.debug()

        expect(screen.getByDisplayValue('aaaa')).toHaveAttribute('role', 'username');

    })

    test('userevent2', () => {
        render(<UserEvent />)
        let ele = screen.getByRole('username');
        fireEvent.type(ele, 'aaaa')
        // screen.debug()


        // expect(screen.getByRole('username', { name: 'the-inputs-id' })).toHaveValue('test');
        expect(screen.getByRole('username')).toHaveValue('aaaa');
    })

    test('userevent3', () => {

        const handleClick = jest.fn((e: any) => {
            console.log("-----click------")
        })


        render(<ClickComponent onClick={handleClick} >aaa</ClickComponent>)
        let ele = screen.getByRole('btn');
        fireEvent.click(ele,)


    })

})