import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  AreaChartOutlined,
} from '@ant-design/icons';

import {
  BrowserRouter,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { CryptoList } from '../Pages/CryptoList'
import { CryptoDetails } from '../Pages/CryptoDetails';

const { Header, Sider, Content } = Layout;

export function MainLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const toggle = () => {
    setCollapsed(true)
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
              Crypto Details
              <NavLink to="/details" ></NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        {/* part two is a main layout  */}
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <h1>Cryptopedia</h1>
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
            <Switch>
              <Route exact path="/">
                <CryptoList />
              </Route>
              <Route path="/details">
                <CryptoDetails />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}
