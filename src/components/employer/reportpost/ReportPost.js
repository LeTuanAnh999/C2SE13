import React, { useEffect, useState } from 'react'
import DataAnalytics from '../../admin/DataAna/DataAnalytics';
import ReactECharts from 'echarts-for-react';
import { Button } from 'antd';

import { getdulieutheoluong } from '../../api/adminapi/Adminapi';
function ReportPost(props) {

  const [data,setdata] = useState([]);


  const fetchmucluong = async()=>{
    const result = await getdulieutheoluong();
    console.log("a",result)
    const arraydata = []
    arraydata.push({ "value":result.data.data[0].value , "name":"Kinh Doanh"})
    arraydata.push({ "value":result.data.data[1].value , "name":"Markerting"})
    arraydata.push({ "value":result.data.data[2].value , "name":"Dịch vụ"})
    arraydata.push({ "value":result.data.data[3].value , "name":"Tư vấn"})
    arraydata.push({ "value":result.data.data[4].value , "name":"Giáo dục hành chính văn phòng"})
    setdata(arraydata)
  
  }
  const option = {
    title: {
      text: 'Báo cáo theo mức lương từng ngành',
    
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };


  useEffect(()=>{
    fetchmucluong()
  },[])
  return (
    <>
             <div data-v-07f0dc2d="">
                <div className='page-wrapper2 chiller-theme'>

                <div className='page-container'>
                <div data-v-502ae57c="" className="homepage-banner container-fluid page-content pd-b-0"></div>

               
                    <div className='container-fluid page-content'>
                    <h4 data-v-502ae57c="" class="mb-4">Báo cáo Nhu cầu tuyển dụng</h4>
                      <div className='bg-white p-3 rounded'> <Button type='primary'>Báo cáo tuyển dụng </Button>
                      
                      
                      <div className=' row mt-5'>
                       <div className='col-md-12'>
                       
                          {data.length === 0?"":<ReactECharts option={option}   />}
                       </div>
                       </div>
                      <div className=' row mt-5'>
                       <div className='col-md-12'>
                       <DataAnalytics/>
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

export default ReportPost;