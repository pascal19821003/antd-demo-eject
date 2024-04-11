import React, { ReactNode, useState } from 'react';

const STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal',
};

type Props = { page: string, children: ReactNode }
export default function Link({ page, children }: Props) {

    const [status, setStatus] = useState(STATUS.NORMAL);


    const onMouseEnter = () => {
        setStatus(STATUS.HOVERED);
    };

    const onMouseLeave = () => {
        setStatus(STATUS.NORMAL);
    };

    return (
        <a className={status}
            href={page || '#'}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >{children}</a>
    )
}
