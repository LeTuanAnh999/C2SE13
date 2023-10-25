import React, { useState, useEffect } from 'react';
import "./style.css"
import bv1 from "./bussiness.webp"
import ring from "./ring.webp"
import bv2 from "./student.webp"
import logo from "../login/LOGO.png"
import Select from 'react-select';
import { Radio } from 'antd';
import Marquee from 'react-fast-marquee';
import { Alert,message } from 'antd';
import { registeremployer } from '../../api/employerapi/Employerapi';


const optionsvitricongtac = [
  { value: 'Nhân viên', label: 'Nhân viên' },
  { value: 'Trưởng phòng', label: 'Trưởng phòng' },
  { value: 'Phó phòng', label: 'Phó phòng' },
  { value: 'Giám đốc', label: 'Giám đốc' },
  { value: 'Phó giám đốc', label: 'Phó giám đốc' },
  { value: 'Khác', label: 'Khác' },
];

const optionsdiadiemlamviec = [
  { value: 'Hà Nội', label: 'Hà Nội' },
  { value: 'Hồ Chí Minh', label: 'Hồ Chí Minh' },
  { value: 'Hải Phòng', label: 'Hải Phòng' },
  { value: 'Đà Nẵng', label: 'Đà Nẵng' },
  { value: 'Cần Thơ', label: 'Cần Thơ' },
  { value: 'An Giang', label: 'An Giang' },
  { value: 'Bà Rịa - Vũng Tàu', label: 'Bà Rịa - Vũng Tàu' },
  { value: 'Bạc Liêu', label: 'Bạc Liêu' },
  { value: 'Bắc Kạn', label: 'Bắc Kạn' },
  { value: 'Bắc Giang', label: 'Bắc Giang' },
  { value: 'Bắc Ninh', label: 'Bắc Ninh' },
  { value: 'Bến Tre', label: 'Bến Tre' },
  { value: 'Bình Dương', label: 'Bình Dương' },
  { value: 'Bình Định', label: 'Bình Định' },
  { value: 'Bình Phước', label: 'Bình Phước' },
  { value: 'Bình Thuận', label: 'Bình Thuận' },
  { value: 'Cà Mau', label: 'Cà Mau' },
  { value: 'Cao Bằng', label: 'Cao Bằng' },
  { value: 'Đắk Lắk', label: 'Đắk Lắk' },
  { value: 'Đắk Nông', label: 'Đắk Nông' },
  { value: 'Điện Biên', label: 'Điện Biên' },
  { value: 'Đồng Nai', label: 'Đồng Nai' },
  { value: 'Đồng Tháp', label: 'Đồng Tháp' },
  { value: 'Gia Lai', label: 'Gia Lai' },
  { value: 'Hà Giang', label: 'Hà Giang' },
  { value: 'Hà Nam', label: 'Hà Nam' },
  { value: 'Hà Tĩnh', label: 'Hà Tĩnh' },
  { value: 'Hải Dương', label: 'Hải Dương' },
  { value: 'Hậu Giang', label: 'Hậu Giang' },
  { value: 'Hoà Bình', label: 'Hoà Bình' },
  { value: 'Hưng Yên', label: 'Hưng Yên' },
  { value: 'Khánh Hòa', label: 'Khánh Hòa' },
  { value: 'Kiên Giang', label: 'Kiên Giang' },
  { value: 'Kon Tum', label: 'Kon Tum' },
  { value: 'Lai Châu', label: 'Lai Châu' },
  { value: 'Lâm Đồng', label: 'Lâm Đồng' },
  { value: 'Lạng Sơn', label: 'Lạng Sơn' },
  { value: 'Lào Cai', label: 'Lào Cai' },
  { value: 'Long An', label: 'Long An' },
  { value: 'Nam Định', label: 'Nam Định' },
  { value: 'Nghệ An', label: 'Nghệ An' },
  { value: 'Ninh Bình', label: 'Ninh Bình' },
  { value: 'Ninh Thuận', label: 'Ninh Thuận' },
  { value: 'Phú Thọ', label: 'Phú Thọ' },
  { value: 'Phú Yên', label: 'Phú Yên' },
  { value: 'Quảng Bình', label: 'Quảng Bình' },
  { value: 'Quảng Nam', label: 'Quảng Nam' },
  { value: 'Quảng Ngãi', label: 'Quảng Ngãi' },
  { value: 'Quảng Ninh', label: 'Quảng Ninh' },
  { value: 'Quảng Trị', label: 'Quảng Trị' },
  { value: 'Sóc Trăng', label: 'Sóc Trăng' },
  { value: 'Sơn La', label: 'Sơn La' },
  { value: 'Tây Ninh', label: 'Tây Ninh' },
  { value: 'Thái Bình', label: 'Thái Bình' },
  { value: 'Thái Nguyên', label: 'Thái Nguyên' },
  { value: 'Thanh Hóa', label: 'Thanh Hóa' },
  { value: 'Thừa Thiên Huế', label: 'Thừa Thiên Huế' },
  { value: 'Tiền Giang', label: 'Tiền Giang' },
  { value: 'Trà Vinh', label: 'Trà Vinh' },
  { value: 'Tuyên Quang', label: 'Tuyên Quang' },
  { value: 'Vĩnh Long', label: 'Vĩnh Long' },
  { value: 'Vĩnh Phúc', label: 'Vĩnh Phúc' },
  { value: 'Yên Bái', label: 'Yên Bái' },
];


