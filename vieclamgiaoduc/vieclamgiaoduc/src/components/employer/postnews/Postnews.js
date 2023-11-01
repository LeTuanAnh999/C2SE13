import React, { useState ,useEffect,useRef} from 'react';    

import { Button, message, Steps,Input, InputNumber ,Upload,Image } from 'antd';
import logo1 from "./create-campaign.jpg"
import { UploadOutlined } from '@ant-design/icons';
import "./style.css"
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Select from 'react-select';
import dayjs from 'dayjs'
import { DatePicker, Space } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch} from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postnewapi } from '../../api/employerapi/Employerapi';
const notifySuccess = (title) => {
  toast.success(title, {
    position: 'top-right', // You can change the toast position
    autoClose: 3000, // Set the time (in milliseconds) for the toast to auto-close
    hideProgressBar: false, // Show or hide the progress bar
    closeOnClick: true, // Close the toast when clicked
    pauseOnHover: true, // Pause the auto-close timer when hovered
    draggable: true, // Make the toast draggable
    progressStyle: {
      background: 'lightgreen', // Change the background color for success
    },
    bodyStyle: {
      background: 'light', // Change the background color for the toast
    },
  });
};

const notifywarning = (title) => {
  toast.warning(title, {
    position: 'top-right', // You can change the toast position
    autoClose: 3000, // Set the time (in milliseconds) for the toast to auto-close
    hideProgressBar: false, // Show or hide the progress bar
    closeOnClick: true, // Close the toast when clicked
    pauseOnHover: true, // Pause the auto-close timer when hovered
    draggable: true, // Make the toast draggable
    progressStyle: {
      background: 'lightgreen', // Change the background color for success
    },
    bodyStyle: {
      background: 'light', // Change the background color for the toast
    },
  });
};
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



const optionloaicongviec =[
  { value: 'Toàn thời gian', label: 'Toàn thời gian' },
  { value: 'Thực tập', label: 'Thực tập' },
  { value: 'Bán thời gian', label: 'Bán thời gian' },
]


const optiongioitinh =[
  { value: 'Nam', label: 'Nam' },
  { value: 'Nữ', label: 'Nữ' },
  { value: 'Không yêu cầu', label: 'Không yêu cầu' },
 
]

