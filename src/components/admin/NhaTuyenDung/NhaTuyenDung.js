import React, { useEffect,useState } from 'react'
import { danhsachnhatuyendungadminapi } from '../../api/adminapi/Adminapi'
import { Divider, Radio, Table } from 'antd';
import { Badge, Card, Modal ,Button, Input} from 'antd';
import { getpostnewapi } from '../../api/employerapi/Employerapi';
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
function textToArrayJson(text) {
  // Tạo một đối tượng JavaScript từ đoạn văn bản
  const textArray = text.split('\n'); // Phân chia đoạn văn bản thành các dòng

  // Chuyển đối tượng JavaScript thành chuỗi JSON
  const jsonArray = JSON.stringify(textArray.map(item => {
    return { value: item, label: item };
  }));

  return jsonArray;
}
function NhaTuyenDung() {

  const [data,setdata] = useState([])
  const [dataitem,setdataitem] = useState([])
  const [showthongtin,setshowthongtin] = useState([])
  const fectdata = async()=>{
    const result = await danhsachnhatuyendungadminapi();
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


  const showdanhsachvieclam = async(item)=>{
    const mydata = new FormData()
    mydata.append("employerid",item.user_id)
    const result = await getpostnewapi(mydata);
    setdataitem(result.data.data)

    console.log(result)
  }
  const columns = [
    {
      title: 'Hình ảnh',
      dataIndex: 'imageempolyer',
      render:(imageempolyer) => <img src ={imageempolyer}  style={{width:"180px"}}></img>,
      width:"10%"
    },
    {
      title: 'Nhà tuyển dụng',
      dataIndex: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Tên công ty',
      dataIndex: 'name_cty',
    },
    {
      title: 'Quy mô',
      dataIndex: 'quymo',
      render: (text) => <a>{text} nhân viên</a>,
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'worklocation',
    },
  
    {
      title: 'Số điện thoại',
      dataIndex: 'phone',
    },
    {
      title: 'Chức năng',
      dataIndex: 'user_id',
      render:(user_id,item) =><> <Button type='primary'  onClick={()=>showModal(item)}> Xem thông tin liên hệ</Button> <Button type='primary'  onClick={()=>showdanhsachvieclam(item)}> Xem danh sách việc làm</Button> </>
      , width:"35%"
    },
  ];

  const columncv = [
    {
      title: 'Tiêu đề',
      dataIndex: 'tieudetuyendung',
      key: 'tieudetuyendung',
      width:"42%",
   
    },
    {
      title: 'Số lượng tuyển',
      dataIndex: 'soluongtuyen',
      key: 'soluongtuyen',
     
    },
    {
      title: 'Vị trí tuyển dụng',
      dataIndex: 'vitrituyendung',
      key: 'vitrituyendung',
      render:(vitrituyendung)=><>{ vitrituyendung.length == 0?"": (JSON.parse(vitrituyendung))[0].value}</>
     
    },
    {
      title: 'Hình thức công việc',
      dataIndex: 'hinhthuccongviec',
      key: 'hinhthuccongviec',
    
    },

    {
      title: 'Thời hạn CV',
      dataIndex: 'time_cv',
      key: 'time_cv',
      render:(time_cv) => <>{songay(time_cv) == 0?"Hết hạn":(fomartngay2(time_cv))}</>
    },
  
   
    {
      title: 'Yêu cầu hiển thị',
      dataIndex: 'status',
      key: 'status',
      width:"15%",
      render: (status,post_new_id) => <Button type='' className='stylebuttoncolor'> {status == 1?"Đã hiển thị":"Yêu cầu hiển thị"}</Button>,
     
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

        <Badge.Ribbon text="Nhà tuyển dụng">
              <Card title="Nhà tuyển dụng" size="small">
               
              <div>
            <Radio.Group
              onChange={({ target: { value } }) => {
                setSelectionType(value);
              }}
              value={selectionType}
            >
              {/* <Radio value="checkbox">Chọn nhiều</Radio> */}
              <Radio value="radio">Chọn một</Radio>
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
    
      {dataitem.length == 0?"":
      <div className='row mt-5'>
        <div className='col-12'>

        <Badge.Ribbon text="Việc làm của  Nhà tuyển dụng">
              <Card title="Việc làm" size="small">
               
              <div>
          

            <Divider />
                {dataitem.length == 0?"":
            <Table
              rowSelection={{
                type: selectionType,
                ...rowSelection,
              }}
              columns={columncv}
              dataSource={dataitem}
            />
            }
          </div>


              </Card>
            </Badge.Ribbon>
        </div>
        

      </div>
    
    
      }
    
    
    
    
    
    
    </>
  )
}

export default NhaTuyenDung