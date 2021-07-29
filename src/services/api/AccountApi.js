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

export const completeTrading= (transactionId) => {
    const data={transactionId}
    const result= createApiRequest({
        url: `/api/complete_transaction`,
        method: "POST",
        data:  data
    })
    return result
}

export const creatTransaction= (from_post_id, to_post_id) => {
    const data={from_post_id, to_post_id}
    const result= createApiRequest({
        url: `/api/create_transaction`,
        method: "POST",
        data:  data
    })
    return result
}
