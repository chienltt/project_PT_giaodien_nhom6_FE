import {createApiRequest} from "../../services/api";

export const registerApi= (email, username, password, phone_number, gender, dob)=>{
    const data={email, username, password, phone_number, gender, dob}
    const result= createApiRequest({
        url:'/api/signup',
        method:'POST',
        data:  data
    })

    return result
}

