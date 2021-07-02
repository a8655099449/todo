import React from "react";
import { Layout, Menu, LayoutProps } from "antd";
import { Link } from "react-router-dom";
import { routeItem } from "../../router/index";
import { UserOutlined } from "@ant-design/icons";

interface ISiderbar extends LayoutProps {
  collapsed?: boolean;
  collapsible?: boolean;
  styleName?: string;
  router?: routeItem[];
}


export default function Siderbar(props: ISiderbar) {
  const { router = [] } = props;

  return (
    <Layout.Sider {...props}>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["/"]}>
        {router.map((r) => {
          return (
            <Menu.Item key={r.path} icon={<UserOutlined />}>
              <Link to={r.path}>{r.name}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Layout.Sider>
  );
}
