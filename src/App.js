import './App.css';
import React, {useState} from "react";
import AppContext from "./AppContext";
// import { useHistory} from "react-router-dom"
import {renderRoutes} from "react-router-config";

function App({route}) {
  const [user,setUser] = useState({})
  const [loading,setLoading]= useState(false)

  return (
      <AppContext.Provider value={{
        user,
        setUser,
        loading,
        setLoading
      }}>
          <div className="App">
              {console.log("okok123",user)}
              {renderRoutes(route.routes)}
          </div>
      </AppContext.Provider>
  )
}

export default App;
