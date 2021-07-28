import {Button, Form, Input, Modal, Upload} from "antd";
import React, {useContext, useState} from "react";
import {PlusOutlined} from "@ant-design/icons";
import UploadFirebase from "../firebase/UploadFirebase";
import AppContext from "../../AppContext";
import {uploadPostData} from "../../services/api/UploadPostData";

const UploadPost = (props) => {
    const {user} = useContext(AppContext)
    const newPostId= props.newPostId

    const [imagePreview, setImagePreview] = useState();
    const [modalPreviewVisible, setModalPreviewVisible] = useState(false)
    const [listImageDescription, setListImageDescription] = useState([])
    const [mainImage, setMainImage] = useState([])

    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    const uploadButton = (
        <div>
            <PlusOutlined/>
            <div style={{marginTop: 8}}>Upload</div>
        </div>
    );
    const uploadDataImageToStorage = async (data)=>{
        return Promise.all(data.map(async (image ) => {
            image.url = await UploadFirebase(image.originFileObj)
            return image.url
        }))
    }
    const handleSubmit = async (value)=>{
        let valueData={}
        if(value.imageDescription)
            value.imageDescription.fileList = changeNameDescriptionImage(value)
        value.mainImage.fileList=changeNameMainImage(value)

        const dataMainImage= await uploadDataImageToStorage(value.mainImage.fileList)
        const dataDescribeImages= value.imageDescription? await uploadDataImageToStorage(value.imageDescription.fileList):null

        value.image_url=  dataMainImage +","+ dataDescribeImages.map(imageUrl => { return imageUrl})
        valueData.name= value.name
        valueData.description= value.description
        valueData.brand=value.brand
        valueData.type = value.type
        valueData.owner_id=user.id
        valueData.amount=value.quantity
        valueData.image_url = value.image_url

        uploadPostData(valueData)
    }

    const UploadDataPost = (value) =>{
        const {data,success} = uploadPostData(value)
        if (success){
            console.log("okok",data)
        }
    }

    const changeNameMainImage = (value)=>{
        value.mainImage.fileList[0].originFileObj.nameImage = `userId_${user.id}_postId_${newPostId}_main`
        return value.mainImage.fileList
    }

    const changeNameDescriptionImage =(value)=>{
        return  value.imageDescription.fileList.map((image,index)=>{
            image.originFileObj.nameImage = `userId_${user.id}_postId_${newPostId}_${index+1}`
            return image
        })
    }

    return (
        <Modal
            visible={props.visible}
            title={"Bài đăng mới"}
            onCancel={() => props.setVisible(false)}
            footer={null}
            width={"800px"}
        >
            <Form
                labelCol={{
                    span: 5,
                }}
                wrapperCol={{
                    span: 17,
                }}
                onFinish={handleSubmit}

            >
                <Form.Item
                    name={'name'}
                    label={"Ten san pham"} rules={[
                    {
                        required: true,
                    },
                ]}>
                    <Input/>
                </Form.Item>
                <Form.Item
                    name={'brand'}
                    label={"Thuong hieu"} rules={[
                    {
                        required: true,
                    },
                ]}>
                    <Input/>
                </Form.Item>
                <Form.Item
                    name={'type'}
                    label={"The loai san pham"} rules={[
                    {
                        required: true,
                    },
                ]}>
                    <Input/>
                </Form.Item>
                <Form.Item
                    name={'quantity'}
                    label={"So luong"} rules={[
                    {
                        required: true,
                    },
                ]}>
                    <Input/>
                </Form.Item>
                <Form.Item
                    name={'description'}
                    label={"Mo ta san pham"}>
                    <Input.TextArea/>
                </Form.Item>
                <Form.Item name={'mainImage'} label={"Anh chinh cua san pham:"} rules={[
                    {
                        required: true,
                    },
                ]}>
                    <Upload onPreview={(value) => {
                        setImagePreview(value.preview)
                        setModalPreviewVisible(true)
                    }} onChange={async (value) => {
                        value.file.preview = await getBase64(value.file.originFileObj)
                        setMainImage(value.fileList)
                    }}
                            listType="picture-card">
                        {mainImage.length < 1 ? uploadButton : null}
                    </Upload>
                </Form.Item>
                <Form.Item name={'imageDescription'} label={"Anh mo ta them(toi da 3):"}>
                    <Upload onPreview={(value) => {
                        setImagePreview(value.preview)
                        setModalPreviewVisible(true)
                    }} onChange={async (value) => {
                        value.file.preview = await getBase64(value.file.originFileObj)
                        setListImageDescription(value.fileList)
                    }}
                            listType="picture-card">
                        {listImageDescription.length < 3 ? uploadButton : null}
                    </Upload>
                </Form.Item>
                <Form.Item wrapperCol={{
                    offset: 20,
                    span: 1,
                }}>
                <Button type="primary" style={{right:"0px"}} htmlType="submit" >
                    Submit
                </Button>
                </Form.Item>
            </Form>
            <Modal visible={modalPreviewVisible}
                   footer={null}
                   onCancel={() => setModalPreviewVisible(false)}
                   width={"600px"}
            >
                <img style={{width: "100%"}} alt={"can't load img"} src={imagePreview}/>
            </Modal>
        </Modal>
    )
}
export default UploadPost;