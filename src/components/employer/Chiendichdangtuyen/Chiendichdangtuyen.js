import React,{useState,useEffect, useRef} from 'react'
import { Badge, Card, Button, Space, Table ,Tag,Input, Modal} from 'antd';


import {
 
  SearchOutlined,EditOutlined,AntCloudOutlined 
} from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import "../Managejobpostings/style.css"
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getpostnewapi } from '../../api/employerapi/Employerapi';
import { yeucaunewapi } from '../../api/employerapi/Employerapi';
const { TextArea } = Input;
const notifySuccess = (title) => {
  toast.success(title, {
    position: 'top-right', // You can change the toast position
    autoClose: 6000, // Set the time (in milliseconds) for the toast to auto-close
    hideProgressBar: false, // Show or hide the progress bar
    closeOnClick: true, // Close the toast when clicked
    pauseOnHover: true, // Pause the auto-close timer when hovered
    draggable: true, // Make the toast draggable
    progressStyle: {
      background: 'lightgreen', // Change the background color for success
    },
    bodyStyle: {
      background: 'light', // Change the background color for the toast
    },
  });
};

const notifywarning = (title) => {
  toast.warning(title, {
    position: 'top-right', // You can change the toast position
    autoClose: 3000, // Set the time (in milliseconds) for the toast to auto-close
    hideProgressBar: false, // Show or hide the progress bar
    closeOnClick: true, // Close the toast when clicked
    pauseOnHover: true, // Pause the auto-close timer when hovered
    draggable: true, // Make the toast draggable
    progressStyle: {
      background: 'lightgreen', // Change the background color for success
    },
    bodyStyle: {
      background: 'light', // Change the background color for the toast
    },
  });
};
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
function Chiendichdangtuyen(props) {

  // get dữ liệu yêu cầu hiển thị
  const [mytext, setText] = useState(''); // Initialize the state for the text

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newidyc,setnewidyc] = useState()
  const showModal = (id) => {
    
    setnewidyc(id.post_new_id)
    if(id.status == 0){
    setIsModalOpen(true);
    }
    else{
      notifywarning("Bài đăng đã được hiển thị")
    }
  };


  const handleOk = async() => {
    // gui yeu cau hien thi
    const token_check = window.localStorage.getItem('employerid');
    const mydate = new Date().toLocaleString();;
    const data = new FormData();
    data.append('employerid',token_check);
    data.append('post_new_id', newidyc);
    data.append('context', mytext);
    data.append('mydate',mydate);

    const result = await yeucaunewapi(data);
    console.log(result)
    if(result.data.message === "ok"){
      notifySuccess("Đã gửi yêu cầu! Vui lòng không gửi lại")
    }
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // filter
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const clearFilters = () => {
    setFilteredInfo({});
  };
  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };
  const setAgeSort = () => {
    setSortedInfo({
      order: 'descend',
      columnKey: 'age',
    });
  };


  //tìm kiếm
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
          
            size="small"
            style={{
              width: 90,
            }}
          >
            Tìm kiếm
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Làm mới
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Lọc
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            Đóng
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: 'Chiến dịch',
      dataIndex: 'campaign_name',
      key: 'campaign_name',
      width:"22%",
     
    },
    {
      title: 'Tiêu đề',
      dataIndex: 'tieudetuyendung',
      key: 'tieudetuyendung',
      width:"20%",
      filters: [
        {
          text: 'Giáo viên',
          value: 'Giáo viên',
        },
       
      ],
      filteredValue: filteredInfo.tieudetuyendung || null,
      onFilter: (value, record) => record.tieudetuyendung.includes(value),
      sorter: (a, b) => a.tieudetuyendung.length - b.tieudetuyendung.length,
      sortOrder: sortedInfo.columnKey === 'tieudetuyendung' ? sortedInfo.order : null,
      ellipsis: true,
      ...getColumnSearchProps('tieudetuyendung'),
    },
    {
      title: 'Số lượng tuyển',
      dataIndex: 'soluongtuyen',
      key: 'soluongtuyen',
      sorter: (a, b) => a.soluongtuyen - b.soluongtuyen,
      sortOrder: sortedInfo.columnKey === 'soluongtuyen' ? sortedInfo.order : null,
      ellipsis: true,
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
      render:(time_cv) => <>{songay(time_cv) == 0?"Hết hạn":(time_cv)}</>
    },
    {
      title: 'Xem CV Ứng Tuyển',
      dataIndex: 'post_new_id',
      key: 'post_new_id',
      render: (post_new_id) => <Button type='' className='stylebuttoncolor'>Xem </Button>,
    },

    {
      title: 'Yêu cầu hiển thị',
      dataIndex: 'status',
      key: 'status',
      width:"15%",
      render: (status,post_new_id) => <Button type='' onClick={()=>showModal(post_new_id)} className='stylebuttoncolor'> {status == 1?"Đã hiển thị":"Yêu cầu hiển thị"}</Button>,
     
    },
    // {
    //   title: 'Trạng thái',
    //   dataIndex: 'key',
    //   key: 'x',
    //   render: (id) =>   <Switch
    //   checkedChildren={<CheckOutlined />}
    //   unCheckedChildren={<CloseOutlined />}
    //   defaultChecked
    // />,
    // },
    {
      title: 'Quảng cáo ',
      dataIndex: 'post_new_id',
      key: 'post_new_id',
    
      render: (post_new_id) => <Button type='primary' className='stylebuttoncolor'><AntCloudOutlined /></Button>,
    },
  ];


  const [data,setmydata] = useState();
  const [hienthipost,sethienthipost] = useState(0);
  const [anhienthipost,setanhienthipost] = useState(0);
  const get_data_job = async () => {
    try {
      const token_check = window.localStorage.getItem('employerid');
     
      const data = new FormData();
      data.append('employerid', token_check);
      
      // Assuming you have a separate function for making the API request
      const result = await getpostnewapi(data);
      console.log(result);
      setmydata(result.data.data)
      sethienthipost(result.data.data[0].count_status1)
      setanhienthipost(result.data.data[0].count_status0)
    } catch (error) {
      console.error(error);
    }
  }
  


 
  const handleChangeyeucau = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 6000) {
      setText(inputValue); // Update the state with the input value
    }
  };
  useEffect(() => {
    get_data_job();
  }, []);

  return (
    <>
    
     <Modal title="Yêu cầu hiển thị" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Button type='primary'>Điền nội dung yêu cầu hiển thị để xét duyệt nhanh hơn</Button>
        <TextArea className='mt-2' rows={4} placeholder=" Độ dài ký tự  6000" maxLength={6000}  value={mytext} 
        onChange={handleChangeyeucau}  textarea/>
       
      </Modal>
           <div data-v-07f0dc2d="">
                <div className='page-wrapper2 chiller-theme'>

                <div className='page-container'  >
                <div data-v-502ae57c="" className="homepage-banner container-fluid page-content pd-b-0"></div>


                    <div className='container-fluid page-content'>
                                           
                    <Badge.Ribbon text="Quản lý tin đăng tuyển" color="green">
                      <Card title="Tin" size="medium">
                      <Space
                          style={{
                            marginBottom: 16,
                          }}
                        >
                          <Button onClick={setAgeSort}>Sắp xếp theo số lượng tuyển</Button>
                          <Button onClick={clearFilters}>Xóa bộ lọc</Button>
                          <Button onClick={clearAll}>Xóa tất cá bộ lọc</Button>

                          <Button >Đang hiển thị  <Tag  color="green" style={{marginLeft:"1rem"}}>{hienthipost}</Tag></Button>
                          <Button> Xét duyệt <Tag color="#f50" style={{marginLeft:"1rem"}}>{anhienthipost}</Tag></Button>

                          <Button >Đang xét duyệt   <Tag bordered={false} style={{marginLeft:"1rem"}}>{anhienthipost}</Tag> </Button>
                        </Space>
                        <Table columns={columns} dataSource={data} onChange={handleChange} />
                      </Card>
                    </Badge.Ribbon>
                    </div>
            </div>
            </div>
            </div>
                            
    
    
    
    
    </>
  )
}

export default Chiendichdangtuyen