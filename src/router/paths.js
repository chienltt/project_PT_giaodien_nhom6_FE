
const basePath= '/u'

const  paths={
    HomePage:`${basePath}/`,
    UserPage:(userId)=>`${basePath}/user_page/${userId||":userId"}`,
    UserList:`${basePath}/user_list`,
    Login: '/login',
    Register: '/register',
    PostDetail: (postId) => `${basePath}/post_detail/${postId || ":postId"}`
}
export default paths