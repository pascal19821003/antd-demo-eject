import axios from 'axios'

const instance = axios.create({
    baseURL: "",
    timeout: 10000,
});

instance.interceptors.request.use(
    async (config: any) => {
        //   config.headers["authorization"] = "Bearer " + token;
        //   config.headers["token"] = "" + token;
        return config;
    }
)

instance.interceptors.response.use(
    function (response: any) {
        return response;
    },
    function (error: any) {
        console.log("axios error", error);
        throw error;
    }
)

export function get(url: string, params: any) {
    console.log("get...", "url:", url, "params:", params)
    return instance.get(url, params)
}

export function post<R>(url: string, data: any) {
    return instance.post<R>(url, data);
}


export function upload(url: string, fileUri: string) {
    let param = new FormData();
    const file: any = { uri: fileUri, type: 'multipart/form-data', name: "aa.jpeg" };
    param.append('img', file);
    let config = {
        headers: { 'Content-Type': 'multipart/form-data' }
    };
    return axios.post(url, param, config).then((res: any) => {
        return res.data;
    }).catch((error: any) => {
        return Promise.reject(error);
    })
}
 