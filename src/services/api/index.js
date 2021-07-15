import axios from "axios";

const basePath='https://web-trading-old-item.herokuapp.com'
export const createApiRequest= async  ({url,method,data,params}) =>{
    try {
        const result = await axios({
            method:method,
            url:`${basePath}${url}`,
            data,
            params,
            contentType : "text/plain"
        })
        return(
            {
                success:true,
                data:result
            }
        )
    }
    catch (e){
        const {response}=e
        console.log("loi",e)
        return (
            {
                success: false,
                data:response
            }
        )
    }
}