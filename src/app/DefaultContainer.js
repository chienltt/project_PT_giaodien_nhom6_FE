import React, {useContext, useEffect} from 'react'
import AppContext from "../AppContext";
import {renderRoutes} from "react-router-config";
import _ from 'lodash';
import "./DefaultContainer.scss"
import {UserOutlined } from '@ant-design/icons';
import paths from "../router/paths";
const DefaultContainer=({route})=>{
    const {user} = useContext(AppContext)
    useEffect(()=>{
        if(_.isEmpty(user)) window.location.href="/login"
    })
    return(
        <div className={"bg-color"} >
            <nav className="navbar navbar-expand-sm navbar-light">
                <ul className="navbar-nav">
                    <li className="navbar-brand">
                        <img className={"img-logo"}/>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home page</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Products</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">User</a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className={"personal-page nav-item"}>
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                           aria-haspopup="true"><UserOutlined/></a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href= {`${paths.UserPage}`} >
                                personal page</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">logout</a>
                        </div>
                    </li>
                </ul>
            </nav>
            <div className={"content"}>
            {renderRoutes(route.routes)}
            </div>
        </div>
    )
}
export default DefaultContainer