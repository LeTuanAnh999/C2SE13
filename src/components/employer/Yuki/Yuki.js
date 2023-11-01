import { useState,useEffect } from 'react';
import React from 'react'
import { laylistgoiy } from '../../api/employerapi/Employerapi';
import { Button, Divider, Table,Tag ,Modal} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
function Yuki(props) {


  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [data,setdata] = useState([])
  const [thongtin,setthongtin] = useState([])


  const onchangethongtin = (item)=>{
    setthongtin(item)
    showModal()
  }
  const columns = [
    {
      title: 'Tên ứng viên',
      dataIndex: 'name',
      render: (text) => <Tag color='green'>{text}</Tag>,
    },
    {
      title: 'Công việc ứng viên mong muốn',
      dataIndex: 'tieude',
      render: (tieude) => <Tag color='cyan'>{tieude}</Tag>,
    },
    {
      title: 'Vị trí',
      dataIndex: 'vitri',
    },
    {
      title: 'Kinh nghiệm ứng viên',
      dataIndex: 'kinhnghiem',
      render: (kinhnghiem) => <Tag color='purple'>{kinhnghiem}</Tag>,
    },
    {
      title: 'Mức lương mong muốn',
      dataIndex: 'mucluong',
      render: (mucluong) => <Tag color='#2db7f5'>{mucluong == 4?"10-12 triệu":mucluong == 1?"Dưới 3 triệu":mucluong == 2?"3-5 Triệu":mucluong == 5?"Trên 12 triệu":mucluong == 127?"Thỏa thuận":""}</Tag>,
    },
    {
      title: 'Địa điểm làm việc',
      dataIndex: 'diadiem',
    },
    {
      title: 'Chức năng',
      dataIndex: 'diadiem',
      render:(diadiem,item)=><><Button type='primary' onClick={()=>onchangethongtin(item)}>Xem thông tin liên hệ</Button></>
    },
    
  ];



  const fecthdata = async()=>{
    const result = await laylistgoiy();
    setdata(result.data.data)
    console.log(result)
  }

  useEffect(()=>{
    fecthdata()
  },[])
  return (
    <>
     <Modal title="Thông tin ứng viên" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} cancelText="Hủy" okText="Đóng">
        <p>Email</p>
        <Input size="large" placeholder="" prefix={<UserOutlined />}  value={thongtin.email}/>
        <br />
        <p className='mt-4'>Số điện thoại</p>
        <Input size="large" placeholder="" prefix={<UserOutlined />}  value={thongtin.phone}/>
      </Modal>
           <div data-v-07f0dc2d="">
                <div className='page-wrapper2 chiller-theme'>

                <div className='page-container'>
                <div data-v-502ae57c="" className="homepage-banner container-fluid page-content pd-b-0"></div>

               
                    <div className='container-fluid page-content'>
                    <h4 data-v-502ae57c="" class="mb-4">Đề xuất ứng viên</h4>
                      <div className='bg-white p-3 rounded'>Yuki</div>


                      <div className='row mt-2'>
                     

                            <Divider />
                                {data.length == 0? "": <Table
                              
                              columns={columns}
                              dataSource={data}
                            />}
                    
                   </div>
                    </div>


                   
            </div>
            </div>
            </div>
                            
    
    
    
    
    </>
  )
}

export default Yuki;