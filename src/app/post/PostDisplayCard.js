import React from 'react'
import {Tooltip} from "antd";
import "./PostDisplayCard.scss"
import {DeleteOutlined, DoubleRightOutlined,ToolOutlined,InteractionOutlined} from '@ant-design/icons';
import paths from "../../router/paths";

const PostDisplayCard = (props) => {
    const post = props.postData
    const isOwner= props.isOwner

    return (
        <div className={"post-card-item-card"}>
            <Tooltip title={"your active post"}>
                <img className={"post-card-image"} src={post.image_url} alt={"Can't load this img"}/>
            </Tooltip>
            <div className={"post-card-item-card__text-wrapper"}>
                <h2 className={"post-card-item-card-title"}>{post.name} </h2>
                <div className={"post-card-item-card__text-details-wrapper"}>

                    <Tooltip title={isOwner?"Update post information":"Disable with you"} placement={"bottom"}>
                        <span className="mx-1 post-action-btn">
                            <ToolOutlined className={!isOwner?"disable-action-btn":""} style={{color: "black", fontSize: "20px"}}/>
                        </span>
                    </Tooltip>

                    <Tooltip title={isOwner?"Delete this post":"Disable with you"} placement={"bottom"}>
                        <span className="mx-1 post-action-btn">
                            <DeleteOutlined className={!isOwner?"disable-action-btn":""}  style={{color: "red", fontSize: "20px"}}/>
                        </span>
                    </Tooltip>

                    <Tooltip title={!isOwner?"Exchange this product":"Disable with you"} placement={"bottom"}>
                        <span className="mx-1 post-action-btn">
                            <InteractionOutlined className={isOwner?"disable-action-btn":""} style={{color: "green", fontSize: "20px"}}/>
                        </span>
                    </Tooltip>

                    <Tooltip title={"See post details"} placement={"bottom"}>
                        <span className="mx-1 post-action-btn">
                            <DoubleRightOutlined style={{color: "blue", fontSize: "20px"}} onClick={()=>{
                                window.location.href= paths.PostDetail(post.id)
                            }}/>
                        </span>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}
export default PostDisplayCard;