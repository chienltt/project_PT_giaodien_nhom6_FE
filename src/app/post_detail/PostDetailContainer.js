import React, {useContext, useEffect, useState} from "react";
import "./PostDetailContainer.scss";
import UserInfoContainer from "../user/component/UserInfoContainer";
import AppContext from "../../AppContext";
import {getPostDataByPostId} from "../../services/api/GetPostData";

const PostDetailContainer = (props) =>{

    const [Data,PostData] = useState({});

    useEffect(() => {
        getPostData()
    }, [])
    const getPostData = async () => {
        let pathName = window.location.pathname, //  /u/post_detail/2
                name1= ' /u/post_detail/';
        const {data, success} = await getPostDataByPostId(pathName.substr(15,3) )
        if (success) {
            //console.log(data.data)
            PostData(data.data)

        }

    }


    return (
        <div className={"container-fluid mt-3"} style={{
            width: "95%", height: "500px",

        }}>
            <div className={"row"}>
                <div className={"col-xl-9 col-sm-12"} style={{height: "1300px"}}>
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
                                    width: "500px"
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
                <div className={"col-xl-3 col-sm12"} style={{height: "1000px"}}>
                    <div className={"post-table-content mt-3 p15"} style={{
                        borderRadius: "5px",
                        height: "450px",
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