import React, {useEffect,useState} from 'react'
import { Sign ,Login} from '../url_page/url_page';
import logo from "./LOGO.png"
import "./stylenew.css"
import { useNavigate } from "react-router-dom";
import { verify_token  } from '../../api/candidateapi/Candidateapi';
import { useSelector, useDispatch} from "react-redux";
import { setUser } from '../../Redux/userReducer';
function User_header() {
    let navigate = useNavigate(); 
    const datauser = useSelector(state => state);
    const hanlderdangxuat = () => {
        window.localStorage.removeItem('cccd');
        window.localStorage.removeItem('userid')
        dispatch(setUser({
            mytoken: false,
            name: "",
            image: "",
            maungvien: "",
            email: ""
        }));
        navigate('/');
        const timer = setTimeout(() => {
            window.location.reload();
          }, 1000);
          return () => clearTimeout(timer);
    };
    const dispatch = useDispatch();
    try {
        var token_check = window.localStorage.getItem('cccd');
    } catch (error) {token_check =null;}
   
  
    const checklogin = async () => {
        // Kiểm tra xem dữ liệu người dùng đã tồn tại trong Redux store chưa
        if (datauser.mytoken === false) {
            try {
                const token = window.localStorage.getItem('cccd');
                const result = await verify_token(token);
                if (result.data.data === 'tokenull') {
                    token_check =null;
                    dispatch(setUser({
                        mytoken: false,
                        name: "",
                        image: "",
                        maungvien: "",
                        email: ""
                    }));

                 
                }
                // Gửi action SET_USER để cập nhật thông tin người dùng trong Redux store
                else{
                    dispatch(setUser({
                        mytoken: true,
                        name: result.data.data.nameungvien,
                        image: result.data.data.image,
                        maungvien: result.data.data.maungvien,
                        email: result.data.data.email
                    }));
                    window.localStorage.setItem("userid",(result.data.data.id));
                }
            } catch (error) {
                // ...
            }
        }
    };
    

    const [notificationVisible, setNotificationVisible] = useState(false);

    const toggleNotification = () => {
        setNotificationVisible(prevVisible => !prevVisible);
    };

    useEffect(() => {
        checklogin();
    }, []);
    
  return (
    <>
   
      <section id="box-group">
            <nav className="navbar ta-top">
                <div className="container-fluid px-30">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">
                            <img src={logo} alt=""
                                title="" className=""/>
                        </a>
                    </div>
                    <ul className="nav navbar-nav navbar-left">
                        <li className="navbar-left__item group">
                            <a href="" id="my-viec">
                                Việc làm
                            </a>
                            <div className="group-hover:menu navbar__item__dropdown-menu">
                                <ul className="nav navbar-menu">
                                    <li className="navbar-menu__item ">
                                        <a href="/tim-viec/viec-lam-giao-duc" className="text-sm">
                                            <i className="icon fa-light fa-radar"></i>
                                            Tìm việc làm
                                        </a>
                                    </li>
                                    <li className="navbar-menu__item  mb-0 border-b-1  ">
                                        <a href="/danh-sach-ung-tuyen" className="text-sm">
                                            <i className="icon fa-light fa-briefcase"></i>
                                            Việc làm đã ứng tuyển
                                        </a>
                                    </li>
                                    <li className="navbar-menu__item mt-0 ">
                                        <a href="/danh-sach-da-luu" className="text-sm">
                                            <i className="icon fa-light fa-heart"></i>
                                            Việc làm đã lưu
                                        </a>
                                    </li>
                                    {/* <li className="navbar-menu__item ">
                                        <a href="https://www.topcv.vn/viec-lam-phu-hop" className="text-sm">
                                            <i className="icon fa-light fa-user-robot"></i>
                                            Việc làm phù hợp
                                            <span className="label label-primary" style={{ borderRadius:'5px', color:"white", marginLeft:"1rem"}} >Hot</span>
                                        </a>
                                    </li> */}
                                    <li className="navbar-menu__item ">
                                        <a href="/thong-ke" className="text-sm">
                                            <i className="fa-light fa-display-code icon"></i>
                                            Việc làm Giáo dục chất <span className="label label-new"  style={{ borderRadius:'5px', color:"white", marginLeft:"1rem"}}>Mới</span>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </li>
                        <li className="navbar-left__item group">
                            <a href="  " title="Hồ sơ & CV" id="hosocv">
                                Hồ sơ & CV
                            </a>
                            <div className="group-hover:menu navbar__item__dropdown-menu">
                                <ul className="nav navbar-menu">
                                    <li className="navbar-menu__item mb-0 border-b-1 ">
                                        <a href="/tao-cv" className="text-sm">
                                            <i className="icon fa-light fa-file-user"></i>
                                            {/* Quản lý CV */}
                                            CV mới
                                        </a>
                                    </li>
                                    {/* <li className="navbar-menu__item mt-0 ">
                                        <a href="r" className="text-sm">
                                            <i className="icon fa-light fa-file-lines"></i>
                                            Quản lý Cover Letter <span className="tag-warning">Phát triển </span>
                                        </a>
                                    </li> */}
                                    <li className="navbar-menu__item mb-0 border-b-1 ">
                                        <a href="/tao-cv" className="text-sm">
                                            <i className="icon fa-light fa-id-badge"></i>
                                            Mẫu CV
                                        </a>
                                    </li>
                                    {/* <li className="navbar-menu__item mt-0 ">
                                        <a href="" className="text-sm">
                                            <i className="icon fa-light fa-file-lines"></i>
                                            Mẫu Cover Letter   <span className="tag-warning">Phát triển </span>
                                        </a>
                                    </li> */}
                                    {/* <li className="navbar-menu__item mb-0 border-b-1">
                                        <a href="" target="_blank" className="text-sm">
                                            <i className="icon fa-light fa-file-user"></i>
                                            Dịch vụ tư vấn CV
                                        </a>
                                    </li> */}
                                    {/* <li className="navbar-menu__item border-b-1 mb-0">
                                        <a href="" target="_blank" className="text-sm">
                                            <i className="icon fa-light fa-file-user"></i>
                                            Hướng dẫn viết CV  việc làm giáo dục
                                        </a>
                                    </li> */}
                                    {/* <li className="navbar-menu__item mt-0 ">
                                        <a href="" className="text-sm">
                                            <i className="icon fa-regular fa-briefcase"></i>
                                            Thư viện CV việc làm giáo dục
                                            <span className="tag-warning">Mới</span>
                                        </a>
                                    </li> */}
                                    <li className="navbar-menu__item ">
                                        <a href="" className="text-sm">
                                            <i className="icon fa-light fa-pager"></i>
                                            Việc làm giáo dục Profile <span className="tag-warning">Phát triển </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="navbar-left__item group">
                            <a href="/danh-sach-nha-tuyen-dung" title="Nhà tuyển dụng">
                                Nhà tuyển dụng
                            </a>
                            <div className="group-hover:menu navbar__item__dropdown-menu">
                                <ul className="nav navbar-menu">
                                    <li className="navbar-menu__item mb-0 border-b-1 ">
                                        <a href="/danh-sach-nha-tuyen-dung" className="text-sm">
                                            <i className="icon fa-light fa-building"></i>
                                            Danh sách nhà tuyển dụng
                                        </a>
                                    </li>
                                  
                                </ul>
                            </div>
                        </li>

                        <li className="navbar-left__item group">
                            <a href="/thong-ke" title="Hồ sơ & CV" id="thongkedulieu">
                                Tổng quan 
                            </a>
                        </li>
                        
                        
                        <li className="navbar-left__item group">
                            <a href="/tim-kiem-da-nen-tang" title="Hồ sơ & CV" id="timkiemdanentang">
                                Tìm kiếm đa nền tảng
                            </a>
                        </li>
                    </ul>
                    

                    
                    <ul className="nav navbar-nav navbar-right">
                        {token_check !== null ? "":
                            <li className="navbar-right__item">

                                <a className="btn btn-outline-primary" href={Login}>
                                    Đăng nhập
                                </a>
                            </li>
                        }
                        {token_check !== null? "":<li className="navbar-right__item">
                            <a className="btn btn-primary" href={Sign}>
                                Đăng ký
                            </a>
                        </li>
                        }
                       <li className="navbar-right__item">
                            <a type="button" className="btn btn-dark"
                                href="/app/sign"
                                target="_blank">
                                Nhà Tuyển dụng &amp; Đăng tuyển
                            </a>
                        </li>
                       


                        {/* nếu đã đăng nhập thì */}
                        {token_check !== null? 
                        <li id="nav-notification" className="navbar-right__item icon dropdown notification open">
                           
                            <li id="topcv-connect" className="navbar-right__item icon">
                                <a href="#"  className="dropdown-toggle" onClick={toggleNotification}>
                                <i className="fa fa-bell noti-icon"  style={{fontSize:"20px"}}></i>
                                <span v-if="newNotification" className="notification-count">1</span>
                                </a>
                                <div className="group-hover:menu navbar__item__dropdown-menu" style={{ display: notificationVisible ? "flex" : "none" }}>
                                    <ul className="dropdown-menu nav navbar-menu">
                                        <li className="header"><span className="title">Thông báo</span> 
                                        <div className="pull-right">
                                        <a href="#" className="mark-viewed-all text-highlight" onClick={toggleNotification}>Đóng</a>
                                        </div>
                                        </li> 
                                        <li className="body done">
                                        <ul className="notification-list">
                                        <li className="notification-item not-read" style={{listStyle:"none"}}>
                                        <a href="/" target="_blank">
                                        <div className="notification-item-title">
                                            <span  style={{color:"#212f3f", fontSize:"14px", lineHeight:"20px", fontWeight:"bold"}}>Nhà tuyển dụng đã đăng việc làm mới</span>
                                            </div> 
                                            <div className="notification-item-text" style={{fontSize:"12px", color:"black"}}>NGÂN HÀNG THƯƠNG MẠI CỔ PHẦN KỸ THƯƠNG VIỆT NAM vừa đăng tải tin tuyển dụng mới. Vào xem ngay!</div>
                                            </a> 
                                        </li>
                                </ul></li></ul></div>
                             </li>
                            
                        </li>:""}
                        <li id="topcv-connect" className="navbar-right__item icon">
                            <a href="/" >
                                <i className="fa fa-messages noti-icon" style={{fontSize:"20px"}}></i> 
                            </a>
                        </li>

                        
                        {token_check != null? 
                        
                        <li className='navbar-right__item group'>
                            <div className="title">
                                <a href="/">
                                <img src="http://localhost:3000/static/media/noavatar-2.18f0212.73096f90fd46f8942d94.svg"  alt="Tuần Trần Văn"/>
                                <span className="fullname">{datauser.name}</span>
                                </a>
                            </div>
                         <div className="group-hover:menu navbar__item__dropdown-menu">
                            <ul className="nav navbar-menu">
                                    <div className="dropdown-menu__info  tag-border">
                                    <img src="http://localhost:3000/static/media/noavatar-2.18f0212.73096f90fd46f8942d94.svg"  alt="Tuần Trần Văn"/>
                                    <div className="caption">
                                    <p className="name">{datauser.name}</p>
                                    <p className="description" style={{color:"black"}}>Mã ứng viên: <span className="code">{datauser.maungvien}</span></p>
                                    <p className="description"  style={{color:"black"}}>Email:{datauser.email}</p>
                                    </div>
                                    </div>
                                    <li className="navbar-menu__item ">
                                        <a href="/tai-khoan-ca-nhan" className="text-sm">
                                        <i className="icon fa-regular fa-pen-to-square"></i>
                                        Cài đặt thông tin cá nhân
                                        </a>
                                    </li>
                                    <li className="navbar-menu__item ">
                                    <a href="/cai-dat-nhu-cau-tim-viec" className="text-sm">
                                    <i className="icon fa-regular fa-circle-up"></i>
                                        Cài đặt thông tin nhu cầu tìm việc
                                    </a>
                                    </li>
                                    {/* <li className="navbar-menu__item  tag-border">
                                    <a href="https://www.topcv.vn/qua-tang" className="text-sm">
                                    <i className="icon fa-regular fa-gift-card"></i>
                                    Kích hoạt quà tặng
                                    </a>
                                    </li> */}
                                    <li className="navbar-menu__item ">
                                        <a href="/danh-sach-ung-tuyen" className="text-sm">
                                        <i className="icon fa-regular fa-eye"></i>
                                           Xem danh sách việc làm đã ứng tuyển 
                                        </a>
                                    </li>
                                    {/* <li className="navbar-menu__item ">
                                    <a href="https://www.topcv.vn/cai-dat-goi-y-viec-lam" className="text-sm">
                                    <i className="icon fa-regular fa-gear"></i>
                                    Cài đặt gợi ý việc làm
                                    </a>
                                    </li> */}
                                    {/* <li className="navbar-menu__item  tag-border">
                                    <a href="https://www.topcv.vn/tai-khoan/cai-dat-thong-bao" className="text-sm">
                                    <i className="icon fa-regular fa-envelope-dot"></i>
                                    Cài đặt nhận email
                                    </a>
                                    </li> */}
                                    {/* <li className="navbar-menu__item ">
                                    <a href="/tai-khoan-bao-mat" className="text-sm">
                                    <i className="icon fa-regular fa-shield-check"></i>
                                    Cài đặt bảo mật
                                    </a>
                                    </li> */}
                                    {/* <li className="navbar-menu__item  tag-border">
                                    <a href="/tai-khoan-mat-khau" className="text-sm">
                                    <i className="icon fa-regular fa-lock"></i>
                                    Đổi mật khẩu
                                    </a>
                                    </li> */}
                                    <li className="navbar-menu__item logout">
                                    <span   className="text-sm ml-2" onClick={hanlderdangxuat} id="dangxuatmycandidate">
                                        <i className="icon fa-regular fa-arrow-right-from-bracket"></i>
                                        Đăng xuất
                                    </span>
                                    <form action="https://www.topcv.vn/sign-out" id="user-logout-form" method="POST">
                                    <input type="hidden" name="_token" value="Swg9NltmzXODzRsxfYlR4VEcPTlcZDYinTYqQAne"/>
                                    </form>
                                    </li>
                            </ul> 
                        </div>


                        </li>:""}
                       
                       
                        {/* end */}
                    </ul>   
                </div>
            </nav>
        </section>
    
    
    
      
    
    
    
    
    
    </>
  )
}

export default User_header