function isGmailAddress(email) {
  const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  return gmailPattern.test(email);
}
function isValidPhoneNumber(phoneNumber) {
  // Sử dụng biểu thức chính quy để kiểm tra số điện thoại
  const phoneNumberRegex = /(0[2-9]|01[2689]|09)[0-9]{8}/;

  return phoneNumberRegex.test(phoneNumber);
}
function RegisterCandidate() {
  const [messageApi, contextHolder] = message.useMessage();
  // vị trí công tác
  const [selectedOptionsvitricongtac, setSelectedOptionsvitricongtac] = useState([]);
  const handleSelectChangevitricongtac = (selected) => {
    try {
      const  vitricongtac = document.getElementById('validatevitri')
      vitricongtac.style.display="none"
    } catch (error) {
      
    }
 
    setSelectedOptionsvitricongtac(selected);
  };

  // vị trí làm việc
  const [selectedOptionsvitrilamviec, setSelectedOptionsvitrilamviec] = useState([]);
  const handleSelectChangevitrilamviec = (selected) => {
    try {
      const  vitricongtac = document.getElementById('validatediadiemlamviec')
      vitricongtac.style.display="none"
    } catch (error) {}
    setSelectedOptionsvitrilamviec(selected);
  };

  const [employerdata,setemployerdata] = useState({
    email:"",
    password:"",
    name:"",
    phone:"",
    skype:"",
    password2:"",
    congtyname:""
  })

  // giới tính
  const [gender, setGender] = useState("Nam");
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const hanlderclicka =()=>{
    const gethrefa = document.getElementById('modal-register');
    gethrefa.style.display="none";
  }

  // email
  const onValueChangeEmail = (event) => {
    const newEmail = event.target.value;
     setemployerdata((prev) => ({ ...prev, email: event.target.value }));
    const isValidEmail = isGmailAddress(newEmail);
    console.log(isValidEmail)
    const validateemail = document.getElementById('LKolUyueFe');
    if(isValidEmail === false){
        validateemail.style.border='1px solid #f41334'
    }
    if(isValidEmail=== true){
       
        validateemail.style.border='1px solid #27ae60';
    }
  };
  // password
  
  const onValueChangePassword = (event) => {
     setemployerdata((prev) => ({ ...prev, password: event.target.value }));
  };

  const[checkpass, setcheckpass] = useState(false)
  //class name
  const [checkclassname,setcheckclassname] = useState('form-control is-invalid')
  //class phone
  const [checkclassphone,setcheckclassphone] = useState('form-control is-invalid')
  //class tencongty
  const [checkclasscity,setcheckclasscity] = useState('form-control is-invalid')
  const onValueChangePassword2 =(event)=> {
    const newpassword = event.target.value;
    const confimpass = document.querySelectorAll('#YZcSBJZYfy');
    if(newpassword === employerdata.password ){
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
    setemployerdata((prev) => ({ ...prev, password2: event.target.value }));
  };

  // họ tên
  const onValueChangeFullName = (event) => {
    const name_new = event.target.value;
    const lenname = name_new.length;
    const validatename_new =  document.getElementById('validatename');
    const bodername = document.getElementById('QKwTRZYHMG')
    if(lenname > 0){
      setcheckclassname('form-control is-valid')
      validatename_new.style.display="none";
      bodername.style.border="1px solid #27ae60"
    }
    else{
      setcheckclassname('form-control is-invalid')
      validatename_new.style.display="block";
      bodername.style.border="1px solid #f41334"
    }
    setemployerdata((prev) => ({ ...prev, name: event.target.value }));
  };
  const onValueChangePhone = (event) => {
    const phone_new= event.target.value;
   
    const validatename_new =  document.getElementById('validatephone');
    const iconphone = document.getElementById('phoneicon');
    // const bodername = document.getElementById('QKwTRZYHMG')
    if(isValidPhoneNumber(phone_new) === true){
      setcheckclassphone('form-control is-valid')
      validatename_new.style.display="none";
      iconphone.style.marginTop = '0px'; 
     
    }
    else{
      setcheckclassphone('form-control is-invalid')
      validatename_new.style.display="block";
      iconphone.style.marginTop = '-7px'; 
     
    }
    setemployerdata((prev) => ({ ...prev, phone: event.target.value }));
  };

  //tên công ty
  const onValueChangcity = (event) => {
    const city_new = event.target.value;
    const lencity = city_new.length;
    const  validatecongty = document.getElementById('validatecity');
    if(lencity > 0){
       validatecongty.style.display="none"
       setcheckclasscity('form-control is-valid')
    }
    else{
      validatecongty.style.display="block"
      setcheckclasscity('form-control is-invalid')
    }
    setemployerdata((prev) => ({ ...prev, congtyname: event.target.value }));
 };


 // skype
 const onvaluechangeskyoe = (event) =>{
  setemployerdata((prev) => ({ ...prev, skype: event.target.value }));

 }

 // 
 
 const Submitdk = async ()=>{
  
  //  messageApi.open({
  //   type: 'success',
  //   content: 'Vui lòng mở email xác thực',
  //   duration: 10,
  // });
  

  const data = new FormData();
  data.append('name', employerdata.name);
  data.append('email', employerdata.email);
  data.append('password', employerdata.password)
  data.append('gender', gender);
  data.append('phone', employerdata.phone);
  data.append('congtyname', employerdata.congtyname);
  data.append('vitricongtac',  selectedOptionsvitricongtac.value)
  data.append('vitrilamviec', selectedOptionsvitrilamviec.value);
  data.append('skype', employerdata.skype)

  const result = await registeremployer(data)
  if(result.data.message ==='oke'){
      messageApi.open({
      type: 'success',
      content: 'Vui lòng mở email xác thực',
      duration: 10,
    });
  }
  else{
    messageApi.open({
      type: 'info',
      content: 'Vui lòng kiểm tra lại thông tin hoặc Email đã đăng ký',
      duration: 10,
    });
  }
 }
  
  return (
    <>
     
    <div className='register-container' style={{padding:"0px",minHeight:"50vh"}}>
    
    {/*  main */}
      <div className='d-flex justify-content-center' style={{margin:"0px", }}> 
      <div className='content-container rounded ' >
         <div data-v-5e57a60e="" className="header policy-box register-form sticky" style={{padding:"0px"}}>
          <img data-v-5e57a60e="" alt="notification icon" src={logo } className="topcv-logo"/> 
          <h2 data-v-5e57a60e="" className="text-primary mb-2 header-title">Đăng ký tài khoản Nhà tuyển dụng</h2>
          <span data-v-5e57a60e="">Cùng tạo dựng lợi thế cho doanh nghiệp bằng trải nghiệm công nghệ tuyển dụng ứng dụng sâu AI &amp; Hiring Funnel.</span>
        </div>


        <div  id="regulations-main" className='policy-box regulations-main' data-v-5e57a60e=''>
        <div className='col-lg-11' style={{zIndex:"10", position:"absolute"}}>
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
          <div className='bg-white register-form position-relative' data-v-5e57a60e='' style={{padding:"0px"}}>
          
            <div className='forms mt-5'>
              <div data-v-5e57a60e="" className="mb-3 mt-3">
                <div data-v-5e57a60e="" className="d-flex mb-2"><span data-v-5e57a60e="" className="font-weight-700 text-account">Tài khoản</span></div>
                <div data-v-5e57a60e="" className="form-group">
                    <label data-v-5e57a60e="" htmlFor="email" className="col-form-label-custom text-dark font-weight-600">
                       Email đăng nhập <span data-v-5e57a60e=""
                        className="text-red font-weight-normal">*</span></label> 
                    <div data-v-5e57a60e="" className="col-form-input">
                      <div data-v-38d45bdf="" data-v-5e57a60e="">
                          <div data-v-38d45bdf="" className="input-container ml-auto left-inner-addon">
                            <i data-v-38d45bdf="" className="left fa-regular fa-envelope"></i> 
                            <input data-v-38d45bdf="" id="LKolUyueFe" placeholder="Email" type="text" className="form-control" autoComplete="on" data-gtm-form-interact-field-id="0"
                            
                            value={employerdata.email}
                            onChange={onValueChangeEmail}
                            />
                          </div>
                        
                      </div>
                      <div data-v-5e57a60e="" className="mt-1 warning-email-text">Việc làm giáo dục khuyến nghị đăng ký bằng email công ty (theo tên miền website công ty) để được hỗ trợ duyệt tin nhanh &amp; đăng tin không giới hạn.</div>
                    </div>
                </div>
                <div data-v-5e57a60e="" className="form-group w-100 mb-2 mt-2">
                    <label data-v-5e57a60e="" htmlFor="email" className="col-form-label-custom text-dark font-weight-600"> Mật khẩu <span data-v-5e57a60e="" className="text-red font-weight-normal">*</span></label> 
                    <div data-v-5e57a60e="" className="col-form-input">
                      <div data-v-38d45bdf="" data-v-5e57a60e="" autoComplete="new-password">
                          <div data-v-38d45bdf="" className="input-container ml-auto left-inner-addon">
                            <i data-v-38d45bdf="" className="left fa-light fa-lock"></i> 

                            {/* pass */}
                             <input data-v-38d45bdf="" id="YZcSBJZYfy" placeholder="Mật khẩu"
                              type="password" className="form-control" autoComplete="on" data-gtm-form-interact-field-id="1"
                              value={employerdata.password}
                                onChange={onValueChangePassword}/>
                          </div>
                    
                      </div>
                      {/* <i data-v-5e57a60e="" className="fa-regular fa-eye password-icon"></i>  */}
                      <i data-v-5e57a60e="" className="fa-regular fa-eye-slash password-icon"></i> 
                      <div data-v-5e57a60e="" className="text-muted mt-1 fs-12"></div>
                    </div>
                </div>
                <div data-v-5e57a60e="" className="form-group w-100">
                    <label data-v-5e57a60e="" htmlFor="password_confirmation" className="col-form-label-custom text-dark font-weight-600"> Nhập lại mật khẩu <span data-v-5e57a60e="" className="text-red font-weight-normal">*</span></label> 
                    <div data-v-5e57a60e="" className="col-form-input">
                      <div data-v-38d45bdf="" data-v-5e57a60e="" autoComplete="new-password">
                          <div data-v-38d45bdf="" className="input-container ml-auto left-inner-addon">
                            <i data-v-38d45bdf="" className="left fa-light fa-lock"></i> 
                            {/* pass */}
                             <input data-v-38d45bdf="" id="YZcSBJZYfy" placeholder="Nhập lại mật khẩu" type="password" 
                             className="form-control" autoComplete="on" value={employerdata.password2}
                             onChange={onValueChangePassword2}/>
                          </div>
                          
                      </div>
                      <i data-v-5e57a60e="" className="fa-regular fa-eye-slash password-icon"></i> 
                      <div data-v-5e57a60e="" className="text-muted mt-1 fs-12"></div>
                    </div>
                </div>
              </div>

            </div>
            {/* thông tin nhà tuyển dụng */}

             <div className='mt-3'>
              <div data-v-5e57a60e="" className="d-flex mb-2"><span data-v-5e57a60e="" className="font-weight-700 text-info-employer">Thông tin nhà tuyển dụng</span></div>
              <div data-v-5e57a60e="" className="d-flex">
                    <div data-v-5e57a60e="" className="form-group w-50">
                        <label data-v-5e57a60e="" htmlFor="fullname" className="col-form-label-custom text-dark font-weight-600"> Họ và tên <span data-v-5e57a60e="" className="text-red font-weight-normal">*</span></label> 
                        <div data-v-5e57a60e="" className="col-form-input">
                          <div data-v-38d45bdf="" data-v-5e57a60e="">
                              <div data-v-38d45bdf="" className="input-container ml-auto left-inner-addon">
                                <i data-v-38d45bdf="" className="left fa-light fa-user"></i> 
                                <input data-v-38d45bdf="" id="QKwTRZYHMG" placeholder="Họ và tên"
                                 type="text" className={checkclassname} autoComplete="on"
                                value ={employerdata.name}
                                 onChange={onValueChangeFullName}/>


                              </div>
                              <div data-v-38d45bdf="" className="invalid-feedback d-block">
                                <div data-v-38d45bdf="" id="validatename">Họ và tên không được để trống</div>
                              </div>
                          </div>
                          <div data-v-5e57a60e="" className="text-muted mt-1 fs-12"></div>
                        </div>
                    </div>
                    <div data-v-5e57a60e="" className="form-group empty-gender"></div>
                    <div data-v-5e57a60e="" className="form-group">
                        <label data-v-5e57a60e="" className="col-form-label-custom text-dark font-weight-600 ">Giới tính: <span data-v-5e57a60e="" className="text-red font-weight-normal">*</span></label> 
                        <div data-v-5e57a60e="" className="col-form-input d-flex gender">
                        <Radio.Group onChange={handleGenderChange} value={gender} defaultValue={"male"}>
                          <Radio value="Nam">Nam</Radio>
                          <Radio value="Nữ">Nữ</Radio>
                        </Radio.Group>
                        </div>
                    
                    </div>
              </div>
              <div data-v-5e57a60e="" className="form-group w-100">
                <label data-v-5e57a60e="" htmlFor="phone" className="col-form-label-custom text-dark font-weight-600"> Số điện thoại cá nhân <span data-v-5e57a60e="" className="text-red font-weight-normal">*</span></label> 
                <div data-v-5e57a60e="" className="col-form-input">
                    <div data-v-e8309ef6="" data-v-5e57a60e="" className="mask-input left-inner-addon">
                      <i data-v-e8309ef6="" className="left fa-light fa-phone position-icon" id="phoneicon"></i> 
                      <input data-v-e8309ef6="" placeholder="Số điện thoại cá nhân" className={checkclassphone}
                      onChange={onValueChangePhone}
                      value={employerdata.phone}/> 
                      <div data-v-e8309ef6="" className="invalid-feedback d-block">
                          <div data-v-e8309ef6=""id="validatephone">Số điện thoại cá nhân không được để trống</div>
                      </div>
                    </div>
                </div>
              </div>

              <div  data-v-5e57a60e="" className='show-in-web'>
                <div data-v-5e57a60e=""  className='d-flex'>
                  <div  data-v-5e57a60e="" className='form-group w-50'>
                    <label data-v-5e57a60e="" htmlFor="company-name" className="col-form-label-custom text-dark font-weight-600"> Công ty <span data-v-5e57a60e="" className="text-red font-weight-normal">*</span></label>
                    <div className='col-form-input'>
                      <div data-v-38d45bdf=''  data-v-5e57a60e=''>
                      <div data-v-38d45bdf="" className="input-container ml-auto left-inner-addon"><i data-v-38d45bdf=""  id="citysa"className="left fa-light fa-building"></i> 
                        <input data-v-38d45bdf="" id="BdzJYepyiA" 
                        placeholder="Tên công ty" type="text" className={checkclasscity} autoComplete="on"
                        onChange={onValueChangcity}
                        value={employerdata.congtyname}
                        /></div>
                        <div data-v-38d45bdf="" className="invalid-feedback d-block"><div data-v-38d45bdf="" id="validatecity">Tên công ty không được để trống</div></div>

                      </div>

                    <div data-v-5e57a60e="" className="text-muted mt-1 fs-12"></div>
                    </div>
                  </div>
                  <div data-v-5e57a60e="" className="form-group w-20"></div>
                  <div className='form-group w-50'  data-v-5e57a60e=''>
                    <label data-v-5e57a60e="" htmlFor="employer_position" className="col-form-label-custom text-dark font-weight-600"> Vị trí công tác <span data-v-5e57a60e="" className="text-red font-weight-normal">*</span></label>
                    <div className='col-form-input'  data-v-5e57a60e=''>
                      <div className='custom-select-icon-position'  data-v-5e57a60e=''>
                        <div id="BEwrSoqkgr" className=' my-custom-select position-relative' data-v-4a7b0f48=''>
                        <i data-v-4a7b0f48="" className="left fa-regular fa-user-tie"></i>
                        <Select
                            // isMulti
                            options={optionsvitricongtac}
                            value={selectedOptionsvitricongtac}
                            onChange={handleSelectChangevitricongtac}
                          />
                          
                        </div>


                      <div data-v-4a7b0f48="" className="invalid-feedback d-block"><span data-v-4a7b0f48="" id="validatevitri">Vị trí công tác không được để trống </span></div>
                      </div>

                    </div>
                  
                  </div>

                </div>
                <div data-v-5e57a60e=""  className='d-flex'>
               
                 
                  <div className='form-group w-50'  data-v-5e57a60e=''>
                    <label data-v-5e57a60e="" htmlFor="employer_position" className="col-form-label-custom text-dark font-weight-600"> Địa điểm làm việc <span data-v-5e57a60e="" className="text-red font-weight-normal">*</span></label>
                    <div className='col-form-input'  data-v-5e57a60e=''>
                      <div className='custom-select-icon-position'  data-v-5e57a60e=''>
                        <div id="BEwrSoqkgr" className=' my-custom-select position-relative' data-v-4a7b0f48=''>
                        <i data-v-4a7b0f48="" className="left fa-light fa-hospital"></i>
                        <Select
                           
                            options={optionsdiadiemlamviec}
                            value={selectedOptionsvitrilamviec}
                            onChange={handleSelectChangevitrilamviec}
                          />
                          
                        </div>


                      <div data-v-4a7b0f48="" className="invalid-feedback d-block"><span data-v-4a7b0f48="" id="validatediadiemlamviec">Địa điểm làm việc không được để trống </span></div>
                      </div>

                    </div>
                  
                  </div>
                  <div data-v-5e57a60e="" className="form-group w-20"></div>
                  <div  data-v-5e57a60e="" className='form-group w-50'></div>

                </div>
                

              </div>

              <div data-v-5e57a60e="" className="form-group w-100">
                <label data-v-5e57a60e="" className="col-form-label-custom text-dark font-weight-600">Skype </label> 
                <div data-v-5e57a60e="" className="col-form-input">
                    <div data-v-3e6770e8="" data-v-5e57a60e="">
                      <div data-v-3e6770e8="" className="input-container ml-auto position-relative">
                      <input data-v-3e6770e8="" id="rjSaJaZNuP" autoComplete="true"
                       placeholder="Tài khoản Skype" type="text" className="form-control"
                       value={employerdata.skype}
                       onChange={onvaluechangeskyoe}/>
                      </div>
                      
                    </div>
                </div>
              </div>

              <div data-v-5e57a60e="" className="form-group form-check">
              {/* <div data-v-5e57a60e="" className="custom-control custom-checkbox form-check-input my-0" type="checkbox"> */}
              <input
                id="58MGUCh"
                type="checkbox"
                className="custom-control-input"
                value="false"
                defaultChecked // Đặt mặc định là true
                disabled // Không cho sửa
              />
                {/* </div> */}
              <label data-v-5e57a60e="" className="form-check-label" >
              Tôi đồng ý với
              {/* <a data-v-5e57a60e="" href="/" target="_blank" className="text-primary text-decoration-none" > */}
              &nbsp;Điều khoản dịch vụ&nbsp;
              {/* </a> */}
              của Vieclamgiaoduc.
           
              </label>
              <br/>
              <a href='/app/login'> <label data-v-5e57a60e="" className="form-check-label" >
               Có tài khoản?
              <a data-v-5e57a60e="" href="/app/login"  className="text-primary text-decoration-none" >
              &nbsp;Đăng nhập nhà tuyển dụng&nbsp;
              </a>
            
              </label>
              </a>
            </div>
          

            <div data-v-5e57a60e="" className="text-center mb-0 action-container"  >
            {/* disabled="disabled" */}
              <button data-v-5e57a60e="" type="submit" className=" btn min-width btn btn-primary btn-lg w-100 btn-register" onClick={Submitdk} >
             
                  Hoàn tất
              </button>
            </div>








             </div>

          </div>

        </div>

      </div>

      </div>
      {/* end */}

      {/* hiển thị modal */}
      <div id="modal-register" className='modal show'>
      <div role="document" className="modal-dialog modal-check-register-user">
   <div className="modal-content border-0">
      <div className="modal-header border-bottom-1 px-4 border-bottom-0">
         <h5 className="modal-title text-truncate overflow-hidden text-nowrap">
       
         </h5>
       
      </div>
      <div data-v-54a53c02="" className="d-flex justify-content-center">
         <div data-v-54a53c02="" className="w-75 text-center">
            <h5 data-v-54a53c02="" className="title">Chào bạn,</h5>
            <p data-v-54a53c02="" className="mb-4 title-content">Bạn hãy dành ra vài giây để xác nhận thông tin dưới đây nhé!
            <img data-v-54a53c02="" src={ring} width="40"/></p>
         </div>
      </div>
      <div data-v-54a53c02="" className="modal-footer content justify-content-center text-center mx-0">
         <div data-v-54a53c02="" className="font-weight-bold desc">Để tối ưu tốt nhất cho trải nghiệm của bạn với Việc làm giáo dục,<br data-v-54a53c02=""/>vui lòng lựa chọn nhóm phù hợp nhất với bạn.</div>
         <div data-v-54a53c02="" className="row w-100 d-flex justify-content-between">
            <div data-v-54a53c02="" className="col-6 text-center grid">
              <img data-v-54a53c02="" src={bv1} className="bussiness-image"/><br data-v-54a53c02=""/> 
              <div data-v-54a53c02="" className="btn btn-primary btn-redirect ml-1"  onClick={hanlderclicka}>Tôi là nhà tuyển dụng</div></div>
            <div data-v-54a53c02="" className="col-6 text-center grid mb-2">
              <img data-v-54a53c02="" src={bv2} className="bussiness-image"/><br data-v-54a53c02=""/> 
              <a data-v-54a53c02="" href="/user/sign" className="btn btn-primary btn-redirect ml-1">Tôi là ứng viên tìm việc</a></div>
         </div>
      </div>
   </div>
</div>
      </div> 

      {/* end */}

    </div>
    
    
    
    
    
    
    
    
    
    </>
    
  );
}

export default RegisterCandidate;
