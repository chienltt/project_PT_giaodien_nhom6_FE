import React from 'react'
import {Tooltip} from "antd";


const PostDisplayCard= (props) =>{
    const post = props.postData

    return(
        <div className={"post-card-item-card"}>
            <Tooltip title={"your active post"}>
                <img className={"post-card-image"}/>
            </Tooltip>
            <div className={"post-card-item-card__text-wrapper"}>
                <h2 className={"post-card-item-card-title"}>{post.name} </h2>
                <div className={"post-card-item-card__text-details-wrapper"}>

                </div>
            </div>
        </div>
    )
}