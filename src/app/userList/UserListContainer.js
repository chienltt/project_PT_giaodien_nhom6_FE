import React, { useEffect, useState } from 'react'
import {getAllData} from "../../services/api/GetPostData";
import "./UserListContainer.scss"
import paths from "../../router/paths";
import 'antd/dist/antd.css';
import { Input, Table, Space } from "antd";
import { SearchOutlined } from '@ant-design/icons';

let dataUsersBase;

const UserListContainer = (props) => {
    const [Data, setData] = useState({})

    useEffect(() => {
        getAllUser()
    }, [])
    const getAllUser = async () => {
        const {data, success} = await getAllData()
        if (success) {
            setData(data.data)
            dataUsersBase = data.data;
        }
    }

    let dataUsers = [];
    for (let i = 0; i < Data.length; i++) {
        dataUsers.push({
            key: Data[i].id,
            id: Data[i].id,
            email: Data[i].email,
            username: Data[i].username,
            phone_number: Data[i].phone_number,
            gender: Data[i].gender,
            date_of_birth: Data[i].date_of_birth,
        });
    }

    let dataUserSearch = [];
    function onchange(event) {
        for (let i = 0; i < dataUsersBase.length; i++) {
            if (dataUsersBase[i].email.includes(event.target.value) || dataUsersBase[i].username.includes(event.target.value)) {
                dataUserSearch.push({
                    key: dataUsersBase[i].id,
                    id: dataUsersBase[i].id,
                    email: dataUsersBase[i].email,
                    username: dataUsersBase[i].username,
                    phone_number: dataUsersBase[i].phone_number,
                    gender: dataUsersBase[i].gender,
                    date_of_birth: dataUsersBase[i].date_of_birth,
                });
            }
        }
        setData(dataUserSearch)
    }

    const { Column } = Table;
    return (
        <div className={"container-fluid mt-3 user__base"}>

            <div className={"user__header"}>
                <div className={"user__header--title"}>
                    <strong>Search User</strong>
                </div>
                <div className={"user__header--search"}>
                    <SearchOutlined className={"user__header--search-icon"}/>
                    <Input onChange={onchange} placeholder={"User name, Email"}/>
                </div>
            </div>

            <div className={"user__container"}>
                <Table dataSource={dataUsers}>
                    <Column title="Id" dataIndex="id" key="id" />
                    <Column title="Email" dataIndex="email" key="email" />
                    <Column title="User Name" dataIndex="username" key="username" />
                    <Column title="Phone Number" dataIndex="phone_number" key="phone_number" />
                    <Column title="Gender" dataIndex="gender" key="gender" />
                    <Column title="Date Of Birth" dataIndex="date_of_birth" key="date_of_birth" />
                    <Column
                        title="Action"
                        key="action"
                        render={(text, record) => (
                            <Space size="middle">
                                <a href={`${paths.UserPage}/${record.id}`}>Detail {record.username}</a>
                            </Space>
                        )}
                    />
                </Table>
            </div>

        </div>
    )
}
export default UserListContainer