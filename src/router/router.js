import App from "../App";
import paths from "./paths";
import loginContainer from "../app/login/LoginContainer";
import DefaultContainer from "../app/DefaultContainer";
import UserPageContainer from "../app/user/UserPageContainer";
import registerContainer from "../app/register/RegisterContainer";
import UserListContainer from "../app/userList/UserListContainer";
import PostDetailContainer from "../app/postDetail/PostDetailContainer";
import HomePageContainer from "../app/homepage/HomePageContainer";
import ProductContainer from "../app/products/ProductContainer";

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
                        path: paths.HomePage,
                        exact: true,
                        //nhat viet component nay
                        component: HomePageContainer
                    },
                    {
                        path: paths.Product,
                        exact: true,
                        component: ProductContainer
                    },
                    {
                        path: paths.UserPage(),
                        exact:true,
                        component:UserPageContainer
                    },
                    {
                        path: paths.PostDetail(),
                        exact: true,
                        component:PostDetailContainer
                    },
                    {
                        path: paths.UserList,
                        exact:true,
                        component:UserListContainer
                    },
                ]
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