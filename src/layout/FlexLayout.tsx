import React from 'react'
import styles from './flexstyle.less'

export default function FlexLayout() {
    return (
        <div className={styles.container}>
            <div className={`${styles.box} ${styles.item1}`}>1</div>
            <div className={`${styles.box} ${styles.item2}`}>2</div>
            <div className={`${styles.box} ${styles.item3}`}>3</div>
        </div>
    )
}
