import React, {useContext, useEffect, useState} from 'react'
import {getPostDataByUserId} from "../../services/api/GetPostData";
import AppContext from "../../AppContext";
import UserInfoContainer from "./component/UserInfoContainer";
import {Input} from "antd";
import {SearchOutlined} from '@ant-design/icons';

const UserPageContainer = (props) => {
    // postId = window.location.pathname - '/u/post_detail/'
    const {user} = useContext(AppContext)
    const [postData, setPostData] = useState({})


    useEffect(() => {
        getPostData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const getPostData = async () => {
        const {data, success} = await getPostDataByUserId(user.id)
        if (success) {
            data.data = data.data.map(post => {
                post.image_url = "https://file.chodocu.com//2018/08/08/16754143--9877.jpg"
                return post
            })
            setPostData(data)
        }
    }
    return (
        <div className={"container-fluid mt-3"} style={{
            width: "95%", height: "500px",
            borderRadius: '5px'
        }}>
            {/*{console.log("okok",window.location.pathname)}*/}

            {/*{ user.userId === postData.user.userID ? <div> hello admin</div> : <div/>}*/}
            <div className={"row"}>
                <div className={"col-xl-9 col-sm-12"} style={{height: "500px"}}>
                    <div className={"post-table-content mt-3"} style={{
                        borderRadius: "5px",
                        height: "450px",
                        backgroundColor: "white",
                        boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                    }}>
                        <div style={{
                            position: "absolute",
                            width: "50%",
                            border: "1 solid black",
                            display: "flex",
                            alignItems: "center",
                            paddingTop: "10px",
                            right: "0px"
                        }}>
                            <Input placeholder={"Search product"} style={{ border: "none"}}></Input>
                        </div>
                        <hr/>
                    </div>
                </div>
                <div className={"col-xl-3 col-sm12"} style={{height: "500px"}}>
                    <div className={"post-table-content mt-3 p15"} style={{
                        borderRadius: "5px",
                        height: "450px",
                        backgroundColor: "white",
                        boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                        paddingTop: "1px"
                    }}>
                        <UserInfoContainer />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserPageContainer