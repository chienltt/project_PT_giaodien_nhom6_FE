import React, {useContext, useEffect} from 'react'
import AppContext from "../AppContext";
import {renderRoutes} from "react-router-config";
import _ from 'lodash';
import "./DefaultContainer.scss"
import {SearchOutlined, UserOutlined} from '@ant-design/icons';
import paths from "../router/paths";
import Footer from "./homepage/Footer";
import {Input} from "antd";
import {removeLocalStorage} from "../services/storage/LocalStorage";
const DefaultContainer=({route})=>{
    const {user} = useContext(AppContext)
    useEffect(()=>{
        if(_.isEmpty(user)) window.location.href="/login"
    })

    const onClick = () => {
        if (window.location.pathname === paths.HomePage) {
            window.location.href = paths.Product;
        }
    }

    return(
    <div>
        <div className={"bg-color"} >
            <div className="navbar-firstline navbar-expand-sm navbar-light ">
                <div className="navbar-logo">
                    <div className={"img-logo"}/>
                </div>

                <div className="navbar-search" >
                    <div className={"search-form"}>
                        <Input className={"post-search-form"}
                               placeholder={"Search items you need here "}
                               onClick={() => onClick()}
                        />
                        <SearchOutlined className={"search-icon"}/>
                    </div>
                </div>

                <div className={window.location.pathname === paths.HomePage?"nav-item active":"nav-item "}>
                    <a className="nav-link btn btn-one" id="homepage" href={paths.HomePage}><span className="spot"></span>Home page</a>
                </div>
                <div className="nav-item">
                    <a className="nav-link btn btn-one" href={paths.Product}>Products</a>
                </div>
                <div className={window.location.pathname === paths.UserList?"nav-item active":"nav-item "}>
                    <a className="nav-link btn btn-one" href={paths.UserList}>User</a>
                </div>

                <div className="navbar-nav ml-auto">
                    <div className={"personal-page nav-item"}>
                        <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown"
                             aria-haspopup="true"><UserOutlined/></div>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href= {paths.UserPage(user.id)} >
                                personal page</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/login" onClick={()=>{
                                removeLocalStorage('user')
                            }}>logout</a>
                        </div>
                    </div>
                </div>

            </div>

            <div className={"content"}>
                {renderRoutes(route.routes)}
            </div>
            <div id={"prevent-warning"}></div>
        </div>
        <Footer/>

    </div>
    )
}
export default DefaultContainer