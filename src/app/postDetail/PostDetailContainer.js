import React, {useEffect, useState} from "react";
import "./PostDetailContainer.scss";
import {getPostDataByPostId} from "../../services/api/PostData";
import {getUserDataById} from "../../services/api/getUserData";
import PostDetailAdmin from "./component/PostDetailAdmin";
import {Image} from "antd";


const PostDetailContainer = (props) => {
    const [postData, setPostData] = useState([]);
    const [userData, setUserData] = useState({});
    const [additionalImages, setAdditionalImages] = useState([]);
    const postId = props.match.params.postId;
    const [ownerId,setOwnerId]=useState();

    useEffect(() => {
        getPostData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getPostData = async () => {
        const {data, success} = await getPostDataByPostId(postId)
        if (success) {
            console.log("okok1", data.data.owner_id)
            setPostData(data.data)
            setAdditionalImages(data.data.additional_image)
            setOwnerId(data.data.owner_id)
            getUserData()
        }
    }
    const showAdditionalImages = () => {
        return additionalImages.map(imgURL => {
            return (
                <Image className={"image-post-list"} src={imgURL} alt=""/>
            )
        })
    }

    const getUserData = async () => {
        const {data, success} = await getUserDataById(ownerId)
        if (success) {
            setUserData(data.data)
        }
    }

    return (
        <div className={"container-fluid mt-3"}>
            <div className={"row"}>
                <div className={"col-xl-9 col-sm-12"}>
                    <div className={"mt-3"} style={{
                        borderRadius: "5px",
                        backgroundColor: "white",
                        boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                    }}>
                        <h1 style={{color: "Black", textAlign: "center", fontSize: "36px", paddingTop: "20px"}}>Chi tiết
                            sản phẩm</h1>
                        <div style={{padding: "40px", lineHeight: "36px", fontSize: "18px"}}>
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
                            <div>
                                <strong>Ảnh chính:</strong>
                            </div>
                            <div>
                                <Image src={postData.main_image} alt="" style={{
                                    border: "2px solid #ddd",
                                    height:"200px"
                                }}/>
                            </div>
                            {additionalImages.length !== 0 ?
                                <div>
                                    <strong>Ảnh mô tả:</strong>
                                </div> : <div/>}
                            <div>
                                {showAdditionalImages()}
                            </div>
                            <div>
                                <strong>Trạng thái:</strong> <span>{postData.status}</span>
                            </div>
                            <div>
                                <strong>Ngày đăng:</strong> <span>{postData.created_at}</span>
                            </div>
                        </div>
                    </div>
                    {/*{ user.id !== ownerId ? <PostDetailAdmin props= {props} /> : <div></div>}*/}
                    <PostDetailAdmin ownerPost={ownerId} props={props}/>
                </div>
                <div className={"col-xl-3 col-sm12"}>
                    <div className={"mt-3 p15"} style={{
                        borderRadius: "5px",
                        backgroundColor: "white",
                        boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                        paddingTop: "1px"
                    }}>
                        <div className={"info-content"}
                             style={{margin: "15px", padding: "10px 0 30px", lineHeight: "36px"}}>
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

        </div>
    )
}
export default PostDetailContainer