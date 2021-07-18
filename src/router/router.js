import App from "../App";
import paths from "./paths";
import loginContainer from "../app/login/LoginContainer";
import registerContainer from "../app/register/RegisterContainer";

const router=[
    {
        component:App,
        routes:[
            {
                path: paths.Login,
                exact:true,
                component:loginContainer
            },
            {
                path: paths.Register,
                exact:true,
                component:registerContainer
            }
        ]
    }
]
export default router