import React, { useEffect, useState } from 'react'
import User_header from '../page_header/User_header'
import "./style.css"
import { useNavigate } from "react-router-dom";
import { getthongtinungvienapi } from '../../api/candidateapi/Candidateapi'
import { changethongtinungvienapi } from '../../api/candidateapi/Candidateapi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select'

const options = [
    { value: 'Nam', label: 'Nam' },
    { value: 'Nữ', label: 'Nữ' },
    { value: 'Khác', label: 'Khác' }
  ]
function Settingcanhan() {

    let navigate = useNavigate();
    const [data,setdata] = useState({})
    const fecththongtin = async()=>{
        try {
            var user_id = window.localStorage.getItem('userid');

            const data = new FormData();
            data.append("user_id", user_id);

            const result = await getthongtinungvienapi(data);
            setdata(result.data.data[0])
            console.log(result)
        } catch (error) {
            navigate('/');
        }
    }

    // data
    const handleChangename = (event)=>{
   
        // Update the dataem state with the new value
        setdata({
          ...data,
          name: event.target.value,
        });
      
    }
    const handleChangephone= (event)=>{
   
        // Update the dataem state with the new value
        setdata({
          ...data,
          phone: event.target.value,
        });
      
    }
    const handleChangegioitinh= (event)=>{
   

        console.log(event.value)
      
        setdata({
          ...data,
          gender: event.value,
        });
      
    }


    const submitchange = async()=>{
        console.log(data)
        var user_id = window.localStorage.getItem('userid');

        const mydata = new FormData();
        mydata.append("user_id", user_id);
        mydata.append("name",data.name )
        mydata.append("phone",data.phone )
        mydata.append("gender",data.gender )

        const result = await changethongtinungvienapi(mydata)
        if(result.data.data !="fail"){
            toast.success(' Thành công!', {
                position: "top-right",
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
            toast.error('Có lỗi!', {
                position: "top-right",
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
    useEffect(()=>{
        fecththongtin()

    },[])
  return (
    <>
     <ToastContainer />
     <div>
        <User_header/>
        <div id ="main">
        <div className='container bg-white mb-40 search-div'>
            <div className='d-flex banner'>
                <div className='ml-auto content'>
                    <h1 className="title">Tài khoản cá nhân </h1>
                    <p className="description">Nâng tầm sự nghiệp với các cơ hội việc làm giáo dục tại các công ty hàng đầu. Thu nhập xứng tầm, đãi ngộ hấp dẫn, trải nghiệm đáng giá, khám phá ngay!</p>
                    <div className="label-tag">
                   
                    </div>


                </div>

                <div className="image">
               
                </div>
            </div>

        </div>

        <div className='container bg-white mb-40 search-div' style={{marginTop:"-0.2rem"}}>
            <div className='row'>
                <div className='col-12 px-4 py-4'>
                    <div className='box-group'>

                        <div className='box-group-body'>
                            <div className='box-white clearfix box-update-info'>
                            <div className="box-header" py-2 px-2>
                                <h4>Cài đặt thông tin cá nhân</h4>
                                <span className="required"><span className="require_hight-light">(*)</span>&nbsp;Các thông tin bắt
                                buộc</span>
                            </div>
                            <div className="box-content py-2 px-2">
                                    <div className="box-need-work">
                                    <div className="box-item " >
                                    <p>Họ và tên <span className="require_hight-light">*</span></p>
                                            <input   style={{marginTop:"-0.4rem"}}type="text" className="form-control box-item__input" placeholder="Nhập họ và tên" name="fullname"  value={data.name} onChange={handleChangename} />
                                    </div>
                                    <div className="box-item">
                                    <p className='mt-2'>Số điện thoại</p>
                                    <input type="text"  style={{marginTop:"-0.4rem"}} className="form-control box-item__input" placeholder="Nhập số điện thoại" name="phone" value={data.phone}  onChange={handleChangephone}/>
                                    </div>

                                    <div className="box-item">
                                    <p className='mt-2'>Giới tính</p>
                                    <Select options={options}  placeholder={data.gender} onChange={handleChangegioitinh} />
                                    </div>
                                    <div className="box-item">
                                    <p className='mt-2'>Email</p>
                                    <input  disabled="true" style={{marginTop:"-0.4rem"}} type="text" className="form-control box-item__input" value={data.email}  readonly=""/>
                                    </div>
                                    </div>
                                    <div className="box-submit mt-2">
                                    <button type="submit" id="btn-topcv-update-profile-online" className="btn btn-topcv-primary" onClick={submitchange}>Lưu</button>
                                    </div>
                                    </div>
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

export default Settingcanhan