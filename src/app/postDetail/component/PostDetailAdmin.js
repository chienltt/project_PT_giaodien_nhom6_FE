import React, {useContext, useEffect, useState} from "react";
import paths from "../../../router/paths";
import 'antd/dist/antd.css';
import {Table, Space, Tooltip} from "antd";
import { DoubleRightOutlined, InteractionOutlined} from '@ant-design/icons';
import './PostDetailAdmin.scss'
import {getAllPostWantToTrade} from "../../../services/api/PostData";
import {completeTrading} from "../../../services/api/AccountApi";
import AppContext from "../../../AppContext";

const PostDetailAdmin = (props) => {
    const {user}= useContext(AppContext)
    const [Datas, setDatas] = useState([])
    const postId = props.props.match.params.postId;

    useEffect(() => {
        getAllUser()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const getAllUser = async () => {
        const {data, success} = await getAllPostWantToTrade(postId)
        if (success) {
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
        const {data} = await completeTrading(transactionId)
        if (data.data.status_code === 200) {
            window.location.href= paths.PostDetail(postId)
        }
    }

    const { Column } = Table;
    return (
        <div style={{backgroundColor: "#fff", marginTop: "30px", borderRadius: "5px", border: "1px solid black"}}>
            <h1 style={{color:"Black", textAlign:"center",
                fontSize:"28px" , paddingTop:"20px",
            }}>Danh sách sản phẩm muốn trao đổi</h1>
            <div className={"Admin-table"}>
                <Table dataSource={dataUsers} pagination={{ pageSize: 5 }}>
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
                                <a href={`${paths.PostDetail(record.id)}`}>
                                    <Tooltip title={"Xem chi tiết"}>
                                        <DoubleRightOutlined style={{color: "blue", fontSize: "16px"}} />
                                    </Tooltip>
                                </a>
                                {/* eslint-disable-next-line no-undef */}
                                <div onClick={props.ownerPost===user.id?() => clickAccept(record.transactionId, record.id):null}>
                                    <Tooltip title={"Chấp nhận đổi"}>
                                        <InteractionOutlined style={props.ownerPost===user.id?{color: "green",cursor:"pointer", fontSize: "16px"}:{color: "gray", fontSize: "16px"}} />
                                    </Tooltip>
                                </div>
                            </Space>
                        )}
                    />
                </Table>
            </div>
        </div>
    )
}

export default PostDetailAdmin;