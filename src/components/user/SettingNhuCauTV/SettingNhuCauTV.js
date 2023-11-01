import React ,{useState}from 'react'
import User_header from '../page_header/User_header'
import { Button, Input } from 'antd';
import Select from 'react-select';
import 'react-toastify/dist/ReactToastify.css';
import {  toast, } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import { postthongtintimviecchapi } from '../../api/candidateapi/Candidateapi';
const optionsvitrituyendung =[
    { value: 'Trợ Lý Hiệu Trưởng', label: 'Trợ Lý Hiệu Trưởng' },
    { value: 'Hiệu Trưởng', label: ' Hiệu Trưởng' },
    { value: 'Phó Hiệu Trưởng', label: 'Phó Hiệu Trưởng' },
    { value: 'Viện Trưởng', label: 'Viện Trưởng' },
    { value: 'Hỗ Trợ Giáo Dục', label: 'Hỗ Trợ Giáo Dục' },
    { value: 'Giám Thị', label: 'Giám Thị ' },
    { value: 'Giảng Dạy', label: 'Giảng Dạy' },
    { value: 'Trưởng khoa', label: 'Trưởng khoa' },
    { value: 'Điều Hành - Quản Lý', label: 'Điều Hành - Quản Lý' },
    { value: 'Cố Vấn Đào Tạo', label: 'Cố Vấn Đào Tạo' },
    { value: 'Giám Đốc Đào Tạo', label: 'Giám Đốc Đào Tạo' },
    { value: 'Giám Đốc Đào Trung Tâm', label: 'Giám Đốc Trung Tâm' },
    { value: 'Giảng Viên Đại Học', label: 'Giảng Viên Đại Học' },
    { value: 'Giảng Viên Sau Đại Học', label: 'Giảng Viên Sau Đại Học' },
    { value: 'Giáo Viên Mầm Non', label: 'Giáo Viên Mầm Non' },
    { value: 'Giáo Viên Lập Trình', label: 'Giáo Viên Lập Trình' },
    { value: 'Giáo Viên Âm Nhạc', label: 'Giáo Viên Âm Nhạc' },
    { value: 'Giáo Viên Mỹ Thuật', label: 'Giáo Viên  Mỹ Thuật' },
    { value: 'Trợ Giảng', label: 'Trợ Giảng' },
    { value: 'Cố Vấn Học Thuật', label: 'Cố Vấn Học Thuật' },
    { value: 'Thu Qũy Văn Thư', label: 'Thu Qũy Văn Thư' },
    { value: 'Giáo Viên Tiếng Anh', label: 'Giáo Viên Tiếng Anh' },
    { value: 'Tư Vấn Tuyển Sinh', label: 'Tư Vấn Tuyển Sinh' },


]
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
  const optionkinhnghiem =[
    { value: 'Dưới 1 năm kinh nghiệm', label: 'Dưới 1 năm kinh nghiệm' },
    { value: '1 năm kinh nghiệm', label: '1 năm kinh nghiệm' },
    { value: '2 năm kinh nghiệm', label: '2 năm kinh nghiệm' },
    { value: '3 năm kinh nghiệm', label: '3 năm kinh nghiệm' },
    { value: '4 năm kinh nghiệm', label: '4 năm kinh nghiệm' },
    { value: '5 năm kinh nghiệm', label: '5 năm kinh nghiệm' },
    { value: 'trên 5 năm kinh nghiệm', label: 'trên 5 năm kinh nghiệm' },
  ]
  const options = [
    { value: '1', label: 'Dưới 3 triệu' },
    { value: '2', label: '3 - 5 triệu' },
    { value: '3', label: '7 - 10 triệu' },
    { value: '4', label: '10 - 12 triệu' },
    { value: '5', label: 'trên 12 triệu' },
   
    { value: '127', label: 'Thỏa Thuận' }
  ] 
