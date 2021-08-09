import React, {useState} from "react";
import {Button, DatePicker, Form, Input, notification, Select} from "antd";
import "./RegisterContainer.scss"
import 'antd/dist/antd.css';
import {registerApi} from "./AccountApi";

const registerCode={
    success:200,
    fail:101
}

const RegisterForm=()=>{
    const[loading,setLoading]=useState(false)
    const onSubmit=async (values)=> {
        values.dob = values.dob.format("YYYY-MM-DD")
        console.log(values)
        setLoading(true)
        const {data,success} =
            await registerApi(values.email, values.username, values.password, values.phone_number, values.gender, values.dob)
        if(success){
            if(data.data.status_code === registerCode.success) {
                // window.location.href="/login"
                setLoading(false)
                notification.success({
                    message: "Success",
                    description: data.data.detail
                })
            }
            else{
                setLoading(false)
                notification.error({
                    message:"Error",
                    description: data.data.detail
                })
            }
        }
    }


    return(
        <div className={"register-form"}>
            <div className={"title"}>
                <p className={"register-title"} style={{fontSize:"25px",fontWeight:"900"}}>
                    Register
                </p>
                <div className={"brand-title"}/>
            </div>
            <div className={"content"}>
                <Form
                    name="basic"
                    labelCol={{
                        span: 7,
                    }}
                    wrapperCol={{
                        span: 20,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onSubmit}
                    // onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                type: "email",
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="Phone Number"
                        name="phone_number"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone number!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="gender"
                        label="Gender"
                        rules={[
                            {
                                required: true,
                                message: 'Please select your gender!',
                            },
                        ]}
                    >
                        <Select
                            placeholder="Select a option gender"
                            allowClear
                        >
                            <Select.Option value="male">male</Select.Option>
                            <Select.Option value="female">female</Select.Option>
                            <Select.Option value="other">other</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Date Of Birth"
                        name="dob"
                    >
                        <DatePicker size="default" picker="date" className={"register-form-dob"} />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 7,
                            span: 20,
                        }}
                    >
                        <Button disabled={true} loading={loading} type="primary" htmlType="submit" >
                            Register
                        </Button>
                        Không thể đăng kí trong giai đoạn này
                    </Form.Item>
                </Form>
            </div>
            <hr/>
            <div className={"footer"}>
                <a href={"/login"}>Back To Login Form</a>
            </div>
        </div>
    )
}
export default RegisterForm