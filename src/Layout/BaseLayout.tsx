import React, { useState, ProviderProps } from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import "./BaseLayout.less";

import { ILayout } from "./interface/BaseLayout";
import router from "../router";
import { Link } from "react-router-dom";

import Siderbar from "./components/Siderbar";

const { Header, Sider, Content } = Layout;

export default function BaseLayout(props: ILayout) {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
      {/* <Siderbar
        collapsible
        collapsed={collapsed}
        styleName="acc"
        router={router}
      
      /> */}
      <Sider trigger={null} collapsible collapsed={collapsed} styleName="acc">
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["/"]}>
          {router.map((r) => {
            return (
              <Menu.Item key={r.path} icon={<UserOutlined />}>
                <Link to={r.path}>{r.name}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0, paddingLeft: 20 }}
        >
          <span
            onClick={() => setCollapsed(!collapsed)}
            className="hover:text-main cursor-pointer"
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </span>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
}
