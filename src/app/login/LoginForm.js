import React, {useContext, useState} from "react";
import {Button, Checkbox, Form, Input, notification} from "antd";
import "./LoginContainer.scss"
import 'antd/dist/antd.css';
import {loginApi} from "../../services/api/AccountApi";
import AppContext from "../../AppContext";


const LoginForm=()=>{

    const[loading,setLoading]=useState(false)
    const {setUser}= useContext(AppContext)


    const onSubmit=async (values)=> {
        setLoading(true)
        const {data,success}=await loginApi(values.email,values.password)
        console.log(data)
        if(success){
            if(data.data.status_code !== 101 && data.data.status_code !== 202) {
                setUser(data.data)
                window.location.href="/u/"
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
                        span: 5,
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
                            offset: 5,
                            span: 20,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 5,
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
            <div className={"footer"}>
                <p>Don't have an account? <a href={"/register"}>Register</a></p>
            </div>
        </div>
    )
}
export default LoginForm