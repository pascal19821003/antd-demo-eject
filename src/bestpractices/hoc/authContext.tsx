import { createContext, ReactNode, useContext, useState } from 'react'


const initialValue = {
    logined: false,
    setLogined: (v: boolean) => { }
}

const authContext = createContext(initialValue)

function AuthProvider({ children }: { children: ReactNode }) {

    const [logined, setLogined] = useState(false)
    return (
        <authContext.Provider value={{ logined, setLogined }}>
            {children}
        </authContext.Provider>
    )
}

const useAuthContext = () => {
    return useContext(authContext)
}

export { AuthProvider, useAuthContext }