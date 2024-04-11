import React from 'react'
import styles from './remstyle.less';
import img from '../images/IMG_0958.jpg'

export default function RemLayout() {
    return (
        <div>
            <div className={styles.box}>这是一个自适应布局的示例</div>
            <div className={styles.imgContainer}>
                <img src={img} className={styles.img} />
            </div>
        </div>
    )
}
