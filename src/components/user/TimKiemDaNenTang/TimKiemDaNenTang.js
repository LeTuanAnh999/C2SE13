import React, { useEffect, useState ,useRef} from 'react'
import User_header from '../page_header/User_header'
import {  useParams,useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "../../jobs/Style.css"
import Select from 'react-select'

import axios from 'axios';
import { Badge,Space,Card,Table, Button} from 'antd';
import 'react-toastify/dist/ReactToastify.css';
import {  toast, } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
const slugVietnamese = require('slug-vietnamese');
   const optioncapbac =[
    { value: '1', label: 'Toàn thời gian' },
    { value: '3', label: 'Bán thời gian' },
    { value: '5', label: 'Thực tập' },
  
  ]
  const optiondiadiem = [
    { value: 'tai-ha-noi-l1c', label: 'Hà Nội' },
    { value: 'tai-ho-chi-minh-l2c', label: 'Hồ Chí Minh' },
    {value:'tai-binh-duong-l3c', label:'Bình Dương'},
    {value:'tai-bac-ninh-l4c', label:'Bắc Ninh'},
    {value:'tai-dong-nai-l5c', label:'Đồng Nai'},
    {value:'tai-hung-yen-l6c', label:'Hưng Yên'},
    {value:'tai-hai-duong-l7c', label:'Hải Dương'},
    {value:'tai-da-nang-l8c', label:'Đà Nẵng'},
    {value:'tai-hai-phong-l9c', label:'Hải Phòng'},
    {value:'tai-an-giang-l10c', label:'An Giang'},
    {value:'tai-ba-ria-vung-tau-l11c', label:'Bà Rịa - Vũng Tàu'},
    {value:'tai-bac-giang-l12c', label:'Bắc Giang'},
  ];
  const options = [
    { value: '&salary_min=0&salary_max=10000000', label: 'Dưới 10 triệu' },
    { value: '&salary_min=10000000&salary_max=15000000', label: '10 - 15 triệu' },
    { value: '&salary_min=15000000&salary_max=20000000', label: '15 - 20 triệu' },
    { value: '&salary_min=20000000&salary_max=25000000', label: '20 - 25 triệu' },
    { value: '&salary_min=25000000&salary_max=30000000', label: '25 - 30 triệu' },
   
    
  ]
function TimKiemDaNenTang() {
    let navigate = useNavigate(); 
    const location = useLocation();


    const activetimviec=(name)=>{
        if(name === true){
            const idviec = document.getElementById('timkiemdanentang');
            idviec.style.color="#00b14f"
        }
        
    }


    // cv

    const [data,setdata] = useState([])
    const [tencongviec,settencongviec] = useState("");
    const [diadiemcv,setdiadiemcv]  = useState("");
    const [hinhthuclamviec,sethinhthuclamviec] = useState("");
    const [mucluong,setmucluong]= useState("");

    // onchange
      
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


    const toastId = useRef(null);

    const getdats = async () => {
     
      try {
        let checktencongviec =""
        if(tencongviec == null || tencongviec == ""){
            checktencongviec = ""
        }else{
            checktencongviec =slugVietnamese(tencongviec)
        }
        let checkdiadiem =""
        if(diadiemcv.value == null || diadiemcv.value == "" ){
            checkdiadiem = ""
        }else{
            checkdiadiem =(diadiemcv.value)
        }
        let checkhinhthuc=""
        if(hinhthuclamviec.value === undefined){
            checkhinhthuc=1
        }else{
            checkhinhthuc= hinhthuclamviec.value
        }
        let checkmucluong=""
        if(mucluong.value === undefined){
            checkmucluong='&salary_min=0&salary_max=10000000'
        }else{
            checkmucluong= mucluong.value
        }
        let url =""
      
        url ="http://localhost:5555/apiv1/getdatagiaoducdanentang?tencongviec="+checktencongviec+"&diadiem="+checkdiadiem+"&salary="+checkhinhthuc+checkmucluong
       
      
        const result = await axios.get(url)
        setdata(result.data.data)
        console.log(result)
      } catch (error) {
        // Handle errors here
        console.error(error);
        throw error; // Rethrow the error to be caught by the toast
      }
    };
    const Submittimviec=async()=>{

        if(! toast.isActive(toastId.current)) {
            toastId.current = toast.promise(
              getdats,
              {
                pending: 'Đang lấy dữ liệu!👌',
                success: 'Thành công ',
                error: 'Có lỗi xảy ra 🤯',
              
              
              }
              
            )
          }
      
    
   
    }

    const applycv = async(item)=>{
      console.log(item)
      window.open(item.ink, '_blank');
    }

    const columns = [
        {
          title: 'Image',
          dataIndex: 'image',
          render:(image) => <img src ={image}/>,
          width:"10%",
        },
        {
          title: 'Tên công việc',
          dataIndex: 'Title',
         
        },
        {
            title: 'Mức lương',
            dataIndex: 'Salary',
           
          },
          {
            title: 'Thời hạn CV',
            dataIndex: 'Time_cv',
            render:(Time_cv) => <> Còn {Time_cv} ngày</>
           
          },
          {
            title: 'Địa điểm',
            dataIndex: 'Address',
           
          },
          {
            title: 'Nhà tuyển dụng',
            dataIndex: 'Company',
           
          },
          {
            title: 'Chức năng',
            dataIndex: 'Company',
            render:(Company,item)=> <> <Button type='primary' className='mt-1' onClick={()=> applycv(item)}>Ứng tuyển</Button></>
          },
      ];


      const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
      };
    useEffect(() => {
      activetimviec(location.pathname.includes('tim-kiem-da-nen-tang'));
  
    }, []);
  return (
    <div>
        <User_header/>


        <ToastContainer />
        <div id ="main">
        <div className='container bg-white mb-40 search-div'>
            <div className='d-flex banner'>
                <div className='ml-auto content'>
                    <h1 className="title">Tìm kiếm đa nền  tảng  thêm dữ liệu việc làm ngành giáo dục </h1>
                    <p className="description">Nâng tầm sự nghiệp với các cơ hội việc làm giáo dục tại các công ty hàng đầu. Thu nhập xứng tầm, đãi ngộ hấp dẫn, trải nghiệm đáng giá, khám phá ngay!</p>
                    <div className="label-tag">
                    <label className="label-remote"><i className="fa-solid fa-circle-check"></i> Tìm kiếm đa nên tảng</label>
                    <label className="label-remote"><i className="fa-solid fa-circle-check"></i> Tìm kiếm theo tiêu đề</label>
                    <label className="label-remote"><i className="fa-solid fa-circle-check"></i> Tìm kiếm theo địa điểm</label>
                    <label className="label-remote"><i className="fa-solid fa-circle-check"></i> Tìm kiếm theo vị trí...</label>
                    </div>


                </div>

                <div className="image">
               
                </div>

               
            </div>
            <div className='container bg-white mb-40 search-div' style={{marginTop:"-0.2rem"}}>

                  

                    <div className='box-item-cv py-2 px-2'>
                    <Badge.Ribbon text="Đang phát triển thêm các nền tảng khác" color="green">
                        <Card title="Chọn nền tảng tìm kiếm" size="small">
                            <div id="selectnentang" >
                             <Select options={[
                                        { value: 'TOPCV', label: 'Nền tảng TOPCV' },
                                      
                                        // { value: 'Careerbuilder', label: 'Nền tảng Careerbuilder ' },
                                       
                                    ]}

                                    id="" name="company_field" className="classForminput" 
                                    placeholder="Nền tảng  mặc định TOPCV"
                                    defaultValue={"Nền tảng TOPCV"}
                                    style={{zIndex:"88888"}}
                                    />

                             </div>
                             <div className='box-search '  >
                                    <div className='d-flex' id ="">
                                      
                                        <div className="form-group input-data">
                                        <span className="icon" id="icon-new-id" style={{zIndex:"unset"}}>
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                        </span>
                                        <input id="keyword" name="keyword" type="text"  className="form-control border-hover" placeholder="Tên công việc, vị trí bạn muốn ứng tuyển ..."     value={tencongviec} onChange={handleChange}/>
                                        </div>


                                        <div className="form-group input-data category">
                                            <span className="icon" id="icon-new-id" style={{zIndex:"unset "}}>
                                            <i className="fa-solid fa-building"></i>
                                            </span>
                                        
                                            <Select options={optiondiadiem} value={diadiemcv} onChange={handleCityChange}

                                            id="" name="company_field" className="classForminput" 
                                            placeholder="Địa điểm"
                                            
                                            />

                                        
                                        </div>

                                        <div className="form-group input-data category">
                                            <span className="icon" style={{zIndex:"unset "}}>
                                            <i className="fa-solid fa-chart-user"></i>
                                            </span>
                                        
                                                <Select options={optioncapbac} value={hinhthuclamviec} onChange={hanldehinhthuc}
                                            
                                            id="" name="company_field" className="classForminput" 
                                            placeholder="Hình thức làm việc"
                                            
                                            />
                                        </div>
                                        <div className="form-group input-data category last">
                                            <span className="icon" style={{zIndex:"unset "}}>
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

                            <div className='item'>
                            <Table columns={columns} dataSource={data} onChange={onChange} />
                            </div>
                        </Card>


                        </Badge.Ribbon>

                    </div>
            </div>

        </div>

        </div>




    </div>
  )
}

export default TimKiemDaNenTang