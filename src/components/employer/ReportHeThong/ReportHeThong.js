import React, { useEffect, useState } from 'react'
import { Badge, Card, Space, Table ,Tag} from 'antd';
import { postlistyeucaunewapi } from '../../api/employerapi/Employerapi';
function ReportHeThong(props) {
    

    const [data,setdata] = useState();
    const columns = [
        {
          title: 'Tiêu đề tuyển dụng',
          dataIndex: 'tieudetuyendung',
          key: 'tieudetuyendung',
          render: (tieudetuyendung) => <Tag color='green'>{tieudetuyendung}</Tag>,
        },
        {
          title: 'Nội dung yêu cầu',
          dataIndex: 'context',
          key: 'context',
        },
        {
          title: 'Trạng thái',
          dataIndex: 'status',
          key: 'status',
        },
        {
            title: 'Thời gian yêu cầu',
            dataIndex: 'time_scan',
            key: 'time_scan',
          },
    ]
  const getlistyeucau = async()=>{
    const token_check = window.localStorage.getItem('employerid');
    const data = new FormData();

    data.append("employerid",token_check)
    const result = await  postlistyeucaunewapi(data);
    console.log(data)
    setdata(result.data.data)
  }

  useEffect(()=>{
    getlistyeucau()
  },[])
  return (
    <>
    <div data-v-07f0dc2d="">
    <div className='page-wrapper2 chiller-theme'>

    <div className='page-container'>
    <div data-v-502ae57c="" className="homepage-banner container-fluid page-content pd-b-0"></div>


        <div className='container-fluid page-content'>
       

        <div className='row'>
            <div className='col-12'>
            <Badge.Ribbon text="Yêu cầu hiển thị">
            <Card title="Bảng  thông báo Hiển thị" size="small">
            <Table columns={columns} dataSource={data}  pagination={{
                pageSize: 10, // Number of items to display per page
              
            }} />
                    </Card>
            </Badge.Ribbon>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
    </>           
  )
}

export default ReportHeThong