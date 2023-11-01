import React, { useEffect, useState } from 'react'
import { Badge, Button, Card, Space, Table ,Tag,message} from 'antd';
import { postlistyeucaunewapi } from '../../api/employerapi/Employerapi';
import { getdanhsachvieclamadmin } from '../../api/adminapi/Adminapi';
import { duyetinadmin } from '../../api/adminapi/Adminapi';
const songay =(timeToCompare)=>{
    const compareTime = new Date(timeToCompare);

    // Lấy thời gian hiện tại
    const currentTime = new Date();

    // Tính toán thời gian hiệu giữa currentTime và compareTime
    const timeDifference = compareTime - currentTime;

    // Chuyển đổi thời gian hiệu thành số ngày
    let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if(daysDifference <= 0){
        daysDifference = 0
    }
    return daysDifference
}
function formatJson(textString) {
   
    
const jsonArray = JSON.parse(textString);

// Now you can work with jsonArray
 return jsonArray
  }
  
function TinTuyenDung() {
    const [messageApi, contextHolder] = message.useMessage();
   
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
          render: (context) => <Tag color='purple'>{context}</Tag>,
        },
        {
          title: 'Trạng thái',
          dataIndex: 'status',
          key: 'status',
        },
        {
            title: 'time_scan',
            dataIndex: 'time_scan',
            key: 'time_scan',
          },
          {
            title: 'Chức năng',
            dataIndex: 'time_scan',
            key: 'time_scan',
            render:()=> <> <Button type='primary'>Chức năng ở đây</Button></>
          },
    ]

   

   
    const [datavieclam,setdatavieclam] = useState();
  


  const getlistyeucau = async()=>{
    const token_check = window.localStorage.getItem('employerid');
    const data = new FormData();

    data.append("employerid",token_check)
    const result = await  postlistyeucaunewapi(data);

    setdata(result.data.data)
  }
  const getlistvieclam = async()=>{
 
    const result = await  getdanhsachvieclamadmin();

    setdatavieclam(result.data.data)
  }

  const hanlderduyet = async(id) =>{
    const data = new FormData();
    data.append("post_new_id ",id);
    const result = await duyetinadmin(data);
    console.log(result)
    messageApi.open({
        type: 'success',
        content: 'Duyệt bài thành công',
      });
    const timer = setTimeout(() => {
       getlistvieclam()
      }, 1000);
}
const columnsvieclam = [
    {
      title: 'Tiêu đề tuyển dụng',
      dataIndex: 'tieudetuyendung',
      key: 'tieudetuyendung',
      width:"15%",
      render: (tieudetuyendung) => <Tag color='blue'>{tieudetuyendung}</Tag>,
    
    },
    {
      title: 'Tên công ty',
      dataIndex: 'name_cty',
      key: 'name_cty',
      width:"15%",
      render: (name_cty) => <Tag color='cyan'>{name_cty}</Tag>,
    },
    // {
    //     title: 'Thời hạn CV',
    //     dataIndex: 'time_cv',
    //     key: 'time_cv"',
    //     render:(time_cv) => <>{songay(time_cv) == 0?"Hết hạn":(time_cv)}</>
    //   },
      {
        title: 'Địa điểm',
        dataIndex: 'khuvuclamviec',
        key: 'khuvuclamviec"',
        render:(khuvuclamviec) => <>{formatJson(khuvuclamviec)[0].value}</>
      },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      width:"10%",
      render:(status) => <Button type='primary'> {status == 0?"Chưa được hiển thị":"Đã hiển thị "}</Button>
    },
    {
        title: 'Chức năng',
        dataIndex: 'post_new_id',
        width:"20%",
        key: 'post_new_id',
        render:(post_new_id,status) => <><Button type='primary' onClick={()=> hanlderduyet(post_new_id)}>{status.status == 0?"Duyệt":"Đã duyệt"}</Button> <Button type='primary' className='mt-2'> Xóa</Button></>
      },
]

  useEffect(()=>{
    getlistyeucau()
    getlistvieclam()
  },[])
  return (
    <>
     {contextHolder}
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
    
    
        <div className='row mt-4'>
            <div className='col-12'>
            <Badge.Ribbon text="Việc làm trên hệ thống">
            <Card title="Bảng việc làm" size="small">
            <Table columns={columnsvieclam} dataSource={datavieclam}  pagination={{
                pageSize: 50, // Number of items to display per page
              
            }} />
                    </Card>
            </Badge.Ribbon>
            </div>
        </div>
    
    
    
    
    
    
    
    </>
  )
}

export default TinTuyenDung