
const basePath= '/u'

const  paths={
    HomePage:`${basePath}/`,
    UserPage:`${basePath}/user_page`,
    UserList:`${basePath}/user_list`,
    Login: '/login',
    Register: '/register',
    PostDetail: (postId) => `${basePath}/post_detail/${postId || ":postId"}`
}
export default paths