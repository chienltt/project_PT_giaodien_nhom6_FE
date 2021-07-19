import React, {useContext, useEffect, useState} from 'react'
import {getPostDataByUserId} from "../../services/api/GetPostData";
import AppContext from "../../AppContext";

const UserPageContainer = (props) => {
    const {user} = useContext(AppContext)
    const {postData,setPostData} = useState({})


    useEffect(() => {
        getPostData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const getPostData = async () => {
        const {data, success} = await getPostDataByUserId(user.id)
        if (success) {
            console.log("data", data)
        }
    }
    return (<div>
            awdadw
    </div>)
}
export default UserPageContainer