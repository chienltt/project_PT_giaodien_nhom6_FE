import React from 'react'
import "./LoginContainer.scss"
import LoginForm from "./LoginForm";

const loginContainer = (props) => {
    return (
        <div className={"container-fluid login-container"}>
            <div className={"row h-100"}>
            <div className={"col-1 col-lg-3 col-xl-2 h-100"} ></div>
            <div className={"col-10 col-lg-6 col-xl-4 h-100"} >
                <LoginForm/>
            </div>
            <div className={"col-1 col-lg-3 col-xl-6 h-100"} ></div>
            </div>
        </div>
    )
}
export default loginContainer;