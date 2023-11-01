import React,{useState, useEffect} from 'react'
import "./style.css"
import logo from "../login/LOGO.png"
import { FloatButton } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { CommentOutlined, CustomerServiceOutlined } from '@ant-design/icons';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import s1 from "./banner-15-03.jpg"
import s2 from "./banner-4.jpg"
import s3 from "./report_srp.jpg"
import v1 from "./download.svg"
import { useNavigate } from "react-router-dom";
import { Drawer,Button } from 'antd';

import { verify_token_employer } from '../../api/employerapi/Employerapi';

import Postnews from '../postnews/Postnews';
import Managejobpostings from '../Managejobpostings/Managejobpostings';
import Yuki from '../Yuki/Yuki';
import ReportPost from '../reportpost/ReportPost';
import Settingemployer from '../settingemployer/Settingemployer';
import ReportHeThong from '../ReportHeThong/ReportHeThong';
import Chiendichdangtuyen from '../Chiendichdangtuyen/Chiendichdangtuyen';
import { postthongtinnhatuyendungapi } from '../../api/employerapi/Employerapi';
import { useLocation } from 'react-router-dom';


function DashboardCandi() {
   const location = useLocation();
  const currentURL = location.pathname;

 
   let navigate = useNavigate(); 
   const [open, setOpen] = useState(false);
   const showDrawer = () => {
      setOpen(true);
   };
   const onClose = () => {
      setOpen(false);
   };

  const [employer,setmployer] = useState([]);

  const [dataemploy,setdataemployer] = useState({})
  const fecththongtin = async()=>{

   const user_id = window.localStorage.getItem("employerid")
   const data = new FormData()
   data.append("user_id",user_id)
   const  result = await  postthongtinnhatuyendungapi(data)
   // console.log(result)
   setdataemployer(result.data.data[0])
  }
 
  const checkloginemoloyer =async()=>{
      try {
         var token_check = window.localStorage.getItem('employercccd');
         if(token_check !== null){
         const result = await  verify_token_employer(token_check)
         // console.log(result)
         setmployer(result.data.data)
         window.localStorage.setItem("employerid", result.data.data.id)
         }
         else{
            navigate('/app/login');
         }
      } catch (error) {
         navigate('/app/login');
      }
  }

   const  logout = ()=>{
      window.localStorage.removeItem('employercccd');
      window.localStorage.removeItem('employerid')
      navigate('/app/login')
   }

  useEffect(() => {
    checkloginemoloyer();
    const timer = setTimeout(() => {
      fecththongtin();
    }, 1000);
    return () => clearTimeout(timer);
   
   }, []);
  return (
    <>
   <div data-v-07f0dc2d="">
   <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
   <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
   <div ><Button type='primary' data-v-07f0dc2d="" className="dropdown-item" onClick={logout}>Đăng xuất</Button></div>
 
   </Drawer>
      {/* navbar */}
    
      <nav data-v-07f0dc2d="" className="navbar navbar-expand-candi navbar-dark bg-dark p-0 fixed-top header-container" >
         <button data-v-07f0dc2d="" id="btn-toggle-sidebar" aria-expanded="false" data-toggle="collapse" role="button" className="btn border-0
            toggle-sidebar">
         <i data-v-07f0dc2d="" id="icon-toggle-sidebar" className="fal fa-bars text-white"></i>
         </button>
         <a data-v-07f0dc2d="" href="/app-employer/dashboard" aria-current="page" className="navbar-brand-candi pl-3 nuxt-link-exact-active nuxt-link-active">
         <img data-v-07f0dc2d="" style={{width:"100%", height:"100%"}} src={logo}/></a> 
         <div data-v-07f0dc2d="" id="navbar-menu-candi" className="collapse navbar-collapse-candi">
            <ul data-v-07f0dc2d="" className="navbar-nav-candi ml-auto">
               <li data-v-07f0dc2d="" id="btn-slogan-topcv" className="nav-item-candi mr-3">
                  <div data-v-07f0dc2d="" className="slogan-topcv">HR Tech Conference 2023</div>
               </li>
               <li data-v-07f0dc2d="" className="nav-item-candi mr-3"  id="ulcandi">
                  <a data-v-07f0dc2d="" href="/" target="_blank" to="/super-fast-job" className="nav-link btn-light btn-text">
                  <i data-v-07f0dc2d="" className="fa-solid fa-circle-bookmark icon"></i> 
                  HR Insider</a>
               </li>

            
               <li data-v-07f0dc2d="" className="nav-item-candi mr-3 dropdown" id="ulcandi">
                  <a data-v-07f0dc2d="" href="/app-employer/post-new" className="nav-link btn-light btn-text"><i data-v-07f0dc2d="" className="fa-solid fa-pen-circle icon"></i> Đăng tin </a>
               </li>
               <li data-v-07f0dc2d="" className="nav-item-candi mr-3 dropdown" id="ulcandi">
                  <a data-v-07f0dc2d="" href="" className="nav-link btn-light btn-text">
                     <i data-v-07f0dc2d="" className="fa-solid fa-pen-circle icon"></i> Tìm CV </a></li>
               <li data-v-07f0dc2d="" className="nav-item-candi mr-3" id="ulcandi">
                  <a data-v-07f0dc2d="" href="/" target="_blank" className="nav-link btn-light btn-comment btn-text position-relative">
                     <i data-v-07f0dc2d="" className="fa-solid fa-comment-dots icon"></i> Connect
                  </a>
               </li>

               <li data-v-07f0dc2d="" className="nav-item mr-3 dropdown" id="ulcandi">
                  <div data-v-452ec4c7="" data-v-07f0dc2d="" id="help">
                     <span data-v-452ec4c7="" role="button" className="nav-link btn-light btn-text"><i data-v-452ec4c7="" className="fa-solid fa-circle-question"></i>
                     Trợ giúp
                     </span> 
                     <div data-v-452ec4c7="" className="dropdown-menu helper-dropdown mt-2 p-0">
                        <div data-v-452ec4c7="" className="font-weight-bold helper-dropdown-header">Hỗ trợ</div>
                        <div data-v-452ec4c7="" className="helper-dropdown-content">
                           <div data-v-452ec4c7="" className="list-help-item"><a data-v-452ec4c7="" href="https://tuyendung.topcv.vn/help/tong-quan/smart-recruitment-platform-principle/" target="_blank"><i data-v-452ec4c7="" className="mx-2 fal fa-file-alt"></i>Smart Recruitment Platform Principle</a></div>
                           <div data-v-452ec4c7="" className="list-help-item"><a data-v-452ec4c7="" href="https://tuyendung.topcv.vn/help/phuong-phap/ai-in-recruitment/" target="_blank"><i data-v-452ec4c7="" className="mx-2 fal fa-file-alt"></i>AI in Recruitment</a></div>
                           <div data-v-452ec4c7="" className="list-help-item"><a data-v-452ec4c7="" href="https://tuyendung.topcv.vn/help/phuong-phap/recruitment-marketing/" target="_blank"><i data-v-452ec4c7="" className="mx-2 fal fa-file-alt"></i>Recruitment Marketing</a></div>
                           <div data-v-452ec4c7="" className="list-help-item"><a data-v-452ec4c7="" href="https://tuyendung.topcv.vn/help/dinh-nghia/" target="_blank"><i data-v-452ec4c7="" className="mx-2 fal fa-file-alt"></i>Định nghĩa &amp; các khái niệm</a></div>
                           <div data-v-452ec4c7="" className="list-help-item"><a data-v-452ec4c7="" href="https://tuyendung.topcv.vn/help/huong-dan-su-dung/" target="_blank"><i data-v-452ec4c7="" className="mx-2 fal fa-file-alt"></i>Hướng dẫn sử dụng</a></div>
                        </div>
                        <div data-v-452ec4c7="" className="helper-dropdown-footer font-weight-bold"><a data-v-452ec4c7="" href="https://tuyendung.topcv.vn/help/" target="_blank" className="d-flex justify-content-between align-items-center"><span data-v-452ec4c7="" className="text-primary cursor-point">Chuyển đến Trung tâm hỗ trợ</span> <i data-v-452ec4c7="" className="fa-solid fa-square-arrow-up-right text-primary"></i></a></div>
                     </div>
                  </div>
               </li>

               
      
               <li data-v-07f0dc2d="" className="nav-item mr-3 dropdown"  id="ulcandi">
                  <div data-v-6bc9889e="" data-v-07f0dc2d="" id="notification" aria-labelledby="dropdownNotification">
                     <a data-v-6bc9889e="" id="dropdownNotification" aria-expanded="false" aria-haspopup="true" href="#" role="button" className="nav-link btn-light btn-icon rounded-circle shadow-none">
                        <i data-v-6bc9889e="" className="fas fa-bell"></i> 
                     </a>
                     <div data-v-6bc9889e="" className="dropdown-menu mt-3 dropdown-menu-right animate slideIn border-0 shadow">
                     <li data-v-6bc9889e="" className="header d-flex pb-1 py-2 px-3 align-items-center"><span data-v-6bc9889e="" className="title">Thông báo</span> </li> 
                  </div></div>
            </li> 
         
               <li data-v-07f0dc2d="" className="nav-item mr-3 dropdown"  id="">
                  <a data-v-07f0dc2d=""   onClick={showDrawer} id="dropdownMenuLink" aria-expanded="false" aria-haspopup="true" data-toggle="dropdown" href="#" role="button" className="nav-link d-flex btn-light btn-text px-2 align-items-center">
                     {/* style="width: 24px; height: 24px; flex: 0 0 24px; background-image: url(&quot;/app/_nuxt/img/noavatar-2.18f0212.svg&quot;);" */}
                     <div data-v-2a31697a="" data-v-07f0dc2d="" className=" avatar-candi"  ></div>
                     <i data-v-07f0dc2d="" className="fa-solid fa-caret-down ml-2"></i>
                  </a>
                  
               </li> 
            </ul>
         </div>
      </nav>

      {/* slider bar */}

      <nav data-v-24fdb8b8="" className="sidebar-wrapper sidebar-full">
            <div data-v-24fdb8b8="" className="sidebar-content d-flex flex-column ps ps--active-y">
               <div data-v-24fdb8b8="" className="mb-2 border-bottom">
                  <div data-v-24fdb8b8="" className="sidebar-header d-flex align-items-center">
                     {dataemploy.length == 0?
                     <div data-v-24fdb8b8="" className="user-pic">
                        <a data-v-24fdb8b8="" href="/app/account/settings" className="">
                           <div data-v-2a31697a="" data-v-24fdb8b8="" className="avatarcandis"></div>
                        </a>
                     </div> :
                     <img src={dataemploy.image}  style={{width:"30%"}}/>
                        }
                     <div data-v-24fdb8b8="" className="user-info pt-2">
                        <span data-v-24fdb8b8="" className="user-name font-weight-bold">
                           <a data-v-24fdb8b8="" href="/app/account/settings" className="text-dark">{employer.name !== ""? employer.name :""}
                        </a></span> <span data-v-24fdb8b8="" className="user-role">Employer</span> 
                        <div data-v-24fdb8b8="" className="user-role mb-2">
                           Tài khoản xác thực: <span data-v-24fdb8b8="" className="text-primary mr-2">Cấp 5/5</span><span data-v-24fdb8b8="">
                              <img data-v-24fdb8b8="" src="" width="15"/></span>
                        </div>
                     </div>
                  </div>
                  {/* <div data-v-24fdb8b8="" className="p-3 d-flex" style={{paddingTop:"3px"}}><button data-v-24fdb8b8="" className="btn btn-to-ekyc d-flex"><i data-v-24fdb8b8="" className="fa-solid fa-shield menu-item-icon"></i> <span data-v-24fdb8b8="" className="menu-item-text d-flex"><span data-v-24fdb8b8="" 
                  >Xác thực tài khoản điện tử</span> 
                  <i data-v-24fdb8b8="" className="fa-solid fa-chevron-right ml-3" 
                  ></i></span></button></div> */}
               </div>




               {/* chức năng */}
               <div className='sidebar-menu'>
                  <ul  data-v-24fdb8b8=''>
                     <li data-v-24fdb8b8="" className="d-flex flex-column">
                        <div data-v-24fdb8b8="" className="d-flex align-items-center justify-content-between">
                           <a data-v-24fdb8b8="" href="/app-employer/dashboard" aria-current="page" className= {currentURL =="/app-employer/dashboard"?"d-flex align-items-center position-relative nuxt-link-exact-active nuxt-link-active nav-link-active":"d-flex align-items-center position-relative nuxt-link-exact-active nuxt-link-active "}   >
                              <div data-v-24fdb8b8="" className="pl-3 menu-item-icon"><span data-v-24fdb8b8="" className="icon-circle-active">
                                 <i data-v-24fdb8b8="" className="fa-solid fa-grid-2"></i></span></div> <div data-v-24fdb8b8="" className="menu-item-text">
                                    <span data-v-24fdb8b8="" className="menu-item-title"> Bảng tin </span>
                                 </div> 
                                 <div data-v-24fdb8b8="" className="menu-item-count d-flex"></div>
                              <div data-v-24fdb8b8="" className="d-flex">
                              </div>
                           </a> 
                        </div> 
                     </li>


                     <li data-v-24fdb8b8="" className="d-flex flex-column">
                        <div data-v-24fdb8b8="" className="d-flex align-items-center justify-content-between">
                           <a data-v-24fdb8b8="" href="/app-employer/yuki" className= {currentURL =="//app-employer/yuki"?"d-flex align-items-center position-relative nuxt-link-exact-active nuxt-link-active nav-link-active":"d-flex align-items-center position-relative nuxt-link-exact-active nuxt-link-active "}>
                              <div data-v-24fdb8b8="" className="pl-3 menu-item-icon"><span data-v-24fdb8b8="" className="icon-circle"><i data-v-24fdb8b8="" className="fa-regular fa-robot"></i></span></div>
                              <div data-v-24fdb8b8="" className="menu-item-text"><span data-v-24fdb8b8="" className="menu-item-title"> YUKI - Đề xuất </span></div>
                              <div data-v-24fdb8b8="" className="menu-item-count d-flex"><span data-v-24fdb8b8="" className="menu-item-badge-full-sidebar">3</span></div>
                              <div data-v-24fdb8b8="" className="d-flex">
                              
                              </div>
                           </a>
                        
                        </div>
                    
                     </li>
                     <hr data-v-24fdb8b8=""></hr>

                     <li data-v-24fdb8b8="" className="d-flex flex-column">
                        <div data-v-24fdb8b8="" className="d-flex align-items-center justify-content-between">
                           <a data-v-24fdb8b8="" href="/app-employer/post-new " aria-current="page" className={currentURL =="/app-employer/post-new"?"d-flex align-items-center position-relative nuxt-link-exact-active nuxt-link-active nav-link-active":"d-flex align-items-center position-relative nuxt-link-exact-active nuxt-link-active "}>
                              <div data-v-24fdb8b8="" className="pl-3 menu-item-icon"><span data-v-24fdb8b8="" className="icon-circle">
                              <i data-v-4f728262="" className="fa-regular fal fa-file-alt"></i></span></div> <div data-v-24fdb8b8="" className="menu-item-text">
                                    <span data-v-24fdb8b8="" className="menu-item-title"> Đăng tin miễn phí</span>
                                 </div> 
                                 <div data-v-24fdb8b8="" className="menu-item-count d-flex"></div>
                              <div data-v-24fdb8b8="" className="d-flex">
                              </div>
                           </a> 
                        </div> 
                     </li>
                     <li data-v-24fdb8b8="" className="d-flex flex-column">
                        <div data-v-24fdb8b8="" className="d-flex align-items-center justify-content-between">
                           <a data-v-24fdb8b8="" href="/app-employer/manager-post " aria-current="page" className={currentURL =="/app-employer/manager-post"?"d-flex align-items-center position-relative nuxt-link-exact-active nuxt-link-active nav-link-active":"d-flex align-items-center position-relative nuxt-link-exact-active nuxt-link-active "}>
                              <div data-v-24fdb8b8="" className="pl-3 menu-item-icon"><span data-v-24fdb8b8="" className="icon-circle">
                              <i data-v-4f728262="" className="fa-regular fal fa-file-alt"></i></span></div> <div data-v-24fdb8b8="" className="menu-item-text">
                                    <span data-v-24fdb8b8="" className="menu-item-title"> Quản lý bài đăng tuyển</span>
                                 </div> 
                                 <div data-v-24fdb8b8="" className="menu-item-count d-flex"></div>
                              <div data-v-24fdb8b8="" className="d-flex">
                              </div>
                           </a> 
                        </div> 
                     </li>
                     <li data-v-24fdb8b8="" className="d-flex flex-column">
                        <div data-v-24fdb8b8="" className="d-flex align-items-center justify-content-between">
                           <a data-v-24fdb8b8="" href="/app-employer/chien-dich-tuyen-dung" aria-current="page" className={currentURL =="/app-employer/chien-dich-tuyen-dung"?"d-flex align-items-center position-relative nuxt-link-exact-active nuxt-link-active nav-link-active":"d-flex align-items-center position-relative nuxt-link-exact-active nuxt-link-active "}>
                              <div data-v-24fdb8b8="" className="pl-3 menu-item-icon"><span data-v-24fdb8b8="" className="icon-circle">
                              <i data-v-4f728262="" className="fa-regular fa-briefcase"></i></span></div> <div data-v-24fdb8b8="" className="menu-item-text">
                                    <span data-v-24fdb8b8="" className="menu-item-title"> Chiến dịch tuyển dụng</span>
                                 </div> 
                                 <div data-v-24fdb8b8="" className="menu-item-count d-flex"></div>
                              <div data-v-24fdb8b8="" className="d-flex">
                              </div>
                           </a> 
                        </div> 
                     </li>


                     <li data-v-24fdb8b8="" className="d-flex flex-column">
                        <div data-v-24fdb8b8="" className="d-flex align-items-center justify-content-between">
                           <a data-v-24fdb8b8="" href="/app-employer/report-campaign" aria-current="page" className={currentURL =="/app-employer/report-campaign"?"d-flex align-items-center position-relative nuxt-link-exact-active nuxt-link-active nav-link-active":"d-flex align-items-center position-relative nuxt-link-exact-active nuxt-link-active "}>
                              <div data-v-24fdb8b8="" className="pl-3 menu-item-icon"><span data-v-24fdb8b8="" className="icon-circle">
                              <i data-v-4f728262="" className="fa-regular fa-chart-mixed"></i></span></div> <div data-v-24fdb8b8="" className="menu-item-text">
                                    <span data-v-24fdb8b8="" className="menu-item-title"> Nhu cầu tuyển dụng</span>
                                 </div> 
                                 <div data-v-24fdb8b8="" className="menu-item-count d-flex"></div>
                              <div data-v-24fdb8b8="" className="d-flex">
                              </div>
                           </a> 
                        </div> 
                     </li>
                   
                     {/* <li data-v-24fdb8b8="" className="d-flex flex-column">
                        <div data-v-24fdb8b8="" className="d-flex align-items-center justify-content-between">
                           <a data-v-24fdb8b8="" href="/app-employer/dashboard" aria-current="page" className="d-flex align-items-center position-relative nuxt-link-exact-active nuxt-link-active nav-link">
                              <div data-v-24fdb8b8="" className="pl-3 menu-item-icon"><span data-v-24fdb8b8="" className="icon-circle">
                              <i data-v-4f728262="" className="fa-regular fa-clock-rotate-left"></i></span></div> <div data-v-24fdb8b8="" className="menu-item-text">
                                    <span data-v-24fdb8b8="" className="menu-item-title"> Lịch sử tài khoản</span>
                                 </div> 
                                 <div data-v-24fdb8b8="" className="menu-item-count d-flex"></div>
                              <div data-v-24fdb8b8="" className="d-flex">
                              </div>
                           </a> 
                        </div> 
                     </li> */}
                     <li data-v-24fdb8b8="" className="d-flex flex-column">
                        <div data-v-24fdb8b8="" className="d-flex align-items-center justify-content-between">
                           <a data-v-24fdb8b8="" href="/app-employer/setting" className={currentURL =="/app-employer/setting"?"d-flex align-items-center position-relative nuxt-link-exact-active nuxt-link-active nav-link-active":"d-flex align-items-center position-relative nuxt-link-exact-active nuxt-link-active "}>
                              <div data-v-24fdb8b8="" className="pl-3 menu-item-icon"><span data-v-24fdb8b8="" className="icon-circle">
                              <i data-v-4f728262="" className="fa-regular fa-gear"></i></span></div> <div data-v-24fdb8b8="" className="menu-item-text">
                                    <span data-v-24fdb8b8="" className="menu-item-title"> Cài đặt tài khoản</span>
                                 </div> 
                                 <div data-v-24fdb8b8="" className="menu-item-count d-flex"></div>
                              <div data-v-24fdb8b8="" className="d-flex">
                              </div>
                           </a> 
                        </div> 
                     </li>
                     <hr data-v-4f728262=""/>

                     {/* <li data-v-24fdb8b8="" className="d-flex flex-column">
                        <div data-v-24fdb8b8="" className="d-flex align-items-center justify-content-between">
                           <a data-v-24fdb8b8="" href="/app-employer/dashboard" aria-current="page" className="d-flex align-items-center position-relative nuxt-link-exact-active nuxt-link-active nav-link">
                              <div data-v-24fdb8b8="" className="pl-3 menu-item-icon"><span data-v-24fdb8b8="" className="icon-circle">
                              <i data-v-4f728262="" className="fa-regular fa-regular fa-envelope-dot"></i></span></div> <div data-v-24fdb8b8="" className="menu-item-text">
                                    <span data-v-24fdb8b8="" className="menu-item-title">Email hỗ trợ</span>
                                 </div> 
                                 <div data-v-24fdb8b8="" className="menu-item-count d-flex"></div>
                              <div data-v-24fdb8b8="" className="d-flex">
                              </div>
                           </a> 
                        </div> 
                     </li> */}


                     <li data-v-24fdb8b8="" className="d-flex flex-column">
                        <div data-v-24fdb8b8="" className="d-flex align-items-center justify-content-between">
                           <a data-v-24fdb8b8="" href="/app-employer/thong-bao-he-thong" aria-current="page" className="d-flex align-items-center position-relative nuxt-link-exact-active nuxt-link-active nav-link">
                              <div data-v-24fdb8b8="" className="pl-3 menu-item-icon"><span data-v-24fdb8b8="" className="icon-circle">
                              <i data-v-4f728262="" className="fa-regular fal fa-bell-exclamation"></i></span></div> <div data-v-24fdb8b8="" className="menu-item-text">
                                    <span data-v-24fdb8b8="" className="menu-item-title">Thông báo từ hệ thống</span>
                                 </div> 
                                 <div data-v-24fdb8b8="" className="menu-item-count d-flex"></div>
                              <div data-v-24fdb8b8="" className="d-flex">
                              </div>
                           </a> 
                        </div> 
                     </li>
                  </ul>

               </div>
            
            </div>
      </nav>
      {/*  main */}
      <div className='page-wrapper chiller-theme'>
               

         {currentURL =='/app-employer/dashboard'?  <div className='page-container'>
         <div data-v-502ae57c="" className="homepage-banner container-fluid page-content pd-b-0"></div>

       
          <div className='container-fluid page-content'>
               <h4 data-v-502ae57c="" className="mb-4">Bảng tin</h4>
            {/* test trang  bảng tin */}
               {/*  couse */}
               <Swiper
                  pagination={{
                     type: 'progressbar',
                  }}
                  slidesPerView={2}
                  spaceBetween={2}
                  navigation={true}
                  loop={true}
                  autoplay={{
                     delay: 2000, // 1 second delay
                     disableOnInteraction: false, // Continue autoplay even when user interacts with slides
                   }}
                   modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                  >
                  <SwiperSlide><img data-v-39d096da="" style={{height:"270px", borderRadius:"5px", maxWidth:"99.8%"}} src={s1} alt="Banner-thang"/>

                  </SwiperSlide>
                  <SwiperSlide><img data-v-39d096da=""  style={{height:"270px",borderRadius:"5px",maxWidth:"99.8%"}} src={s3} alt="Banner-thang"/>

                  </SwiperSlide>
                  <SwiperSlide><img data-v-39d096da=""  style={{height:"270px",borderRadius:"5px",maxWidth:"99.8%"}} src={s2} alt="Banner-thang"/>

                  </SwiperSlide>
                  <SwiperSlide><img data-v-39d096da=""  style={{height:"270px",borderRadius:"5px",maxWidth:"99.8%"}} src={s3} alt="Banner-thang"/>

                  </SwiperSlide>
                  
                  
               </Swiper>


               <div className='row mt-3'>
                  <div data-v-502ae57c="" className="col-6 pr-0">
                     <div data-v-66fd7bea="" data-v-502ae57c="" className="card border-0 shadow-sm rounded">
                        <div data-v-66fd7bea="">
                           <div data-v-66fd7bea="" className="p-3 d-flex align-items-center">
                              <h5 data-v-66fd7bea="" className="mb-1">Hiệu quả tuyển dụng</h5>
                              <div data-v-66fd7bea="" className="ml-auto">
                                 <div data-v-66fd7bea="" className="v-popover">
                                    <div className="trigger" style={{display:"inline-block"}}><i data-v-66fd7bea="" className="fas fa-circle-info" style={{color:" rgb(215, 222, 228)"}}></i> </div>
                                 </div>
                              </div>
                           </div>
                           <div data-v-66fd7bea="" className="px-3">
                              <div data-v-66fd7bea="" className="row pb-3 mr-0">
                                 <div data-v-66fd7bea="" className="col-6 pr-0">
                                    <a data-v-66fd7bea="" href="/app/recruitment-campaigns?filter_by=only_open" className="text-decoration-none">
                                       <div data-v-66fd7bea="" className="bg-info transparent-2 d-flex statistic-box">
                                          <div data-v-66fd7bea="" className="text-info">
                                             <h5 data-v-66fd7bea="" className="font-weight-bold">Đang cập nhật</h5>
                                             <div data-v-66fd7bea="">Chiến dịch đang mở</div>
                                          </div>
                                          <div data-v-66fd7bea="" className="ml-auto"><span data-v-66fd7bea="" className="rounded-pill transparent-1 badge badge-info ml-auto icon"><i data-v-66fd7bea="" className="fal fa-bullhorn"></i></span></div>
                                       </div>
                                    </a>
                                 </div>
                                 <div data-v-66fd7bea="" className="col-6 pr-0">
                                    <a data-v-66fd7bea="" href="/app/cvs-management" className="text-decoration-none">
                                       <div data-v-66fd7bea="" className="bg-success transparent-2 d-flex statistic-box">
                                          <div data-v-66fd7bea="" className="text-green">
                                             <h5 data-v-66fd7bea="" className="font-weight-bold">Đang cập nhật</h5>
                                             <div data-v-66fd7bea="">CV tiếp nhận</div>
                                          </div>
                                          <div data-v-66fd7bea="" className="ml-auto"><span data-v-66fd7bea="" className="rounded-pill transparent-1 badge badge-success ml-auto icon"><i data-v-66fd7bea="" className="fal fa-file-powerpoint"></i></span></div>
                                       </div>
                                    </a>
                                 </div>
                              </div>
                              <div data-v-66fd7bea="" className="row pb-3 mr-0">
                                 <div data-v-66fd7bea="" className="col-6 pr-0">
                                    <a data-v-66fd7bea="" href="/app/recruitment-campaigns?filter_by=has_publishing_job" className="text-decoration-none">
                                       <div data-v-66fd7bea="" className="bg-warning transparent-2 d-flex statistic-box">
                                          <div data-v-66fd7bea="" className="text-yellow">
                                             <h5 data-v-66fd7bea="" className="font-weight-bold">Đang cập nhật</h5>
                                             <div data-v-66fd7bea="">Tin tuyển dụng hiển thị</div>
                                          </div>
                                          <div data-v-66fd7bea="" className="ml-auto"><span data-v-66fd7bea="" className="rounded-pill transparent-1 badge badge-warning ml-auto icon"><i data-v-66fd7bea="" className="fal fa-file-alt"></i></span></div>
                                       </div>
                                    </a>
                                 </div>
                                 <div data-v-66fd7bea="" className="col-6 pr-0">
                                    <a data-v-66fd7bea="" href="/app/recruitment-campaigns?filter_by=has_new_cv" className="text-decoration-none">
                                       <div data-v-66fd7bea="" className="bg-danger transparent-2 d-flex statistic-box">
                                          <div data-v-66fd7bea="" className="text-danger">
                                             <h5 data-v-66fd7bea="" className="font-weight-bold">Đang cập nhật</h5>
                                             <div data-v-66fd7bea="">CV ứng tuyển mới</div>
                                          </div>
                                          <div data-v-66fd7bea="" className="ml-auto"><span data-v-66fd7bea="" className="rounded-pill transparent-1 badge badge-danger ml-auto icon"><i data-v-66fd7bea="" className="fa-light fa-file-import"></i></span></div>
                                       </div>
                                    </a>
                                 </div>
                              </div>
                           </div>
                           <div data-v-66fd7bea="" className="recruitment-effective-empty m-auto">
                              <img data-v-66fd7bea="" src="https://tuyendung.topcv.vn/app/_nuxt/img/recruitment-effective-empty.f3e2d62.png" className="img-fluid"/> 
                              <div data-v-66fd7bea="" className="text-center my-4"><span data-v-66fd7bea="" className="text-muted small">Chưa đủ dữ liệu để hiển thị</span></div>
                           </div>
                           <hr data-v-66fd7bea="" className="m-0"/>
                           <div data-v-66fd7bea="">
                              <div data-v-66fd7bea="" className="px-3 py-2"><a data-v-66fd7bea="" href="/app/recruitment-campaigns" className="btn btn-text text-primary text-left w-100 pl-0"><i data-v-66fd7bea="" className="fal fa-briefcase mr-1 px-1 py-1"></i>
                                 QUẢN LÝ CHIẾN DỊCH TUYỂN DỤNG
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div data-v-502ae57c="" className="col-6">
   <div data-v-502ae57c="" className="shadow-sm bg-white mb-3 box-employer-info rounded">
      <div data-v-502ae57c="" className="employer-rank-card rank-className rank-className-employer-border">
         <div data-v-502ae57c="" className="account-info d-flex align-items-center pr-0 pl-3 py-3">
            <div data-v-502ae57c="">
               {/* <div data-v-2a31697a="" data-v-502ae57c="" className=" avatar-candi"  style={{marginRight:"1rem", marginLeft:"1rem"}}></div> */}

            {dataemploy.length == 0?<><div data-v-2a31697a="" data-v-502ae57c="" className=" avatar-candi"  style={{marginRight:"1rem", marginLeft:"1rem"}}></div></>:
            <><img src ={dataemploy.image}  style={{width:"60%"}}/></>}
            </div>
            <div data-v-502ae57c="" className="pl-3">
               <div data-v-502ae57c="" className="font-weight-bold text-primary">{employer.name !== null?employer.name:"Đăng nhập"}</div>
               <div data-v-502ae57c="" className="small text-gray">
                  Mã NTD: <strong data-v-502ae57c=""> {employer.id}</strong> &nbsp;
                  <br data-v-502ae57c=""/>
                  Email: <strong data-v-502ae57c="">{employer.email}</strong> <br data-v-502ae57c=""/>
                  Số ĐT: <strong data-v-502ae57c="">{employer.phone}</strong>
               </div>
            </div>
            <div data-v-502ae57c="" className="ml-auto employer-rank"  id="employranks"
            >

               <a data-v-502ae57c="" href="/" target="_blank" className="rank-name text-white d-flex align-items-center text-decoration-none justify-content-start ">
                  <div data-v-502ae57c="" className="rank-icon mx-3">
                     <img data-v-502ae57c="" src={v1}   style={{backgroundColor:"rgb(255, 255, 255)", borderRadius:"50px"}} /></div>
                  <div data-v-502ae57c="" className="my-2">
                     <p data-v-502ae57c="" className="text-uppercase mb-0 font-weight-bold" style={{fontWeight:"900"}}>Employer</p>
                     <p data-v-502ae57c="" className="mb-0" style={{fontSize:"12px", fontWeight:"300"}}>Hạng khách hàng</p>
                  </div>
                  <div data-v-502ae57c="" className="ml-3 my-2"><i data-v-502ae57c="" className="fa fa-arrow-right"></i></div>
               </a>
            </div>
         </div>
         <div data-v-502ae57c="">
            <h1 data-v-502ae57c=""   style={{marginLeft:"16px", fontSize:"16px"}}>Hạng khách hàng thân thiết</h1>
            <div data-v-502ae57c="" className="d-block">
               <div data-v-428883c4="" data-v-502ae57c="" className="bg-white card border-0  d-block">
                  <div data-v-428883c4="" className="card-body border-danger d-flex">
                     <div data-v-428883c4="" className="rank-className-employer" 
                     style={{width:"113px", fontSize:"12px", paddingLeft:"8px"}}>
                        <div data-v-428883c4="" className="text-center">
                           <div data-v-428883c4="" className="rank-last rank-info">Employer</div>
                           <div data-v-428883c4="" className="rank-last rank-money">0</div>
                        </div>
                        <div data-v-428883c4="" className="progress"   style={{borderRadius:"10px", height:"10px"}}>
                           <div data-v-428883c4="" aria-valuenow="0" aria-valuemax="100" aria-valuemin="0" role="progressbar" className="progress-bar" style={{width:"0%"}}></div>
                        </div>
                     </div>
                     <div data-v-428883c4="" className="rank-className-silver"   style={{width:"113px", fontSize:"12px", paddingLeft:"8px"}} >
                        <div data-v-428883c4="" className="text-center">
                           <div data-v-428883c4="" className="rank-last rank-info">Bạc</div>
                           <div data-v-428883c4="" className="rank-last rank-money">30,000,000</div>
                        </div>
                        <div data-v-428883c4="" className="progress"  style={{borderRadius:"10px", height:"10px"}}>
                           <div data-v-428883c4="" aria-valuenow="0" aria-valuemax="100" aria-valuemin="0" role="progressbar" className="progress-bar" style={{width:"0%"}}></div>
                        </div>
                     </div>
                     <div data-v-428883c4="" className="rank-className-gold"  style={{width:"113px", fontSize:"12px", paddingLeft:"8px"}}>
                        <div data-v-428883c4="" className="text-center">
                           <div data-v-428883c4="" className="rank-last rank-info">Vàng</div>
                           <div data-v-428883c4="" className="rank-last rank-money">80,000,000</div>
                        </div>
                        <div data-v-428883c4="" className="progress"  style={{borderRadius:"10px", height:"10px"}}>
                           <div data-v-428883c4="" aria-valuenow="0" aria-valuemax="100" aria-valuemin="0" role="progressbar" className="progress-bar"style={{width:"0%"}}></div>
                        </div>
                     </div>
                     <div data-v-428883c4="" className="rank-className-platinum"  style={{width:"113px", fontSize:"12px", paddingLeft:"8px"}}>
                        <div data-v-428883c4="" className="text-center">
                           <div data-v-428883c4="" className="rank-last rank-info">Bạch Kim</div>
                           <div data-v-428883c4="" className="rank-last rank-money">150,000,000</div>
                        </div>
                        <div data-v-428883c4="" className="progress"  style={{borderRadius:"10px", height:"10px"}}>
                           <div data-v-428883c4="" aria-valuenow="0" aria-valuemax="100" aria-valuemin="0" role="progressbar" className="progress-bar"style={{width:"0%"}}></div>
                        </div>
                     </div>
                     <div data-v-428883c4="" className="rank-className-diamond"  style={{width:"113px", fontSize:"12px", paddingLeft:"8px"}}>
                        <div data-v-428883c4="" className="text-center">
                           <div data-v-428883c4="" className="rank-last rank-info">Kim Cương</div>
                           <div data-v-428883c4="" className="rank-last rank-money">250,000,000</div>
                        </div>
                        <div data-v-428883c4="" className="progress" style={{borderRadius:"10px", height:"10px"}}>
                           <div data-v-428883c4="" aria-valuenow="0" aria-valuemax="100" aria-valuemin="0" role="progressbar" className="progress-bar" 
                          style={{width:"0%"}}></div>
                        </div>
                     </div>
                  </div>
                  <div data-v-428883c4="" className="tooltip-info">
                     <div data-v-428883c4="" className="direction-bottom-center direction text-normal tooltip-radiant rank-className-employer-tooltip">
                        <div data-v-428883c4="" className="fs-14 d-flex rank-className-employer">
                           <div data-v-428883c4="" className="text-center mt-1" style={{width:"60px"}}>
                              <img data-v-428883c4="" width="60px" src={v1}/></div>
                           <div data-v-428883c4="" className="d-block text-center" style={{marginRight:"16px", paddingTop:"10px",minWidth:"130px"}} >
                              <span data-v-428883c4="">Hạn mức hiện tại</span> <span data-v-428883c4="" 
                              className="rank-money"  style={{fontSize:"20px"}}>
                              0
                              </span>
                           </div>
                           <div data-v-428883c4="" className="text-center d-flex align-items-center justify-content-center"
                           style={{borderLeft:"1px solid rgb(232, 237, 242)", color:"rgb(94, 99, 104)", paddingLeft:"16px", fontSize:"12px"}}
                           >
                              <div data-v-428883c4="">
                                 Bạn chỉ cần chi tiêu thêm <span data-v-428883c4="" className="rank-money">30,000,000</span> VND để đạt hạng
                                 <span data-v-428883c4="" className="next-rank"><strong data-v-428883c4="">Bạc</strong></span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div data-v-502ae57c="" className="text-center mt-3"><button data-v-502ae57c="" className="btn btn-show-gift btn-second-primary" 
             style={{marginLeft:"16px", marginBottom:"14px"}}><strong data-v-502ae57c=""> Xem phần quà của tôi </strong></button></div>
         </div>
         
         <div data-v-502ae57c="" className="services-info border-top">
            <div data-v-502ae57c="" className="d-flex">
               <div data-v-502ae57c="" className="flex-fill credit border-right p-3">
                  <div data-v-502ae57c="" className="text-grey mb-1 small">Số lượng credit (CP)</div>
                  <div data-v-502ae57c="" className="d-flex align-items-start">
                     <div data-v-502ae57c="">
                        <div data-v-502ae57c="" className="mr-2 main small mb-2 rounded-pill px-2 py-1 bg-warning text-white">
                           Chính:
                           0 CP
                        </div>
                       
                     </div>
                     <div data-v-502ae57c="">
                        <div data-v-502ae57c="" className="promote small mb-2 rounded-pill px-2 py-1 text-yellow">
                           Khuyến mãi:
                           0 CP
                        </div>
                       
                     </div>
                  </div>
               </div>
               <div data-v-502ae57c="" className="flex-fill prepaid p-3">
                  <div data-v-502ae57c="" className="text-grey mb-1 small">Số lượt mở liên hệ ứng viên (OP)</div>
                  <div data-v-502ae57c="" className="d-flex align-items-start">
                     <div data-v-502ae57c="">
                        <div data-v-502ae57c="" className="mr-2 main small mb-2 rounded-pill px-2 py-1 text-white">
                           Chính:
                           0 OP
                        </div>
                       
                     </div>
                     <div data-v-502ae57c="">
                        <div data-v-502ae57c="" className="mb-2 promote small rounded-pill px-2 py-1 text-info">
                           Khuyến mãi:
                           0 OP
                        </div>
                       
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div data-v-502ae57c="" className="row">
      {/* <div data-v-502ae57c="" className="col-6 pr-0">
         <div data-v-107eec64="" data-v-502ae57c="" className="card border-0 shadow-sm rounded">
            <div data-v-107eec64="" className="p-3">
               <h5 data-v-107eec64="">Đề xuất từ Toppy AI</h5>
               <div data-v-107eec64="" className="mt-2 box-content">
                  <div data-v-107eec64="" className="text-grey">Tự động phân tích bằng công nghệ trí tuệ nhân tạo</div>
                  <div data-v-107eec64="" className="suggest-box">
                     <div data-v-107eec64="" className="mt-3 text-nowrap d-flex">
                        <span data-v-107eec64="" className="badge rounded-circle transparent-1 icon badge-success badge-green"><i data-v-107eec64="" className="far fa-wrench"></i></span> 
                        <div data-v-107eec64="" className="align-self-center"><span data-v-107eec64="" className="ml-1">Tối ưu thiết lập</span> <span data-v-107eec64="" className="badge badge-success small badge-green">3</span></div>
                     </div>
                  </div>
               </div>
            </div>
            <hr data-v-107eec64="" className="m-0"/>
            <div data-v-107eec64="" className="px-3 pb-3 pt-2"><a data-v-107eec64="" href="/app/suggestions" className="btn btn-text text-primary text-left w-100 pl-0 pb-0 text-uppercase"><i data-v-107eec64="" className="fal fa-robot mr-1"></i> Xem tất cả đề xuất </a></div>
         </div>
      </div> */}
      {/* <div data-v-502ae57c="" className="col-6">
         <div data-v-f232a47c="" data-v-502ae57c="" className="card border-0 shadow-sm rounded">
            <div data-v-f232a47c="" className="p-3">
               <h5 data-v-f232a47c="">Dịch vụ sắp hết hạn</h5>
               <div data-v-f232a47c="">
                  <div data-v-f232a47c="" className="mt-2 text-grey">
                     Hiện không có dịch vụ nào sắp hết hạn
                  </div>
               </div>
            </div>
            <hr data-v-f232a47c="" className="m-0"/>
            <div data-v-f232a47c="" className="px-3 pb-3 pt-2"><a data-v-f232a47c="" href="/app/services" className="btn btn-text text-primary text-left w-100 pl-0 pb-0"><i data-v-f232a47c="" className="fal fa-magic mr-1"></i> QUẢN LÝ DỊCH VỤ </a></div>
         </div>
      </div> */}
   </div>
</div>

               </div>
              
               {/* end */}
            {/* end */}
          </div>














         </div>:  ""}


         {/* dang tin */}

         {currentURL =='/app-employer/post-new'?<Postnews mydata={employer}/>:""}
       
         {/* quản lý tin */}
         {currentURL =='/app-employer/manager-post'?<Managejobpostings mydata={employer}/>:""}

         {/* đề xuất ứng viên */}
         {currentURL =='/app-employer/yuki'?<Yuki mydata={employer}/>:""}

         {/* Báo cáo tuyển dụng */}

         {currentURL =='/app-employer/report-campaign'?<ReportPost mydata={employer}/>:""}
         {/* Cài đặt tài khoản */}
         {currentURL =='/app-employer/setting'?<Settingemployer mydata={employer}/>:""}

         {/* thông báo hệ thống */}
         {currentURL =='/app-employer/thong-bao-he-thong'?<ReportHeThong mydata={employer}/>:""}

         {currentURL =='/app-employer/chien-dich-tuyen-dung'?<Chiendichdangtuyen mydata={employer}/>:""}
      </div>
    
   </div>
    
    
    
    
    
    

    <FloatButton.Group
      trigger="hover"
      type="primary"
      style={{
        right: 60,
      }}
      icon={<CustomerServiceOutlined />}
    >
      <FloatButton />
      <FloatButton icon={<CommentOutlined />} />
    </FloatButton.Group>
    
    
    
    
    
    
    </>
  )
}

export default DashboardCandi