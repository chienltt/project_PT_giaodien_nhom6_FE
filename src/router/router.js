import App from "../App";
import paths from "./paths";
import loginContainer from "../app/login/LoginContainer";

const router=[
    {
        component:App,
        routes:[
            {
                path: paths.Login,
                exact:true,
                component:loginContainer
            }
        ]
    }
]
export default router