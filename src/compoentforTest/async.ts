export function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("peanut butter")
        }, 1000)
    });
}


export function fetchDataWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("error")
        }, 1000)
    });
}


export function fetchDataWithCallback(callback: (error: any, value: string) => void) {
    setTimeout(() => {
        callback(null, "peanut butter")
        // callback("error haha...", null)
    }, 1000)
}
