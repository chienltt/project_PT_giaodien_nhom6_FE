import React, {useContext, useEffect, useState} from 'react'
import {getPostDataByUserId} from "../../services/api/GetPostData";
import AppContext from "../../AppContext";
import UserInfoContainer from "./component/UserInfoContainer";
import {Button, Input, List} from "antd";
import PostDisplayCard from "../post/PostDisplayCard";
import UploadPost from "../post/UploadPost";
const { Search } = Input;

const dataTest =[
    {
        id : 3,
        owner_id: 4,
        name: "Tv sony cu 24 inch",
        brand: "sony",
        type: "Đồ điện tử",
        amount: 1,
        description: "Đồ con mới, mới sử dụng tử năm 2019",
        image_url: "https://chugiong.com/uploads/20170911171414_7947269_tivi_sony_24_inch_gia_bao_nhieu_o_thoi_diem_hien_tai_1.jpg",
        status: "available",
        created_at: "2021-07-16T04:21:30Z"
    },
    {
        id : 4,
        owner_id: 4,
        name: "máy tính để bàn",
        brand: "Dell",
        type: "Đồ điện tử",
        amount: 2,
        description: "Đồ con mới, mới sử dụng tử năm 2019",
        image_url: "https://maytinhcdc.vn/media/news/399_8_may_tinh_de_ban_dell_nguyen_bo_2.jpg",
        status: "available",
        created_at: "2021-07-16T05:59:49Z"
    },    {
        id : 3,
        owner_id: 4,
        name: "Tv sony cu 24 inch",
        brand: "sony",
        type: "Đồ điện tử",
        amount: 1,
        description: "Đồ con mới, mới sử dụng tử năm 2019",
        image_url: "https://chugiong.com/uploads/20170911171414_7947269_tivi_sony_24_inch_gia_bao_nhieu_o_thoi_diem_hien_tai_1.jpg",
        status: "available",
        created_at: "2021-07-16T04:21:30Z"
    },
    {
        id : 4,
        owner_id: 4,
        name: "máy tính để bàn",
        brand: "Dell",
        type: "Đồ điện tử",
        amount: 2,
        description: "Đồ con mới, mới sử dụng tử năm 2019",
        image_url: "https://maytinhcdc.vn/media/news/399_8_may_tinh_de_ban_dell_nguyen_bo_2.jpg",
        status: "available",
        created_at: "2021-07-16T05:59:49Z"
    },    {
        id : 3,
        owner_id: 4,
        name: "Tv sony cu 24 inch",
        brand: "sony",
        type: "Đồ điện tử",
        amount: 1,
        description: "Đồ con mới, mới sử dụng tử năm 2019",
        image_url: "https://chugiong.com/uploads/20170911171414_7947269_tivi_sony_24_inch_gia_bao_nhieu_o_thoi_diem_hien_tai_1.jpg",
        status: "available",
        created_at: "2021-07-16T04:21:30Z"
    },
    {
        id : 4,
        owner_id: 4,
        name: "máy tính để bàn",
        brand: "Dell",
        type: "Đồ điện tử",
        amount: 2,
        description: "Đồ con mới, mới sử dụng tử năm 2019",
        image_url: "https://maytinhcdc.vn/media/news/399_8_may_tinh_de_ban_dell_nguyen_bo_2.jpg",
        status: "available",
        created_at: "2021-07-16T05:59:49Z"
    },    {
        id : 3,
        owner_id: 4,
        name: "Tv sony cu 24 inch",
        brand: "sony",
        type: "Đồ điện tử",
        amount: 1,
        description: "Đồ con mới, mới sử dụng tử năm 2019",
        image_url: "https://chugiong.com/uploads/20170911171414_7947269_tivi_sony_24_inch_gia_bao_nhieu_o_thoi_diem_hien_tai_1.jpg",
        status: "available",
        created_at: "2021-07-16T04:21:30Z"
    },
    {
        id : 4,
        owner_id: 4,
        name: "máy tính để bàn",
        brand: "Dell",
        type: "Đồ điện tử",
        amount: 2,
        description: "Đồ con mới, mới sử dụng tử năm 2019",
        image_url: "https://maytinhcdc.vn/media/news/399_8_may_tinh_de_ban_dell_nguyen_bo_2.jpg",
        status: "available",
        created_at: "2021-07-16T05:59:49Z"
    },    {
        id : 3,
        owner_id: 4,
        name: "Tv sony cu 24 inch",
        brand: "sony",
        type: "Đồ điện tử",
        amount: 1,
        description: "Đồ con mới, mới sử dụng tử năm 2019",
        image_url: "https://chugiong.com/uploads/20170911171414_7947269_tivi_sony_24_inch_gia_bao_nhieu_o_thoi_diem_hien_tai_1.jpg",
        status: "available",
        created_at: "2021-07-16T04:21:30Z"
    },
    {
        id : 4,
        owner_id: 4,
        name: "máy tính để bàn",
        brand: "Dell",
        type: "Đồ điện tử",
        amount: 2,
        description: "Đồ con mới, mới sử dụng tử năm 2019",
        image_url: "https://maytinhcdc.vn/media/news/399_8_may_tinh_de_ban_dell_nguyen_bo_2.jpg",
        status: "available",
        created_at: "2021-07-16T05:59:49Z"
    },
    {
        id : 4,
        owner_id: 4,
        name: "máy tính để bàn",
        brand: "Dell",
        type: "Đồ điện tử",
        amount: 2,
        description: "Đồ con mới, mới sử dụng tử năm 2019",
        image_url: "https://maytinhcdc.vn/media/news/399_8_may_tinh_de_ban_dell_nguyen_bo_2.jpg",
        status: "available",
        created_at: "2021-07-16T05:59:49Z"
    },
    {
        id : 4,
        owner_id: 4,
        name: "máy tính để bàn",
        brand: "Dell",
        type: "Đồ điện tử",
        amount: 2,
        description: "Đồ con mới, mới sử dụng tử năm 2019",
        image_url: "https://maytinhcdc.vn/media/news/399_8_may_tinh_de_ban_dell_nguyen_bo_2.jpg",
        status: "available",
        created_at: "2021-07-16T05:59:49Z"
    },
    {
        id : 4,
        owner_id: 4,
        name: "máy tính để bàn",
        brand: "Dell",
        type: "Đồ điện tử",
        amount: 2,
        description: "Đồ con mới, mới sử dụng tử năm 2019",
        image_url: "https://maytinhcdc.vn/media/news/399_8_may_tinh_de_ban_dell_nguyen_bo_2.jpg",
        status: "available",
        created_at: "2021-07-16T05:59:49Z"
    },
    {
        id : 4,
        owner_id: 4,
        name: "máy tính để bàn",
        brand: "Dell",
        type: "Đồ điện tử",
        amount: 2,
        description: "Đồ con mới, mới sử dụng tử năm 2019",
        image_url: "https://maytinhcdc.vn/media/news/399_8_may_tinh_de_ban_dell_nguyen_bo_2.jpg",
        status: "available",
        created_at: "2021-07-16T05:59:49Z"
    },
    {
        id : 4,
        owner_id: 4,
        name: "máy tính để bàn",
        brand: "Dell",
        type: "Đồ điện tử",
        amount: 2,
        description: "Đồ con mới, mới sử dụng tử năm 2019",
        image_url: "https://maytinhcdc.vn/media/news/399_8_may_tinh_de_ban_dell_nguyen_bo_2.jpg",
        status: "available",
        created_at: "2021-07-16T05:59:49Z"
    }
]


