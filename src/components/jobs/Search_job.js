import React,{useEffect,useRef,useState} from 'react'
import UserHead from '../user/page_header/User_header'
import "./Style.css";
import arrow from "./arrow_desktop.png"
import {  useParams,useLocation } from 'react-router-dom';

import { Button, Modal, Space } from 'antd';
import Select from 'react-select'
import { get_all_job } from '../api/Jobapi/Jobapi';
import { Input } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { Pagination } from 'antd';
import { savecongviecyeuthichapi } from '../api/candidateapi/Candidateapi';
import logo from "../user/page_header/LOGO.png"
import { postapplyjobapi } from '../api/Jobapi/Jobapi';
import { timkiemcongviecapi } from '../api/Jobapi/Jobapi';
import { congtynoibatapi } from '../api/Jobapi/Jobapi';
import { useNavigate } from "react-router-dom";
const optioncapbac =[
    { value: 'Toàn thời gian', label: 'Toàn thời gian' },
    { value: 'Bán thời gian', label: 'Bán thời gian' },
    { value: 'Thực tập', label: 'Thực tập' },
  
  ]
  const optiondiadiem = [
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

const { Dragger } = Upload;
const { TextArea } = Input;
const songay =(timeToCompare)=>{
    const compareTime = new Date(timeToCompare);

    // Lấy thời gian hiện tại
    const currentTime = new Date();

    // Tính toán thời gian hiệu giữa currentTime và compareTime
    const timeDifference = compareTime - currentTime;

    // Chuyển đổi thời gian hiệu thành số ngày
    let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if(daysDifference <= 0){
        daysDifference = 0
    }
    return daysDifference
}
const sophut = (timeToUpdate) => {
    // Biến đổi chuỗi thời gian thành đối tượng Date
    const updateTime = new Date(timeToUpdate);

    // Lấy thời gian hiện tại
    const currentTime = new Date();

    // Tính toán hiệu giữa currentTime và updateTime
    const timeDifference = currentTime - updateTime;

    // Chuyển đổi thời gian hiệu thành số phút
    const minutesDifference = Math.floor(timeDifference / (1000 * 60));

    // console.log("a", minutesDifference);

    if (isNaN(minutesDifference)) {
        return 0;
    }
    return minutesDifference;
}


const options = [
  { value: '1', label: 'Dưới 3 triệu' },
  { value: '2', label: '3 - 5 triệu' },
  { value: '3', label: '7 - 10 triệu' },
  { value: '4', label: '10 - 12 triệu' },
  { value: '5', label: 'trên 12 triệu' },
 
  { value: '127', label: 'Thỏa Thuận' }
]

const slugVietnamese = require('slug-vietnamese');
function Search_job() {
    let navigate = useNavigate(); 
    // const { slug } = useParams();

    // console.log(slug)

    const location = useLocation();
    const activetimviec=(name)=>{
        if(name === true){
            const idviec = document.getElementById('my-viec');
            idviec.style.color="#00b14f"
        }
        
    }
    const [ jobid,setjobid] = useState()
    const [open, setOpen] = useState(false);
    const showModal = (id) => {
        setjobid(id)
      setOpen(true);
    };
   
    const [data,setdata] =useState([]);
    const [page,setpage] = useState(1);
    
    const  getdata = async()=>{
        const result = await get_all_job(page);
         setdata(result.data.data)
    }
    

    // phải xử lý loại tiền
    function formatNumber(number) {
        if (number >= 1000000) {
          return (number / 1000000).toFixed(2) + ' triệu';
        } else if (number >= 1000) {
          return (number / 1000).toFixed(2) + ' nghìn';
        } else {
          return number.toString();
        }
      }
    
      // Nội dung gửi
      const [content, setContent] = useState(''); // Trạng thái để lưu nội dung của TextArea

        const handleTextAreaChange = (e) => {
            const value = e.target.value;
            setContent(value);
        }; 
      // file
      const [fileInfo, setFileInfo] = useState({ fileName: '', fileData: null });

      const props = {
        name: 'file',
        multiple: false,
        showUploadList: false, // Ẩn danh sách tệp đã tải lên
        accept: '.pdf',
        beforeUpload: (file) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            setFileInfo({ fileName: file.name, fileData: reader.result });
          };
          return false; // Ngăn tải lên tự động
        },
        onRemove: () => {
          setFileInfo({ fileName: '', fileData: null });
        },
      };

      // apply job
     
      const hideModal = async(id) => {
        // gửi data
        // check xem đăng nhập chưa
        var checklogin = true;
        try {
            const token = window.localStorage.getItem('cccd'); 
            if(token == null || token == ''){
                checklogin = false
            }
        } catch (error) {
           
                checklogin = false
            
        }
        if(checklogin == true){

            try {
                const user_id = window.localStorage.getItem('userid'); 
                // console.log(user_id)
                // console.log(id)
                // console.log(fileInfo.fileName)
                // console.log(fileInfo.fileData)
                // console.log(content)
                const currentDateTime = new Date().toISOString().slice(0, 10);
                // viết api apply job
                const data = new FormData();
                const base64Data = fileInfo.fileData.split(',')[1];
                console.log('Dữ liệu PDF dưới dạng Base64:', base64Data);
                data.append("post_new_id", jobid);
                data.append("user_id",user_id);
                data.append("filename",fileInfo.fileName);
                data.append("filedata",base64Data);
                data.append("thoigian",currentDateTime);
                data.append("content",content)
                const result = await postapplyjobapi(data);
    
                // console.log(result)
                if(result.data.data == "ok"){
                    message.success(`Ứng tuyển thành công`);
                }
                else{
                    message.error(`Xảy ra lỗi vui lòng thử lại sau`);
                }
            
            } catch (error) {
                
            }
            
            setOpen(false);
        }
      };
      const Applyjob =async(id)=>{
      
        showModal(id)
        
      }



    const currentURL = location.pathname + location.search;

  

    // viết tìm kiếm



    // api tìm kiếm
    const getdatatimkiem = async()=>{
        console.log(decodeURIComponent(currentURL))
        const is_url =  decodeURIComponent(currentURL)
        const parts = is_url.split("/");


        const trimmedUrl = parts[2];
        // console.log(trimmedUrl)
        const result = await timkiemcongviecapi(trimmedUrl)

        // console.log(result)
        setdata(result.data.data)
    }

    //state tại trang tìm kiếm
    const [myspage,setmyspage] = useState(1)
    const [tencongviec,settencongviec] = useState("");
    const [diadiemcv,setdiadiemcv]  = useState("");
    const [hinhthuclamviec,sethinhthuclamviec] = useState("");
    const [mucluong,setmucluong]= useState("");

  
    //pager
    
   
    const handleCityChange = (selected) => {
        setdiadiemcv(selected);
      };
    // tencongviec
    const handleChange= (event) => {
        settencongviec(event.target.value)
      }

    //cấp bậc
    const hanldehinhthuc  =(selected)=>{
        sethinhthuclamviec(selected)
    }
    //mức lương
    const hanldemucluong  =(selected)=>{

       
        setmucluong(selected)
    }
    const Submittimviec=()=>{
      
        
            const queryParams = [];
            if (tencongviec !== "") {
            queryParams.push(`congviec=${(tencongviec)}`);
            }

            if (diadiemcv !== "") {
            queryParams.push(`diadiem=${(diadiemcv.value)}`);
            }

          

            if (mucluong !== "") {
            queryParams.push(`mucluong=${(mucluong.value)}`);
            }

            if (hinhthuclamviec !== "") {
            queryParams.push(`hinhthuc=${(hinhthuclamviec.value)}`);
            }
           
            if(tencongviec == "" && diadiemcv.value == ""  && mucluong.value =="" && hinhthuclamviec.value ==""){
                queryParams.push(`viec-lam-giao-duc`);
            }
        const url = `/tim-viec/${queryParams.join("&")}`;
        
        navigate(url)
        const timer = setTimeout(() => {
            window.location.reload();

          }, 1000);
       
    }

    //pager
    function handlePageChange(page, pageSize) {
       
       
        setmyspage(page)
        
        if (location.pathname.includes('/tim-viec/viec-lam-giao-duc')) {
            getdata(myspage)
        }else{
            let currentURL = location.pathname + location.search;
            currentURL = decodeURIComponent(currentURL);
            let url=""
            // Tìm kiếm xem chuỗi chứa "page="
                const indexOfPage = currentURL.indexOf("&page=");
            
                if (indexOfPage !== -1) {
                
                    const curl = currentURL.slice(0, indexOfPage);
                    url = curl +"&page="+page
            
                } else {
                    url = ( decodeURIComponent(currentURL)+"&page="+page)
                }
        
            navigate(url)
            const timer = setTimeout(() => {
                window.location.reload();

            }, 1000);
        }
      }


    const  activepage=()=>{
        const currentURL = location.pathname + location.search;
        const url = ( decodeURIComponent(currentURL))
        const indexOfPage = url.indexOf("&page=");

        if (indexOfPage !== -1) {
          // Nếu "page=" tồn tại, cắt giá trị page ra từ cuối chuỗi
          const pageValue = url.slice(indexOfPage + 5); // 5 là độ dài của "page="
            setmyspage(pageValue)
         
        } else {
            console.log("active",myspage)
          setmyspage(1)
        }
    }


    // công ty nỏi bât
    const [datacongtynoibat,setdatacongtynoibat] = useState({})
    const getdatacongtynoibat =async()=>{
        const result = await congtynoibatapi();
        console.log(result)
        setdatacongtynoibat(result.data.data)
        console.log(datacongtynoibat)
    }











    // yêu thích

    const  hanlderyeuthich =async(item)=>{
        // console.log(item)
        const user_id = window.localStorage.getItem('userid'); 
        const mydata = new FormData();
        mydata.append("user_id", user_id)
        mydata.append("job_id", item.post_new_id)
        const result = await savecongviecyeuthichapi(mydata)
        // console.log(result)
        if(result.data.data =="ok"){
            message.open({
                type: 'success',
                content: 'Thành công',
                className: 'custom-class',
                style: {
                  marginTop: '20vh',
                },
              });
        }else{
            message.open({
                type: 'warning',
                content: 'Đã lưu rồi',
                className: 'custom-class',
                style: {
                  marginTop: '20vh',
                },
              });
        }
    }
    useEffect(() => {
        getdatacongtynoibat()
        activepage()
      activetimviec(location.pathname.includes('tim-viec'));
      if (location.pathname.includes('/tim-viec/viec-lam-giao-duc')) {
        getdata();
      }else{
        getdatatimkiem();
       
      }
  
     
    }, []);

  return (
    <>

    <UserHead/>
    <Modal
        title="Ứng tuyển  công việc"
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
        okText="Gửi"
        cancelText="Hủy"
      >
         <div>
            <Button type='primary' >Nội dung ứng tuyển</Button>
            <TextArea  className="mt-1"rows={4} placeholder="Viết nội dung ứng tuyển ở đây tối đa 2000 ký tự" maxLength={2000}   value={content} // Hiển thị giá trị từ trạng thái
            onChange={handleTextAreaChange} // Sự kiện khi thay đổi giá trị
        />
            <div>
            <Button type='primary' className='mt-1 mb-1' >Upload CV:</Button>
            <Dragger {...props} className='m-2'>
                <p className="ant-upload-drag-icon">
                <InboxOutlined />
                </p>
                <p className="ant-upload-text">Bạn có thể kéo thả file vào đây</p>
                <p className="ant-upload-hint">
                 Chỉ hỗ trợ file PDF và upload 1-CV
                </p>
            </Dragger>
            {fileInfo.fileName && (
                <div>
                <p>Uploaded File: {fileInfo.fileName}</p>
                <Button onClick={() => setFileInfo({ fileName: '', fileData: null })}>Xóa file hiện tại!</Button>
                </div>
            )}
    </div>
            
         </div>
        
      </Modal>
    <div id ="main">
        <div className='container bg-white mb-40 search-div'>
            <div className='d-flex banner'>
                <div className='ml-auto content'>
                    <h1 className="title">Việc làm giáo dục chất</h1>
                    <p className="description">Nâng tầm sự nghiệp với các cơ hội việc làm giáo dục tại các công ty hàng đầu. Thu nhập xứng tầm, đãi ngộ hấp dẫn, trải nghiệm đáng giá, khám phá ngay!</p>
                    <div className="label-tag">
                    <label className="label-remote"><i className="fa-solid fa-circle-check"></i> Giáo viên tiếng anh</label>
                    <label className="label-remote"><i className="fa-solid fa-circle-check"></i> Giáo viên mầm non</label>
                    <label className="label-remote"><i className="fa-solid fa-circle-check"></i> Giáo viên sau đại học</label>
                    <label className="label-remote"><i className="fa-solid fa-circle-check"></i> Giáo viên âm nhạc</label>
                    <label className="label-remote"><i className="fa-solid fa-circle-check"></i> Nhân viên tư vấn</label>
                    </div>


                </div>

                <div className="image">
                <img src={arrow} alt="Việc làm từ xa (remote) background" title="Việc làm từ xa (remote) background" className="w-100"/>
                </div>
            </div>

            {/*  */}

            <div className='box-search'>
                <div className='d-flex' id ="frm-search-job">
                    <input id="skill_id_form" type="hidden" name="skill_id"   value=""/>
                    <input id="skill_id_other_form" type="hidden" name="skill_id_other" value=""></input>
                    <input id="sort_form" type="hidden" name="sort" value=""/>

                    <div className="form-group input-data">
                    <span className="icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                    <input id="keyword" name="keyword" type="text"  className="form-control border-hover" placeholder="Tên công việc, vị trí bạn muốn ứng tuyển ..."     value={tencongviec} onChange={handleChange}/>
                    </div>


                    <div className="form-group input-data category">
                        <span className="icon">
                        <i className="fa-solid fa-building"></i>
                        </span>
                      
                         <Select options={optiondiadiem} value={diadiemcv} onChange={handleCityChange}

                         id="" name="company_field" className="classForminput" 
                         placeholder="Địa điểm"
                         
                         />

                      
                    </div>

                    <div className="form-group input-data category">
                        <span className="icon">
                        <i className="fa-solid fa-chart-user"></i>
                        </span>
                       
                            <Select options={optioncapbac} value={hinhthuclamviec} onChange={hanldehinhthuc}
                         
                         id="" name="company_field" className="classForminput" 
                         placeholder="Hình thức làm việc"
                         
                         />
                    </div>
                    <div className="form-group input-data category last">
                        <span className="icon">
                        <i className="fa-solid fa-money-check-dollar"></i>
                        </span>
                       
                            <Select options={options} value={mucluong} onChange={hanldemucluong}
                         
                         id="" name="company_field" className="classForminput" 
                         placeholder="Tất cả mức lương"
                         
                         />
                    </div>

                    <div className="form-group" id="btn-timkiemjob">
                    <button type="submit" className="btn btn-search-job" onClick={Submittimviec}><i className="fa-solid fa-magnifying-glass"></i> Tìm kiếm</button>
                    </div>



                </div>

            </div>


            {/*  */}

            <div className='list-job'>
                
                    {/* <div className="list-top-skill">
                                <button data-skill-id="187" className="change-skill item ">
                                Kỹ năng giao tiếp <label className="total">110</label>
                                </button>
                                <button data-skill-id="151" className="change-skill item ">
                                Excel <label className="total">101</label>
                                </button>
                                
                                <button data-skill-id-other="other" className="change-skill-other item ">
                                Khác
                                <label className="total">30</label>
                                </button>
                    </div> */}

                    <div className="job-header">
                    <h2>Tìm thấy <b className="text-highlight">{data.length ==0?"0":data.length}</b> việc làm phù hợp với yêu cầu của bạn.</h2>
                    </div>

                    <div className="show-important" id="sort-advanced">
                    <span>Ưu tiên hiển thị:</span>
                    <div data-sort="up_top" className="option-item-sort  active ">
                    <i className="fa-solid fa-circle-check first"></i>
                    <i id="up_top" className="fa-regular fa-circle last"></i>
                    <span className="name_sort" htmlFor="up_top">Tin mới nhất</span>
                    </div>
                    {/* <div data-sort="urgent" className="option-item-sort ">
                    <i className="fa-solid fa-circle-check first"></i>
                    <i id="urgent" className="fa-regular fa-circle last"></i>
                    <span className="name_sort" htmlFor="urgent">Cần tuyển gấp</span>
                    </div> */}
                    {/* <div data-sort="high_salary" className="option-item-sort ">
                    <i className="fa-solid fa-circle-check first"></i>
                    <i id="high_salary" className="fa-regular fa-circle last"></i>
                    <span className="name_sort" htmlFor="high_salary">Lương cao nhất</span>
                    </div> */}
                    </div>



                    {/* job */}

                    <div className='job-body row'>
                    <div className='col-md-8'>
                    {data.length == 0?"Không tìm thấy công việc nào" : <> {data.map(function(item,index){
                            return(<>
                                      

                                    <div className='job-list-2'>

                                    <div className="job-item-2 job-item-default
                                        bg-highlight  job-ta" data-job-id="1087756" data-job-position="1" data-box="BoxSearchResult">
                                    <div className="box-header">
                                        <div className="avatar">
                                            <a target="_blank" href={"/viec-lam/"+ slugVietnamese(item.tieudetuyendung)+"."+item.post_new_id}>
                                            <img src={item.image == null?logo:item.image} className="w-100" alt="KIM ÁO DÀI" title="Chuyên Viên Marketing Ads - Lương Net Upto 15Tr/ Tháng + Thưởng"/>
                                            </a>
                                        </div>
                                    <div className="body">
                                        <div className="box-label-top">
                                        </div>
                                        <div className="title-block">
                                            <h3 className="title">
                                            <a target="_blank" href={"/viec-lam/"+ slugVietnamese(item.tieudetuyendung)+"."+item.post_new_id}>
                                                <span data-toggle="tooltip" title="" data-placement="top" data-container="body" data-original-title="Chuyên Viên Marketing Ads - Lương Net Upto 15Tr/ Tháng + Thưởng">
                                                   {item.tieudetuyendung}</span>
                                                </a>
                                            </h3>
                                                <label className="title-salary">

                                                    {item.is_kieuluong ==="Thỏa Thuận"?"Thỏa Thuận":  item.is_luong =="VND"?<><div>{formatNumber(item.is_tu)} - {formatNumber(item.is_den)} {item.is_luong}</div></>:<><div>Từ: {(item.is_tu)}-Đến: {(item.is_den)} {item.is_luong}</div></>}
                                                
                                                </label>
                                        </div>
                                        <a className="company" href="/" data-toggle="tooltip" title="" data-placement="top" data-container="body" target="_blank" data-original-title="KIM ÁO DÀI">
                                            {item.name_cty}</a>
                                        <label className="deadline">
                                        {
                                            songay(item.time_cv) === 0
                                                ? "Hết hạn"
                                                : `Cập nhật ${sophut(item.time_update) } phút trước`
                                            }

                                          

                                    </label>
                                    <div className="box-job-relevance-job">
                                        <i className="fa-solid fa-star"></i>
                                        <span className="box-job-relevance-job_text">phù hợp </span>
                                    </div>
                                    <div className="box-info">
                                        <div className="label-content">
                                            <label className="address" data-toggle="tooltip" data-html="true" title="" data-placement="top" data-container="body" data-original-title="<p style='text-align: left'>Hồ Chí Minh: Tân Phú</p>">
                                            <i className="fa-solid fa-location-dot"></i>
                                            {JSON.parse( item.khuvuclamviec).map(function(item2,index){
                                                return(<>
                                                     { index == 0?item2.value:""}
                                                </>)
                                                 })}

                                                
                                            </label>
                                            <label className="time">
                                            <i className="fa-solid fa-clock"></i>
                                            {songay(item.time_cv)=== 0?"Hết hạn": <span>Còn <strong>{songay(item.time_cv)}</strong> ngày để ứng tuyển</span> }
                                            </label>
                                        </div>
                                    <div className="icon-save">

                                    {songay(item.time_cv)== 0? <button data-redirect-to="" disabled="true" className="btn btn-apply-now" >
                                    <span>Ứng tuyển</span></button>:<button data-redirect-to="" className="btn btn-apply-now"  onClick={() => Applyjob(item.post_new_id)}>
                                    <span>Ứng tuyển</span>
                                    </button>}
                                    <div id="box-save-job-1087756" className="box-save-job  box-save-job-hover   job-notsave ">
                                        <a href="#" className="btn-save save" data-id="1087756" data-title="Lưu" data-toggle="tooltip" data-placement="top" data-original-title="" title="" onClick={ ()=> hanlderyeuthich(item)}>
                                            <span id="save-job-loading" >
                                                {/* <img src="https://www.topcv.vn/v3/images/ap-loading.gif" style={{width:"20px"}}/> */}
                                            </span>
                                            <i className="fa-regular fa-heart"></i>
                                        </a>

                                        {/*  tin đã lưuu */}
                                    {/* <a href="" className="btn-unsave unsave text-highlight" data-toggle="tooltip" title="" data-id="1087756" data-title="Chuyên Viên Marketing Ads - Lương Net Upto 15Tr/ Tháng + Thưởng" data-placement="top" data-original-title="Bỏ lưu">
                                        <span id="unsave-job-loading" >
                                            <img src="https://www.topcv.vn/v3/images/ap-loading.gif" style={{width:"20px"}}/>
                                        </span>
                                        <i className="fa-solid fa-heart"></i>
                                    </a> */}
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>

                                    </div>

                                   
                                </>)
                        })}
                        </> 
                    }



                                <div className='row'>
                                    <div className='col-md-6'></div>
                                        <div className='col-md-6'>
                                    {data.length == 0?"":<Pagination defaultCurrent={myspage} total={data.length+10}    onChange={handlePageChange} pageSize={10} /> }
                                    </div> 
                                </div>
                        </div>














                        <div className='col-md-4'>
                            <div className='right-box'>
                                <div className='interested'>

                                <div className="box box-white box-no-padding" id="company-spotlight">
                                    <h3 className="title-spotlight">Có thể bạn quan tâm</h3>
                                    <div className="spotlight-company">
                                        <div className="spotlight-image">
                                            <a href="/">
                                                <div className="spotlight-cover-wraper">
                                                    <img src="https://cdn-new.topcv.vn/unsafe/500x/filters:format(webp)/https://static.topcv.vn/company_covers/cong-ty-cho-thue-tai-chinh-tnhh-mtv-quoc-te-chailease-faaaab73a31c881be517e4d50fc0bef2-6324407085818.jpg" alt="Công ty Cho thuê tài chính TNHH MTV Quốc tế Chailease" className="spotlight-cover"/>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="spotlight-info">
                                            <div className="company-name"><a className="text-highlight bold text_uppercase" style={{fontSize:"15px"}} 
                                            href="/">Nhân Viên Đào Tạo ( Giáo Vụ ) - Thu Nhập Upto 10 Triệu</a></div>
                                        </div>
                                        <div className="job">
                                            <a href="/" target="_blank" data-toggle="tooltip" title="" data-placement="top" className="job-name text-dark-blue underline-box-job" data-original-title="Senior Finance Officer - Treasury">
                                                Nhân Viên Đào Tạo ( Giáo Vụ )</a>
                                                <div className="d-flex">
                                                <div className="deadline ml-auto">
                                                    <i className="fa-light fa-money-bill text-highlight"></i> Thoả thuận
                                                </div>
                                                <div className="salary mr-auto">
                                                    <i className="fa-light fa-timer text-highlight"></i> 18/12/2023
                                                </div>
                                            </div>
                                        </div>
                                        <div className="job">
                                            <a href="/" target="_blank" data-toggle="tooltip" title="" data-placement="top" className="job-name text-dark-blue underline-box-job" data-original-title="Nhân Viên Hỗ Trợ Tín Dụng">
                                            Nhân Viên Đào Tạo ( Giáo Vụ ) </a>
                                                <div className="d-flex">
                                                <div className="deadline ml-auto">
                                                    <i className="fa-light fa-money-bill text-highlight"></i> Thoả thuận
                                                </div>
                                                <div className="salary mr-auto">
                                                    <i className="fa-light fa-timer text-highlight"></i> 18/12/2023
                                                </div>
                                            </div>
                                        </div>
                                        <div className="spotlight-count text-center">
                                            <a href="/" target="_blank" className="text-highlight get-more">TÌM HIỂU NGAY</a>
                                        </div>
                                        <div className="clearfix"></div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            {/* công ty nổi bật */}
                            <div id="top-company-highlight">
                            <hr/>
                            <h3 className="title">Top công ty nổi bật
                            </h3>
                            <div className="list">
                                {datacongtynoibat.length === 0 ?"":Array.isArray(datacongtynoibat)?
                                <>
                                {datacongtynoibat.slice(0,1).map((item, index) => (
                                    <div key={index}>
                                        <div className="item item-hover"   style={{display:"block "}}>
                                            <div>
                                                <a href="" className="logo">
                                                <img src={item.image ==null? logo: item.image} className="w-60"  style={{width:"60% !important"}} alt="" title=""/>
                                                </a>
                                            </div>
                                        <div className="info">
                                            <a className="title" href="#" >{item.name_cty}</a>
                                            {/* <p className="count">{item.max_bid_count}việc làm</p> */}
                                        </div>
                                        </div>
                                    </div>
                                ))}
                                
                                 
                              
                               
                                 </>
                                 :"b"
                            }   
                                
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

export default Search_job