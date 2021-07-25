import {createApiRequest} from "./index";

export const getAllUserData= ()=> {
    return createApiRequest({
        url:'/api/get_all_user',
        method:"GET"
    })
}
export const getUserDataById= (id) =>{
    return createApiRequest({
        url:`/api/get_user_by_id/${id}`,
        method:"Get"
    })
}