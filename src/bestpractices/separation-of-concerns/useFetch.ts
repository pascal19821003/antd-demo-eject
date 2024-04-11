import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function useFetch<T, R>(url: string, params: T) {
    const [data, setData] = useState<R | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState(false);

   

    async function loadData(url: string, params: T) {
        try {
            setIsLoading(true);
            // fetch data
            // let params: RequestType = { ID: "54" }
            let res = await axios.get<R>(url, { params: params })
            // let res = await axios.get<any>("/api/user?ID=34" )
            console.log("res", res)
            let data = res.data

            // setData
            setData(data)
        } catch (error) {
            console.log("error", error);
            setError(error as any)
        } finally {
            setIsLoading(false)
        }
    }


    return { data, error, isLoading, loadData }
}
