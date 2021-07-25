import React, { useEffect, useState } from "react";
import paths from "../../../router/paths";
import 'antd/dist/antd.css';
import {Table, Space, Tooltip, notification} from "antd";
import {DeleteOutlined, DoubleRightOutlined, InteractionOutlined} from '@ant-design/icons';
import './PostDetailAdmin.scss'
import {getAllPostWantToTrade} from "../../../services/api/GetPostData";
import {completeTrading} from "../../../services/api/GetPostData";

const PostDetailAdmin = (props) => {

    const [Datas, setDatas] = useState([])
    const postId = props.props.match.params.postId;

    useEffect(() => {
        getAllUser()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const getAllUser = async () => {
        const {data, success} = await getAllPostWantToTrade(postId)
        if (success) {
            console.log(data.data)
            setDatas(data.data)
        }
    }

    const dataUsers = [];
    for (let i = 0; i < Datas.length; i++) {
        dataUsers.push({
            key: Datas[i].trading_post.id,
            transactionId: Datas[i].transaction_id,
            id: Datas[i].trading_post.id,
            name: Datas[i].trading_post.name,
            type: Datas[i].trading_post.type,
            brand: Datas[i].trading_post.brand,
            amount: Datas[i].trading_post.amount,
            description: Datas[i].trading_post.description,
        });
    }

    async function clickAccept(transactionId) {
        console.log(transactionId, postId)
        const {data, success} = await completeTrading(transactionId)
        if (success) {
            if (data.data.status_code === 200) {
                console.log(data.data)
                window.location.href= paths.PostDetail(postId)
            }
        }
    }

    function clickDelete() {
        notification.error({
            message: "Error",
            description: "Hệ thống gặp sự cố, vui lòng thực hiện lại!"
        })
    }

    const { Column } = Table;
    return (
        <div style={{backgroundColor: "#fff", marginTop: "30px", borderRadius: "5px", border: "1px solid black"}}>
            <h1 style={{color:"Black", textAlign:"center",
                fontSize:"28px" , paddingTop:"20px",
            }}>Danh sách sản phẩm muốn trao đổi</h1>
            <div className={"Admin-table"}>
                <Table dataSource={dataUsers}>
                    <Column title="Mã Số" dataIndex="id" key="id" />
                    <Column title="Hàng trao đổi" dataIndex="name" key="name" />
                    <Column title="Kiểu hàng trao đổi" dataIndex="type" key="type" />
                    <Column title="Nhãn hiệu" dataIndex="brand" key="brand" />
                    <Column title="Số lượng" dataIndex="amount" key="amount" />
                    <Column title="Mô tả" dataIndex="description" key="description" />
                    <Column
                        title="Hoạt động"
                        key="action"
                        render={(text, record) => (
                            <Space size="large">
                                <a href={`${paths.UserPage(record.id)}`}>
                                    <Tooltip title={"Xem chi tiết"}>
                                        <DoubleRightOutlined style={{color: "blue", fontSize: "16px"}} />
                                    </Tooltip>
                                </a>
                                {/* eslint-disable-next-line no-undef */}
                                <a onClick={() => clickAccept(record.transactionId, record.id)}>
                                    <Tooltip title={"Chấp nhận đổi"}>
                                        <InteractionOutlined style={{color: "green", fontSize: "16px"}} />
                                    </Tooltip>
                                </a>
                                {/* eslint-disable-next-line no-undef */}
                                <a onClick= {() => clickDelete()}>
                                    <Tooltip title={"Xóa lời mời"}>
                                        <DeleteOutlined style={{color: "red", fontSize: "16px"}} />
                                    </Tooltip>
                                </a>
                            </Space>
                        )}
                    />
                </Table>
            </div>
        </div>
    )
}

export default PostDetailAdmin;