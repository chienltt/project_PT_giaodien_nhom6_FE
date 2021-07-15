import React from "react";
import {Button, Checkbox, Form, Input} from "antd";
import "./LoginContainer.scss"
import 'antd/dist/antd.css';
import {loginApi} from "./AccountApi";
const LoginForm=()=>{

    const onSubmit=async (values)=> {
        console.log("success",values)
        const {data,success}=await loginApi(values.email,values.password)
        if(success){
            if(data)
            window.location.pathname="/"
        }
    }


    return(
        <div className={"login-form"}>
            <div className={"title"}>
                <p className={"login-title"} style={{fontSize:"25px",fontWeight:"900"}}>
                    Login
                </p>
                <div className={"brand-title"}/>
            </div>
            <div className={"content"}>
                <Form
                    name="basic"
                    labelCol={{
                        span: 4,
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
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 4,
                            span: 20,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 4,
                            span: 20,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <hr/>
            <div className={"footer"}>
                <p>Don't have an account? <a href={"/"}>Register</a></p>
            </div>
        </div>
    )
}
export default LoginForm