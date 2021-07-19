import {createApiRequest} from "./index";

export const getPostDataByUserId= (userId)=>{
    return createApiRequest({
        url:`/api/get_user_posts/${userId}`,
        method:"GET"
    })
}