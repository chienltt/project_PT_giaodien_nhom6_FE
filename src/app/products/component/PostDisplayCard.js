import React, {useContext, useState} from 'react'
import {Tooltip} from "antd";
import "./PostDisplayCard.scss"
import { DoubleRightOutlined, InteractionOutlined } from '@ant-design/icons';
import paths from "../../../router/paths";
import AppContext from "../../../AppContext";
import UserListPostModal from "../../user/component/UserListPostModal";

const PostDisplayCard = (props) => {
    const {user}  = useContext(AppContext)
    const post = props.postData
    const isChoosing = props.isChoosing
    const isSelected =props.isSelected
    const setPostSelected = props.setPostSelected
    const [modalUserPostVisible,setModalUserPostVisible] = useState(false)

    return (
        <div className={post.id !== isSelected ? "post-card-item-card": "post-card-item-card selected-post"}
             onClick={isChoosing?()=>{setPostSelected(post.id)}:null}>
            <Tooltip title={"your active post"}>
                <img className={"post-card-image"} src={post.image_url} alt={"Can't load this img"}/>
            </Tooltip>
            <div className={"post-card-item-card__text-wrapper"}>
                <h2 className={"post-card-item-card-title"}>{post.name} </h2>
                {!isChoosing?<div className={"post-card-item-card__text-details-wrapper"}>

                    <Tooltip title={"Exchange this product"} placement={"bottom"}>
                        <span onClick={() => setModalUserPostVisible(true)} className="mx-1 post-action-btn">
                            <InteractionOutlined style={{color: "green", fontSize: "20px"}}/>
                        </span>
                    </Tooltip>
                    <Tooltip title={"See post details"} placement={"bottom"}>
                        <span className="mx-1 post-action-btn">
                            <DoubleRightOutlined style={{color: "blue", fontSize: "20px"}} onClick={()=>{
                                window.location.href= paths.PostDetail(post.id)
                            }}/>
                        </span>
                    </Tooltip>

                </div>:<div/>}
            </div>
            <UserListPostModal postDataIdTo={post.id} visible ={modalUserPostVisible} setVisible={setModalUserPostVisible} user={user}/>
        </div>
    )
}
export default PostDisplayCard;