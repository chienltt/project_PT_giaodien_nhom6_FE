import React from 'react'
import "./HomePageContainer.css"

const HomePageContainer = (props)=>{
    return(
        <div className="hm-pg ">

            <div class="row1">
                <div className="hm-pg-text2 col-xl-7 col-sm 12  ">
                    <p>Giảm thiểu mua bán. <strong className="grow">Bắt đầu trao đổi</strong>.</p>
                </div>
            </div>

            <div class="row2">
                <div className="hm-pg-text1 col-xl-6 col-sm 12">
                    <div className="row2-text">
                        <p>
                            Tại sao chúng ta nên trao đổi đồ cũ ?
                        </p>
                    </div>

                    <div className="row2-iconpack ">

                        <div className="col1 grow ">
                            <div className="icon1 "></div>
                            <p>Tiết kiệm
                                <p>chi phí</p>
                            </p>
                            <div className="tooltiptext tooltiptext1">Một món cũ thường có giá rẻ hơn từ 25%- 50% so với đồ mới.
                                Mỗi người lao động ở Việt Nam có thu nhập khoảng 6,6 triệu đồng/tháng.
                                Thế nên việc chọn mua đồ thanh lý cũ là một lựa chọn tối ưu. Nếu bạn vứt bỏ đồ cũ
                                sẽ khiến cho những người cần dùng không thể mua được với giá rẻ.
                            </div>
                        </div>
                        <div className="col2 grow">
                            <div className="icon2 "></div>
                            <p>Bảo vệ
                                <p>môi trường</p>
                            </p>
                            <div className="tooltiptext tooltiptext2">Mỗi khi các mặt hàng mới được sản xuất thì việc khai thác
                                lại càng được đẩy mạnh dẫn đến sự ô nhiễm cả về nước và không khí.
                                Việc sử dụng các mặt hàng cũ có thể giúp bảo vệ môi trường thông qua việc giảm
                                số lượng rác thải ra môi trường qua đó giảm thiểu hiệu ứng nhà kính!</div>

                        </div>
                        <div className="col3 grow">
                            <div className="icon3"></div>
                            <p>Kết bạn
                                <p>Trao đổi</p>
                            </p>
                            <div className="tooltiptext tooltiptext3">Chúng tôi tạo ra hệ thông trao đổi giữa người dùng và cung cấp
                                đầy đủ thông tin liên hệ.Ngoài việc trao đổi đồ cũ chúng ta có thể có thêm những người bạn mới.
                                </div>
                        </div>




                    </div>

                </div>

            </div>
        </div>
    )
}
export default HomePageContainer