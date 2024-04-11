import React from 'react';

import { render } from '@testing-library/react';

import { screen, getByLabelText, waitFor } from '@testing-library/dom'
import fireEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import UserEvent from '../UserEvent';
import AsyncMethodComp from '../AsyncMethodComp';


describe('async-method', () => {

    test('async1', async () => {
        render(<AsyncMethodComp />)
        let addBtn = screen.getByRole("addBtn")
        fireEvent.click(addBtn)
        let timesDiv = await screen.findByRole("timesDiv")
        expect(timesDiv).toHaveTextContent(/1times/)

        fireEvent.click(addBtn)
        let timesDiv2 = await screen.findByRole("timesDiv")
        expect(timesDiv2).toHaveTextContent(/2times/)
    })

    test('async2', async () => {
        render(<AsyncMethodComp />)
        await waitFor(() => {
            let user = screen.getByRole("user")
            expect(user).toBeInTheDocument();
            expect(user).toHaveTextContent(/pascal/)
        })
    })

    test('async3', async () => {
        render(<AsyncMethodComp />)
        let timesDiv = screen.getByRole("timesDiv")
        screen.debug(timesDiv)
    })
})