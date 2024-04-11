import React from 'react'
import styles from './Flex02Layout.less'

export default function Flex02Layout() {
    return (
        <div className={styles.app}>
            <header>头部</header>
            <div className={styles.container}>
                <div className={styles.content}></div>
            </div>
            <footer className={styles.footer}>底部</footer>
        </div>
    )
}
