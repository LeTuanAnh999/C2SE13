import React, { useState } from 'react'
import "./style.css"
import  logo from "./LOGO.png"
// import logo2 from"./hired-concept-illustration_114360-8873.avif";
// import logo3 from "./interview-concept-illustration_114360-1678.avif"
import { singemployer } from '../../api/employerapi/Employerapi'
import { message } from 'antd'
import { useNavigate } from "react-router-dom";
function Signcandidate() {
    let navigate = useNavigate(); 
    const [messageApi, contextHolder] = message.useMessage();
    const [employlogin,setemployerlogin] = useState({
        "email":"",
        "password":""
    })

    const onvaluechangeemail = (event) =>{
        setemployerlogin((prev) => ({ ...prev, email: event.target.value }));
    }
    const onvaluechangepassword =(event) =>{
        setemployerlogin((prev) =>({...prev,password: event.target.value}));

    }

    const hanlderloginemloyer = async()=>{

        if(employlogin.email === '' || employlogin.password ===''){
            messageApi.open({
                type: 'warning',
                content: 'Vui lòng kiểm tra thông tin',
              });
        }else{
            const data = new FormData();
            data.append("email", employlogin.email);
            data.append("password", employlogin.password);

            const result = await singemployer(data);
            console.log(result.data.message)
            if(result.data.message === 'Lỗi'){
                messageApi.open({
                    type: 'warning',
                    content: 'Vui lòng kiểm tra thông tin',
                  });
            }
            else{
                window.localStorage.setItem("employercccd",(result.data.message));
                navigate("/app-employer/dashboard");
            }
        }

        
    }




  return (
    <>
    {/* <div className="container" style={{backgroundColor:"#ffff"}}>
        <div className="row"> */}
         {contextHolder}
        <div data-v-24682048="" className="login">
                <div data-v-24682048="" className="wrapper row mx-0 align-items-center"  style={{margin:"0px"}}>
                    <div data-v-24682048="" className="px-0 col-md-7 col-lg-8 login-container d-flex justify-content-center">
                        <div data-v-24682048="" className="login-form my-5 w-100 justify-content-center grid" style={{position:"relative"}}>
                            <div data-v-24682048=""  style={{position:"absolute"}} className="container-main-form row justify-content-center mx-0">
                            <div data-v-24682048="" className="main-form"  style={{marginTop:"-5%"}}>
                                <div data-v-6320da9d="" data-v-24682048="">
                                    <div data-v-6320da9d="" className="logo-container"  style={{maxHeight:"370px"}}><img data-v-6320da9d="" src={logo} className="logo" style={{minHeight:"5rem"}}/></div>
                                    <div data-v-6320da9d="" className="form-container">
                                        <h2 data-v-6320da9d="" className="text-primary font-weight-700" style={{fontSize:"24px"}}>Chào mừng bạn đã quay trở lại</h2>
                                        <div data-v-6320da9d="" className="text-muted">Cùng tạo dựng lợi thế cho doanh nghiệp bằng trải nghiệm công nghệ tuyển dụng ứng dụng sâu AI &amp; Hiring Funnel</div>
                                        <div  data-v-6320da9d="" className="form" data-gtm-form-interact-id="0">
                                        <div data-v-6320da9d="" className="form-group">
                                            <label data-v-6320da9d="" className="font-weight-bold">Email</label> 
                                            <div data-v-6320da9d="" className="login-input">
                                                <div data-v-3e6770e8="" data-v-6320da9d="">
                                                    <div data-v-3e6770e8="" className="input-container ml-auto position-relative left-inner-addon">
                                                    <i data-v-3e6770e8="" className="left far fa-envelope text-primary"></i> 
                                                     <input data-v-3e6770e8="" id="cXjVSwuTrS"  placeholder="Email" type="text" className="form-control" 
                                                        onChange={onvaluechangeemail}
                                                        value={employlogin.email}
                                                     data-gtm-form-interact-field-id="0"/> 



                                                    </div>
                                              
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-6320da9d="" className="form-group">
                                            <div data-v-6320da9d="" className="d-flex justify-content-between"><label data-v-6320da9d="" className="font-weight-bold">Mật khẩu</label></div>
                                            <div data-v-6320da9d="" className="login-input text-dark">
                                                <div data-v-3e6770e8="" data-v-6320da9d="">
                                                    <div data-v-3e6770e8="" className="input-container ml-auto position-relative left-and-right-inner-addon">
                                                    <i data-v-3e6770e8="" className="left fal fa-lock text-primary"></i> <i data-v-3e6770e8="" className="right fa-sharp fa-regular fa-eye-slash" style={{marginLeft:"92%"}}></i> 
                                                    <input data-v-3e6770e8="" id="kgoVnqCSYs" autoComplete="true" placeholder="Mật khẩu" type="password" 
                                                    className="form-control" data-gtm-form-interact-field-id="1"
                                                    onChange={onvaluechangepassword}
                                                    value={employlogin.password}/>
                                                    </div>
                                                
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div data-v-6320da9d="" className="d-flex justify-content-end">
                                            <a data-v-6320da9d="" href="/app/forgot-password" className="text-primary font-weight-bold">
                                            Quên mật khẩu
                                            </a>
                                        </div>
                                        <button  onClick={hanlderloginemloyer}    className="btn min-width btn btn-primary2 w-100 px-3 py-2 font-weight-bold mt-3"  style={{height:"42px", color:"white"}}>

                                            Đăng nhập
                                        </button>
                                        </div>
                                        <div data-v-6320da9d="" className="mt-3 d-flex justify-content-center">
                                        <div data-v-6320da9d=""><span data-v-6320da9d="" className="text-muted">Chưa có tài khoản?</span> <a data-v-6320da9d="" href="/app/sign" className="text-primary font-weight-bold">
                                            Đăng ký ngay
                                            </a>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-v-24682048="" className="mt-3 mb-4 d-flex justify-content-center w-100" style={{bottom:"0px"}}>
                                <div data-v-24682048="" className="mt-5"><span data-v-24682048="" className="text-primary"  style={{bottom:"-150px",position:"relative"}}>©2023-2023 Vieclamgiaoduc Vietnam JSC. All rights reserved.</span></div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div data-v-24682048="" id="login-slider" data-ride="carousel" className="px-0 col-md-5 col-lg-4 carousel slide">
                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-bs-interval="10000">
                                    <img src={logo} className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                    <img src={logo} className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                    <img src={logo} className="d-block w-100" alt="..."/>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                                </div>
                    </div>
                </div>
                </div>

    {/* </div>
    </div> */}
    
    
    </>
  )
}

export default Signcandidate