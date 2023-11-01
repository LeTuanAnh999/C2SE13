import React, { useEffect,useState } from 'react'
import User_header from '../page_header/User_header'
import "./style.css"
import logo from "../page_header/LOGO.png"
import User_Footer from '../page_footer/User_Footer'

import { getthongtinnhatuyendungapi2 } from '../../api/employerapi/Employerapi'

function DanhSachNhaTuyenDung() {


  const [data,setdata] = useState([])
  const fecthdata = async()=>{
    const result = await getthongtinnhatuyendungapi2();
    setdata(result.data.data)
    console.log(result)
  }
  useEffect(()=>{
    fecthdata()
  },[])
  return (
    <>
    
    <div>
    <User_header/>
    <div id ="main">
    <div className='container bg-white mb-40 search-div'>
        <div className='d-flex banner'>
            <div className='ml-auto content'>
                <h1 className="title">Danh Sách CÔNG TY - NHÀ TUYỂN DỤNG </h1>
                <p className="description">Nâng tầm sự nghiệp với các cơ hội việc làm giáo dục tại các công ty hàng đầu. Thu nhập xứng tầm, đãi ngộ hấp dẫn, trải nghiệm đáng giá, khám phá ngay!</p>
                <div className="label-tag">
                {data.lenght === 0?"":
                 <> {data.slice(0, 4).map((item,index)=>{
                  return <>
                        <label className="label-remote"><i className="fa-solid fa-circle-check"></i> {item.name_cty}</label>
                       
                      </>
             
              })}    </>}
              
               </div>


            </div>

            <div className="image">
           
            </div>
        </div>

        <div className='featured-companies'>
            <div className="company-header text-center">
              <h4 className="title mt-4">DANH SÁCH CÁC CÔNG TY- NHÀ TUYỂN DỤNG NỔI BẬT</h4>
              </div>

            <div className='container'>
              <div className='row'>

                {data.lenght === 0?"":
                 <> {data.map((item,index)=>{
                  return <>
                  <div className='col-md-4 col-sm-6'>
                  <div className="box-company item-hover">
                    <div className="company-banner">
                    <a href="">
                    <div className="cover-wraper">
                    <img src={ item.image_banner =="null"?logo:item.image_banner} alt="" className="img-fluid" style={{ maxWidth:"99,99%"}}/>
                    </div>
                    </a>
                    <div className="company-logo" id="ompany-logo2">
                    <a href="">
                    <img className="img-fluid" src={item.image =="null"?logo:item.image} alt=""/>
                    </a>
                    </div>
                    </div>
                    <div className="company-info">
                    <h3>
                    <a href="" className="company-name" target="_blank">{item.name_cty}</a>
                    </h3>
                    <div className="company-description">
                    <p>{item.gioithieucty}</p>
                    </div>
                    </div>
                    </div>

                  </div> </>
                 })}
                  
                  </>
                  }
               
              </div>

            </div>

        </div>

    </div>

    <div className='container bg-white mb-40 search-div' style={{marginTop:"-0.2rem"}}>
   
    </div>
    </div>
    
  </div>
    
      <User_Footer/>
    
    </>
  )
}

export default DanhSachNhaTuyenDung