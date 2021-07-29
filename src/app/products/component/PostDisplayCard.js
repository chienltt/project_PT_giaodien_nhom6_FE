import React, {useState} from 'react'
import {notification, Tooltip} from "antd";
import "./PostDisplayCard.scss"
import { DoubleRightOutlined, InteractionOutlined } from '@ant-design/icons';
import paths from "../../../router/paths";
import {creatTransaction} from "../../../services/api/AccountApi";

const PostDisplayCard = (props) => {
    console.log(props)
    const post = props.postData
    const [isLoading,setIsLoading] = useState(false)
    const from_post_id = post.id

    const creatTransactions = async (to_post_id) => {
        setIsLoading(true)
        const {data, success} = await creatTransaction(from_post_id, to_post_id)
        if (data.data.status_code === 200) {
            setIsLoading(false)
            notification.success({
                message:"Gửi yêu cầu thành công!",
            })
        }
    }

    function clickExchange(to_post_id) {
        creatTransactions(to_post_id)
    }

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
                            <InteractionOutlined style={{color: "green", fontSize: "20px"}} onClick={()=>clickExchange(post.id)}/>
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