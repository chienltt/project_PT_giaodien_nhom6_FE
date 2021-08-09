import React, {useContext, useEffect} from 'react'
import AppContext from "../AppContext";
import {renderRoutes} from "react-router-config";
import _ from 'lodash';
import "./DefaultContainer.scss"
import { UserOutlined} from '@ant-design/icons';
import paths from "../router/paths";
import Footer from "./homepage/Footer";
import {removeLocalStorage} from "../services/storage/LocalStorage";
import Search from "antd/es/input/Search";
const DefaultContainer=({route})=>{
    const {user} = useContext(AppContext)
    useEffect(()=>{
        if(_.isEmpty(user)) window.location.href="/login"
    })

    const onSearch = (key) => {
        localStorage.setItem('keySearch', `${key}`)
        window.location.href = paths.Product;
    }


    return(

    <div>
        <div className={"bg-color"} >
            <div className="navbar-firstline navbar-expand-sm navbar-light ">
                <div className="navbar-logo">
                    <div className={"img-logo"}/>
                </div>

                <div className="navbar-search" >
                    <div className={"search-form"}>
                        <Search className={"post-search-form"}
                                placeholder={"Tìm sản phẩm bạn cần ở đây"}
                                onSearch={(key) => onSearch(key)}
                        />
                    </div>
                </div>

                <div className={window.location.pathname === paths.HomePage?"nav-item active":"nav-item "}>
                    <a className="nav-link btn btn-one" id="homepage" href={paths.HomePage}><span className="spot"></span>Trang chủ</a>
                </div>
                <div className="nav-item">
                    <a className="nav-link btn btn-one" href={paths.Product}>Sản phẩm</a>
                </div>
                <div className={window.location.pathname === paths.UserList?"nav-item active":"nav-item "}>
                    <a className="nav-link btn btn-one" href={paths.UserList}>Người dùng</a>
                </div>

                <div className="navbar-nav ml-auto">
                    <div className={"personal-page nav-item"}>
                        <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown"
                             aria-haspopup="true"><UserOutlined/></div>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href= {paths.UserPage(user.id)} >
                                Trang cá nhân</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" onClick={()=>{removeLocalStorage("user")}} href="/login">Đăng xuất</a>
                        </div>
                    </div>
                </div>

            </div>

            <div className={"content"}>
                {renderRoutes(route.routes)}
            </div>
            <div id={"prevent-warning"}></div>
        </div>

        <div class="bg2">
            <div className="bg2-title col-xl-12 col-sm 12"> <strong>FAQs</strong> </div>
            <div className="faq col-xl-9 col-sm 12">
                <div className="faq-ques grow ">
                    <h5>🔸Tại sao tôi nên dùng Old items exchange ?</h5>
                    <div className="faq-ans" style={{display:"block"}}>
                        <strong>↪️Old items exchange là một trang web hoàn toàn miễn phí giúp bạn tìm được những thứ mà mình muốn😍.
                            Đó là công cụ để bạn khai thác giá trị từ những món đồ cũ của mình,đồng thời giúp bạn tiết kiệm tiền bạc💵,
                            giảm thiểu lượng khí thải🌫 và kết nối với mọi người👨‍👨‍👧‍👦.
                        </strong>

                    </div>
                </div>
                <div className="faq-ques grow">
                    <h5>🔸Tôi có thể đăng tải và trao đổi những loại mặt hàng nào ?</h5>
                    <div className="faq-ans" style={{display:"block"}}>
                        <strong>
                            ↪️Bạn có thể đăng tải rất nhiều thứ từ quần áo👚👕️👖, giầy dép, trang sức👟👠, máy tính💻, điện thoại📱, các thiết bị điện tử🖨🎮📸, đồ nội thất🏚🏘,
                            đồ chơi️🔫, sách vở📖📙, dụng cụ thể thao🎾️🏓, đồ sưu tầm như tem, thẻ,.... Có rất nhiều thứ đang chờ bạn trao đổi !
                        </strong>

                    </div>
                </div>
                <div className="faq-ques grow">
                    <h5>🔸Quá trình trao đổi diễn ra như thế nào ?</h5>
                    <div className="faq-ans" style={{display:"block"}}>
                        <strong>
                            ↪️Làm theo các bước sau :
                                <p>Bước 1. Đăng tải sản phẩm bằng cách chụp vài bức ảnh và viết mô <tả className=""></tả></p>
                                <p>Bước 2. Chọn sản phẩm bạn muốn trao đổi.</p>
                                <p>Bước 3. Đợi xác nhận từ người đăng tải và liên hệ để thương lượng hợp lý</p>

                        </strong>

                    </div>
                </div>
                <div className="faq-ques grow2">
                    <h5>🔸Câu hỏi khác</h5>
                    <div className="faq-ans" style={{display:"block"}}>
                        <strong>
                            ↪️Hãy liên hệ với chúng tôi để nhận được phản hồi sớm nhất nhé !

                        </strong>

                    </div>
                </div>

            </div>
        </div>
        <Footer/>

    </div>
    )

}
export default DefaultContainer