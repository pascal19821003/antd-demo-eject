import { post } from "../../utils/axiosUtils"
import { HOST_SERVER } from "../../utils/constants"

export  async function loginapi(user: any) {
    let res = await post<string>(HOST_SERVER + '/user/login', user);
    let data = res.data;
    if(res.status=== 200){
        return data;
    }else{
        throw new Error(res.statusText)
    }
}

export function logoutapi(token: string) {
    return post(HOST_SERVER + '/user/logout', { token })
}


export { }