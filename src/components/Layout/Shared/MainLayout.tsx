import React, { useState } from 'react';
import { BrowserRouter, NavLink } from "react-router-dom";
import { Avatar, Col, Layout, Menu, Row } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, AreaChartOutlined, EuroCircleOutlined, UserOutlined, } from '@ant-design/icons';
import { Switcher } from './Switcher'
import { Typography } from 'antd';
import './index.css';
import 'antd/dist/antd.css';

// Define Consts
const { Header, Sider, Content } = Layout;
const { Title } = Typography;


// Main Body Function 
export function MainLayout() {
  const [collapsed, setCollapsed] = useState(false)


  const toggle = () => {
    setCollapsed(!collapsed)
  }
  return (
    <BrowserRouter>
      <Layout>
        {/* part one is a sider !!header is in part 2!!!! */}
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <NavLink to="/" >
            <div style={{ textAlign: 'center' }} className="logo" >
            </div>
          </NavLink>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<AreaChartOutlined />}>
              Coingecko
              <NavLink to="/" ></NavLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<EuroCircleOutlined />}>
              Binance
              <NavLink exact to="/binance" ></NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        {/* part 2 is a main layout including header  */}
        <Layout className="site-layout">
          <Row align={'middle'}>
            <Col flex="100px">
              <Header className="site-layout-background" style={{ padding: 0 }}>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: toggle,
                })}
              </Header>
            </Col  >

            <Col flex="auto" style={{ textAlign: "center", paddingTop: "25 !important" }}>
              <Title level={3}  >Cryptopedia</Title>
            </Col>


            {/* user Login Avatar */}
            <Col span={3} style={{ textAlign: 'end', padding: 15 }} >
              <Avatar style={{ backgroundColor: '#132c54' }} icon={<UserOutlined />} />
            </Col>
          </Row>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {/* defined a component for switcher to make it a little cleaner */}
            <Switcher />
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}
