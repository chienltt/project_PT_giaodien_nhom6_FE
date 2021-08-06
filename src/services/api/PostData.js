import {createApiRequest} from "./index";

export const getPostDataByUserId= (userId)=>{
    return createApiRequest({
        url:`/api/get_user_posts/${userId}`,
        method:"GET"
    })
}

export const getPostDataByPostId= (postId)=>{
    return createApiRequest({
        url:`/api/get_post_by_id/${postId}`,
        method:"GET"
    })
}

export const getAllPostWantToTrade= (productId) => {
    return createApiRequest({
        url: `/api/get_product_want_to_trade_with/${productId}`,
        method:"GET"
    })
}

export const getAllPostData= () => {
    return createApiRequest({
        url: `/api/get_all_post`,
        method:"GET"
    })
}

export const getPostBySearch= (keyword) => {
    return createApiRequest({
        url: `/api/search_post/${keyword}`,
        method:"GET"
    })
}

export const deletePost =(id)=>{
    return createApiRequest({
        url:`/api/deactivate_post`,
        method:"POST",
        data:{
            "post_id": id
        }
    })
}
export const editPostData = (value)=>{
    return createApiRequest({
        url:'/api/edit_post',
        method:"POST",
        data:value
    })
}
