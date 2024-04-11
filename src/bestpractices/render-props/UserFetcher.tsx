import { render } from '@testing-library/react';
import axios from 'axios';
import React, { ReactElement, ReactNode, useEffect, useState } from 'react'


type FetchProp<T> = {
    url: string;
    render: (data: T[]) => ReactElement
}


export default function UserFetcher<R>(props: FetchProp<R>): ReactElement {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [data, setData] = useState<R[]>([]);
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        (async () => {
            setIsLoading(true)
            setError(null)
            try {
                let res = await axios.get(props.url)
                let user = res.data;
                setData(user)
            } catch (error) {
                setError(error as any)
            } finally {
                setIsLoading(false)
            }

        })();
    }, [props.url])

    if (isLoading) {
        return (<>Loading data...</>)
    }

    if (error) {
        return (<>{JSON.stringify(error)}</>)
    }

    return props.render(data)

}
