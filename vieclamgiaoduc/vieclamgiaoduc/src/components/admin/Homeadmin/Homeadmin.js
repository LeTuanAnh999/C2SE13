import React from 'react'
import { Badge, Card } from 'antd';
import { Space, Table, Tag } from 'antd';
const columns = [
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'giới tính',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'địa chỉ',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'thẻ tag',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>abc {record.name}</a>
       
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No',
      tags: ['cool', 'teacher'],
    },
  ];
function Homeadmin() {
  return (
    <>
     <Badge.Ribbon text="Bảng tin" color="cyan">
      <Card title="Trang chủ việc làm" size="small">

        Test dữ liệu  TRẦN TUẦN ANH
      <Table columns={columns} dataSource={data} />
      </Card>
    </Badge.Ribbon>
    
    </>
  )
}

export default Homeadmin