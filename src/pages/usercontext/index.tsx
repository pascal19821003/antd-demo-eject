import React, { createContext, ReactNode, useContext, useState } from 'react';
import { loginapi } from './loginService'


export type UserAuthType = {
    logined: boolean;
    login: (params: any) => void;
    logout: () => void;
}

const userAuthContext = createContext<UserAuthType | null>(null)

export default function UserAuthProvider({ children }: { children: ReactNode }) {
    const [logined, setLogined] = useState(false)

    const login = async (params: any) => {
        console.log("------UserAuthProvider login-------")
        try {
            let res = await loginapi(params)
            setLogined(true)
            return res;
        } catch (e) {
            console.log("e", e)
        }
    }
    const logout = () => {
        console.log("------logout-------")
    }

    const userAuthValue: UserAuthType = {
        logined, login, logout
    }
    return (
        <userAuthContext.Provider value={userAuthValue} >
            {children}
        </userAuthContext.Provider>
    )
}

export const useUserAuthContext = () => {
    return useContext(userAuthContext)
}