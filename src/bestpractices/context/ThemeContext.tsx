import React, { createContext, ReactNode, useContext, useState } from 'react'

export type ThemeType = "light" | "dark"

type ThemeContextType = {
    theme: ThemeType,
    setTheme: (theme: ThemeType) => void
}

const themeContext = createContext<ThemeContextType | null>(null)


export default function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<ThemeType>("light")

    return (
        <themeContext.Provider value={{ theme, setTheme }}>
            {children}
        </themeContext.Provider>
    )
}

export const useTheme = () => useContext(themeContext)
