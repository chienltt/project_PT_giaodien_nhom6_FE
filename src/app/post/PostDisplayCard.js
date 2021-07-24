import React from 'react'
import {Tooltip} from "antd";
import "./PostDisplayCard.scss"
import {DeleteOutlined, DoubleRightOutlined,ToolOutlined,InteractionOutlined} from '@ant-design/icons';

const PostDisplayCard = (props) => {
    const post = props.postData

    return (
        <div className={"post-card-item-card"}>
            <Tooltip title={"your active post"}>
                <img className={"post-card-image"} src={post.image_url}/>
            </Tooltip>
            <div className={"post-card-item-card__text-wrapper"}>
                <h2 className={"post-card-item-card-title"}>{post.name} </h2>
                <div className={"post-card-item-card__text-details-wrapper"}>

                    <Tooltip title={"Update post information"} placement={"bottom"}>
                        <span className="mx-1 post-action-btn">
                            <ToolOutlined  style={{color: "black", fontSize: "20px"}}/>
                        </span>
                    </Tooltip>

                    <Tooltip title={"Delete this post"} placement={"bottom"}>
                        <span className="mx-1 post-action-btn">
                            <DeleteOutlined style={{color: "red", fontSize: "20px"}}/>
                        </span>
                    </Tooltip>

                    <Tooltip title={"Exchange this product"} placement={"bottom"}>
                        <span className="mx-1 post-action-btn">
                            <InteractionOutlined style={{color: "green", fontSize: "20px"}}/>
                        </span>
                    </Tooltip>

                    <Tooltip title={"See post details"} placement={"bottom"}>
                        <span className="mx-1 post-action-btn">
                            <DoubleRightOutlined style={{color: "blue", fontSize: "20px"}}/>
                        </span>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}
export default PostDisplayCard;