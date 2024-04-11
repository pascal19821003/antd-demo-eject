import React from 'react';
import { render,screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import Link from '../Link';

test('link changes the class when hovered', ()=>{
    render(<Link page="https://www.baidu.com">Fackbook</Link>);

    // screen.debug()
    
    expect(screen.getByText('Fackbook')).toBeInTheDocument();

})