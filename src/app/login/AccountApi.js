import {createApiRequest} from "../../services/api";

export const loginApi= (email,password)=>{
    const result= createApiRequest({
        url:'/api/login',
        method:'POST',
        data:{
            email:email,
            password:password
        }
    })
    return result
}