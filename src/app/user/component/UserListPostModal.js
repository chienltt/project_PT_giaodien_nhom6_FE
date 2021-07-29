import {Button, List, Modal} from "antd";
import PostDisplayCard from "../../post/PostDisplayCard";
import React, {useEffect, useState} from "react";
import Search from "antd/lib/input/Search";
import {getPostDataByUserId} from "../../../services/api/GetPostData";


const UserListPostModal = (props) => {
    const visible = props.visible
    const user = props.user
    const setVisible=props.setVisible
    const [postData, setPostData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isSelected,setIsSelected] = useState()

    useEffect(()=>{
        getPostData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const getPostData = async () => {
        setIsLoading(true)
        const {data, success} = await getPostDataByUserId(5)
        if (success) {
            setPostData(data.data)
            setIsLoading(false)
        } else {
            setIsLoading(false)
        }
    }

    return (
        <Modal visible={visible} onCancel={()=>{setVisible(false)}}
            width={"1000px"}
        >
                <div style={{padding: "10px"}}><h5 style={{fontSize: "22px", fontWeight: "800", display: "inline"}}>Chọn sản phẩm bạn muốn trao đổi:</h5>
                    <div className={"search_post"}
                         style={{paddingTop: "10px", paddingBottom: "20px", display: "flex", justifyContent: "center"}}>
                        <Search
                            placeholder="search post by name,id"
                            allowClearđổi
                            enterButton="Search"
                            size="large"
                            style={{width: "75%"}}
                            // onSearch={onSearch}
                        />
                    </div>
                    <div className={"list_post_content_border"}
                         style={{margin: "10px", border: "0.05px solid #dfe3e8"}}>
                        <div className={"list_post_content"} style={{padding: "10px"}}>
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
                                renderItem={post => {
                                    return (
                                        <List.Item>
                                            <PostDisplayCard isChoosing={true} isOwner={true} postData={post} isSelected={isSelected} setPostSelected={setIsSelected}/>
                                        </List.Item>
                                    )
                                }}
                            />
                        </div>
                    </div>
                </div>
        </Modal>
)
}
export default UserListPostModal