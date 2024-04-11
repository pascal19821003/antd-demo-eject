import React from 'react';

import { render, waitFor } from '@testing-library/react';
import { screen, getByLabelText } from '@testing-library/dom'
import fireEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import { rest, } from 'msw';
import UserList from '../UserList';

const server = setupServer(
    rest.get('/api/users', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.text(JSON.stringify([
                { id: 1, name: 'User 1' },
                { id: 2, name: 'User 2' },
                { id: 3, name: 'User 3' },
            ]))
        );
    })
)

// establish API mocking before all tests
beforeAll(() => server.listen())
// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers())
// clean up once the tests are done
afterAll(() => server.close())

describe('msw-axios', () => {
    test('renders user list', async () => {
        render(<UserList />);
        await waitFor(() => {
            expect(screen.getByText('User List')).toBeInTheDocument();
            expect(screen.getByText('User 1')).toBeInTheDocument();
            expect(screen.getByText('User 2')).toBeInTheDocument();
            expect(screen.getByText('User 3')).toBeInTheDocument();
            screen.debug()
        });
    })



    test('handles server error', async () => {
        server.use(
            rest.get('/greeting', (req, res, ctx) => {
                return res(ctx.status(500))
            }),
        )

        render(<UserList />);

        // fireEvent.click(screen.getByText('Load Greeting'))

        // await screen.findByRole('alert')

        // expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!')
        // expect(screen.getByRole('button')).not.toBeDisabled()
        expect(screen.queryByText('User 3')).not.toBeInTheDocument();
        screen.debug()

    })
})