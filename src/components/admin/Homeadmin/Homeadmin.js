import React from 'react'
import { Badge, Card,Button } from 'antd';
import { Space, Table, Tag } from 'antd';
import { getdulieuthongke } from '../../api/adminapi/Adminapi';
import { useState ,useEffect} from 'react';
import { DateTime } from 'luxon';
import { LinkOutlined } from '@ant-design/icons';
function convertUtcToDateTime(utcTimeString) {
  const vietnamTime = DateTime.fromISO(utcTimeString).setZone('Asia/Ho_Chi_Minh');
  return vietnamTime.toFormat("dd/MM/yyyy HH:mm:ss");
}

 
function Homeadmin() {
  const[dulieuthongke,setdulieuthongke] = useState('')
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
    //dulieuthongke
    const fecthdulieuthongke = async()=>{
      const result = await getdulieuthongke();
      setdulieuthongke(result.data.data)
      console.log(result)
    }
    useEffect(()=>{
   
    
      const timer = setTimeout(() => {
        fecthdulieuthongke()
      }, 100);
      return () => clearTimeout(timer);
    },[])
  return (
    <>
     <Badge.Ribbon text="Bảng tin" color="cyan">
      <Card title="Trang chủ việc làm" size="small">

      
      <Table columns={columns} dataSource={dulieuthongke} />
      </Card>
    </Badge.Ribbon>
    
    </>
  )
}

export default Homeadmin