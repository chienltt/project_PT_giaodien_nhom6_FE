import React, {useContext, useEffect, useState} from 'react';
import AppContext from "../../AppContext";
import { Input, List, notification} from "antd";
import PostDisplayCard from "./component/PostDisplayCard";
import { getAllPostData, getPostBySearch } from "../../services/api/GetPostData";
const { Search } = Input;

const ProductContainer = (props) => {

    const {user} = useContext(AppContext)
    const [postData, setPostData] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const userDataId=props.match.params.userId

    useEffect(() => {
        getAllPostDatas()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getAllPostDatas = async () => {
        setIsLoading(true)
        const {data, success} = await getAllPostData()
        if (success) {
            setPostData(data.data)
            setIsLoading(false)
        }
    }

    const getAllPostSearch = async (event) => {
        console.log(event)
        setIsLoading(true)
        const {data, success} = await getPostBySearch(event)
        if (success) {
            console.log(data.data)
            setPostData(data.data)
            setIsLoading(false)
        }
    }

    function onSearch(event) {
        getAllPostSearch(event)
    }

    return (
        <div className={"container-fluid mt-3"} style={{
            width: "90%",
            borderRadius: '5px'
        }}>
            <div className={"row"}>
                <div className={"col-xl-12 col-sm-12"} >
                    <div className={"mt-3"} style={{
                        borderRadius: "5px",
                        backgroundColor: "white",
                        boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                        padding:"10px"
                    }}>
                        <div style={{padding:"15px 0 30px 0", display: "flex", justifyContent:"center"}}>
                            <Search
                                placeholder="Search Product"
                                allowClear
                                enterButton="Search"
                                size="large"
                                style={{width:"60%"}}
                                onSearch={ onSearch }
                            />
                        </div>
                        <div style={{margin:"10px",border: "0.05px solid #dfe3e8"  }} >
                            <div style={{padding:"10px"}}>
                                <List
                                    grid={{
                                        gutter: 20,
                                        xs: 1,
                                        sm: 2,
                                        md: 2,
                                        lg: 3,
                                        xl: 4,
                                        xxl: 5,
                                    }}
                                    dataSource={postData}
                                    loading={isLoading}
                                    renderItem={post=>{
                                        return(
                                            <List.Item>
                                                <PostDisplayCard postData={post}/>
                                            </List.Item>
                                        )
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductContainer