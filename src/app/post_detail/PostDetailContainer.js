import React, { useEffect, useState} from "react";
import "./PostDetailContainer.scss";
import {getPostDataByPostId} from "../../services/api/GetPostData";

const PostDetailContainer = (props) =>{
    const postId= props.match.params.postId
    const [Data,PostData] = useState({});

    useEffect(() => {
        getPostData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const getPostData = async () => {
        const {data, success} = await getPostDataByPostId(postId)
        if (success) {
            //console.log(data.data)
            PostData(data.data)

        }

    }


    return (
        <div className={"container-fluid mt-3"} >
            <div className={"row"}>
                <div className={"col-xl-9 col-sm-12"}>
                    <div className={"post-table-content mt-3"} style={{
                        borderRadius: "5px",
                        height: "100%",
                        backgroundColor: "white",
                        boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                    }}>
                        <div style={{
                            position: "absolute",
                            width: "50%",
                            display: "flex",
                            alignItems: "center",
                            paddingTop: "10px",
                            right: "0px"
                        }}>
                        </div>
                        <h1 style={{color:"Black", textAlign:"center" ,fontSize:"40px" , paddingTop:"20px"}}>Product Detail</h1>
                        <div className={"product-detail"} style={{
                                 padding:"50px", marginTop:"0px" ,lineHeight:"40px" ,fontSize:"1.1rem"
                        }} >

                            <div>
                                <strong>Tên sản phẩm:</strong>  <span>{Data.name}</span>
                            </div>
                            <div>
                                <strong>Phân loại:</strong> <span>{Data.type}</span>
                            </div>
                           <div>
                               <strong>Hãng/Nhà sản xuất:</strong> <span>{Data.brand}</span>
                           </div>
                            <div>
                                <strong>Số lượng:</strong> <span>{Data.amount}</span>
                            </div>
                            <div>
                                <strong>Mô tả:</strong> <span>{Data.description}</span>
                            </div>
                            <div >
                                <strong>Ảnh:</strong>
                            </div>
                            <div>
                                <img src={Data.image_url} alt="" style={{
                                    border: "2px solid #ddd",
                                    padding: "5px",
                                    maxWidth:"75%"
                                }}/>
                            </div>
                            <div>
                                <strong>Trạng thái:</strong> <span>{Data.status}</span>
                            </div>
                            <div>
                                <strong>Ngày đăng:</strong><span>{Data.created_at}</span>
                            </div>

                        </div>

                    </div>
                </div>
                <div className={"col-xl-3 col-sm12"} >
                    <div className={"post-table-content mt-3 p15"} style={{
                        borderRadius: "5px",
                        backgroundColor: "white",
                        boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                        paddingTop: "1px"
                    }}>
                        <div className={"info-content"} style={{margin: "15px"}}>
                            <h5>Infomation about Trader </h5>
                            <div>
                                <strong>User Name:</strong> <span>{}</span>
                            </div>
                            <div>
                                <strong>Date of birth:</strong> <span>{}</span>
                            </div>
                            <div>
                                <strong>Gender:</strong> <span>{}</span>
                            </div>
                            <hr/>
                            <div>
                                <strong>User Id:</strong> <span>{}</span>
                            </div>
                            <div>
                                <strong>Email contact:</strong> <span>{}</span>
                            </div>
                            <div>
                                <strong>Phone number: </strong> <span>{}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}
export default PostDetailContainer;