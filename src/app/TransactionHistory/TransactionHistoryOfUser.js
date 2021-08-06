import React, {useEffect, useState} from "react";
import {getTransHisbyUserId} from "../../services/api/TransactionHistoryApi";
import {notification} from "antd";
import paths from "../../router/paths";
import {Table} from "antd/es";
import "./TransactionHistoryOfUser.scss"

const TransactionHistoryOfUser=(props)=>{
    const userId= props.userId
    const [data,setData]= useState([])

    useEffect(()=>{
        getDataTrans()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const getDataTrans=async ()=>{
        const {data,success} = await getTransHisbyUserId(userId)
        if(success){
            setData(data.data)
        }
        else {
            notification.error("Không tìm thấy lịch sử giao dịch!")
        }

    }
    const column= [
        {
            title: 'Người yêu cầu',
            dataIndex: 'from_user_name',
            render: (name,record) => <a href={paths.UserPage(record.from_user_id)}>{name}</a>,
        },
        {
            title: 'Người được yêu cầu',
            dataIndex: 'to_user_name',
            render: (name,record) => <a href={paths.UserPage(record.to_user_id)}>{name}</a>,
        },
        {
            title: 'Sản phẩm yêu cầu',
            dataIndex: 'from_post_name',
            render: (name,record) => <a href={paths.PostDetail(record.from_post_id)}>{name}</a>,
        },
        {
            title: 'Sản phẩm được yêu cầu',
            dataIndex: 'to_post_name',
            render: (name,record) =><a href={paths.PostDetail(record.to_post_id)}>{name}</a>,
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            render: status => <div style={status==="Completed"? {color:"green",fontWeight:"900"}:
                                            status==="rejected"?{color:"red",fontWeight:"900"}
                                                :{color:"blue",fontWeight:"900"}}>{status}</div>,
        },
        {
            title: 'Mô tả',
            dataIndex: 'extra',
            render: extra => <div>{extra}</div>,
        },
        {
            title: 'Thời điểm tạo',
            dataIndex: 'created_at',
            render: time => <div>{time}</div>,
        },
    ]

    return(<div className={"table-trans-his-container"}>
        <h5
            style={{fontSize: "22px",marginBottom:"20px", fontWeight: "800", display: "inline"}}>Lịch sử trao đổi của bạn:
        </h5>
        <Table
            className={"table-trans-his-content"}
            columns={column}
            dataSource={data}
            pagination={{ pageSize: 5 }}
        />
    </div>)
}
export default TransactionHistoryOfUser