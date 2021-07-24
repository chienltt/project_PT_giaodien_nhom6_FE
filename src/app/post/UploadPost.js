import {Form, Input, Modal, Upload} from "antd";
import React from "react";
import { PlusOutlined } from "@ant-design/icons";
const UploadPost=(props)=>{
    return(
        <Modal
            visible={props.visible}
            title={"Bài đăng mới"}
            onCancel={()=>props.setVisible(false)}
            width={"800px"}
        >
            <Form
                labelCol={{
                    span: 5,
                }}
                wrapperCol={{
                    span: 17,
                }}
            >
                <Form.Item label={"Ten san pham"}>
                    <Input/>
                </Form.Item>
                <Form.Item label={"Thuong hieu"}>
                    <Input/>
                </Form.Item>
                <Form.Item label={"The loai san pham"}>
                    <Input/>
                </Form.Item>
                <Form.Item label={"So luong"}>
                    <Input />
                </Form.Item>
                <Form.Item label={"Mo ta san pham"}>
                    <Input.TextArea/>
                </Form.Item>
                <Form.Item label={"Anh chinh cua san pham"}>
                    <Upload listType="picture-card">
                        < PlusOutlined/>
                    </Upload>
                </Form.Item>
                <Form.Item label={"Anh mo ta them"}>
                    <Upload listType="picture-card">
                        < PlusOutlined/>
                    </Upload>
                </Form.Item>
            </Form>
        </Modal>
    )
}
export default UploadPost;