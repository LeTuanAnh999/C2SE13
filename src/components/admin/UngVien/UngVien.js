import React, { useEffect,useState } from 'react'
import { danhsachnhatuyendungadminapi } from '../../api/adminapi/Adminapi'
import { Divider, Radio, Table } from 'antd';
import { Badge, Card, Modal ,Button, Input} from 'antd';
import { danhsachungvienadminapi } from '../../api/adminapi/Adminapi';
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
const fomartngay2 = (dateTimeString)=>{
  const dateTime = new Date(dateTimeString);

const year = dateTime.getFullYear();
const month = dateTime.getMonth() + 1; // Tháng bắt đầu từ 0, cần cộng thêm 1
const day = dateTime.getDate();
const myem = `${day}`+"/"+`${month}`+"/"+`${year}`

return myem

}

function UngVien() {

  const [data,setdata] = useState([])
  const [dataitem,setdataitem] = useState([])
  const [showthongtin,setshowthongtin] = useState([])
  const fectdata = async()=>{
    const result = await danhsachungvienadminapi();
    console.log(result.data)
    setdata(result.data.data)
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (item) => {
     setshowthongtin(item)
    
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };



  const columns = [
    {
        title: 'Mã Ứng viên',
        dataIndex: 'id',
        render: (text) => <a>#{text}</a>,
      },
    {
      title: 'Ứng viên',
      dataIndex: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Giới tính',
      dataIndex: 'gender',
      render: (gender) => <a>{gender} </a>,
    },

  
    {
      title: 'Số điện thoại',
      dataIndex: 'phone',
    },
    {
        title: '    Xác thực email',
        dataIndex: 'verify_status',
        render: (verify_status) => <Button type='primary'>{verify_status == 1?"Đã xác thực":" Chưa xác thực"} </Button>,
      },
    
  ];



  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  };

  const [selectionType, setSelectionType] = useState('checkbox');
  useEffect(()=>{
    fectdata()
  },[])
  return (
    <>
      {/*  làm nhà tuyển dụng */}
      <Modal title="Thông tin  liên hệ" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className=' row'>
          <div className='col-md-12'>
             <Button type='primary'> Email liên hệ: {showthongtin.length == 0?"": showthongtin.email}</Button>
          </div>

          <div className='col-md-12'>
             <label className='mt-2'>Số điện thoại liên hệ:</label><br/>
             <Button type='primary mt-2'> Số điện thoại liên hệ: {showthongtin.length == 0?"": showthongtin.phone}</Button>
          </div>


        </div>
      </Modal>
      <div className='row'>
        <div className='col-12'>

        <Badge.Ribbon text="Danh sách ứng viên" color=''>
              <Card title="Danh sách ứng viên" size="small">
               
              <div>
            <Radio.Group
              onChange={({ target: { value } }) => {
                setSelectionType(value);
              }}
              value={selectionType}
            >
              {/* <Radio value="checkbox">Chọn nhiều</Radio> */}
              <Radio value="radio"></Radio>
            </Radio.Group>

            <Divider />

            <Table
              rowSelection={{
                type: selectionType,
                ...rowSelection,
              }}
              columns={columns}
              dataSource={data}
              pagination={{
                pageSize: 10, // Đặt kích thước trang ở đây (10 dòng mỗi trang)
              }}
            />
          </div>


              </Card>
            </Badge.Ribbon>
        </div>
        

      </div>
    
     
    
    
    
    
    
    
    </>
  )
}

export default UngVien