import App from "../App";
import paths from "./paths";
import loginContainer from "../app/login/LoginContainer";
import DefaultContainer from "../app/DefaultContainer";
import UserPageContainer from "../app/user/UserPageContainer";

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
                path: paths.HomePage,
                component:DefaultContainer,
                routes:[
                    {
                        path: paths.UserPage,
                        exact:true,
                        component:UserPageContainer
                    }
                ]
            }
        ]
    }
]
export default router