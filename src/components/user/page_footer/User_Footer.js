import React from 'react'

function User_Footer() {
  return (
    <>
    <footer id="footer-desktop" style={{"backgroundColor":"white"}}>
            {/*<div className="footer-common-search-keywords">
                 <!-- <div className="container keyword-seo">
                    <a target="_blank" href="https://www.topcv.vn/cv-la-gi">cv là gì</a>
                    <a target="_blank" href="https://www.topcv.vn/mau-cv">Mẫu CV</a>
                    <a target="_blank" href="https://www.topcv.vn/mau-cv">mẫu cv tiếng việt</a>
                    <a target="_blank" href="https://www.topcv.vn/tai-mau-so-yeu-ly-lich-chuan-mien-phi">Sơ yếu lý
                        lịch</a>
                    <a target="_blank" href="https://www.topcv.vn/tong-hop-cv-tham-khao-cac-nhom-nganh">CV tham khảo</a>
                    <a target="_blank" href="https://www.topcv.vn/tong-hop-cv-tham-khao-cho-lap-trinh-vien">tổng hợp CV
                        tham khảo cho lập trình viên</a>
                    <a target="_blank" href="https://www.topcv.vn/giay-to-thu-tuc-ho-so-xin-viec">giấy tờ thủ tục hồ sơ
                        xin việc</a>
                    <a target="_blank" href="https://www.topcv.vn/cach-viet-email-xin-viec-bang-tieng-anh">Email xin
                        việc bằng tiếng anh</a>
                    <a target="_blank" href="https://www.topcv.vn/mau-don-xin-viec">Mẫu đơn xin việc</a>
                    <a target="_blank" href="https://www.topcv.vn/mau-don-xin-nghi-viec">mẫu đơn xin nghỉ việc</a>
                    <a target="_blank" href="https://www.topcv.vn/mau-don-xin-nghi-phep">Cách viết đơn xin nghỉ phép</a>
                    <a target="_blank" href="https://www.topcv.vn/viet-cv-the-nao-cho-chuan">Cách viết CV xin việc</a>
                    <a target="_blank" href="https://www.topcv.vn/viet-cv-nganh-kinh-doanh-ban-hang-nhu-the-nao">cách
                        viết CV Ngành Kinh doanh/Bán hàng</a>
                    <a target="_blank" href="https://www.topcv.vn/cach-viet-cv-nganh-ke-toan-kiem-toan">cách viết CV
                        Ngành Kế Toán/Kiểm Toán</a>
                    <a target="_blank" href="https://www.topcv.vn/cach-viet-cv-nganh-nhan-su">cách viết CV Ngành Nhân
                        Sự</a>
                    <a target="_blank" href="https://www.topcv.vn/huong-dan-viet-cv-xin-hoc-bong">cách viết CV xin Học
                        bổng</a>
                    <a target="_blank" href="https://www.topcv.vn/huong-dan-viet-cv-xin-viec-tieng-anh">cách viết CV
                        Tiếng Anh</a>
                    <a target="_blank" href="https://www.topcv.vn/huong-dan-viet-cv-tieng-nhat">cách viết CV Tiếng
                        Nhật</a>
                    <a target="_blank" href="https://www.topcv.vn/huong-dan-viet-cv-tieng-trung">cách viết CV Tiếng
                        Trung</a>
                    <a target="_blank" href="https://www.topcv.vn/huong-dan-viet-cv-tieng-han">cách viết CV Tiếng
                        Hàn</a>
                    <a target="_blank" href="https://www.topcv.vn/cam-nang-nam-nhat-danh-cho-sinh-vien">cẩm nang năm
                        nhất cho sinh viên</a>
                    <a target="_blank" href="https://www.topcv.vn/mau-don-xin-thuc-tap-chuan-cho-sinh-vien">Mẫu đơn xin
                        thực tập</a>
                    <a target="_blank" href="https://www.topcv.vn/huong-dan-sua-loi-go-tieng-viet-unikey">Hướng dẫn sửa
                        lỗi gõ tiếng Việt</a>
                    <a target="_blank" href="https://www.topcv.vn/nganh-du-lich-lam-nhung-cong-viec-gi">Ngành du lịch
                        làm việc gì</a>
                    <a target="_blank" href="https://www.topcv.vn/cam-nang-xin-viec-nganh-nhan-su">Cẩm nang xin việc
                        ngành nhân sự</a>
                    <a target="_blank" href="https://www.topcv.vn/xin-viec-nganh-cong-nghe-thong-tin">Xin việc ngành
                        công nghệ thông tin</a>
                    <a target="_blank" href="https://www.topcv.vn/cam-nang-xin-viec-nganh-marketing">Cẩm nang xin việc
                        ngành marketing</a>
                    <a target="_blank" href="https://www.topcv.vn/xin-viec-nganh-ke-toan-kiem-toan">Cẩm nang xin việc
                        ngành kế toán kiểm toán </a>
                    <a target="_blank" href="https://www.topcv.vn/xin-viec-nganh-cong-nghe-thuc-pham">Cẩm nang xin việc
                        ngành công nghệ thực phẩm</a>
                    <a target="_blank" href="https://www.topcv.vn/cam-nang-xin-viec-nganh-tai-chinh-ngan-hang">Cẩm nang
                        xin việc ngành tài chính ngân hàng</a>
                    <a target="_blank" href="https://www.topcv.vn/xin-viec-nganh-luat">Cẩm nang xin việc ngành luật</a>
                    <a target="_blank" href="https://www.topcv.vn/xin-viec-nganh-xay-dung-dia-oc">Cẩm nang xin việc
                        ngành xây dựng - địa ốc</a>
                    <a target="_blank" href="https://www.topcv.vn/trac-nghiem-tinh-cach-mbti">Trắc nghiệm tính cách
                        MBTI</a>
                    <a target="_blank" href="https://www.topcv.vn/viec-lam-remote">Việc làm online tại nhà</a>
                    <a target="_blank" href="https://www.topcv.vn/tim-viec-lam-moi-nhat-tai-ho-chi-minh-l2">Tìm việc làm
                        tại TP. HCM</a>
                    <a target="_blank" href="https://www.topcv.vn/mau-cover-letter-thu-xin-viec">Cách viết cover letter
                        xin việc</a>
                    <a target="_blank" href="https://www.topcv.vn/huong-dan-viet-cv-xin-viec-tieng-anh">CV xin việc bằng
                        tiếng Anh</a>
                    <a target="_blank" href="https://www.topcv.vn/cv-cho-sinh-vien-chua-tot-nghiep">CV cho sinh viên
                        chưa tốt nghiệp</a>
                    <a target="_blank" href="https://www.topcv.vn/tim-viec-lam-hanh-chinh-nhan-su">Việc làm hành chính
                        nhân sự</a>
                    <a target="_blank" href="https://www.topcv.vn/huong-dan-viet-cv-tieng-trung">Thư xin việc bằng tiếng
                        Anh</a>
                    <a target="_blank" href="https://www.topcv.vn/cong-viec-nganh-logistic">Ngành logistic là gì</a>
                    <a target="_blank" href="https://www.topcv.vn/tim-viec-lam-moi-nhat-tai-hai-phong-l9">Việc làm Hải
                        Phòng</a>
                    <a target="_blank" href="https://www.topcv.vn/tim-viec-lam-moi-nhat-tai-binh-dinh-l16">Việc làm Bình
                        Định</a>
                    <a target="_blank" href="https://www.topcv.vn/tim-viec-lam-content-marketing">Tuyển dụng Content
                        Marketing</a>
                    <a target="_blank" href="https://www.topcv.vn/tim-viec-lam-lap-trinh-vien-php">Tuyển lập trình viên
                        PHP</a>
                    <a target="_blank" href="https://www.topcv.vn/tim-viec-lam-lap-trinh-vien-java">Tuyển lập trình viên
                        Java</a>
                    <a target="_blank" href="https://www.topcv.vn/tim-viec-lam-lap-trinh-vien-net">Tuyển lập trình viên
                        .Net</a>
                    <a target="_blank" href="https://www.topcv.vn/tim-viec-lam-nhan-vien-kinh-doanh">Tuyển dụng nhân
                        viên kinh doanh</a>
                    <a target="_blank" href="https://www.topcv.vn/tim-viec-lam-nhan-vien-marketing">Tuyển dụng nhân viên
                        marketing</a>
                    <a target="_blank" href="https://www.topcv.vn/tim-viec-lam-nhan-vien-ke-toan">Tìm việc kế toán</a>
                </div>
            </div> --> */}
            <div className="box-menu-footer">
               {/* <!-- <div className="container">
                    <div className="col-md-3">
                        <ul>
                            <li className="box-menu-item">
                                <div className="title">
                                    Về TopCV
                                </div>
                                <div className="box-menu-child">
                                    <ul>
                                        <li className="box-menu-child-item">
                                            <a target="_blank" href="https://www.topcv.vn/gioi-thieu">Giới thiệu</a>
                                        </li>
                                        <li className="box-menu-child-item">
                                            <a target="_blank" href="https://www.topcv.vn/gioi-thieu#bao-chi">Góc báo
                                                chí</a>
                                        </li>
                                        <li className="box-menu-child-item">
                                            <a target="_blank"
                                                href="https://www.topcv.vn/cong-ty/cong-ty-co-phan-topcv-viet-nam/105.html">Tuyển
                                                dụng</a>
                                        </li>
                                        <li className="box-menu-child-item">
                                            <a target="_blank" href="https://www.topcv.vn/gioi-thieu#lien-he">Liên
                                                hệ</a>
                                        </li>
                                        <li className="box-menu-child-item">
                                            <a target="_blank" href="https://www.topcv.vn/faqs">Hỏi đáp</a>
                                        </li>
                                        <li className="box-menu-child-item">
                                            <a target="_blank" href="https://www.topcv.vn/privacy-policy">Chính sách bảo
                                                mật</a>
                                        </li>
                                        <li className="box-menu-child-item">
                                            <a target="_blank" href="https://www.topcv.vn/terms-of-service">Điều khoản
                                                dịch vụ</a>
                                        </li>
                                        <li className="box-menu-child-item">
                                            <a href="https://static.topcv.vn/manual/Quy_che_san_TMDT_TopCV.pdf"
                                                target="_blank">Quy chế hoạt động</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="box-menu-item">
                                <div className="title">
                                    Cộng đồng TopCV
                                </div>
                                <div className="box-menu-child">
                                    <ul>
                                        <li className="box-menu-child-item">
                                            <a href="https://www.facebook.com/topcv.vn" target="_blank">Facebook
                                                Fanpage</a>
                                        </li>
                                        <li className="box-menu-child-item">
                                            <a href="https://www.youtube.com/c/TopCVpro" target="_blank">Youtube
                                                Official Channel</a>
                                        </li>
                                        <li className="box-menu-child-item">
                                            <a href="https://www.linkedin.com/company/topcv-vietnam"
                                                target="_blank">Linkedin</a>
                                        </li>
                                        <li className="box-menu-child-item">
                                            <a href="https://www.tiktok.com/@topcv" target="_blank">Tiktok Official
                                                Channel</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                 
                    <div className="col-md-3">
                        <ul>
                            <li className="box-menu-item">
                                <div className="title">
                                    Đối tác
                                </div>
                                <div className="box-menu-child">
                                    <ul>
                                        <li className="box-menu-child-item">
                                            <a href="https://www.testcenter.vn/" target="_blank">TestCenter</a>
                                        </li>
                                        <li className="box-menu-child-item">
                                            <a href="https://tophr.vn" target="_blank">TopHR</a>
                                        </li>
                                        <li className="box-menu-child-item">
                                            <a href="https://www.viecngay.vn/" target="_blank">ViecNgay</a>
                                        </li>
                                        <li className="box-menu-child-item">
                                            <a href="https://happytime.vn/" target="_blank">Happy Time</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul>
                            <li className="box-menu-item">
                                <div className="title">
                                    Hồ sơ và CV
                                </div>
                                <div className="box-menu-child">
                                    <ul>
                                        <li className="box-menu-child-item">
                                            <a href="https://www.topcv.vn/quan-ly-cv" target="_blank">Quản lý CV của
                                                bạn</a>
                                        </li>
                                        <li className="box-menu-child-item">
                                            <a href="https://www.topcv.vn/profile" target="_blank">TopCV Profile</a>
                                        </li>
                                        <li className="box-menu-child-item">
                                            <a target="_blank"
                                                href="https://www.topcv.vn/viet-cv-the-nao-cho-chuan">Hướng dẫn viết
                                                CV</a>
                                        </li>
                                        <li className="box-menu-child-item">
                                            <a href="https://reviewcv.topcv.vn/" target="_blank">Review CV</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="box-menu-item">
                                <div className="title">
                                    Khám phá
                                </div>
                                <div className="box-menu-child">
                                    <ul>
                                        <li className="box-menu-child-item">
                                            <a href="https://www.topcv.vn/app" target="_blank">Ứng dụng di động
                                                TopCV</a>
                                        </li>
                                        <li className="box-menu-child-item">
                                            <a href="https://www.topcv.vn/tinh-luong-gross-net" target="_blank">Tính
                                                lương Gross - Net</a>
                                        </li>
                                        <li className="box-menu-child-item">
                                            <a href="https://www.topcv.vn/tinh-lai-kep" target="_blank">Tính lãi suất
                                                kép</a>
                                        </li>
                                        <li className="box-menu-child-item">
                                            <a href="https://www.topcv.vn/lap-ke-hoach-tiet-kiem" target="_blank">Lập kế
                                                hoạch tiết kiệm</a>
                                        </li>
                                        <li className="box-menu-child-item">
                                            <a href="https://www.topcv.vn/cong-cu-tinh-muc-huong-bao-hiem-that-nghiep"
                                                target="_blank">Tính bảo hiểm thất nghiệp</a>
                                        </li>
                                        <li className="box-menu-child-item">
                                            <a href="https://www.topcv.vn/tinh-bao-hiem-xa-hoi-mot-lan"
                                                target="_blank">Tính bảo hiểm xã hội một lần</a>
                                        </li>
                                        <li className="box-menu-child-item">
                                            <a href="https://www.topcv.vn/trac-nghiem-tinh-cach-mbti"
                                                target="_blank">Trắc nghiệm MBTI</a>
                                        </li>
                                        <li className="box-menu-child-item">
                                            <a href="https://www.topcv.vn/trac-nghiem-da-tri-thong-minh-multiple-intelligences-test"
                                                target="_blank">Trắc nghiệm MI</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul>
                            <li className="box-menu-item">
                                <div className="title">
                                    Xây dựng sự nghiệp
                                </div>
                                <div className="box-menu-child">
                                    <ul>
                                        <li className="box-menu-child-item">
                                            <a href="https://www.topcv.vn/viec-lam-tot-nhat" target="_blank">Việc làm
                                                tốt nhất</a>
                                        </li>
                                        <li className="box-menu-child-item">
                                            <a href="https://www.topcv.vn/viec-lam-luong-cao" target="_blank">Việc làm
                                                lương cao</a>
                                        </li>
                                        <li className="box-menu-child-item">
                                            <a href="https://www.topcv.vn/viec-lam-quan-ly" target="_blank">Việc làm
                                                quản lý </a>
                                        </li>
                                        <li className="box-menu-child-item">
                                            <a href="https://www.topcv.vn/viec-lam-remote" target="_blank">Việc làm từ
                                                xa (remote)</a>
                                        </li>
                                        <li className="box-menu-child-item">
                                            <a href="https://www.topcv.vn/tim-viec-lam-ban-thoi-gian-t3"
                                                target="_blank">Việc làm bán thời gian</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="box-menu-item">
                                <div className="title">
                                    Phát triển bản thân
                                </div>
                                <div className="box-menu-child">
                                    <ul>
                                        <li className="box-menu-child-item">
                                            <a href="https://contest.topcv.vn/" target="_blank">TopCV Contest</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>  --> */}
                <div className="container">
                    <div className="footer-bottom-mobile text-dark-gray">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    © 2014 - 2023 <b>Công ty cổ phần  Việc làm giáo dục Việt Nam</b> <br/>
                                    <strong>Trụ sở :</strong> Đà Nẵng<br/>
                                    <strong>Chi nhánh TP HCM:</strong> ĐÀ NẴNG
                                </div>
                                <div className="col-md-4 pr-0">
                                    <div className="box-image">
                                       
                                        <a href="https://www.topcv.vn">
                                            {/* <img src="https://vieclamgiaoduc.vn/wp-content/uploads/2023/02/Untitled-1.png"
                                                className="img-logo-footer" alt=""
                                                title=""/> */}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</footer> 
   
    
    
    
    
    
    </>
  )
}

export default User_Footer