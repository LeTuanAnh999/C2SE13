import React,{useState,useEffect, useRef} from 'react'
import { Badge, Card, Button, Space, Table ,Tag,Input,Switch} from 'antd';
import {
  CheckOutlined, CloseOutlined,
  SearchOutlined,EditOutlined
} from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import "./style.css"
function Managejobpostings(props) {


  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ];

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
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
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
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
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
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Jim',
          value: 'Jim',
        },
      ],
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
      ellipsis: true,
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
      sortOrder: sortedInfo.columnKey === 'age' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      filters: [
        {
          text: 'London',
          value: 'London',
        },
        {
          text: 'New York',
          value: 'New York',
        },
      ],
      filteredValue: filteredInfo.address || null,
      onFilter: (value, record) => record.address.includes(value),
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === 'address' ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: 'Xem CV  Ứng Tuyển',
      dataIndex: 'key',
      key: 'x',
      render: (id) => <Button type='' className='stylebuttoncolor'>Xem {id}</Button>,
    },

    {
      title: 'Yêu cầu hiển thị',
      dataIndex: 'key',
      key: 'x',
      render: (id) => <Button type='' className='stylebuttoncolor'>Yêu cầu hiển thị {id}</Button>,
    },
    {
      title: 'Trạng thái',
      dataIndex: 'key',
      key: 'x',
      render: (id) =>   <Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
    />,
    },
    {
      title: 'Chỉnh sửa ',
      dataIndex: 'key',
      key: 'x',
      render: (id) => <Button type='primary' className='stylebuttoncolor'><EditOutlined /> {id}</Button>,
    },
  ];



  return (
    <>
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
                          <Button onClick={setAgeSort}>Sort age</Button>
                          <Button onClick={clearFilters}>Clear filters</Button>
                          <Button onClick={clearAll}>Clear filters and sorters</Button>

                          <Button >Đang hiển thị  <Tag  color="green" style={{marginLeft:"1rem"}}>0</Tag></Button>
                          <Button> Không hiển thị <Tag color="#f50" style={{marginLeft:"1rem"}}>0</Tag></Button>

                          <Button >Đang xét duyệt   <Tag bordered={false} style={{marginLeft:"1rem"}}>0</Tag> </Button>
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

export default Managejobpostings