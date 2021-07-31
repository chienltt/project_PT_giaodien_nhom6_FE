import React from 'react'
import {Tooltip} from "antd";
import "./PostDisplayCard.scss"
import { DoubleRightOutlined, InteractionOutlined } from '@ant-design/icons';
import paths from "../../../router/paths";

const PostDisplayCard = (props) => {
    const post = props.postData

    return (
        <div className={"post-card-item-card"}>
            <Tooltip title={"your active post"}>
                <img className={"post-card-image"} src={post.image_url} alt={"Can't load this img"}/>
            </Tooltip>
            <div className={"post-card-item-card__text-wrapper"}>
                <h2 className={"post-card-item-card-title"}>{post.name} </h2>
                <div className={"post-card-item-card__text-details-wrapper"}>

                    <Tooltip title={"Exchange this product"} placement={"bottom"}>
                        <span className="mx-1 post-action-btn">
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

                </div>
            </div>
        </div>
    )
}
export default PostDisplayCard;