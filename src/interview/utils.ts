export const debounce = (fn: Function, delay: number = 200) => {
    let timer: any;
    return (...args: any[]) => {
        if (timer) {
            clearTimeout(timer)
        }

        timer = setTimeout(() => {
            timer = null;
            return fn(...args)
        }, delay)
    }

}


export const throttle = (fn: Function, delay: number = 200) => {
    let startTime = Date.now();
    return (...args: any[]) => {
        let currentTime = Date.now();
        if (delay <= currentTime - startTime) {
            startTime = Date.now();
            return fn(...args)
        } else {
            console.log("throttle skip....");
        }
    }
}