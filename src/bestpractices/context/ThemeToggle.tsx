import React from 'react'
import { useTheme } from './ThemeContext'

export default function ThemeToggle() {

    const { theme, setTheme } = useTheme()!

    const changeTheme = () => {
        if (theme === 'dark') {
            setTheme("light")
        } else {
            setTheme("dark")
        }
    }
    
    return (
        <button onClick={changeTheme}>Toggle Theme</button>
    )
}
