import React,{useEffect, useState} from 'react'
import logo from "../LOGO.png"
import Marquee from 'react-fast-marquee';
import { Alert,message } from 'antd';
import { registerCandidate } from '../../api/candidateapi/Candidateapi';

function isGmailAddress(email) {
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return gmailPattern.test(email);
  }
function User_sign() {
    const [datasign , setdatasign] = useState({
        fullname:"",
        email:"",
        password:"",
        password2:""
      })
      
     
     

      const [checkemail,setcheckemail] = useState(false)
      const [checkpass,setcheckpass]  = useState(false)
      const onValueChangeFullName = (event) => {
        setdatasign((prev) => ({ ...prev, fullname: event.target.value }));
      };


      const onValueChangeEmail = (event) => {
        const newEmail = event.target.value;
        setdatasign((prev) => ({ ...prev, email: event.target.value }));

        const isValidEmail = isGmailAddress(newEmail);
        console.log(isValidEmail)
        const validateemail = document.getElementById('validateemail');
        if(isValidEmail === false){
            
            validateemail.style.border='2px solid #f41334'
            setcheckemail(false)
        }
        if(isValidEmail=== true){
            setcheckemail(true)
            validateemail.style.border='2px solid #27ae60';
        }
      };




      const onValueChangePassword = (event) => {
        setdatasign((prev) => ({ ...prev, password: event.target.value }));
      };


      const onValueChangePassword2 =(event)=> {
        const newpassword = event.target.value;
        const confimpass = document.querySelectorAll('#confimpass');
        if(newpassword === datasign.password){
            confimpass.forEach((element) => {
                setcheckpass(true)
                element.style.border='2px solid  #27ae60 '
              });
           
        }
        else{
            setcheckpass(false)
            confimpass.forEach((element) => {
            element.style.border='2px solid #f41334';
        });
        }
        setdatasign((prev) => ({ ...prev, password2: event.target.value }));
      };


      const [passwordVisible, setPasswordVisible] = useState(false);
      const togglePasswordVisibility = () => {
        setPasswordVisible((prev) => !prev);
      };



      const [messageApi, contextHolder] = message.useMessage();
      const warning = () => {
        messageApi.open({
          type: 'warning',
          content: 'Vui lòng kiểm tra thông tin',
        });
      };
      const error = () => {
        messageApi.open({
          type: 'error',
          content: 'Email đã tồn tại trong hệ thống',
        });
      };
      const success = () => {
        messageApi.open({
          type: 'success',
          content: 'Vui lòng mở email xác thực',
          duration: 10,
        });
      };
    const handlersubmit=async()=>{
        if(checkemail ===false || checkpass === false){
            warning();
        }
        else if(checkemail=== true && checkpass === true){

           
            // call api 
            const data = new FormData();
            data.append("name", datasign.fullname)
            data.append("email", datasign.email)
            data.append("password", datasign.password)
            const result = await registerCandidate(data)
            
      
            if(result.data.message ==="Tồn tại"){
                error()
            }
            else{
                success()
            }
        }
    }


    useEffect(() => {
        // Initialize the carousel once the component is mounted
        const carousel = document.querySelector('#carouselLogin');
        new window.bootstrap.Carousel(carousel, {
          interval: 1500, // Set the interval to 1000ms (1 second)
        });
      }, []);
  return (
    <>
    
     <div id="fb-root"></div>

        
    <div className="auth row">

        <div className='col-lg-6' style={{zIndex:"10", position:"absolute"}}>
        {contextHolder}
        <Alert 
           
            banner
            message={

            <Marquee pauseOnHover gradient={false}>
                Vui lòng nhập đúng thông tin email để xác thực người dùng!
            </Marquee>
           
            }
        />

        </div>
        <div className="col-lg-6 auth-form">
        <div className="header">
                <div className="logo mb-2">
                    <a href="/">
                        <img src={logo} style={{height:"130%"}}/>
                    </a>
                </div>
                <h2 className="title">Chào mừng bạn đến với Việc làm giáo dục</h2>
                <div className="text-muted caption">Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý
                    tưởng</div>
            </div>
            <div className="register">
                <div  id="form-register">
                    <input type="hidden" name="_token" value=""/>
                    <div className="form-group mb-3">
                        <label htmlFor="fullname" className="mb-1">Họ và tên</label>
                        <div className="input-group ">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa-solid fa-user"></i></span>
                            </div>
                            <input type="text" name="fullname" className="form-control"
                                placeholder="Nhập họ và tên của bạn" aria-label="Nhập họ và tên của bạn"
                                value={datasign.fullname}
                                onChange={ onValueChangeFullName}/>
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="email" className="mb-1">Email</label>
                        <div className="input-group " id="validateemail">
                            <div className="input-group-prepend" >
                                <span className="input-group-text"><i className="fa-solid fa-envelope"></i></span>
                            </div>
                            <input type="email" name="email" className="form-control" placeholder="Nhập email của bạn"
                                aria-label="Nhập email của bạn" 
                                value={datasign.email}
                                onChange={onValueChangeEmail} />
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="password" className="mb-1">Mật khẩu</label>
                        <div className="input-group " id="confimpass" >
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa-solid fa-shield-keyhole"></i></span>
                            </div>
                            <input type={passwordVisible ? 'text' : 'password'}id="password" name="password" className="form-control"
                                placeholder="Nhập mật khẩu" aria-label="Nhập mật khẩu"   value={datasign.password}
                                onChange={onValueChangePassword} />
                            <div className="input-group-prepend">
                                <button type="button" tabIndex="-1" data-input-target="#password"
                                    className="input-group-text toggle-password" id="checkpasswords"  onClick={togglePasswordVisibility}></button>
                            </div>
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="password_confirmation" className="mb-1">Xác nhận mật khẩu</label>
                        <div className="input-group " id="confimpass">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa-solid fa-shield-keyhole"></i></span>
                            </div>
                            <input type={passwordVisible ? 'text' : 'password'}id="password_confirmation" name="password_confirmation"
                                className="form-control" placeholder="Nhập lại mật khẩu" aria-label="Nhập lại mật khẩu"
                                onChange={onValueChangePassword2}
                                value={datasign.password2}
                                
                                />
                            <div className="input-group-prepend">
                                <button type="button" tabIndex="-1" data-input-target="#password_confirmation"
                                    className="input-group-text toggle-password" onClick={togglePasswordVisibility}></button>
                            </div>
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <p className="agree-term">
                            Bằng việc đăng ký tài khoản, bạn đã đồng ý với <a target="_blank"
                                href="" className="text-highlight">Điều khoản dịch
                                vụ</a> và <a target="_blank" href=""
                                className="text-highlight">Chính sách bảo
                                mật</a> của chúng tôi
                        </p>
                        <button type="submit"
                            className="btn btn-sign input-block-level w-100 h-40 mb-3 btn-primary-hover"  onClick={handlersubmit}>Đăng ký</button>
                        <p className="or text-center mb-0 fz-12px">Hoặc đăng nhập bằng tài khoản mạng xã hội</p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <a href=";"
                            className="btn btn-signin btn-primary input-block-level mx-1 h-40 my-3">
                            <i className="fa-brands fa-facebook-square"></i>
                            <span className="ml-2">Facebook</span>
                        </a>
                        <a id="login-width-google" className="btn btn-default btn-signin input-block-level mx-1 h-40 my-3">
                            <i className="fa-brands fa-google"></i>
                            <span className="ml-2">Google</span>
                        </a>
                        <a href=""
                            className="btn btn-default btn-signin btn-signin-linkedin input-block-level mx-1 h-40 my-3">
                            <i className="fa-brands fa-linkedin"></i>
                            <span className="ml-2">Linkedin</span>
                        </a>
                    </div>
                </div>
                <div className="mt-3 d-flex justify-content-between option-auth">
                    <div>
                        <span>Bạn đã có tài khoản?</span>
                        <a className="text-success font-weight-bold" href="/user/login">
                            Đăng nhập ngay
                        </a>
                    </div>
                </div>
                <div className="mt-4 support fz-12px">
                    <p className="fw-bold mb-0">
                        Bạn gặp khó khăn khi tạo tài khoản?
                    </p>
                    <p className="mb-0">
                        Vui lòng gọi tới số (024) 6680 5588 (giờ hành chính).
                    </p>
                </div>
            </div>
        </div>

        
        <div id="login-slider" className="px-0 col-6 carousel slide d-none d-lg-block" data-ride="carousel" data-bs-interval={1000}>
            <div id="carouselLogin" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselLogin" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselLogin" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselLogin" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="img-top">
                            <img src="https://topcv.vn/v4/image/tool-cv.png" className="w-100" alt="..."/>
                        </div>
                        <div className="carousel-caption d-none d-md-block">
                            <h4 className="title">Công cụ viết CV đẹp Miễn phí</h4>
                            <p className="caption">Nhiều mẫu CV đẹp, phù hợp nhu cầu ứng tuyển các vị trí khác nhau.
                                Dễ dàng chỉnh sửa thông tin, tạo CV online nhanh chóng trong vòng 5 phút.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="img-top">
                            <img src="https://www.topcv.vn/v4/image/sec-safe.png" className="w-100" alt="..."/>
                        </div>
                        <div className="carousel-caption d-none d-md-block">
                            <h4 className="title">Bảo mật & An toàn tuyệt đối</h4>
                            <p className="caption">Bạn có thể chủ động bật / tắt trạng thái tìm việc. Nếu trạng thái
                                tắt, không ai có thể xem được CV của bạn.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="img-top">
                            <img src="https://www.topcv.vn/v4/image/support.png" className="w-100" alt="..."/>
                        </div>
                        <div className="carousel-caption d-none d-md-block">
                            <h4 className="title">Hỗ trợ Người tìm việc</h4>
                            <p className="caption">Nhà tuyển dụng chủ động tìm kiếm và liên hệ với bạn qua hệ thống
                                kết nối ứng viên thông minh.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default User_sign