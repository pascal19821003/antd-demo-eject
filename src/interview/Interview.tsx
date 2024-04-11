import React, { useEffect, useState } from 'react'
import { debounce, throttle } from './utils';
import styles from './style.less'
let counter = 1;

type BarType = {
    id: number;
    num: number;
    height: number;

}
const MAX_HEIGHT = 300;
export default function Interview() {

    const [count, setCount] = useState(5)
    const [maxHeight, setMaxHeight] = useState(MAX_HEIGHT);
    const [bars, setBars] = useState<BarType[]>([]);

    // useEffect(() => {
    //     console.log({ count, maxHeight });
    //     generateBars(count, maxHeight);
    // }, [count, maxHeight])

    const generateBars = (count: number, maxHeight: number) => {
        console.log("----call generateBars---- ");
        let barsNext: BarType[] = []
        for (let i = 0; i < count;  i++) {
            let bar: BarType = {
                id: new Date().getTime(),
                num: i + 1,
                height: Math.round(Math.random() * maxHeight) + 1
            }
            barsNext.push(bar)
        }
        setBars(barsNext)
    }


    const handleGenBars=()=>{
        generateBars(count, maxHeight)
    }

    useEffect(()=>{
        generateBars(count, maxHeight)
    },[])



    return (
        <div className={styles.container}>
            <div className={styles.chart}>
                {
                    bars.map(bar=>{
                        return (
                            <Bar height={bar.height} num={bar.num} id={bar.id}/>
                        )
                    })
                }
               
                
            </div>
            <div className={styles.operate}>
                <div>
                    <b>Range: 0</b> -
                    <input value={maxHeight} onChange={(e) => { setMaxHeight(Number(e.target.value)) }} />
                </div>
                <div>
                    <b>Count: </b>
                    <input value={count} onChange={(e) => { setCount(Number(e.target.value)) }} />
                </div>
                <div>
                    {/* <button onClick={handleGenBars}>Generate</button> */}
                    <div className={styles.button} onClick={handleGenBars}>Generate</div>
                </div>
            </div>
        </div>
    )
}

type BarProp = {
    height: number
}
function Bar({ height, num }: BarType) {
    return (
        <div className={styles.bar} style={{ width: '20px', height: height + 'px', backgroundColor: 'blue' }}>
           <span className={styles.height}> <b>{height}</b></span>
           <span className={styles.num}>{num}</span>
        </div>
    )
}
