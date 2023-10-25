import React, { useState } from 'react'
import "./style.css"
import { Badge, Card, Space, Select ,Divider, Button} from 'antd';
import ReactECharts from 'echarts-for-react';
import logo from "./dashboard-item.webp";
import axios from 'axios';
import { getdulieumoinhat } from '../../api/adminapi/Adminapi';
import { getdulieutheonganhnghe } from '../../api/adminapi/Adminapi';
import { useEffect } from "react";
// import { HorizontalBar } from "react-chartjs-2";
import { getdulieutheoluong } from '../../api/adminapi/Adminapi';
import { getdulieutheotangtruong } from '../../api/adminapi/Adminapi';
function DataAnalytics() {




      const [datamoi,setdatamoi] = useState('')
      const [datatheonganhnghe,setdatheonganhnghe] = useState('')
      const [datatheoluong,setdatatheoluong] = useState('')
      const [datatangtruongngay,setdatatangtruongngay] = useState('')
      const [datatangtruongvalue,setdatatangtruongvalue] = useState('')

      const options = {
        xAxis: {
          type: 'category',
          data: ['Kinh doanh', 'Marketing', 'Dịch vụ', 'Tư Vấn', 'Giáo dục & HCVP'],
          axisTick: {
            alignWithLabel: true
          }
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: datatheonganhnghe,
            type: 'bar',
            color:"#155741",
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            },
            label: {
                show: true, // Display labels on the bars
                position: 'top', // Position of the labels (can be 'top', 'insideTop', 'inside', etc.)
                color: 'black', // Label text color
                fontSize: 12, // Label font size
                rotate: 0, // Rotate labels by 0 degrees (horizontal)
              },
          }
        ]
      };
      const optionstheoluong = {
        xAxis: {
          type: 'category',
          data: ['Kinh doanh', 'Marketing', 'Dịch vụ', 'Tư Vấn', 'Giáo dục & HCVP'],
          axisTick: {
            alignWithLabel: true
          }
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: datatheoluong,
            type: 'bar',
            color:"#155741",
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            },
            label: {
                show: true, // Display labels on the bars
                position: 'top', // Position of the labels (can be 'top', 'insideTop', 'inside', etc.)
                color: 'black', // Label text color
                fontSize: 12, // Label font size
                rotate: 0, // Rotate labels by 0 degrees (horizontal)
              },
          }
        ]
      };

      const options2= {
        title: {
          text: '   ',
         
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Tăng trưởng',],
          textStyle: {
            color: 'white', // Set legend text color to white
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
          
        },
        toolbox: {
          feature: {
            saveAsImage: {},
            
          },
          
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: datatangtruongngay,
          textStyle: {
            color: 'white', // Set legend text color to white
          },
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Tăng trưởng',
            type: 'line',
            stack: 'Total',
            data: datatangtruongvalue,
            color:"rgb(0, 177, 79)",
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            },
            // label: {
            //     show: true,
            //     position: 'top',
            //     color: 'white', // Set label color to white
            //   },
          },
        ]
      }

      const fetchnganhnghe = async()=>{
        const result = await getdulieutheonganhnghe();
        console.log(result)
        const arraydata = []
        arraydata.push(result.data.data[0].value)
        arraydata.push(result.data.data[1].value)
        arraydata.push(result.data.data[2].value)
        arraydata.push(result.data.data[3].value)
        arraydata.push(result.data.data[4].value)
        setdatheonganhnghe(arraydata)
      
      }
      const fetchmucluong = async()=>{
        const result = await getdulieutheoluong();
        console.log("a",result)
        const arraydata = []
        arraydata.push(result.data.data[0].value)
        arraydata.push(result.data.data[1].value)
        arraydata.push(result.data.data[2].value)
        arraydata.push(result.data.data[3].value)
        arraydata.push(result.data.data[4].value)
         setdatatheoluong(arraydata)
      
      }
      const fetchdulieumoinhat = async ()=>{
        const datamoinhat = await getdulieumoinhat();
        
        setdatamoi(datamoinhat.data.data)
       
      }

      const [myselect,setmyselect] = useState(2)
      const handleChange = async (value) => {
         
          setmyselect(value)
          console.log(value)
          if(value == 2){
            fetchnganhnghe()
          }
          if(value == 4){
            fetchmucluong()
          }
         
        };

      const fetchtangtruong = async()=>{
        const result = await getdulieutheotangtruong()
        const data = result.data.data;
        const datakey =[]
        const datavalue = []
        data.forEach((item, index) => {
          const key = item.key;
          datakey.push(key)
          const value = item.value;
          datavalue.push(value)

         
        });
        setdatatangtruongngay(datakey)
        setdatatangtruongvalue(datavalue)
      }
      useEffect(() => {
        fetchdulieumoinhat()
        fetchnganhnghe()
        fetchtangtruong()
      },[]);
  return (
    <>
    
    <Badge.Ribbon text="Thống kê" color="primary">
      <Card title="Phân tích dữ liệu trên nền tảng " size="small">
       

            <div className='row ' >
                <div className='col-md-6' >
                    <div className='box-demand-job'  id="bg-ana">
                            <div className='box-demand-job_work-market'>
                                <div className="work-market_header">
                                <span  style={{fontSize:"24px"}}>
                                <img src="https://static.topcv.vn/v4/image/welcome/section-header/work_market_star.png" alt=""/>
                                Thị trường việc làm :
                                </span>
                                <span className="date">{datamoi.times}</span>
                                </div>

                                <div className="work-market_content">
                                    <div className="job-hiring">
                                    <span>Việc làm đang tuyển</span>
                                    <span className="quantity" name="quantity_job_recruitment">{datamoi.quantity_job_recruitment}</span>
                                    <div className="status up">
                                    <i className="fa-solid fa-arrow-trend-up"></i>
                                    </div>
                                    </div>
                                    <div className="job-hiring">
                                    <span>Việc làm mới</span>
                                    <span className="quantity" name="quantity_job_new_today">{datamoi.quantity_job_new_today}</span>
                                    </div>
                                    </div>
                            </div>

                            <div  className='header'>
                                    <div className="header-title">
                                    <img src="https://static.topcv.vn/v4/image/welcome/section-header/trend-hr-chart.png" alt=""/>
                                    <span className="caption">
                                    Nhu cầu tuyển dụng theo
                                    </span>
                                    </div>
                                    <div className='box-select'>
                                    <Select
                                    onChange={handleChange}
                                        defaultValue="Ngành nghề"
                                        style={{
                                            width: 120,
                                        }}
                                        loading
                                        options={[
                                            {
                                            value: '2',
                                            label: 'Ngành nghề',
                                            },
                                            {
                                                value: '4',
                                                label: 'Mức lương',
                                            },
                                        ]}
                                        />
                                    </div>

                                  
                            
                            </div>
                    </div>

                   
                </div>

                <div className='col-md-6' >
                  <div> <Button type='primary'> Kinh doanh ,Marketing, Dịch vụ, Tư Vấn, Giáo dục & HCVP</Button></div>
                {datatheonganhnghe.length === 0? "":
                 myselect ==2?<ReactECharts option={options}   />: myselect==4?<ReactECharts option={optionstheoluong}/>:""} 
                </div>

            </div>




            <div className='row'>
            <div className='col-12'>
                <div className="abs" id="dashboard">
                    <div className='block-dashboard'>
                            <div className="block-dashboard__header">
                            <h3 style={{color:"white"}}>Thị trường việc làm ngày: <span>{datamoi.times}</span></h3>
                            </div>


                            <div className='block-dashboard__content'>
                                <div className='block-statistics-job'>
                                    <div className='block-work-market work-market'>
                                        <div className="item">
                                            <p className=" quantity quantity_job_new_today">{datamoi.quantity_job_new_today}</p>
                                            <p className="title">Việc làm mới 24h gần nhất</p>
                                            </div>


                                            <div className="item2" id='utem3'>
                                            <p className="quantity quantity_job_recruitment">{datamoi.quantity_job_recruitment}</p>
                                            <p className="title">Việc làm đang tuyển</p>
                                        </div>
                                        <div className="item3" id="utem3">
                                            <p className="quantity quantity_company_recruitment">{datamoi.quantity_company_recruitment}</p>
                                            <p className="title">Công ty đang tuyển</p>
                                            </div>
                                        </div>
                                       
                                    <div className='block-chart'>
                                                <div className='row'>
                                                <div className='col-4'>
                                                         <img class="block-newest-job__img" src={logo} alt="" style={{width:"88%"}}/>
                                                                <div className="item3" >
                                                                <p className="quantity quantity_company_recruitment">Thị trường việc làm </p>
                                                                <p className="title">Việc làm có mức tăng trưởng đáng kể, rất sôi động.</p>
                                                                </div>
                                                          
                                                    </div>
                                                    <div className='col-8'> 
                                                        <div className='item-chart'>
                                                            <div class="header">
                                                                <div class="title">
                                                                <div class="icon">
                                                                <i class="fa-solid fa-arrow-trend-up"></i>
                                                                </div>
                                                                <span class="caption">
                                                                Tăng trưởng cơ hội việc làm
                                                                </span>
                                                                </div>
                                                                </div>

                                                                {datatangtruongngay.length == 0 ?"":<ReactECharts option={options2}  style={{width:"98%",color:"white "}}  />}
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




      </Card>
    </Badge.Ribbon>
    
   
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default DataAnalytics