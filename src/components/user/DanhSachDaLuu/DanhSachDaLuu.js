import React from 'react'
import User_header from '../page_header/User_header'
import User_Footer from '../page_footer/User_Footer';
import { verify_token } from '../../api/candidateapi/Candidateapi';
import { useEffect ,useState} from 'react';
import { useNavigate } from "react-router-dom";
import { getlistcongviecyeuthichapi } from '../../api/candidateapi/Candidateapi';
import "./style.css"
import logo from "../page_header/LOGO.png"
const slugVietnamese = require('slug-vietnamese');
function  DanhSachDaLuu() {
    let navigate = useNavigate(); 
    const checklogin = async () => {
        try {
            const token = window.localStorage.getItem('cccd');
            const result = await verify_token(token);
            if (result.data.data === 'tokenull') {
                navigate('/login');
            }
           
        } catch (error) {
            navigate('/login');
        }
    }

    function formatNumber(number) {
        if (number >= 1000000) {
          return (number / 1000000).toFixed(2) + ' triệu';
        } else if (number >= 1000) {
          return (number / 1000).toFixed(2) + ' nghìn';
        } else {
          return number.toString();
        }
      }
    const[data,setlistdata] = useState([]);
    const getalldata = async()=>{
        const id = window.localStorage.getItem('userid');
        const data = new FormData();
        data.append("user_id ",id)
        const result = await getlistcongviecyeuthichapi(data);
        setlistdata(result.data.data)
        console.log(result)
    }

    console.log(data)
    useEffect(() => {
        checklogin();
        getalldata();
    }, []);
  return (
    
    <div>
    <User_header/>
    <div id ="main">
    <div className='container bg-white mb-40 search-div'>
        <div className='d-flex banner'>
            <div className='ml-auto content'>
                <h1 className="title">Danh Sách Việc làm đã ứng tuyển </h1>
                <p className="description">Nâng tầm sự nghiệp với các cơ hội việc làm giáo dục tại các công ty hàng đầu. Thu nhập xứng tầm, đãi ngộ hấp dẫn, trải nghiệm đáng giá, khám phá ngay!</p>
                <div className="label-tag">
                <label className="label-remote"><i className="fa-solid fa-circle-check"></i> Giáo viên tiểu học</label>
                <label className="label-remote"><i className="fa-solid fa-circle-check"></i> Giáo viên mầm non</label>
             
                </div>


            </div>

            <div className="image">
           
            </div>
        </div>

    </div>

    <div className='container bg-white mb-40 search-div' style={{marginTop:"-0.2rem"}}>
        <div id="history-apply" className='mb-5'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='box-group'>
                        <div className='box-group-header-applied box-group-header'>
                        <div className="box-group-title">
                            Công việc đã lưu
                            </div>
                        </div>

                            <div className='box-group-body'>
                            <div className='feed-jobs'>
                            {data.length === 0 ? (
                                    <p>Bạn chưa lưu công việc nào</p>
                                    ) : (
                                    <div className=''>
                                        {data.map((item, index) => (
                                        <div className='job-item' key={index}>
                                            <div className='d-flex'>
                                            <div className="company-logo">
                                                <img src={item.image == null?logo:item.image} style={{ maxHeight: "100%" }} alt={item.campaign_name} />
                                            </div>
                                            <div className='company-info'>
                                                <div className='title-block'>
                                                <div className="job-title">
                                                    <a  style={{color:"black"}} href={"/viec-lam/"+slugVietnamese(item.tieudetuyendung)+"."+item.post_new_id} className="transform-job-title">{item.tieudetuyendung}</a>
                                                </div>
                                                <label className="title-salary">
                                                    <i className="fa-solid fa-circle-dollar"></i>

                                                    {item.is_kieuluong =="Thỏa thuận"?"Thoả thuận":<> Từ: {formatNumber(item.is_tu)} - Đến:  {formatNumber(item.is_den)} - {item.is_luong}</>}
                                                    
                                                </label>
                                                </div>
                                                <div className="company-name text-gray">
                                                <a href={"/congty/"+slugVietnamese(item.name_cty)+"."+ item.id} className="text-gray" style={{color:"#00b14f", fontWeight:"bold"}}>{item.name_cty}</a>
                                                </div>
                                                {/* <div className="job-applies-meta">
                                                <span className="cv-date">
                                                    Thời gian ứng tuyển: {item.time_scan}
                                                </span>
                                                </div> */}
                                                {/* <div className="box-cv-apply-status">
                                                <div className="cv-apply-status-text">
                                                    <span style={{color:"#00b14f", fontWeight:"bold"}}>Trạng thái:</span> <span className="rejected">{item.status}</span>
                                                </div>
                                                <div className="cv-apply-status-time">
                                                    Vào lúc: {item.time_scan}
                                                </div>
                                                </div> */}
                                            </div>
                                            </div>
                                        </div>
                                        ))}
                                    </div>
                                    )}

                                
                            </div>
                            



                        </div>

                    </div>



                </div>

                {/* <div className='col-md-4'>
                    aaaaaaaaaaa
                </div> */}


            </div>
    </div>
    </div>
    </div>
    <User_Footer/>
    
  </div>
  )
}

export default DanhSachDaLuu