import {useEffect, useState} from "react";
import {getTransHisbyUserId} from "../../services/api/TransactionHistoryApi";
import {notification} from "antd";
import paths from "../../router/paths";

const TransactionHistoryOfUser=(props)=>{
    const userId= props.userId
    const [data,setData]= useState([])

    useEffect(()=>{
        getDataTrans()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const getDataTrans=async ()=>{
        const {data,success} = await getTransHisbyUserId(1)
        if(success){
            console.log("okok",data)
        }
        else {
            notification.error("can't load transaction history!")
        }

    }
    const column= [
        {
            title: 'Người yêu cầu',
            dataIndex: 'from_user_name',
            render: (name,record) => <a href={paths.UserPage(record.from_user_id)}>{name}</a>,
        },
        {
            title: 'Người chấp nhận',
            dataIndex: 'to_user_name',
            render: (name,record) => <a href={paths.UserPage(record.to_user_id)}>{name}</a>,
        },
        {
            title: 'Sản phẩm yêu cầu',
            dataIndex: 'from_post_name',
            render: (name,record) => <a href={paths.UserPage(record.from_post_id)}>{name}</a>,
        },
        {
            title: 'Sản phẩm chấp nhận',
            dataIndex: 'to_post_name',
            render: (name,record) =><a href={paths.UserPage(record.to_post_id)}>{name}</a>,
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            render: status => <div>{status}</div>,
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
    return(<div>

    </div>)
}
export default TransactionHistoryOfUser