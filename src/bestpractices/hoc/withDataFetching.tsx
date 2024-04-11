import axios from 'axios';
import React, { ComponentType, useEffect, useState } from 'react'


export type WrappedComponentType<T> = {
    data: T | null,
    error: Error | null,
    isLoading: boolean,
}

/**
 * Fecthing data by HOCs
 * @param Component 
 * @returns 
 */
export function withDataFetching<P extends { url: string }, R>(Component: ComponentType<P & WrappedComponentType<R>>) {

    return function (props: P) {

        const [isLoading, setIsLoading] = useState<boolean>(false)
        const [data, setData] = useState<R | null>(null);
        const [error, setError] = useState<Error | null>(null)

        useEffect(() => {
            (async () => {
                setIsLoading(true)
                setError(null)
                try {
                    let res = await axios.get<R>(props.url)
                    let user = res.data;
                    setData(user)
                } catch (error) {
                    setError(error as any)
                } finally {
                    setIsLoading(false)
                }

            })();
        }, [props.url])

        let propsNext: WrappedComponentType<R> = {
            data: data,
            error: error,
            isLoading: isLoading,
        }

        return <Component {...propsNext} {...props } />
    }
}

