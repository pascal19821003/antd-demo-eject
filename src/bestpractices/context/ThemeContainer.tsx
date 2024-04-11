import React from 'react'
import { useTheme } from './ThemeContext';
import styles from './styles.less'
import ThemeToggle from './ThemeToggle';

export default function ThemeContainer() {

    let { theme } = useTheme()!;

    console.log("----theme----", theme)

    return (
        <div className={theme === 'light' ? styles.light : styles.dark} style={{ width: 500, height: 500, textAlign: 'center' }}>
            <div style={{float:'right', clear:"both"}}>
                <ThemeToggle />
            </div>
            <div>
                ThemeContainer
            </div>
        </div>
    )
}
