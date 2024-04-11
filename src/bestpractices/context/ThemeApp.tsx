import React from 'react'
import ThemeContainer from './ThemeContainer'
import ThemeProvider, { useTheme } from './ThemeContext'

export default function ThemeApp() {

    return (
        <ThemeProvider>
            <ThemeContainer/>

        </ThemeProvider>
    )
}
