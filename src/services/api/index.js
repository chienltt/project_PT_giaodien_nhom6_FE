import axios from "axios";

const basePath='https://web-trading-old-item.herokuapp.com'
export const createApiRequest= async  ({url,method,data,params}) =>{
    console.log("okok",url,method,data)
    try {
        const result = await axios({
            method:'post',
            url:`${basePath}${url}`,
            data,
            params
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