import React, {useContext, useEffect, useState} from "react";
import "./PostDetailContainer.scss";
import { getPostDataByPostId } from "../../services/api/GetPostData";
import { getUserDataById } from "../../services/api/getUserData";
import PostDetailAdmin from "./component/PostDetailAdmin";
import AppContext from "../../AppContext";

const PostDetailContainer = (props) =>{

    const {user} = useContext(AppContext)
    const [postData,setPostData] = useState([]);
    const [userData,setUserData] = useState({});
    const postId = props.match.params.postId;
    let ownerId = {};

    useEffect(() => {
        getPostData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getPostData = async () => {
        const {data, success} = await getPostDataByPostId(postId)
        if (success) {
            setPostData(data.data)
            ownerId = data.data.owner_id
            getUserData()
        }
    }

    const getUserData = async () => {
        const {data, success} = await getUserDataById(ownerId)
        if (success) {
            setUserData(data.data)
        }
    }

    return (
        <div className={"container-fluid mt-3"} >
            <div className={"row"}>
                <div className={"col-xl-9 col-sm-12"}>
                    <div className={"mt-3"} style={{
                        borderRadius: "5px",
                        backgroundColor: "white",
                        boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                    }}>
                        <h1 style={{color:"Black", textAlign:"center" ,fontSize:"36px" , paddingTop:"20px"}}>Chi tiết sản phẩm</h1>
                        <div style={{ padding:"40px" ,lineHeight:"36px" ,fontSize:"18px" }} >
                            <div>
                                <strong>Tên sản phẩm:</strong> <span>{postData.name}</span>
                            </div>
                            <div>
                                <strong>Phân loại:</strong> <span>{postData.type}</span>
                            </div>
                           <div>
                               <strong>Hãng/Nhà sản xuất:</strong> <span>{postData.brand}</span>
                           </div>
                            <div>
                                <strong>Số lượng:</strong> <span>{postData.amount}</span>
                            </div>
                            <div>
                                <strong>Mô tả:</strong> <span>{postData.description}</span>
                            </div>
                            <div >
                                <strong>Ảnh:</strong>
                            </div>
                            <div>
                                <img src={postData.image_url} alt="" style={{
                                    border: "2px solid #ddd",
                                    padding: "5px",
                                    maxWidth:"75%"
                                }}/>
                            </div>
                            <div>
                                <strong>Trạng thái:</strong> <span>{postData.status}</span>
                            </div>
                            <div>
                                <strong>Ngày đăng:</strong> <span>{postData.created_at}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"col-xl-3 col-sm12"} >
                    <div className={"mt-3 p15"} style={{
                        borderRadius: "5px",
                        backgroundColor: "white",
                        boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                        paddingTop: "1px"
                    }}>
                        <div className={"info-content"} style={{margin: "15px", padding: "10px 0 30px", lineHeight: "36px"}}>
                            <h5>Infomation about Trader </h5>
                            <div>
                                <strong>User Name:</strong> <span>{userData.username}</span>
                            </div>
                            <div>
                                <strong>Date of birth:</strong> <span>{userData.date_of_birth}</span>
                            </div>
                            <div>
                                <strong>Gender:</strong> <span>{userData.gender}</span>
                            </div>
                            <hr/>
                            <div>
                                <strong>User Id:</strong> <span>{userData.id}</span>
                            </div>
                            <div>
                                <strong>Email contact:</strong> <span>{userData.email}</span>
                            </div>
                            <div>
                                <strong>Phone number: </strong> <span>{userData.phone_number}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            { user.id === ownerId ? <PostDetailAdmin props= {props} /> : <div></div>}
        </div>
        )
}
export default PostDetailContainer