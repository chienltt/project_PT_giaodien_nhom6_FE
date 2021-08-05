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

export const completeTrading= (transaction_id) => {
    const data={transaction_id}
    const result= createApiRequest({
        url: `/api/complete_transaction`,
        method: "POST",
        data:  data
    })
    return result
}