function SettingNhuCauTV() {

    // tieudelamf viec
    const [tieudecongviec,settieudecongviec] = useState("")
    const hanldechangetieude =(event)=>{
        settieudecongviec(event.target.value)
    }
    // địa điểm
    const [selectedOptionsvitrilamviec, setSelectedOptionsvitrilamviec] = useState([]);
    const handleSelectChangevitrilamviec = (selected) => {
     
      setSelectedOptionsvitrilamviec(selected);
    };
  
     //vị trí tuyendung
     const [selectedOptionsvitrituyendung, setSelectedOptionsvitrituyendung] = useState([]);
     const handleSelectChangevitrituyendung = (selected) => {
       setSelectedOptionsvitrituyendung(selected);
     };


     // mức lương
     const [selectedOptionsmucluong, setSelectedOptionsmucluong] = useState([]);
     const handleSelectChangemucluong = (selected) => {
       setSelectedOptionsmucluong(selected);
     };
     // kinh nghiệm

     const [selectedOptionskinhnghiem, setSelectedOptionskinhnghiem] = useState([]);
     const handleSelectChangekinhnghiem = (selected) => {
       setSelectedOptionskinhnghiem(selected);
     };



     const submitnhucautimviec = async()=>{
        const data = new FormData();
        const user_id = window.localStorage.getItem("userid");
        data.append("user_id",user_id);
        data.append("tieude",String(tieudecongviec))
        data.append("vitri",String(selectedOptionsvitrituyendung.value))
        data.append("diadiem", String(selectedOptionsvitrilamviec.value))
        data.append("mucluong",String(selectedOptionsmucluong.value))
        data.append("kinhnghiem",String(selectedOptionskinhnghiem.value))
        const result = await postthongtintimviecchapi(data);
        if(result.data.data =="ok"){
            toast.success('Đã lưu', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
        else{
            toast.warning('Có lỗi xảy ra!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
     }
  return (
    <>
    
    
    
    <div>
        <User_header/>
        <ToastContainer />
        <div id ="main">
        <div className='container bg-white mb-40 search-div'>
            <div className='d-flex banner'>
                <div className='ml-auto content'>
                    <h1 className="title">Vui lòng cho chúng tôi biết nhu cầu tìm công việc của bạn </h1>
                    <p className="description">Để chung tôi gợi ý công việc - Nâng tầm sự nghiệp với các cơ hội việc làm giáo dục tại các công ty hàng đầu. Thu nhập xứng tầm, đãi ngộ hấp dẫn, trải nghiệm đáng giá, khám phá ngay!</p>
                    <div className="label-tag">
                    <label className="label-remote"><i className="fa-solid fa-circle-check"></i> Giáo viên tiểu học</label>
                    <label className="label-remote"><i className="fa-solid fa-circle-check"></i> Giáo viên mầm non</label>
                    <label className="label-remote"><i className="fa-solid fa-circle-check"></i> Giáo viên sau đại học</label>
                    <label className="label-remote"><i className="fa-solid fa-circle-check"></i> Giáo viên âm nhạc</label>
                    </div>


                </div>

                <div className="image">
               
                </div>
            </div>

            

        </div>

        <div className='container bg-white mb-40 search-div px-2 py-2' style={{marginTop:"2rem", margin:"0 auto"}}>
            <div className='d-flex '>
                    <div className='ml-auto content'>
                        <div className='row gap-1 py-4 px-4'>
                                <div className='col-md-12 '>
                                    <label>Tiêu đề công việc bạn muốn tìm kiếm</label>
                                    <Input placeholder="Tiêu đề công việc"  onChange={hanldechangetieude} value={tieudecongviec}/>
                                </div>
                                <div className='col-md-12 '>
                                    <label>Vị trí bạn muốn làm việc</label>
                                    <Select
                                            // isMulti
                                            options={optionsvitrituyendung}
                                            value={selectedOptionsvitrituyendung}
                                            onChange={handleSelectChangevitrituyendung}
                                            placeholder={"--Vị trí tuyển dụng--"}
                                        />
                                </div>
                                <div className='col-md-12 '>
                                    <label>Địa điểm bạn muốn làm việc</label>
                                    <Select
                                            // isMulti
                                            options={optionsdiadiemlamviec}
                                            value={selectedOptionsvitrilamviec}
                                            onChange={handleSelectChangevitrilamviec}
                                            placeholder={"--Vị trí làm việc--"}
                                        />
                                </div>
                                <div className='col-md-12 '>
                                    <label>Mức lương mong muốn</label>
                                    <Select
                                        
                                            options={options}
                                            value={selectedOptionsmucluong}
                                            onChange={handleSelectChangemucluong}
                                            placeholder={"--Mức lương--"}
                                        />
                                </div>
                                <div className='col-md-12 '>
                                    <label>Kinh nghiệm làm việc của bạn</label>
                                    <Select
                                        
                                        options={optionkinhnghiem}
                                        value={selectedOptionskinhnghiem}
                                        onChange={handleSelectChangekinhnghiem}
                                        placeholder={"--Kinh Nghiệm--"}
                                    />
                                </div>

                                <div className='col-md-12 mt-2'>
                                     <div className=' d-flex justify-content-between '>
                                    <Button type='primary' style={{width:"100%", backgroundColor:"#0f7e45"}} onClick={submitnhucautimviec }>Gửi</Button>
                                    </div>
                                </div>


                        </div>
                </div>
            </div>
        </div>
        </div>
        
      </div>
    
    
    
    
    
    
    </>
  )
}

export default SettingNhuCauTV