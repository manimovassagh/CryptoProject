import React, { useState } from 'react';
import { BrowserRouter, NavLink } from "react-router-dom";
import './index.css';
import { Layout, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, AreaChartOutlined, EuroCircleOutlined, } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Switcher } from './Switcher'

const { Header, Sider, Content } = Layout;

export function MainLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const toggle = () => {
    setCollapsed(!collapsed)
  }
  return (
    <BrowserRouter>
      <Layout>
        {/* part one is a sider  */}
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <NavLink to="/" >
            <div className="logo" >
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
        {/* part two is a main layout  */}
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
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
