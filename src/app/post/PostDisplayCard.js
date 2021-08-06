import React, {useContext, useState} from 'react'
import {notification, Tooltip} from "antd";
import "./PostDisplayCard.scss"
import {DeleteOutlined, DoubleRightOutlined,ToolOutlined,InteractionOutlined} from '@ant-design/icons';
import paths from "../../router/paths";
import AppContext from "../../AppContext";
import UserListPostModal from "../user/component/UserListPostModal";
import {deletePost} from "../../services/api/PostData";
import EditPost from "./EditPost";

const PostDisplayCard = (props) => {
    const {user}  = useContext(AppContext)
    const post = props.postData
    const isOwner= props.isOwner
    const isChoosing = props.isChoosing
    const isSelected =props.isSelected
    const setPostSelected = props.setPostSelected
    const [editPostModalVisible,setEditPostModalVisible] = useState(false)

    const unavailablePost= async (id)=>{
        const {success} = await deletePost(id)
        if(success){
            notification.success({
                message:"update successfully"
            })
            window.location.reload()
        }
        else notification.error({
            message:"update failed"
        })
    }

    const [modalUserPostVisible,setModalUserPostVisible] = useState(false)

    return (
        <div className={post.id !== isSelected ? "post-card-item-card": "post-card-item-card selected-post"}
            onClick={isChoosing?()=>{setPostSelected(post.id)}:null}>
            <Tooltip title={"available post"}>
                <img className={"post-card-image"} src={post.main_image} alt={"Can't load this img"}/>
            </Tooltip>
            <div className={"post-card-item-card__text-wrapper"}>
                <h2 className={"post-card-item-card-title"}>{post.name} </h2>
                {!isChoosing?<div className={"post-card-item-card__text-details-wrapper"}>

                    <Tooltip title={isOwner ? "Update post information" : "Disable with you"} placement={"bottom"}>
                        <span className="mx-1 post-action-btn" onClick={isOwner ? ()=>{setEditPostModalVisible(true)}:null}>
                            <ToolOutlined className={!isOwner ? "disable-action-btn" : ""}
                                          style={{color: "black", fontSize: "20px"}}/>
                        </span>
                    </Tooltip>

                    <Tooltip title={isOwner ? "Delete this post" : "Disable with you"} placement={"bottom"}>
                        <span className="mx-1 post-action-btn" onClick={isOwner ? ()=>{unavailablePost(post.id)}:null}>
                            <DeleteOutlined className={!isOwner ? "disable-action-btn" : ""}
                                            style={{color: "red", fontSize: "20px"}}/>
                        </span>
                    </Tooltip>

                    <Tooltip title={!isOwner ? "Exchange this product" : "Disable with you"} placement={"bottom"}>
                        <span onClick={!isOwner ?() => setModalUserPostVisible(true): null} className="mx-1 post-action-btn">
                            <InteractionOutlined className={isOwner ? "disable-action-btn" : ""}
                                                 style={{color: "green", fontSize: "20px"}}/>
                        </span>
                    </Tooltip>

                    <Tooltip title={"See post details"} placement={"bottom"}>
                        <span className="mx-1 post-action-btn">
                            <DoubleRightOutlined style={{color: "blue", fontSize: "20px"}} onClick={() => {
                                window.location.href = paths.PostDetail(post.id)
                            }}/>
                        </span>
                    </Tooltip>
                </div>:<div/>}
            </div>
            {/*<UserListPostModal postDataIdTo={post.id} visible ={modalUserPostVisible} setVisible={setModalUserPostVisible} user={user}/>*/}
            {/*<EditPost postData={post} newPostId={post.id} visible={editPostModalVisible} setVisible={setEditPostModalVisible}/>*/}
        </div>
    )
}
export default PostDisplayCard;