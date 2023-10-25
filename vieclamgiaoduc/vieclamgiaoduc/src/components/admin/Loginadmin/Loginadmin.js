import React, { useState } from 'react';
import logo from "../LOGO.png"
import "./style.css"
import { signadmin } from '../../api/adminapi/Adminapi';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
const Loginadmin = () => {
    const[admin,setadmin] = useState({
        email:"",
        password:"",
    })
    const [messageApi, contextHolder] = message.useMessage();
    const onValueChangePassword = (event) => {
        setadmin((prev) => ({ ...prev, password: event.target.value }));
    };
    const onValueChangeEmail =(event) =>{
        setadmin((prev)=>({...prev, email:event.target.value}));
    }
    let navigate = useNavigate(); 
  
    const checkloginadmin=async()=>{
        const data = new FormData();
        data.append("email", admin.email);
        data.append("password",admin.password);

        const result = await signadmin(data);
        if(result.data.message === "Lỗi"){
          
                messageApi.open({
                  type: 'warning',
                  content: 'Vui lòng kiểm tra thông tin ',
                });
             
        }
        else{
            window.localStorage.setItem("cccdad",(result.data.message));
            navigate("/admin/dashboard")
        }
    }
    











    return (
    <div className='container'>
            {contextHolder}
    <div className='wrap-auth-section'>
      <div className='auth row mt-5'>
        <div className='auth-form2'>
          <div className='header'>
              <div className="logo">
                    <a href="/">
                        <img src={logo}  style={{height:"180px"}}/>
                    </a>
              </div>
              <h2 className="title">Chào mừng quản trị viên</h2>
              <div className="text-muted caption2 text-center">Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng
              </div>

          </div>
          <div className='login'>
          <div id="form-login" data-gtm-form-interact-id="0">
            <input type="hidden" name="_token" value="zjljFIaWh2OnT7DFwMayjUrMHkc6yYMFj6YqJbh4"/>            
            <div className="form-group mb-24 ">
                <label for="email" className="mb-1">Tài khoản:</label>
                <div className="input-group ">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa-solid fa-envelope"></i></span>
                    </div>
                    <input type="email" name="email" className="form-control" placeholder="Tài khoản được cấp" 
                    aria-label="Email" data-gtm-form-interact-field-id="0"
                    onChange={onValueChangeEmail} value={admin.email}/>
                </div>
            </div>
            <div className="form-group mb-20 ">
                <label for="password" className="mb-1">Mật khẩu:</label>
                <div className="input-group ">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa-solid fa-shield-keyhole"></i></span>
                    </div>
                    <input type="password" id="password" name="password" className="form-control"
                     placeholder="Mật khẩu" aria-label="Mật khẩu" data-gtm-form-interact-field-id="1"
                     onChange={onValueChangePassword}  value={admin.password}/>
                    <div className="input-group-prepend">
                        <button type="button" tabIndex="-1" data-input-target="#password" className="input-group-text toggle-password"></button>
                    </div>
                </div>
            </div>
            <div className="form-group mb-24  wrap-forgot-password">
               
            </div>
            <div className="form-group mt-3">
             <button className="btn btn-sign input-block-level w-100 h-40 mb-24  btn-primary-hover g-recaptcha" data-sitekey="6LfbkH4lAAAAAJ0pQKkudub91zp8nuziDAXr2Gqa" data-callback="onSubmit" data-action="submit"  onClick={checkloginadmin}>Đăng nhập
                </button>
                <p className="or text-center mb-0 fz-12px">Hoặc đăng nhập bằng</p>
            </div>
            <div className="d-flex justify-content-center">
                <a id="login-width-google"  className="btn btn-default btn-signin input-block-level mx-1 h-40 my-3 btn-login-social">
                    <i className="fa-brands fa-google"></i>
                    <span className="ml-2">Google</span>
                </a>
                <div className="d-none custom-google-button" id="login-google-render"><div className="S9gUrf-YoZ4jf" style={{position:"relative"}}><div>
                  <div tabIndex="0" role="button" aria-labelledby="button-label" className="nsm7Bb-HzV7m-LgbsSe  hJDwNd-SxQuSe i5vt6e-Ia7Qfc uaxL4e-RbRzK"><div className="nsm7Bb-HzV7m-LgbsSe-MJoBVe"></div><div className="nsm7Bb-HzV7m-LgbsSe-bN97Pc-sM5MNb "><div className="nsm7Bb-HzV7m-LgbsSe-Bz112c"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="LgbsSe-Bz112c"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg></div><span className="nsm7Bb-HzV7m-LgbsSe-BPrWId">Đăng nhập bằng Google</span><span className="L6cTce" id="button-label">Đăng nhập bằng Google</span></div></div></div><iframe src="https://accounts.google.com/gsi/button?theme=outline&amp;size=large&amp;client_id=856359690731-a0j3qaaq21iorl92btoo15nqqsvffsgd.apps.googleusercontent.com&amp;iframe_id=gsi_711360_549687&amp;as=76gEDdb6TnhiKR2UbSqG%2Fw" id="gsi_711360_549687" title="Nút Đăng nhập bằng Google"
                ></iframe></div></div>
                <a href="/" id="login-width-facebook" className="btn btn-signin btn-primary input-block-level mx-1 h-40 my-3 btn-login-social">
                    <i className="fa-brands fa-facebook"></i>
                    <span className="ml-2">Facebook</span>
                </a>
                <a href="/" id="login-width-linkedin" className="btn btn-default btn-signin btn-signin-linkedin input-block-level mx-1 h-40 my-3 btn-login-social">
                    <i className="fa-brands fa-linkedin"></i>
                    <span className="ml-2">Linkedin</span>
                </a>
            </div>
            <div className="d-flex justify-content-center">
                <div className="d-flex align-items-start gap-2">
                    <div className="pdt-2">
                        {/* <input id="agreement-social-login" name="agreement-social" type="checkbox" checked=""/> */}
                        <label for="agreement-social-login"></label>
                    </div>
                    <p>
                        <label for="agreement-social-login">

                            Bằng việc đăng nhập bằng tài khoản mạng xã hội, tôi đã đọc và đồng ý với <a target="_blank" className="text-success" href="https://www.topcv.vn/terms-of-service">Điều
                                khoản dịch vụ</a> và <a target="_blank" className="text-success" href="/">Chính
                                sách
                                bảo
                                mật</a> của Vieclamgiaoduc

                        </label>
                    </p>
                </div>
            </div>
        </div>

          </div>


        </div>

      </div>

    </div>
    
  </div>
    )};
export default Loginadmin;