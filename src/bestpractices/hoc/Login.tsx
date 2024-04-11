import React from 'react'
import { useHistory } from 'react-router-dom';
import { useAuthContext } from './authContext';


export default function Login() {
    const { setLogined } = useAuthContext()
    const history = useHistory()

    return (
        <div>
            <button onClick={() => {
                setLogined(true)
                history.push("/")
            }}>login</button>
        </div>
    )
}
