import './App.css';
import React, {useState} from "react";
// import { useHistory} from "react-router-dom"
import {renderRoutes} from "react-router-config";

function App({route}) {
  const [user,setUser] = useState({})
  const [loading,setLoading]= useState(false)

  const AppContext=React.createContext({})

  return (
      <AppContext.Provider value={{
        user,
        setUser,
        loading,
        setLoading
      }}>
          <div className="App">
              {renderRoutes(route.routes)}
          </div>
      </AppContext.Provider>
  )
}

export default App;
