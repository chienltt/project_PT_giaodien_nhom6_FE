import React from 'react'
import "./RegisterContainer.scss"
import RegisterForm from "./RegisterForm";

const registerContainer = (props) => {
    return (
        <div className={"container-fluid register-container"}>
            <div className={"row h-100"}>
                <div className={"col-1 col-lg-3 col-xl-2 h-100"} ></div>
                <div className={"col-10 col-lg-6 col-xl-4 h-100"} >
                    <RegisterForm/>
                </div>
                <div className={"col-1 col-lg-3 col-xl-6 h-100"} ></div>
            </div>
        </div>
    )
}
export default registerContainer;