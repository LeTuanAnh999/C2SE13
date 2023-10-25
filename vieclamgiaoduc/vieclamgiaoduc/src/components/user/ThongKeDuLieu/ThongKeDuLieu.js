import React from 'react'
import User_header from '../page_header/User_header'
import DataAnalytics from '../../admin/DataAna/DataAnalytics'
import Vieclamthongke from '../../admin/Tool/Vieclamthongke'
function ThongKeDuLieu() {
  return (
    <div>
        <User_header/>
        <div id ="main">
        <div className='container bg-white mb-40 search-div'>
            <div className='d-flex banner'>
                <div className='ml-auto content'>
                    <h1 className="title">Thống kê dữ liệu việc làm ngành giáo dục </h1>
                    <p className="description">Nâng tầm sự nghiệp với các cơ hội việc làm giáo dục tại các công ty hàng đầu. Thu nhập xứng tầm, đãi ngộ hấp dẫn, trải nghiệm đáng giá, khám phá ngay!</p>
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

        <div className='container bg-white mb-40 search-div' style={{marginTop:"-0.2rem"}}>
        <DataAnalytics/>
        <Vieclamthongke/>
        </div>
        </div>
        
      </div>
  )
}

export default ThongKeDuLieu