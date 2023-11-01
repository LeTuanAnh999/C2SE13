import React,{useState,useEffect} from 'react'
import User_Footer from '../page_footer/User_Footer';

import User_header from '../page_header/User_header';
import Page_bell from '../page_thongbao/Page_bell';

import { get_all_job } from '../../api/Jobapi/Jobapi';
const slugVietnamese = require('slug-vietnamese');
function Home_user() {
    
    
    const [selectedCity, setSelectedCity] = useState(0);

    const handleCityClick = (cityId) => {
        setSelectedCity(cityId);
        // Thực hiện các hành động cần thiết với cityId (ví dụ: gửi lên máy chủ)
      
    };
    const [firstkey ,setFirstkey] = useState('');
    function handleChange(event) {
        console.log(event.target.value);
      }
    //   hiển thị tìm kiếm nâng cao
    function hanldeclickinput_form(event){
      document.getElementsByClassName("search-advanced")[0].style.display = 'unset';
        
    }
    // ẩn tìm kiếm nâng cao
    function handledisblaesearchadvand(event){

        document.getElementsByClassName("search-advanced")[0].style.display = 'none';
    }
    // data render

  
    function formatNumber(number) {
        if (number >= 1000000) {
          return (number / 1000000).toFixed(2) + ' triệu';
        } else if (number >= 1000) {
          return (number / 1000).toFixed(2) + ' nghìn';
        } else {
          return number.toString();
        }
      }
    const [data,setdata] =useState([]);
    const [page,setpage] = useState(1);
    
    const  getdata = async()=>{
        const result = await get_all_job(page);
         setdata(result.data.data)
         console.log(result     )
    }
    console.log(data)
    useEffect(() => {
     
      getdata()
    }, []);


    
  return (
    <>
    <div id="page-welcome">
      
      <User_header/>
    <section id="box-search-job">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                            <h1>Tìm việc làm  trong ngành giáo dục.</h1>
                            <div className="form-search">
                                <div id="frm-search-job">
                                    <div className="box-search">
                                        <div className="col-input">
                                            <span className="input-icon"><i className="icons8-zoom"></i></span>
                                            <input className="form-control input-search ui-autocomplete-input border-hover"
                                                 placeholder="Tên công việc, vị trí bạn muốn ứng tuyển ..."
                                                // eslint-disable-next-line react/jsx-no-duplicate-props
                                                id="keyword" autoComplete="off"   value={firstkey}   onChange={handleChange} 

                                                onClick={hanldeclickinput_form}
                                                
                                                />
                                            <div className="search-advanced">
                                                <div className="d-flex mt-2">
                                                    <p className="title">Tìm kiếm nâng cao</p>
                                                    <button   onClick={handledisblaesearchadvand} type="button" className="less-content"><i
                                                            className="fa-light fa-arrow-up-from-dotted-line d-none"></i>
                                                        Thu gọn</button>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="form-group">
                                                        <select name="category" id="category"
                                                            className="form-control select2">
                                                            <option value="">Ngành nghề</option>

                                                            <option value="10017">&nbsp;Giáo dục / Đào tạo</option>

                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <select name="company-field-advanced"
                                                            id="company-field-advanced-home" className="form-control select2">
                                                            <option value="">Lĩnh vực công ty</option>

                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <select name="city" id="cityhome" className="form-control select2">
                                                            <option value="">Địa điểm</option>
                                                            <option value="1">&nbsp;Hà Nội</option>
                                                            <option value="2">&nbsp;Hồ Chí Minh</option>
                                                            <option value="3">&nbsp;Bình Dương</option>
                                                            <option value="4">&nbsp;Bắc Ninh</option>
                                                            <option value="5">&nbsp;Đồng Nai</option>
                                                            <option value="6">&nbsp;Hưng Yên</option>
                                                            <option value="7">&nbsp;Hải Dương</option>
                                                            <option value="8">&nbsp;Đà Nẵng</option>
                                                            <option value="9">&nbsp;Hải Phòng</option>
                                                            <option value="10">&nbsp;An Giang</option>
                                                            <option value="11">&nbsp;Bà Rịa-Vũng Tàu</option>
                                                            <option value="12">&nbsp;Bắc Giang</option>
                                                            <option value="13">&nbsp;Bắc Kạn</option>
                                                            <option value="14">&nbsp;Bạc Liêu</option>
                                                            <option value="15">&nbsp;Bến Tre</option>
                                                            <option value="16">&nbsp;Bình Định</option>
                                                            <option value="17">&nbsp;Bình Phước</option>
                                                            <option value="18">&nbsp;Bình Thuận</option>
                                                            <option value="19">&nbsp;Cà Mau</option>
                                                            <option value="20">&nbsp;Cần Thơ</option>
                                                            <option value="21">&nbsp;Cao Bằng</option>
                                                            <option value="22">&nbsp;Cửu Long</option>
                                                            <option value="23">&nbsp;Đắk Lắk</option>
                                                            <option value="24">&nbsp;Đắc Nông</option>
                                                            <option value="25">&nbsp;Điện Biên</option>
                                                            <option value="26">&nbsp;Đồng Tháp</option>
                                                            <option value="27">&nbsp;Gia Lai</option>
                                                            <option value="28">&nbsp;Hà Giang</option>
                                                            <option value="29">&nbsp;Hà Nam</option>
                                                            <option value="30">&nbsp;Hà Tĩnh</option>
                                                            <option value="31">&nbsp;Hậu Giang</option>
                                                            <option value="32">&nbsp;Hoà Bình</option>
                                                            <option value="33">&nbsp;Khánh Hoà</option>
                                                            <option value="34">&nbsp;Kiên Giang</option>
                                                            <option value="35">&nbsp;Kon Tum</option>
                                                            <option value="36">&nbsp;Lai Châu</option>
                                                            <option value="37">&nbsp;Lâm Đồng</option>
                                                            <option value="38">&nbsp;Lạng Sơn</option>
                                                            <option value="39">&nbsp;Lào Cai</option>
                                                            <option value="40">&nbsp;Long An</option>
                                                            <option value="41">&nbsp;Miền Bắc</option>
                                                            <option value="42">&nbsp;Miền Nam</option>
                                                            <option value="43">&nbsp;Miền Trung</option>
                                                            <option value="44">&nbsp;Nam Định</option>
                                                            <option value="45">&nbsp;Nghệ An</option>
                                                            <option value="46">&nbsp;Ninh Bình</option>
                                                            <option value="47">&nbsp;Ninh Thuận</option>
                                                            <option value="48">&nbsp;Phú Thọ</option>
                                                            <option value="49">&nbsp;Phú Yên</option>
                                                            <option value="50">&nbsp;Quảng Bình</option>
                                                            <option value="51">&nbsp;Quảng Nam</option>
                                                            <option value="52">&nbsp;Quảng Ngãi</option>
                                                            <option value="53">&nbsp;Quảng Ninh</option>
                                                            <option value="54">&nbsp;Quảng Trị</option>
                                                            <option value="55">&nbsp;Sóc Trăng</option>
                                                            <option value="56">&nbsp;Sơn La</option>
                                                            <option value="57">&nbsp;Tây Ninh</option>
                                                            <option value="58">&nbsp;Thái Bình</option>
                                                            <option value="59">&nbsp;Thái Nguyên</option>
                                                            <option value="60">&nbsp;Thanh Hoá</option>
                                                            <option value="61">&nbsp;Thừa Thiên Huế</option>
                                                            <option value="62">&nbsp;Tiền Giang</option>
                                                            <option value="63">&nbsp;Toàn Quốc</option>
                                                            <option value="64">&nbsp;Trà Vinh</option>
                                                            <option value="65">&nbsp;Tuyên Quang</option>
                                                            <option value="66">&nbsp;Vĩnh Long</option>
                                                            <option value="67">&nbsp;Vĩnh Phúc</option>
                                                            <option value="68">&nbsp;Yên Bái</option>
                                                            <option value="100">&nbsp;Nước Ngoài</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <select name="position-advanced" id="position-advanced"
                                                            className="form-control select2">
                                                            <option value="">Cấp bậc</option>
                                                            <option value="1">&nbsp;Nhân viên</option>
                                                            <option value="2">&nbsp;Trưởng nhóm</option>
                                                            <option value="3">&nbsp;Trưởng/Phó phòng</option>
                                                            <option value="10">&nbsp;Quản lý / Giám sát</option>
                                                            <option value="20">&nbsp;Trưởng chi nhánh</option>
                                                            <option value="25">&nbsp;Phó giám đốc</option>
                                                            <option value="30">&nbsp;Giám đốc</option>
                                                            <option value="50">&nbsp;Thực tập sinh</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <select name="type-advanced" id="type-advanced"
                                                            className="form-control select2">
                                                            <option value="">Hình thức làm việc</option>
                                                            <option value="1">&nbsp;Toàn thời gian</option>
                                                            <option value="3">&nbsp;Bán thời gian</option>
                                                            <option value="5">&nbsp;Thực tập</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group" style={{marginRight:"0.2222rem"}}>
                                                        <select name="salary-advanced" id="salary-advanced-home"
                                                            className="form-control select2">
                                                            <option value="">Mức lương</option>
                                                            <option value="1">&nbsp;&nbsp;Dưới 3 triệu</option>
                                                            <option value="2">&nbsp;&nbsp;3 - 5 triệu</option>
                                                            <option value="3">&nbsp;&nbsp;5 - 7 triệu</option>
                                                            <option value="4">&nbsp;&nbsp;7 - 10 triệu</option>
                                                            <option value="5">&nbsp;&nbsp;10 - 12 triệu</option>
                                                            <option value="6">&nbsp;&nbsp;12 - 15 triệu</option>
                                                            <option value="7">&nbsp;&nbsp;15 - 20 triệu</option>
                                                            <option value="8">&nbsp;&nbsp;20 - 25 triệu</option>
                                                            <option value="9">&nbsp;&nbsp;25 - 30 triệu</option>
                                                            <option value="10">&nbsp;&nbsp;Trên 30 triệu</option>
                                                            <option value="127">&nbsp;&nbsp;Thoả thuận</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-button">
                                            <button className="btn btn-topcv btn-search-job"><i
                                                    className="fa-solid fa-magnifying-glass"></i> <span>Tìm việc
                                                    ngay</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h4>Các nhà tuyển dụng hàng đầu trên Việc làm giáo dục</h4>
                            <div id="company-top">
                                <div className="item">
                                    <img src="https://vtjtalent.com/wp-content/uploads/2023/03/image-28.png"
                                        title="One Mount tuyển dụng tại TopCV" alt="One Mount tuyen dung tai"
                                        className="img-responsive"/>
                                </div>
                                <div className="item">
                                    <img src="https://vtjtalent.com/wp-content/uploads/2023/03/image-26.png"
                                        title="One Mount tuyển dụng tại TopCV" alt="One Mount tuyen dung tai"
                                        className="img-responsive"/>
                                </div>
                                <div className="item">
                                    <img src="https://vtjtalent.com/wp-content/uploads/2023/03/image-25.png"
                                        title="One Mount tuyển dụng tại TopCV" alt="One Mount tuyen dung tai"
                                        className="img-responsive"/>
                                </div>
                                <div className="item">
                                    <img src="https://vtjtalent.com/wp-content/uploads/2023/03/image-27.png"
                                        title="One Mount tuyển dụng tại TopCV" alt="One Mount tuyen dung tai"
                                        className="img-responsive"/>
                                </div>
                                <div className="item">
                                    <img src="https://vtjtalent.com/wp-content/uploads/2023/03/image-31.png"
                                        title="One Mount tuyển dụng tại TopCV" alt="One Mount tuyen dung tai"
                                        className="img-responsive"/>
                                </div>
                                <div className="item">
                                    <img src="https://vtjtalent.com/wp-content/uploads/2023/03/image-30.png"
                                        title="One Mount tuyển dụng tại TopCV" alt="One Mount tuyen dung tai"
                                        className="img-responsive"/>
                                </div>
                              

                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 box-search-job-image">
                            <img src="https://www.topcv.vn/v4/image/welcome/image_topcv_2.png?v=1.0.0"
                                title="Nhân viên tuyển dụng tại TopCV" alt="Nhan vien tuyen dung "
                                className="img-responsive"/>
                        </div>
                    </div>
                </div>
            </section>
        <section id="create-cv">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="box-create-cv mb-16">
                            <div className="col-md-7 box-item">
                                <h2>Tạo CV online ấn tượng </h2>
                                <h3> Việc làm giáo dục hiện có 10+ mẫu CV chuyên nghiệp, độc đáo phù hợp với mọi ngành nghề</h3>
                                {/* https://www.topcv.vn/mau-cv */}
                                <a href="/tao-cv" className="btn btn-topcv btn-search-job"
                                    style={{"fontWeight": "bold",}}><i className="fa-solid fa-plus"></i> Tạo CV ngay</a>
                            </div>
                            <div className="box-image">
                                <img src="https://www.topcv.vn/v4/image/welcome/mau_cv.png?v=1.0.0"
                                    alt="Tao CV online an tuong" title="Tạo CV online ấn tượng" className="img-responsive"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="box-create-cv">
                            <div className="col-md-7 box-item">
                                <h2>Sử dụng CV sẵn có để tìm việc <label className="label label-new">Mới</label> </h2>
                                <h3>Cách đơn giản để bắt đầu tìm việc làm tại Việc làm giáo dục, Nhà tuyển dụng sẽ nhìn thấy CV bạn
                                    đã tải lên</h3>
                                    {/* https://www.topcv.vn/upload-cv */}
                                         <a href="" className="btn btn-topcv btn-search-job"
                                    style={{"fontWeight": "bold"}}> <i className="fa-solid fa-upload"></i> Upload CV ngay</a>
                            </div>
                            <div className="box-image box-upload">
                                <img src="https://www.topcv.vn/v4/image/welcome/upload-cv.png?v=1.0.0"
                                    title="Sử dụng CV theo ngành nghề" alt="Su dung CV theo nganh nghe"
                                    className="img-responsive"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    


{/*   các job */}
        <section id="list-feature-jobs">
            <div className="container">
                <section className="box_general" id="box-feature-jobs">
                    <div className="box-smart-box">
                        <div className="box-label">
                            <p><i className="fa-solid fa-circle"></i>
                                Công việc mới nhất được đề xuất</p>
                        </div>
                    </div>
                    <div className="box-header">
                        <h2 className="text_ellipsis uppercase box-title">
                            Việc làm tốt nhất tại Việc làm giáo dục
                        </h2>
                        {/* <span className="pull-right feature-job-link"><a href="https://www.topcv.vn/viec-lam-tot-nhat"
                                target="_blank">Xem tất cả <i className="fa-solid fa-arrow-right"></i></a></span> */}
                    </div>
                    <div className="box-smart-filter box-smart-feature-jobs">
                        <div className="box-not-share-location">Hệ thống Toppy AI cần thông tin về vị trí của bạn để có thể
                            hiển thị các việc làm phù hợp nhất. <a href=""
                                className="show-turn-on-location">Xem hướng dẫn chia sẻ vị trí tại đây!</a></div>
                        <div className="box-smart-location">
                         
                        <div className="box-smart-list-location">
                            <div
                                className={`box-smart-item ${selectedCity === 0 ? 'active' : ''}`}
                                data-city_id="0"
                                onClick={() => handleCityClick(0)}
                            >
                                Ngẫu Nhiên
                            </div>
                            <div
                                className={`box-smart-item ${selectedCity === 1 ? 'active' : ''}`}
                                data-city_id="1"
                                onClick={() => handleCityClick(1)}
                            >
                                Hà Nội
                            </div>
                            <div
                                className={`box-smart-item ${selectedCity === 2 ? 'active' : ''}`}
                                data-city_id="2"
                                onClick={() => handleCityClick(2)}
                            >
                                Thành phố Hồ Chí Minh
                            </div>
                           
                        </div>

                          
                        </div>


                     {/*  render data */}
                        <div className="row">

                        {data.map(function(item,index){
                            return(<>
                            <div data-job-id="974988" className="col-md-4 col-sm-6 feature-job job-ta">
                                <div className="feature-job-item">
                                    <div className="cvo-flex">
                                        <a
                                            href={"/viec-lam/"+slugVietnamese(item.tieudetuyendung)+"."+item.post_new_id}
                                            target="_blank" tabIndex="-1">
                                            <div className="box-company-logo"><img
                                                    title=""
                                                    alt=""
                                                    src="https://cdn-new.topcv.vn/unsafe/150x/filters:format(webp)/https://static.topcv.vn/company_logos/9sOQYukceu8zgJjgM15xkiW9IAZAioY3_1658989673____34b991977cf42cdb4ee76cbef1fef4c8.jpg"
                                                    data-src=""
                                                    className="img-responsive"/></div>
                                        </a>
                                        <div className="col-title cvo-flex-grow"><a data-toggle="tooltip" title=""
                                                data-placement="top"
                                                href={"/viec-lam/"+slugVietnamese(item.tieudetuyendung)+"."+item.post_new_id}
                                                target="_blank" className="title text_ellipsis"
                                                data-original-title="Quản Lý Sản Xuất" tabIndex="-1">
                                          
                                               <strong className="underline-box-job" style={{"fontWeight": "bold","color":"#212f3f"}}>
                                                        {item.tieudetuyendung}
                                                </strong></a> <a
                                               href={"/viec-lam/"+slugVietnamese(item.tieudetuyendung)+"."+item.post_new_id}
                                                target="_blank" data-toggle="tooltip" title="" data-placement="top"
                                                data-container="body"
                                                className="text-silver company text_ellipsis underline-box-job"
                                                data-original-title="CÔNG TY TNHH MTV SX TM DV CƠ KHÍ VĨNH THÁI"
                                                tabIndex="-1">
                                                   {item.tieudetuyendung}
                                            </a></div>
                                    </div>
                                    <div className="box-footer">
                                        <div className="col-job-info">
                                            <div className="salary"><span className="text_ellipsis">     {item.is_kieuluong ==="Thỏa Thuận"?"Thỏa Thuận":  item.is_luong =="VND"?<><div>{formatNumber(item.is_den)}</div></>:<><div>Từ: {(item.is_tu)}-Đến: {(item.is_den)} {item.is_luong}</div></>}</span></div>
                                            <div data-html="true" data-toggle="tooltip" title="" data-placement="top" style={{'marginLeft':'1rem'}}
                                                data-container="body" className="address"
                                                data-original-title="">

                                                <span className="text_ellipsis">                 
                                                {JSON.parse( item.khuvuclamviec).map(function(item2,index){
                                                return(<>
                                                     { index == 0?item2.value:""}
                                                     { index == 1?","+item2.value:""}
                                                </>)
                                                 })}
                                                </span></div>
                                        </div>
                                        <div className="col-like"><a
                                                href=""
                                                tabIndex="-1"><button className="btn-outline-hover" tabIndex="-1"><i
                                                        className="fa-regular fa-heart"></i></button></a></div>
                                    </div>
                                </div>
                            </div>
                            

                                    </>)
                        })}

                            
                         
                        </div>

                        {/* end */}

















                    </div>
                
                    <div className="feature-job-page">
                        <span>Trang</span>
                        <span className="slick-pagination">1/</span>
                    </div> 
                </section>
            </div>
        </section>


    
    
    
        <section id="box-category-top-professions">
            <div className="loading">
                <i className="fa fa-spinner fa-pulse fa-3x fa-fw text-highlight"></i>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Top  việc làm trong ngành giáo dục nổi bật</h2>
                        <div className="row center-category-top-professions transition">
                                    <div className="col-sm-4 col-xs-6 slick-slide slick-cloned" data-slick-index="-3" 
                                        aria-hidden="true" tabIndex="-1" style={{"width": '377px', }}><a 

                                            style={{textDecoration:'none',}}
                                            href="/tim-viec-lam-ngan-hang-tai-chinh-c10033" target="_blank"
                                            tabIndex="-1">
                                            <div className="box-item">
                                                <div className="icon"><i className="fa-solid fa-briefcase"></i></div>
                                                <div className="text_ellipsis">
                                                    <h3 className="name_category">Hiệu trưởng</h3>
                                                    <p className="count_category">652 việc làm</p>
                                                </div>
                                            </div>
                                        </a></div>
                                </div>
                        </div>
                    </div>
                </div>
            
        </section>
    
        <section id="about-us">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Về chúng tôi</h2>
                        <h3> Việc làm giáo dục là công ty công nghệ nhân sự trong ngành giáo dục (HR Tech) hàng đầu Việt Nam. Với năng lực lõi là công
                            nghệ, đặc biệt là trí tuệ nhân tạo (AI), sứ mệnh của Việc làm giáo dục đặt ra cho mình là thay đổi thị
                            trường tuyển dụng - nhân sự ngày một hiệu quả hơn. Bằng công nghệ, chúng tôi tạo ra nền tảng
                            cho phép người lao động tạo CV, phát triển được các kỹ năng cá nhân, xây dựng hình ảnh
                            chuyên nghiệp trong mắt nhà tuyển dụng và tiếp cận với các cơ hội việc làm phù hợp.</h3>
                        <div className="box-content">
                            <div className="row mb-10">
                                <div className="col-md-3">
                                    <p>30.000+</p>
                                    <span>Ứng viên đang bật tìm việc trung bình/thời điểm</span>
                                </div>
                                <div className="col-md-3">
                                    <p>90.000+</p>
                                    <span>Doanh nghiệp sử dụng dịch vụ</span>
                                </div>
                                <div className="col-md-3">
                                    <p>120.000+</p>
                                    <span>Nhà tuyển dụng sử dụng thường xuyên</span>
                                </div>
                                <div className="col-md-3">
                                    <p>200.000+</p>
                                    <span>Ứng viên mới mỗi tháng</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <p>3.000.000+</p>
                                    <span>Lượt ứng viên truy cập hàng tháng</span>
                                </div>
                                <div className="col-md-3">
                                    <p>4.000.000+</p>
                                    <span>Ứng viên tiềm năng</span>
                                </div>
                                <div className="col-md-3">
                                    <p>60%</p>
                                    <span>Ứng viên có trên 2 năm kinh nghiệm</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
    
        </div>
    
    <Page_bell/>
<User_Footer/>    
    
    </>
  )
}

export default Home_user
