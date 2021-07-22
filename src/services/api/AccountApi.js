import {createApiRequest} from "./index";

export const loginApi= (email,password)=>{
    const data={email,password}
    const result= createApiRequest({
        url:'/api/login',
        method:'POST',
        data:  data
    })
    return result
}