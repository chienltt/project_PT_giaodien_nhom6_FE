import {createApiRequest} from "./index";

export const createTransaction = (postIdFrom,postIdTo)=>{
    return createApiRequest({
        url:"/api/create_transaction",
        method:"POST",
        data:{
            from_post_id:postIdFrom,
            to_post_id:postIdTo
        }
    })
}