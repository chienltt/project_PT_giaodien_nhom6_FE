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