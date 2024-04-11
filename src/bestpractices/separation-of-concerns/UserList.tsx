import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { RequestType, ResponseType } from './model';
import useFetch from './useFetch';

const URL = "/api/user";

export default function UserList() {

    let [id, setId] = useState(0)

    let params: RequestType = { ID: 4 }

    let { data, isLoading, error, loadData } = useFetch<RequestType, ResponseType>(URL, params);

    

    function handleChangeId(value: number) {
        setId(value);
        loadData(URL, { ID: value })
    }

    if (error) {
        return (<div>Error: ${error.message} </div>)
    }

    const loadingContext = isLoading && (<div>Loading</div>)

    const inputContext = () => {
        if (isLoading) {
            return null;
        } else if(data!=null) {
            return (
                <>
                    {
                        data.ID
                    }
                </>
            )
        }else{
            return null;
        }
    }


    return (
        <div>
            <label>ID: <input type="text" value={id} onChange={(e) => { handleChangeId(Number(e.target.value)) }} /></label>
            <br />
            {
                loadingContext
            }
            {
                inputContext()
            }
        </div>
    )
}
