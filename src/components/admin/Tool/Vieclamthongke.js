import { useState,useEffect,useRef } from 'react';
import React from 'react'
import { getdulieuthongke } from '../../api/adminapi/Adminapi';
import { Table,Button,Tag,Row,Badge ,Card,Col} from 'antd';
import { LinkOutlined } from '@ant-design/icons';
import { SearchOutlined } from '@ant-design/icons';

import Highlighter from 'react-highlight-words';
import { Input, Space } from 'antd';
import { DateTime } from 'luxon';
function convertUtcToDateTime(utcTimeString) {
    const vietnamTime = DateTime.fromISO(utcTimeString).setZone('Asia/Ho_Chi_Minh');
    return vietnamTime.toFormat("dd/MM/yyyy HH:mm:ss");
  }
function Vieclamthongke() {
    const[dulieuthongke,setdulieuthongke] = useState('')
    const newtaburl =(url)=>{
        window.open(url, '_blank');
      }
    const style = {
 
        padding: '8px 0',
      };
  
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
              placeholder={`Tìm kiếm theo tên `}
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
                Bộ lọc
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
      const fecthdulieuthongke = async()=>{
        const result = await getdulieuthongke();
        setdulieuthongke(result.data.data)
        console.log(result)
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
          ...getColumnSearchProps('name_job'),
        },
        {
          title: 'Mức lương',
          dataIndex: 'mucluong',
          key: 'mucluong',
          // sorter: (a, b) => a.ucluong.length - b.ucluong.length,
          // sortDirections: ['descend', 'ascend'],
        },
        {
          title: 'Địa điểm',
          dataIndex: 'diadiem',
          key: 'diadiem',
          ...getColumnSearchProps('diadiem'),
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
        {
            title: 'Hạn hồ sơ',
            dataIndex: 'is_hanhoso',
            key: 'is_hanhoso',
            render:(is_hanhoso)=> <Tag>{(is_hanhoso)}</Tag>
        }
      ];
      useEffect(()=>{
   
        const timer = setTimeout(() => {
          fecthdulieuthongke()
        }, 1000);
        return () => clearTimeout(timer);
      },[])
  return (
    <>
    
    <Row className='px-2 py-2'>
    <Col className="gutter-row" span={24}>
        <div style={style} className='row'>
           
           
         

            <div className='col-12 px-2 py-2 mt-2' >
            <Badge.Ribbon text="Dữ liệu trên nền tảng TOPCV" color="primary">
              <Card title="Dữ liệu" size="Nhu cầu tuyển dụng theo ngành nghề">
               {dulieuthongke.length == 0?"": <Table columns={columns} dataSource={dulieuthongke} pagination={5} />}
              </Card>
            </Badge.Ribbon>
            </div>
            
          </div>
      </Col>
    </Row>
    </>
  )
}

export default Vieclamthongke