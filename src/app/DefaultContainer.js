import React, {useContext, useEffect} from 'react'
import AppContext from "../AppContext";
import {renderRoutes} from "react-router-config";
import _ from 'lodash';
const DefaultContainer=({route})=>{
    const {user} = useContext(AppContext)
    useEffect(()=>{
        if(_.isEmpty(user)) window.location.href="/login"
    })
    return(
        <div>
            {console.log("okokchay")}
            {renderRoutes(route.routes)}
        </div>
    )
}
export default DefaultContainer