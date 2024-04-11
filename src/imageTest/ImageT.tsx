import React from 'react'
import logo from '../images/IMG_0958.jpg'
import styles from './style.less'

/**
 * 图片宽高适配父容器
 * @returns 
 */
export default function ImageT() {
    return (
        <div className = {styles.container}  >
             
                <img src={logo} className={styles.image}/>
            
        </div>
    )
}
