import React, {useContext, useState} from "react";
import {Button, Checkbox, Form, Input, notification} from "antd";
import "./LoginContainer.scss"
import 'antd/dist/antd.css';
import {loginApi} from "../../services/api/AccountApi";
import AppContext from "../../AppContext";


const LoginForm=()=>{

    const[loading,setLoading]=useState(false)
    const {setUser,user}= useContext(AppContext)


    const onSubmit=async (values)=> {
        setLoading(true)
        const {data,success}=await loginApi(values.email,values.password)
        if(success){
            if(data.data) {
                console.log("okok",data.data)
                setUser(data.data)
                // window.location.href="/"
                setLoading(false)
                notification.success({
                    message:"Login success",
                })
            }
            else{
                setLoading(false)
                notification.error({
                    message:"Error",
                    description: "Invalid username or password"
                })
            }
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
                        <Button loading={loading} type="primary" htmlType="submit" >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <hr/>
            {console.log("okok678",user)}
            <div className={"footer"}>
                <p>Don't have an account? <a href={"/"}>Register</a></p>
            </div>
        </div>
    )
}
export default LoginForm