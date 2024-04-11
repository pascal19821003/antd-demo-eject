import React from 'react'
import styles from './flowstyle.less'

export default function FlowLayout() {
  return (
    <div className={styles.container}>
        <div className={styles.box}>item1</div>
        <div className={styles.box}>item2</div>
        <div className={styles.box}>item3</div>
    </div>
  )
}
