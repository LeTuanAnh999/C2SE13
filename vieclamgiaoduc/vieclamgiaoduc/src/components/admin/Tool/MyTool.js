import React, { useEffect, useState ,useRef} from 'react'
import { Col, Divider, Row } from 'antd';
import 'react-toastify/dist/ReactToastify.css';
import {  toast, } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import { Select,Badge,Card,Table,Tag ,Button} from 'antd';
import { LinkOutlined } from '@ant-design/icons';

import { getdulieutheoluong } from '../../api/adminapi/Adminapi';
import { getdulieutheonganhnghe } from '../../api/adminapi/Adminapi';
import { getdulieutheotangtruong } from '../../api/adminapi/Adminapi';
import { getdulieumoinhat } from '../../api/adminapi/Adminapi';
import { getdulieuthongke } from '../../api/adminapi/Adminapi';

import axios from 'axios';
import { DateTime } from 'luxon';
function convertUtcToDateTime(utcTimeString) {
  const vietnamTime = DateTime.fromISO(utcTimeString).setZone('Asia/Ho_Chi_Minh');
  return vietnamTime.toFormat("dd/MM/yyyy HH:mm:ss");
}
function MyTool() {

  const [nhucautuyendung,setnhucautuyendung] =useState(4);
  const [datatheoluong,setdatatheoluong] =  useState('');
  const [datatheotangtruong,setdatatheotangtruong] = useState('');
  const [datamoi,setdatamoi] = useState('')
  const[datatheonganhnghe,setdatatheonganhnghe] = useState('');
  const[dulieuthongke,setdulieuthongke] = useState('')
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setnhucautuyendung(value)
  };
  const style = {
 
    padding: '8px 0',
  };
  const newtaburl =(url)=>{
    window.open(url, '_blank');
  }
  const columns = [
    {
      title: 'Image',
      dataIndex: 'imagecity',
      key: 'imagecity',
      render:(imagecity) =><img src={imagecity}/>
    },
   
    {
      title: 'Tên việc làm',
      dataIndex: 'name_job',
      key: 'name_job',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Mức lương',
      dataIndex: 'mucluong',
      key: 'mucluong',
    },
    {
      title: 'Địa điểm',
      dataIndex: 'diadiem',
      key: 'diadiem',
    },
    {
      title: 'Kinh nghiệm',
      dataIndex: 'kinhnghiem',
      key: 'kinhnghiem',
    },
    {
      title: 'Số lượng tuyển',
      dataIndex: 'soluongtuyen',
      key: 'soluongtuyen',
    },
    {
      title: 'Link',
      dataIndex: 'url',
      key: 'url',
      render:(url) => <Button type='primary' onClick={()=>newtaburl(url)  }><LinkOutlined /></Button>
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  const fetchdatatheoluong = async()=>{
    const result = await getdulieutheoluong();
    setdatatheoluong(result.data.data)
    console.log(result)
  }

  // colomu cho theo luong
  const columnstheoluong = [
    {
      title: 'Lương',
      dataIndex: 'key',
      key: 'key',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Số lượng việc làm',
      dataIndex: 'value',
      key: 'value',
    },
    {
      title: 'Thời gian cập nhật',
      dataIndex: 'time_scan',
      key: 'time_scan ',
      render:(time_scan) => <Button type=' primary'>{convertUtcToDateTime(time_scan)}</Button>
    },
  ];

  //data tang trương
  const fectdatatangtruong = async()=>{
    const result = await getdulieutheotangtruong();
    setdatatheotangtruong(result.data.data)
    // console.log(result)
  }

  // cokumtangtruong
  const columnstheotangtruong = [
    {
      title: 'Thời gian',
      dataIndex: 'key',
      key: 'key',
      render: (key) => <Tag color="volcano">{key}</Tag>,
    },
    {
      title: 'Mức tăng trưởng ghi nhận',
      dataIndex: 'value',
      key: 'value',
      render: (value) => <Tag color="success">{value}</Tag>,
    },
    
  ];


  // moi nhat
  const fetchdatamoinhat = async()=>{
    const result = await getdulieumoinhat();
   
    // console.log(result)
    const mykey = []
    mykey.push({"quantity_company_recruitment": result.data.data.quantity_company_recruitment,"quantity_job_new_today":result.data.data.quantity_job_new_today,"time_scan":result.data.data.times},
    )
   
    // console.log(mykey)
   
    setdatamoi(mykey)
    
  }
  
  // cokumtangtruong
  const columnsmoinhat = [
    {
      title: 'Việc làm công ty đang tuyển',
      dataIndex: 'quantity_company_recruitment',
      key: 'quantity_company_recruitment',
      render: (quantity_company_recruitment) => <Tag color="success">{quantity_company_recruitment}</Tag>,
    },
    {
      title: 'Việc làm mới ',
      dataIndex: 'quantity_job_new_today',
      key: 'quantity_job_new_today',
      render: (quantity_job_new_today) => <Tag color="success">{quantity_job_new_today}</Tag>,
    },
    {
      title: 'Thời gian ',
      dataIndex: 'time_scan',
      key: 'time_scan',
      render: (time_scan) => <Tag color="success">{time_scan}</Tag>,
    },
    
    
  ];

  //datatheo nganh nghe

  const fetchdatatheonganhnghe = async()=>{
    const result = await getdulieutheonganhnghe();
    setdatatheonganhnghe(result.data.data)
    console.log(result)
  }

  // column nganh nghe
  const columnstheonganhnghe = [
    {
      title: 'Theo ngành nghề',
      dataIndex: 'key',
      key: 'key',
      render: (text) => <span>{text ==="Hành chính / Văn phòng"? text="Giáo dục &HCVP":text}</span>,
    },
    {
      title: 'Số lượng việc làm',
      dataIndex: 'value',
      key: 'value',
    },
    {
      title: 'Thời gian cập nhật',
      dataIndex: 'time_scan',
      key: 'time_scan ',
      render:(time_scan) => <Button type=' primary'>{convertUtcToDateTime(time_scan)}</Button>
    },
  ];

  //dulieuthongke
  const fecthdulieuthongke = async()=>{
    const result = await getdulieuthongke();
    setdulieuthongke(result.data.data)
    console.log(result)
  }

  const toastId = useRef(null);

  const hanldeapituyendung = async () => {
    console.log(nhucautuyendung)
    try {
      if (nhucautuyendung == 4) {
        const response = await axios.get("http://127.0.0.1:5555/apiv1/getmucluong",);
        console.log(response)
        // Check if the response status is 200
        if (response.status === 200) {
          // Successful response, you can update the UI or do further processing here
          fetchdatatheoluong();
        } else {
          // Handle other status codes if necessary
          throw new Error('API request failed with status ' + response.status);
        }
      }
      if (nhucautuyendung == 2) {
        const response = await axios.get("http://127.0.0.1:5555/apiv1/gettheonganhnghe",);
        console.log(response)
        // Check if the response status is 200
        if (response.status === 200) {
          // Successful response, you can update the UI or do further processing here
          fetchdatatheonganhnghe();
        } else {
          // Handle other status codes if necessary
          throw new Error('API request failed with status ' + response.status);
        }
      }
    } catch (error) {
      // Handle errors here
      console.error(error);
      throw error; // Rethrow the error to be caught by the toast
    }
  };
  const hanldeapitangtruong = async () => {
 
    try {
        const response = await axios.get("http://127.0.0.1:5555/apiv1/gettheotangtruong");
        console.log(response)
        // Check if the response status is 200
        if (response.status === 200) {
          // Successful response, you can update the UI or do further processing here
          fectdatatangtruong();
        } else {
          // Handle other status codes if necessary
          throw new Error('API request failed with status ' + response.status);
        
      }
     
    } catch (error) {
      // Handle errors here
      console.error(error);
      throw error; // Rethrow the error to be caught by the toast
    }
  };
  const hanldeapiviecmoi= async () => {
 
    try {
        const response = await axios.get("http://127.0.0.1:5555/apiv1/gettheodulieumoinhat");
        console.log(response)
        // Check if the response status is 200
        if (response.status === 200) {
          // Successful response, you can update the UI or do further processing here
          fetchdatamoinhat();
        } else {
          // Handle other status codes if necessary
          throw new Error('API request failed with status ' + response.status);
        
      }
     
    } catch (error) {
      // Handle errors here
      console.error(error);
      throw error; // Rethrow the error to be caught by the toast
    }
  };
 const notify = () => {
 
    if(! toast.isActive(toastId.current)) {
      toastId.current = toast.promise(
        hanldeapituyendung,
        {
          pending: 'Đang lấy dữ liệu!👌',
          success: 'Thành công ',
          error: 'Có lỗi xảy ra 🤯',
        
        
        }
        
      )
    }
  
  }
const notifytangtruong = () => {
 
    if(! toast.isActive(toastId.current)) {
      toastId.current = toast.promise(
        hanldeapitangtruong,
        {
          pending: 'Đang lấy dữ liệu!👌',
          success: 'Thành công ',
          error: 'Có lỗi xảy ra 🤯',
        
        
        }
        
      )
    }
  
  }
const notifymoinhata =async () => {
    console.log('a')
    if(! toast.isActive(toastId.current)) {
      toastId.current = toast.promise(
        hanldeapiviecmoi,
        {
          pending: 'Đang lấy dữ liệu!👌',
          success: 'Thành công ',
          error: 'Có lỗi xảy ra 🤯',
        
        
        }
        
      )
    }
  
  }

//  vieec lam

const hanldeapivieclam= async () => {
 
  try {
      const response = await axios.get("http://127.0.0.1:5555/apiv1/getdatagiaoduc");
      console.log(response)
      // Check if the response status is 200
      if (response.status === 200) {
        // Successful response, you can update the UI or do further processing here
       fecthdulieuthongke()
      } else {
        // Handle other status codes if necessary
        throw new Error('API request failed with status ' + response.status);
      
    }
   
  } catch (error) {
    // Handle errors here
    console.error(error);
    throw error; // Rethrow the error to be caught by the toast
  }
};

const notifyvieclam =async () => {
 
  if(! toast.isActive(toastId.current)) {
    toastId.current = toast.promise(
      hanldeapivieclam,
      {
        pending: 'Đang lấy dữ liệu!👌',
        success: 'Thành công ',
        error: 'Có lỗi xảy ra 🤯',
      
      
      }
      
    )
  }

}

  useEffect(()=>{
   
    fetchdatatheoluong()
    fectdatatangtruong()
    fetchdatamoinhat()
    fetchdatatheonganhnghe()
    const timer = setTimeout(() => {
      fecthdulieuthongke()
    }, 1000);
    return () => clearTimeout(timer);
  },[])
  return (
    <>
     <ToastContainer />
    <Divider orientation="left">Tool cập nhật dữ liệu </Divider>
    <Row gutter={50}>
      <Col className="gutter-row" span={12}>
        <div style={style} className='row'>
          <div className='col-8  px-1 py-2 '  >
            <Tag color="processing">
                Nhu cầu tuyển dụng theo
            </Tag>
          </div>
          <div className='col-4 px-2 py-2 d-flex justify-content-around'>
            <div >
            <Select
              defaultValue="Mức lương"
              style={{
                width: 120,
              }}
              onChange={handleChange}
              options={[
                {
                  value: '4',
                  label: 'Mức lương',
                },
                {
                  value: '2',
                  label: 'Theo ngành nghề',
                },
              
              ]}
            />
            </div>
            <div style={{marginLeft:"0.1rem"}}>
            
            <Button type="primary" onClick={ notify}>
                Cập nhật dữ liệu
            </Button>
          
            </div>
          </div>

          <div className='col-12 px-2 py-2 mt-2' >
          <Badge.Ribbon text="Mới" color="green">
            <Card title="Dữ liệu" size="Nhu cầu tuyển dụng theo ngành nghề">
             {nhucautuyendung ==4?datatheoluong.length === 0?"": <Table columns={columnstheoluong} dataSource={datatheoluong} pageSize={5}/>:"" }
             {nhucautuyendung ==2?datatheonganhnghe.length === 0?"": <Table columns={columnstheonganhnghe} dataSource={datatheonganhnghe} pageSize={5} />:""  }
            </Card>
          </Badge.Ribbon>
          </div>
          
        </div>
        
      </Col>



              {/* tăng trưởng */}
      <Col className="gutter-row" span={12}>
        <div style={style} className='row'>
            <div className='col-8  px-1 py-2 '  >
              <Tag color="processing">
                  Tăng trưởng việc làm
              </Tag>
            </div>
            <div className='col-4 px-2 py-2 d-flex justify-content-around'>
              <div >
             
              </div>
              <div>
              
              <Button type="primary" onClick={notifytangtruong}>
                  Cập nhật dữ liệu
              </Button>
            
              </div>
            </div>

            <div className='col-12 px-2 py-2 mt-2' >
            <Badge.Ribbon text="Mới" color="purple">
              <Card title="Dữ liệu" size="">
               
               {datatheotangtruong.length === 0?"": <Table columns={columnstheotangtruong} dataSource={datatheotangtruong} pagination={{ pageSize: 6 }} />}
              </Card>
            </Badge.Ribbon>
            </div>
            
          </div>
      </Col>
     
    </Row>
    
    
  
   

    <Row>
    <Col className="gutter-row" span={24}>
        <div style={style} className='row'>
            <div className='col-8  px-1 py-2 '  >
              <Tag color="geekblue">
                 Việc làm
              </Tag>
            </div>
            <div className='col-4 px-2 py-2 d-flex justify-content-around'>
              <div >
             
              </div>
              <div>
              
              <Button type="primary" onClick={notifyvieclam}>
                  Cập nhật dữ liệu
              </Button>
            
              </div>
            </div>

            <div className='col-12 px-2 py-2 mt-2' >
            <Badge.Ribbon text="Mới" color="primary">
              <Card title="Dữ liệu" size="Nhu cầu tuyển dụng theo ngành nghề">
               {dulieuthongke.length == 0?"": <Table columns={columns} dataSource={dulieuthongke} pagination={5} />}
              </Card>
            </Badge.Ribbon>
            </div>
            
          </div>
      </Col>
    </Row>
    
    <Row gutter={50}>
      <Col className="gutter-row" span={12}>
        <div style={style} className='row'>
            <div className='col-8  px-1 py-2 '  >
              <Tag color="processing" >
                 Số lượng việc làm
              </Tag>
            </div>
            <div className='col-4 px-2 py-2 d-flex justify-content-around'>
              <div >
             
              </div>
              <div>
              
              <Button type="primary" onClick={notifymoinhata}>
                  Cập nhật dữ liệu
              </Button>
            
              </div>
            </div>

            <div className='col-12 px-2 py-2 mt-2' >
            <Badge.Ribbon text="Mới" color="primary">
              <Card title="Dữ liệu" size="">
                {datamoi.length == 0?"":<Table columns={columnsmoinhat} dataSource={datamoi} />}
              </Card>
            </Badge.Ribbon>
            </div>
            
          </div>
      </Col>
      
    </Row>
    
    
    </>
  )
}

export default MyTool