const optioncapbac =[
  { value: 'Nhân viên', label: 'Nhân viên' },
  { value: 'Trưởng phòng', label: 'Trưởng phòng' },
  { value: 'Trưởng/phó phòng', label: 'Trưởng/phó phòng' },
  { value: 'Giám sát', label: 'Giám sát' },
  { value: 'Giám đốc', label: 'Giám đốc' },
  { value: 'Phó Giám đốc', label: 'Phó Giám đốc' },
  { value: 'Thực tập sinh', label: 'Thực tập sinh' },
  { value: 'Quản lý nhân sự', label: 'Quản lý nhân sự' },
  { value: 'Giáo viên', label: 'Giáo viên' },
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

const optionkinhnghiem =[
  { value: 'Dưới 1 năm kinh nghiệm', label: 'Dưới 1 năm kinh nghiệm' },
  { value: '1 năm kinh nghiệm', label: '1 năm kinh nghiệm' },
  { value: '2 năm kinh nghiệm', label: '2 năm kinh nghiệm' },
  { value: '3 năm kinh nghiệm', label: '3 năm kinh nghiệm' },
  { value: '4 năm kinh nghiệm', label: '4 năm kinh nghiệm' },
  { value: '5 năm kinh nghiệm', label: '5 năm kinh nghiệm' },
  { value: 'trên 5 năm kinh nghiệm', label: 'trên 5 năm kinh nghiệm' },
]

const ooptionloaitien =[
  { value: 'USD', label: 'USD' },
  { value: 'VND', label: 'VND' },
 
]

const ooptionloailuong =[
  { value: 'Trong Khoảng', label: 'Trong Khoảng' },
  { value: 'Thỏa Thuận', label: 'Thỏa Thuận' },

 
]

function Postnews(props) {
    
    const [messageApi, contextHolder] = message.useMessage();
  
    // console.log(props.mydata)
    const { Step } = Steps;
    const [currentStep, setCurrentStep] = useState(0);

  
  
    // console.log(props.mydata);

    const [startpost,setstartpost] = useState(false);

    const mystart=()=>{
        setstartpost(!startpost)
    }


    // tên  chiến dịch tuyển dụng
    const [namechiendich, setnamechiendich] = useState('');

    const hanldechangechiendich= (e) => {
      // Get the new value of the input element
       const namenew = e.target.value;
      setnamechiendich(e.target.value);
      
      if(namenew === '' ){
        const valiname = document.getElementById('validatenamechiendich');
            valiname.style.display='block'
        }
        else{
            const valiname = document.getElementById('validatenamechiendich');
            valiname.style.display='none'
        }
  
      // Update the state with the new value
      
    };
    
    //Tiêu đề tuyển dụng

    const[tieudetuyendung,settieudetuyendung] = useState('');
    const hanldechangetieudetuyendung =(e)=>{
      const inputValue = e.target.value;
      settieudetuyendung(inputValue);
      
      if(inputValue === ''){
        const valiname = document.getElementById('validatetieude');
            valiname.style.display='block'
        }
        else{
            const valiname = document.getElementById('validatetieude');
            valiname.style.display='none'
        }
    }
 

    //dia diem
    const [selectedOptionsvitrilamviec, setSelectedOptionsvitrilamviec] = useState([]);
  const handleSelectChangevitrilamviec = (selected) => {
    if(setSelectedOptionsvitrilamviec.length == 0){
        const validiadiem = document.getElementById('validatekhuvuc')
        validiadiem.style.display='block'
    }
    else{
        const validiadiem = document.getElementById('validatekhuvuc')
        validiadiem.style.display='none'
    }
    setSelectedOptionsvitrilamviec(selected);
  };

   //vị trí tuyendung
   const [selectedOptionsvitrituyendung, setSelectedOptionsvitrituyendung] = useState([]);
   const handleSelectChangevitrituyendung = (selected) => {
    if(setSelectedOptionsvitrituyendung.length == 0){
        const valivitri = document.getElementById('validatevitri')
        valivitri.style.display='block'
    }
    else{
        const valivitri = document.getElementById('validatevitri')
        valivitri.style.display='none'
    }
     setSelectedOptionsvitrituyendung(selected);
   };

   // số lượng
   const [soluong,setsoluong] = useState(3);

   const onChangesoluong = (value) => {
    // console.log('changed', value);
    setsoluong(value)
  };
  // loại công việc
   const [selectedOptionloaicongviec, setSelectedOptionloaicongviec] = useState([]);
   const handleSelectChangeloaicongviec = (selected) => {
   
     setSelectedOptionloaicongviec(selected);
   };
   // gioitinh
   const [selectedOptiongioitinh, setSelectedOptiongioitinh] = useState([]);
   const handleSelectChangegioitinh = (selected) => {
   
     setSelectedOptiongioitinh(selected);
   };
   //cap bac
   const [selectedOptioncapbac, setSelectedOptioncapbac] = useState([]);
   const handleSelectChangecapbac = (selected) => {
   
     setSelectedOptioncapbac(selected);
   };
  //kinghiem
  const [selectedOptionkinhnghiem, setSelectedOptionkinhnghiem] = useState([]);
  const handleSelectChangekinhnghiem = (selected) => {
  
    setSelectedOptionkinhnghiem(selected);
  };
  // LOẠI TIỀN TỆ

  const [selectedOptioloaitien, setSelectedOptionloaitien] = useState([]);
  const handleSelectChangeloaitien = (selected) => {
  
    setSelectedOptionloaitien(selected);
  };

  // loại lương
  const [selectedOptiokieuluong, setSelectedOptionkieuluong] = useState([]);
  const handleSelectChangekieuluong = (selected) => {
    console.log(selected)
    setSelectedOptionkieuluong(selected);
  };
  // khu vực làm việc

  const [selectedOptionkhuvuclamviec, setSelectedOptionkhuvuclamviec] = useState([]);
  const handleSelectChangekhuvuclamviec = (selected) => {
    console.log(selected)
    setSelectedOptionkhuvuclamviec(selected);
  };


  // từ

  const [luongtu,setluongtu] = useState(100);
  const handleInputChangeluongtu = (value) => {
    setluongtu(value); // Update inputValue state with the new value
  };

  // den
  const [luongden,setluongden] = useState(300);
  const handleInputChangeluongden = (value) => {
    setluongden(value); // Update inputValue state with the new value
  };
 // Mô tả công việc
 const [editorData, setEditorData] = useState("<p>Mô tả công việc!</p>");
 const [editorDatayc, setEditorDatayc] = useState("<p>Yêu cầu ứng viên!</p>");
 const [editorDataql, setEditorDataql] = useState("<p>Quyền lợi của ứng viên!</p>");
 // skill
 const [selectedOptionskill, setSelectedOptionskill] = useState(null);
  const [optionsskill, setOptionsskill] = useState([
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
  ]);
  const handleChangeskill = (newValue, actionMeta) => {
   
    setSelectedOptionskill(newValue);
  };


  // ngày tháng hạn  cv
  const [selectedDate, setSelectedDate] = useState(null);
  const onChangedate = (date) => {
    setSelectedDate(date);
    if (date) {
      console.log('Date: ', date);
    } else {
      console.log('Clear');
    }
  };



// Hình ảnh
const [fileList, setFileList] = useState([]);

  const handleUploadChange = (info) => {
    let fileList = [...info.fileList];

    // Giới hạn số lượng tối đa và tối thiểu
    fileList = fileList.slice(-3); // Tối đa 3 hình ảnh
    if (fileList.length < 1) {
      message.error('Vui lòng tải lên ít nhất 1 hình ảnh');
      return;
    }
  
    
    setFileList(fileList);
  };
// tao moi truong giai lap
  const customRequest = ({ file, onSuccess }) => {
    // Trong customRequest, bạn có thể xử lý việc tải lên tệp và gọi onSuccess khi tải lên thành công.
    // Ví dụ: tải lên tệp lên máy chủ và gọi onSuccess khi hoàn thành.
    setTimeout(() => {
      onSuccess("ok");
    }, 1000);
  };





  // next

    // validate

    const handleNext = () => {

        // tab1





    
      if(currentStep === 0){ 
          if(namechiendich === '' || selectedOptionsvitrilamviec.length === 0 || selectedOptionsvitrituyendung.length === 0){
            messageApi.open({
                type: 'warning',
                content: 'Vui lòng điền đẩy đủ thông tin',
                duration: 2,
              });
              if(namechiendich == '' || namechiendich == null){
                const valiname = document.getElementById('validatenamechiendich');
                    valiname.style.display='block'
                }
                else{
                    const valiname = document.getElementById('validatenamechiendich');
                    valiname.style.display='none'
                }
                if(selectedOptionsvitrilamviec.length == 0){
                    const valivitri = document.getElementById('validatevitri')
                    valivitri.style.display='block'
                }
                else{
                    const valivitri = document.getElementById('validatevitri')
                    valivitri.style.display='none'
                }
                if(selectedOptionsvitrilamviec.length == 0){
                    const validiadiem = document.getElementById('validatekhuvuc')
                    validiadiem.style.display='block'
                }
                else{
                    const validiadiem = document.getElementById('validatekhuvuc')
                    validiadiem.style.display='none'
                }
          
        }
        else {
          notifySuccess('Tạo chiến dịch tuyển dụng thành công')
          setCurrentStep(currentStep + 1);
        }
      }
      if(currentStep === 1){
        if(tieudetuyendung ===''){const valiname = document.getElementById('validatetieude');valiname.style.display='block'}
                else{const valiname = document.getElementById('validatetieude');valiname.style.display='none'}

        //validatengay
        if( selectedOptionloaicongviec.length === 0 || tieudetuyendung===''||selectedOptioloaitien.length===0|| selectedOptioncapbac.length ===0 || selectedOptiongioitinh.length ===0 || selectedOptionsvitrilamviec.length ===0 || selectedOptionsvitrituyendung.length ===0 || selectedOptionkinhnghiem.length ===0){
         
          messageApi.open({
            type: 'warning',
            content: 'Vui lòng điền đẩy đủ thông tin',
            duration: 2,
          });

          notifywarning('Vui lòng điền đẩy đủ thông tin!');
          const valiname = document.getElementById('validatethongtinchung');
              valiname.style.display='block'
        }
        else{
         
          notifySuccess('Tạo thông tin tuyển dụng thành công')
            setCurrentStep(currentStep + 1);
              const valiname = document.getElementById('validatethongtinchung');
              valiname.style.display='none'
        } 

      }
      if(currentStep === 2){
       
     
        setCurrentStep(currentStep + 1);

      }
  
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  // tat cả du lieu


  const  sumbitdata = async (data)=>{
    const result = await postnewapi(data);
     return result
  }
  const handleFinish = async() => {
    // Do something when the user clicks "Hoàn thành"
    console.log('a',props.mydata.id )
    console.log("tên chiến dịch", namechiendich);
    console.log("vitrituyendung", selectedOptionsvitrituyendung);
    console.log('khuvucvieclam',  selectedOptionsvitrilamviec)
    console.log('tieudetuyendung', tieudetuyendung)
    console.log('khuvuclamviec', selectedOptionkhuvuclamviec);
    console.log('soluongtuyen',soluong);
    console.log('hinhthuccongviec',selectedOptionloaicongviec.value);
    console.log('gioitinh', selectedOptiongioitinh.value);
    console.log('capbac', selectedOptioncapbac.value);
    console.log('kinhnghiem', selectedOptionkinhnghiem.value);
    console.log('loai tien',selectedOptioloaitien.value);
    console.log('luong', selectedOptiokieuluong.value);
    console.log('tu', luongtu);
    console.log('den', luongden);
    console.log('motacv', editorData);
    console.log('yeucauungvien', editorDatayc);
    console.log('quyenloiungvien', editorDataql);
    console.log('skill', selectedOptionskill);
    console.log('date', dayjs(selectedDate).format('YYYY-MM-DD'));
    console.log('image',fileList)

    //lấy tất cả hình ảnh base64
    const imagelist64 = []
    for(var i = 0; i< fileList.length;i++){
        imagelist64.push({"image":fileList[i].thumbUrl})
    }
    // vi trí tuyển dụng

    
    // 
    // employer_id,tenchiendich, vitrituyendung,khuvucvieclam,
    //         tieudetuyendung,khuvieclamviec,solongtuyen,
    //         hinhthuccongviec,
    //         gioitinh,capbac,kinhnghiem,loaitien,
    //         luong,tu,den,motacv,yeucaungvien,quyenloiungvien,
    //         skill,date,image
    const data = new FormData();
    
    data.append("employer_id",props.mydata.id  )
    data.append("tenchiendich",namechiendich);
    data.append("vitrituyendung",  JSON.stringify(selectedOptionsvitrituyendung));
    data.append("khuvucvieclam",JSON.stringify( selectedOptionkhuvuclamviec));
    data.append("tieudetuyendung",tieudetuyendung)
    data.append("khuvuclamviec",JSON.stringify(selectedOptionsvitrilamviec))
    data.append("solongtuyen",soluong)
    data.append("hinhthuccongviec",selectedOptionloaicongviec.value)
    data.append("gioitinh",selectedOptiongioitinh.value)
    data.append("capbac",selectedOptioncapbac.value)
    data.append("kinhnghiem",selectedOptionkinhnghiem.value)
    data.append("loaitien",selectedOptioloaitien.value)
    data.append("luong",selectedOptiokieuluong.value)
    if(selectedOptiokieuluong.value =="	Thỏa Thuận"){
      setluongtu(0);
      setluongden(0);
    }
    data.append("tu",luongtu)
    data.append("den",luongden)
    data.append("motacv",editorData)
    data.append("yeucaungvien",editorDatayc)
    data.append("quyenloiungvien", editorDataql)
    data.append("skill",JSON.stringify(selectedOptionskill))
    data.append("date",dayjs(selectedDate).format('YYYY-MM-DD'));
    data.append("image",JSON.stringify(imagelist64))

    const result_is = await sumbitdata(data)
    console.log(result_is.data.message)
    if(result_is.data.message==="ok"){
      notifySuccess("Đăng tin thành công! Đợi xét duyệt!");
    }else{
      notifywarning("Lỗi")
    }



  };
















  return (
    <>
    
     {contextHolder  }
    
     <div data-v-07f0dc2d="">


 

        <div className='page-wrapper2 chiller-theme'>

        <div className='page-container'>
        <div data-v-502ae57c="" className="homepage-banner container-fluid page-content pd-b-0"></div>


        <div className='container-fluid page-content'>
            <h4 data-v-502ae57c="" className="mb-4">Đăng tin miễn phí</h4>
    
            <div className='bg-white p-3 rounded'>
            <h5 data-v-4b1d50ed="" className="mb-3">Bạn đang muốn đăng tin cho chiến dịch tuyển dụng nào?</h5>


            <div className='shadow-sm bg-white p-3 mb-4 rounded'>
                <div className='d-flex mb-3'>
                <span data-v-1ac67e28="" className="badge badge-primary rounded-circle mr-2 font-weight-bold box-index">1</span>
               
                <p data-v-1ac67e28="">Hoạt động tuyển dụng của doanh nghiệp được tiến hành theo từng giai đoạn với các mục tiêu tuyển dụng khác nhau. Chiến dịch tuyển dụng là nơi tổng hợp các hoạt động khác nhau của một đợt tuyển dụng được thực hiện trên nền tảng Vieclamgiaoduc. <br/>
               Hoạt động tuyển dụng của doanh nghiệp được tiến hành theo từng giai đoạn với các mục tiêu tuyển dụng khác nhau. Chiến dịch tuyển dụng là nơi tổng hợp các hoạt động khác nhau của một đợt tuyển dụng được thực hiện trên nền tảng Vieclamgiaoduc.</p>
                  <div className='row mb-3'>
                    <div className='col'>
                        <img src={logo1}/>
                    </div>
                    

                  </div>
                </div>

            </div>
            <div data-v-4b1d50ed="" className="shadow-sm border rounded px-4 py-3 d-flex align-items-center mb-4">
                <div data-v-4b1d50ed="" className="d-flex mr-auto align-items-center justify-content-around"><
                    button data-v-4b1d50ed="" type="button" className="btn btn-primary rounded-circle px-2 py-1 mr-3 ml-4">
                    <i data-v-4b1d50ed="" className="fa fa-rectangle-vertical-history"></i>
                    </button> 
                    <div data-v-4b1d50ed="" className="text-primary font-weight-bold">Đăng tin với một chiến dịch tuyển dụng mới</div>
                    </div> <div data-v-4b1d50ed="" className='m-4'><div data-v-4b1d50ed="" 
                     className="btn btn-primary " onClick={mystart}> {startpost == false?"Bắt đầu ngay":"Đóng"}</div></div>
            </div>














            {startpost == true? <>   <div className='steppostnew'>
      <Steps current={currentStep}  className='steppostnew'>
        <Step title="Thông tin chiến dịch đăng tuyển" />
        <Step title="Nội dung đăng tuyển" />
        <Step title="Hình Thức hiển thị" />

      </Steps>

      <div style={{ marginTop: '20px' }}>
        {/* Nội dung cho Bước 1 */}
        {currentStep === 0 && (
          <div>

            <div className='shadow-sm bg-white mb-4 rounded'>
                <div data-v-1ac67e28="" className="d-flex p-3 mb-3 border-bottom"><span data-v-1ac67e28="" className="badge badge-primary rounded-circle mr-2 font-weight-bold box-index">2</span> <h5 data-v-1ac67e28="" className="mb-0 box-title">Tạo chiến dịch tuyển dụng <span data-v-1ac67e28="">đầu tiên</span> của bạn</h5></div>
                    <div className='px-3 pb-3'>
                        <div data-v-1ac67e28="" className="row">
                            <div data-v-1ac67e28="" className="form-group col">
                                <label data-v-1ac67e28="" className="font-weight-bold">Tên chiến dịch tuyển dụng</label> 
                                <span data-v-a4bece84="" className=' p-2' id="validatenamechiendich" style={{color:"red", display:"none"}}>*Tên chiến dịch không được để trống ! </span>
                                    <div data-v-7120bfb0="" data-v-1ac67e28="">
                                        <div data-v-7120bfb0="" className="input-container ml-auto position-relative">
                                            <input className='form-control' data-v-7120bfb0="" id="VBWzMsJEgn"  placeholder="VD: Tuyển dụng nhân viên Marketing tháng 10, tuyển dụng việc làm giáo dục, .." type="text" 
                                            
                                            value={namechiendich} // Bind the input value to the state
                                            onChange={hanldechangechiendich} // Set the event handler
                                            /> 
                                            
                                        </div> 
                                    </div></div> 
                                    <div data-v-1ac67e28="" className="form-group col">
                                        <label data-v-1ac67e28="" className="font-weight-bold">Vị trí tuyển dụng</label> 
                                        <span data-v-a4bece84="" className=' p-2' id="validatevitri" style={{color:"red", display:"none"}}>*Vị trí tuyển dụng không được để trống ! </span>
                                        <div data-v-15fdce00="" data-v-1ac67e28=""><div data-v-15fdce00="" className="input-container ml-auto">
                                        <Select
                                            isMulti
                                            options={optionsvitrituyendung}
                                            value={selectedOptionsvitrituyendung}
                                            onChange={handleSelectChangevitrituyendung}
                                            placeholder={"--Vị trí tuyển dụng--"}
                                        />
                                    </div> </div></div>
                        </div>
                </div>


                <div className='row'>
                    <div className='col-12 py-2 px-4'>
                    <label data-v-1ac67e28="" className="font-weight-bold">Khu vực làm việc</label>
                    <span data-v-a4bece84="" className=' p-2' id="validatekhuvuc" style={{color:"red", display:"none"}}>*Khu vực không được để trống ! </span>
                    <Select
                            isMulti
                            options={optionsdiadiemlamviec}
                            value={selectedOptionsvitrilamviec}
                            onChange={handleSelectChangevitrilamviec}
                            placeholder={"--Khu vực Địa điểm làm việc--"}
                          />
                    </div>
                </div>
            </div>

           <div className=' mt-4'>
            <Button type="primary" onClick={handleNext}  className='pri-button-step'>
              Tiếp theo
            </Button>
            </div>
          </div>
        )}

        {/* Nội dung cho Bước 2 */}
        {currentStep === 1 && (
          <div>
            <div className='shadow-sm bg-white mb-4 rounded'>
                  <div className='container-fluid page-content'>
                  <h4 data-v-2fee46a0="" className="page-title mb-4">Thông tin đăng tuyển chi tiết</h4>



                  <div data-v-186e73d0="" className="bg-white border-left border-primary p-3 mb-4 rounded shadow-sm" style={{borderLeft:"3px !important",borderColor:"#00b14f!important"}}><span data-v-186e73d0="">
                      Tin tuyển dụng của bạn sẽ được kiểm duyệt trước khi chính thức hiển thị với các ứng viên tiềm năng.
                    </span> <a data-v-186e73d0="" href="/" target="_blank" className="text-primary">
                      Tìm hiểu về Quy định đăng tin tại Vieclamgiaoduc.</a></div>
                  </div>

               


            </div>
            {/* tiêu đề tuyển dụng */}
            <div className='shadow-sm bg-white p-4 pb-0 mb-4 rounded mb-5 pb-5'>
                
                <div data-v-186e73d0="" className="title d-flex mb-3"><i data-v-186e73d0="" className="fas fa-pen bg-muted p-2 mr-3 icon-info-category icon-namb"></i> <h6 data-v-186e73d0="" className="pt-1 pl-1 font-weight-bold">Tiêu đề tin tuyển dụng</h6></div>
                <div className='pl-5'>
                <span data-v-a4bece84="" className=" p-2" id="validatetieude" style={{color:"red", display:"none"}}>*Tiêu đề không được để trống ! </span>
                <Input placeholder="Tiêu đề tuyển dụng"  value={tieudetuyendung} onChange={hanldechangetieudetuyendung}/>
                </div>          
             </div>




   {/* khu vực làm việc */}

            <div className='khuvuclamviec mt-4 shadow-sm bg-white p-4 pb-0 mb-4 rounded mb-5 pb-5'>
                 
                 <label data-v-186e73d0="" className="text-secondary-dark font-weight-bold"> <i data-v-6252047e="" className="fa-solid fa-location-dot  bg-muted p-2 mr-3 icon-info-category icon-namb"></i>Khu vực làm việc</label>
                   <div className='bg-light border job-location-box mb-3 mt-2'>
                     <div className='p-4 location-box align-items-center border-bottom'>
                    
                      
                       
                           <Select
                           
                             isMulti
                             className='abccongviec '
                             options={optionsdiadiemlamviec}
                             value={selectedOptionkhuvuclamviec}
                             onChange={handleSelectChangekhuvuclamviec}
                             placeholder={"--Chọn khu vực làm việc--"}
                           />
                          
                       
                       </div> 


                   </div>
               </div>
             {/* Thông tin chung */}

             <div className='shadow-sm bg-white p-4 pb-0 mb-4 rounded mb-5 pb-5'>
                <div data-v-186e73d0="" className="title d-flex mb-3"><i data-v-186e73d0="" className="fas fa-info bg-muted p-2 mr-3 icon-info-category icon-namb"  style={{width:"2%"}}></i> <h6 data-v-186e73d0="" className="pt-1 pl-1 font-weight-bold">Thông tin chung</h6></div>


                
                <span data-v-a4bece84="" className=" p-2" id="validatethongtinchung" style={{color:"red", display:"none"}}>*Các thông tin chung không được để trống ! </span>


                  <div className='row'> 
                      <div className='col-4'>
                        <label data-v-186e73d0="" className="text-secondary-dark font-weight-bold">Số lượng tuyển</label>
                          <div>
                          <InputNumber   size='large' min={1} max={100} defaultValue={3} onChange={onChangesoluong}   style={{width:"100%"}}/>
                          </div>
                      </div> 

                      <div className='col-4'>
                      <label data-v-186e73d0="" className="text-secondary-dark font-weight-bold">Hình thức công việc:</label>
                      <Select
                            className='abccongviec'
                            options={optionloaicongviec}
                            value={selectedOptionloaicongviec}
                            onChange={handleSelectChangeloaicongviec}
                            placeholder={"--Loại thời gian: Bán thời gian, Toàn thời gian..--"}
                          />

                        </div>
                  </div> 


                  <div className='row mt-2'> 
                      <div className='col-4'>
                        <label data-v-186e73d0="" className="text-secondary-dark font-weight-bold">Giới tính</label>
                          <div>
                            
                          <Select
                            
                            className='abccongviec'
                            options={optiongioitinh}
                            value={selectedOptiongioitinh}
                            onChange={handleSelectChangegioitinh}
                            placeholder={"--Giới tính--"}
                          />
                          
                          </div>
                      </div> 

                      <div className='col-4'>
                      <label data-v-186e73d0="" className="text-secondary-dark font-weight-bold">Cấp bậc</label>
                      <Select
                            className='abccongviec'
                            options={optioncapbac}
                            value={selectedOptioncapbac}
                            onChange={handleSelectChangecapbac}
                            placeholder={"--Cấp bậc..--"}
                          />

                        </div>
                        <div className='col-4'>
                      <label data-v-186e73d0="" className="text-secondary-dark font-weight-bold">Kinh nghiệm </label>
                      <Select
                            className='abccongviec'
                            options={optionkinhnghiem}
                            value={selectedOptionkinhnghiem}
                            onChange={handleSelectChangekinhnghiem}
                            placeholder={"--Kinh nghiệm..--"}
                          />

                        </div>
                  </div> 



                  {/* lương */}

                  <div className='row mt-2'>
                      <div className='col-4'>
                        <label data-v-186e73d0="" className="text-secondary-dark font-weight-bold">Lương</label>
                          <div>
                            
                          <Select
                            
                            className='abccongviec'
                            options={ooptionloaitien}
                            value={selectedOptioloaitien}
                            onChange={handleSelectChangeloaitien}
                            placeholder={"--Chọn loại tiền tệ--"}
                          />
                          
                          </div>
                      </div> 

                      <div className='col-4'>
                        <label data-v-186e73d0="" className="text-secondary-dark font-weight-bold">Kiểu lương</label>
                          <div>
                            
                          <Select
                            
                            className='abccongviec'
                            options={ooptionloailuong}
                            value={selectedOptiokieuluong}
                            onChange={handleSelectChangekieuluong}
                            placeholder={"--Chọn kiểu lương--"}
                          />
                          
                          </div>
                      </div> 

                      {selectedOptiokieuluong.value === 'Trong Khoảng'? <>
                      <div className='col-2'> 
                        <div>
                          <label data-v-186e73d0="" className="text-secondary-dark font-weight-bold">Từ </label>
                        </div>
                        <div>
                            <InputNumber
                              prefix ={selectedOptioloaitien.value}
                              style={{
                                width: '100%',
                              }}
                              defaultValue={10}
                              min={10}
                              onChange={handleInputChangeluongtu}
                            />
                       </div>
                       </div>
                      <div className='col-2'> 
                          <div>
                            <label data-v-186e73d0="" className="text-secondary-dark font-weight-bold">Đến </label>
                          </div>
                        <div>
                            <InputNumber
                            min={10}
                            defaultValue={300}
                              prefix ={selectedOptioloaitien.value}
                              style={{
                                width: '100%',
                              }}
                              onChange={handleInputChangeluongden}
                            />
                      </div>
                      </div></>:""}
                  </div>


               


                {/* test ck */}
            <div>

          
            <div className='row mt-4 py-2 px-2' style={{backgroundColor:"#eef8f3"}}>
            <div className='mb-3 mt-4'>
            <label data-v-186e73d0="" className="text-secondary-dark font-weight-bold "> <i data-v-6252047e="" className="fa fa-book  bg-muted p-2 mr-3 icon-info-category icon-namb"></i>Mô tả công việc</label>
            </div>
              <div className='col-12'>
               
              <CKEditor
             
                editor={ClassicEditor}
                data={editorData}
                onInit={(editor) => {
                  // You can store the "editor" and use when it is needed.
                  console.log("Editor is ready to use!", editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setEditorData(data); // Update the state with the editor content
                  console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                  console.log("Blur.", editor);
                }}
                onFocus={(event, editor) => {
                  console.log("Focus.", editor);
                }}
              />
              </div>
            </div>
            {/* yêu cầu ứng viên */}
           
            <div className='row mt-4 py-2 px-2' style={{backgroundColor:"#eef8f3"}} >
            <div className='mb-3 mt-4 '>
            <label data-v-186e73d0="" className="text-secondary-dark font-weight-bold "> <i data-v-6252047e="" className="fa fa-user bg-muted p-2 mr-3 icon-info-category icon-namb"></i>Yêu cầu ứng viên</label>
            </div>
              <div className='col-12'>
              <CKEditor
                editor={ClassicEditor}
                data={editorDatayc}
                onInit={(editor) => {
                  // You can store the "editor" and use when it is needed.
                  console.log("Editor is ready to use!", editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setEditorDatayc(data); // Update the state with the editor content
                  console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                  console.log("Blur.", editor);
                }}
                onFocus={(event, editor) => {
                  console.log("Focus.", editor);
                }}
              />
              </div>
            </div>        
           

            {/* quyền lợi */}
           
            <div className='row mt-4 py-2 px-2' style={{backgroundColor:"#eef8f3"}}>
            <div className='mb-4'>
            <label data-v-186e73d0="" className="text-secondary-dark font-weight-bold "> <i data-v-6252047e="" className="fa fa-american-sign-language-interpreting  bg-muted p-2 mr-3 icon-info-category icon-namb"></i>Quyền lợi ứng viên</label>
            </div>
              <div className='col-12'>
              <CKEditor
                editor={ClassicEditor}
                data={editorDataql}
                onInit={(editor) => {
                  // You can store the "editor" and use when it is needed.
                  console.log("Editor is ready to use!", editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setEditorDataql(data); // Update the state with the editor content
                  console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                  console.log("Blur.", editor);
                }}
                onFocus={(event, editor) => {
                  console.log("Focus.", editor);
                }}
              />
              </div>
            </div> 
                

                {/* skill */}

                <div>

                  <div  className='row mt-4 py-2 px-2' style={{backgroundColor:"#eef8f3"}}>
                  <div className='mb-3 mt-4'>
                  <label data-v-186e73d0="" className="text-secondary-dark font-weight-bold "> <i data-v-6252047e="" className="fa fa-sign-language bg-muted p-2 mr-3 icon-info-category icon-namb"></i>Kỹ Năng</label>
                  </div>
                    <Select
                      isClearable
                      isSearchable
                      isCreatable
                      isMulti
                      value={selectedOptionskill}
                      options={optionsskill}
                      onChange={handleChangeskill}
                      placeholder="Lựa chọn Skill"
                    />
                  </div>
                  </div>

            {/* thông tin nhận CV  */}

            <div className='row mt-4 py-2 px-2' >
            <div data-v-186e73d0="" class="title d-flex mb-3"><i data-v-186e73d0="" class="fas fa-briefcase bg-muted p-2 mr-3 icon-info-category"></i> <h6 data-v-186e73d0="" class="pt-1 pl-1 font-weight-bold">Thông tin nhận CV</h6></div>
                  <div className='pl-5'>
                    <div className='col-md-3 mt-2'>
                        <div className=''>
                          <label data-v-186e73d0="" className="text-secondary-dark font-weight-bold "> Hạn chót nhận CV :'Năm-Tháng-Ngày'</label>
                          
                          
                          
                          </div>
                          <span data-v-a4bece84="" class=" p-2" id="validatengay" style={{color:"red", display:"none"}}>*Tiêu đề không được để trống ! </span>
                          <DatePicker
                          value={selectedDate}
                              presets={[
                                {
                                  label: 'Sau 1 ngày',
                                  value: dayjs().add(-1, 'd'),
                                },
                                {
                                  label: 'Sau 7 ngày',
                                  value: dayjs().add(-7, 'd'),
                                },
                                {
                                  label: 'Sau 14 ngày',
                                  value: dayjs().add(-14, 'd'),
                                },
                              ]}
                              onChange={onChangedate}
                            />
                          <div className='py-2 px-2 mt-2 mb-2' style={{backgroundColor:" rgb(32 210 113)", borderRadius:"2px"}}>
                            Hạn chót CV vào ngày : {selectedDate ? dayjs(selectedDate).format('YYYY-MM-DD') : 'None'}
                          </div>
                                                  
                            

                    </div>

                    <div className='row mt-2'>
                    <label data-v-186e73d0="" className="text-secondary-dark font-weight-bold "> Thông tin nhà tuyển dụng  nhận CV</label>
                      <div className='col-3'>
                          <label data-v-186e73d0="">Họ và tên</label>
                          <Input placeholder={props.mydata.name}   value={props.mydata.name}/>
                            </div>
                        <div className='col-3'>
                        <label data-v-186e73d0="">Số điện thoại</label>
                          <Input placeholder={props.mydata.phone}   value={props.mydata.phone}/>

                        </div>
                        <div className='col-4'>
                        <label data-v-186e73d0="">Email</label>
                          <Input placeholder={props.mydata.email}   value={props.mydata.email}/>

                        </div>
                    </div>


                  </div>
            </div>


            {/* hỉnh ảnh */}

            <div className='shadow-sm bg-white p-4 pb-0 mb-4 rounded mb-4'>
            <div data-v-316d033a="" class="title d-flex mb-3"><i data-v-316d033a="" class="fa-solid fa-image bg-muted p-2 mr-2 icon-info-category"></i> <h6 data-v-316d033a="" class="pt-1 pl-2 font-weight-bold">
              Hình ảnh và video nổi bật (Tối đa 3 hình ảnh)
              <span data-v-316d033a="" class="visual-conditions-apply">(Áp dụng khi tin tuyển dụng đang có ít nhất 1 dịch vụ Top Job đang hoạt động )</span></h6></div>

              <Upload  className='mb-3'
                customRequest={customRequest}
                onChange={handleUploadChange}
                fileList={fileList}
                maxCount={3} // Giới hạn tối đa 3 ảnh
                listType="picture-card"
              >
                <Button icon={<UploadOutlined />}>Tải ảnh lên</Button>
              </Upload>
            
                    </div>


          </div>
        <div>
                            
        </div> 
               
             </div>
            <Button style={{ marginRight: '8px' }} onClick={handlePrev} className='pri-button-step'>
              Quay lại
            </Button>
            <Button type="primary" onClick={handleNext} className='pri-button-step'>
              Tiếp theo
            </Button>
          </div>
        )}

        {/* Nội dung cho Bước 3 */}
        {currentStep === 2 && (
          <div>
            
            <span data-v-316d033a="" class="visual-conditions-apply px-2">(Hình thức hiển thị:  Có or Không)</span>
              <Switch className='px-2 py-2'
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked
            />
            <div className=' mt-4'>
            <Button style={{ marginRight: '8px' }} onClick={handlePrev} className='pri-button-step'>
              Quay lại
            </Button>
            <Button type="primary" onClick={handleFinish} className='pri-button-step'>
              Hoàn thành
            </Button>
            </div>
          </div>
        )}
      </div>
    </div>
            </>:""}
           

            </div>
            </div>
        </div>
        </div>
        </div>
            
    </>
  )
}

export default Postnews