const UserPageContainer = (props) => {
    // postId = window.location.pathname - '/u/post_detail/'
    const {user} = useContext(AppContext)
    const [postData, setPostData] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [newPostModalVisible,setNewPostModalVisible] = useState(false)

    useEffect(() => {
        getPostData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const getPostData = async () => {
        setIsLoading(true)
        const {data, success} = await getPostDataByUserId(user.id)
        if (success) {
            data.data = data.data.map(post => {
                post.image_url = "https://file.chodocu.com//2018/08/08/16754143--9877.jpg"
                return post
            })
            setPostData(data.data)
            setPostData(dataTest)
            setIsLoading(false)
        }
        else {
            setPostData(dataTest)
            setIsLoading(false)
        }
    }
    return (
        <div className={"container-fluid mt-3"} style={{
            width: "95%",
            borderRadius: '5px'
        }}>
            {/*{console.log("okok",window.location.pathname)}*/}

            {/*{ user.userId === postData.user.userID ? <div> hello admin</div> : <div/>}*/}
            <div className={"row"}>
                <div className={"col-xl-9 col-sm-12"} >
                    <div className={"post-table-content mt-3"} style={{
                        borderRadius: "5px",
                        backgroundColor: "white",
                        boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                        padding:"10px"
                    }}>

                        <div style={{padding:"10px"}}> <h5 style={{fontSize:"22px",fontWeight:"800",display:"inline"}}>Danh sách các bài đăng:</h5>
                            <Button style={{float:"right"}} type={"primary"} onClick={()=>setNewPostModalVisible(true)}> Tạo bài đăng mới </Button></div>
                        <div className={"search_post"} style={{paddingTop:"10px",paddingBottom:"20px",display: "flex", justifyContent:"center"}}>
                            <Search
                                placeholder="search post by name,id"
                                allowClear
                                enterButton="Search"
                                size="large"
                                style={{width:"75%"}}
                                // onSearch={onSearch}
                            />
                        </div>
                        <div className={"list_post_content_border"} style={{margin:"10px",border: "0.05px solid #dfe3e8"  }} >
                            <div className={"list_post_content"} style={{padding:"10px"}}>
                            <List
                                grid={{
                                    gutter: 20,
                                    xs: 1,
                                    sm: 2,
                                    md: 2,
                                    lg: 3,
                                    xl: 3,
                                    xxl: 4,
                                }}
                                dataSource={postData}
                                loading={isLoading}
                                renderItem={post=>{
                                    return(
                                        <List.Item>
                                            <PostDisplayCard  postData={post}/>
                                        </List.Item>
                                    )
                                }}
                            />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"col-xl-3 col-sm12"} style={{height: "500px"}}>
                    <div className={"post-table-content mt-3 p15"} style={{
                        borderRadius: "5px",
                        backgroundColor: "white",
                        boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                        padding:"15px"
                    }}>
                        <UserInfoContainer />
                    </div>
                </div>
            </div>
            <UploadPost visible={newPostModalVisible} setVisible={setNewPostModalVisible}/>
        </div>
    )
}
export default UserPageContainer