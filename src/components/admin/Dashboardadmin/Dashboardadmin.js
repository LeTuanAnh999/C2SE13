import React, { useState,useEffect } from 'react';
import {Layout, Menu, Button, theme ,Space,Drawer,} from 'antd';
import { Link ,useParams} from 'react-router-dom'; // Import thư viện Link từ React Router

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,

  UserOutlined,
AreaChartOutlined,
  HomeOutlined,
  BookOutlined,
  UsergroupAddOutlined,
 QuestionCircleOutlined,
 QrcodeOutlined,
 SettingOutlined ,
PhoneOutlined ,
DotChartOutlined ,
WeiboSquareOutlined 
} from '@ant-design/icons';

import { useNavigate } from 'react-router-dom';


import Homeadmin from '../Homeadmin/Homeadmin';
import DataAnalytics from '../DataAna/DataAnalytics';
import Tool from '../Tool/MyTool';
import TinTuyenDung from '../TinTuyenDung/TinTuyenDung';
import NhaTuyenDung from '../NhaTuyenDung/NhaTuyenDung';
import UngVien from '../UngVien/UngVien';
import DoanhThu from '../DoanhThu/DoanhThu';
const { Header, Sider, Content, Footer } = Layout;

const Dashboardadmin = () => {
  
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { slug } = useParams();
  //  draw
  const [open, setOpen] = useState(false);
  const showDefaultDrawer = () => {
    setOpen(true);
  };
  const showLargeDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  
  const hanldedangxuat=()=>{
    try {
      window.localStorage.removeItem('cccdad');
    } catch (error) {
      
    }
    navigate('login/admin')
  }

  let navigate = useNavigate(); 


  const checkloginadmin = async()=>{
    const token = window.localStorage.getItem('cccdad');
    if(token === null || token === ''){
      navigate('login/admin')
    }
  }
  useEffect(() => {
    checkloginadmin();
}, []);

  return (
    <Layout>

        {/* draw */}
        <Drawer
        title={ 'Tài khoản của quản trị viên'}
        placement="right"
        size={'default'}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Đóng</Button>
          
          </Space>
        }
      >
        <Button type='primary' onClick={hanldedangxuat}> Đăng xuất</Button>
        
      </Drawer>

        {/* end */}
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
        >
          {/* Sử dụng thẻ Link để tạo chuyển hướng */}
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/admin/dashboard">Trang chủ</Link>
          </Menu.Item>
          <Menu.Item key="10" icon={<DotChartOutlined />}>
            <Link to="/admin/data-analytics">Thống kê dữ liệu </Link>
          </Menu.Item>
          <Menu.Item key="11" icon={<WeiboSquareOutlined />}>
            <Link to="/admin/data-tool">Tool </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<BookOutlined />}>
            <Link to="/admin/tin-tuyen-dung">Tin tuyển dụng</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UsergroupAddOutlined />}>
            <Link to="/admin/nha-tuyen-dung">Nhà tuyển dụng</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            <Link to="/admin/ung-vien">Ứng viên</Link>
          </Menu.Item>
{/*        
          <Menu.Item key="6" icon={<QuestionCircleOutlined />}>
            <Link to="/admin/help-enmail">Trợ giúp</Link>
          </Menu.Item> */}
          <Menu.Item key="7" icon={<AreaChartOutlined />}>
            <Link to="/admin/doanh-thu">Doanh thu - phát triển</Link>
          </Menu.Item>

          {/* <Menu.Item key="8" icon={<PhoneOutlined />}>
            <Link to="/admin/support">Hỗ trợ </Link>
          </Menu.Item> */}
          {/* <Menu.Item key="9" icon={<SettingOutlined />}>
            <Link to="/admin/setting">Cài đặt</Link>
          </Menu.Item> */}
          
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
            <div className='d-flex  justify-content-between'>
                <div>
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                            }}
                        />
                </div>
              
                <div className='mx-4 ' >
                    <Button type='primary' onClick={showDefaultDrawer}>Tài khoản quản trị</Button>
                       
                </div>

            </div>

          
         

      
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 1600,
            background: colorBgContainer,
          }}
        >
         


          {slug === 'dashboard'? <Homeadmin/>:""}

          {slug === 'data-analytics'?<DataAnalytics/>:""}

          {slug ==='data-tool'?<Tool/>:""}
          {slug === 'tin-tuyen-dung'?<TinTuyenDung/>:""}

          {slug === 'nha-tuyen-dung'?<NhaTuyenDung/>:""}

          {slug === 'ung-vien'?<UngVien/>:""}

          {slug === 'doanh-thu'?<DoanhThu/>:""}



    

        </Content>
        <Footer
        style={{
          textAlign: 'center',
        }}
      >
         VIỆC LÀM GIÁO DỤC CREATE BY ANTD 2023
      </Footer>

      </Layout>
    </Layout>
  );
};

export default Dashboardadmin;
