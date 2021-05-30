import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import './index.css';
import { Layout, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, AreaChartOutlined, } from '@ant-design/icons';
import { CryptoList } from '../Pages/CryptoList'
import { CryptoDetails } from '../Pages/CryptoDetails';
import 'antd/dist/antd.css';
import { Footer } from 'antd/lib/layout/layout';

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
              Crypto Details
              <NavLink to="/details" ></NavLink>
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
            <Switch>
              <Route exact path="/">
                <CryptoList />
              </Route>
              {/*ask armin later what is this for??? component={CryptoDetails} */}
              <Route path="/details/:symbol" component={CryptoDetails}>
                <CryptoDetails />
              </Route>
            </Switch>
          </Content>

        </Layout>
      </Layout>

      <Footer style={{ textAlign: 'center' }}>Cryptopedia ©2021 Created by Mani Movassagh</Footer>
    </BrowserRouter>
  );
}
