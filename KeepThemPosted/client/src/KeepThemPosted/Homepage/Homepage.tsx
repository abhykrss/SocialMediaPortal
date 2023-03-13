//Crucial Imports.
import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
import { MenuNavigator } from "../Controllers/MenuNavigator";
import {
  LinkedinOutlined,
  PlusOutlined,
  DeleteOutlined,
  UploadOutlined,
  FacebookOutlined,
  LinkedinFilled,
  FacebookFilled,
  PaperClipOutlined,
  FileImageOutlined,
  BarChartOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import LinkedinLogin from "../LoginHelpers/LinkedinLogin";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("LinkedIn", "/Linkedin/Tab", <LinkedinFilled />, [
    getItem("What's New", "/Linkedin/Browse", <LinkedinOutlined />),
    getItem("Post", "/Linkedin/Post", <UploadOutlined />, [
      getItem("Text", "/Linkedin/Post/Text", <ReadOutlined />),
      getItem("Article", "/Linkedin/Post/Article", <PlusOutlined />, [
        getItem("Link", "/Linkedin/Post/Article/Link", <PaperClipOutlined />),
        getItem("Image", "/Linkedin/Post/Article/Image", <FileImageOutlined />),
      ]),
      getItem("Poll", "/Linkedin/Post/Poll", <BarChartOutlined />),
    ]),

    getItem("Sign Out", "/Linkedin/Remove", <DeleteOutlined />),
  ]),
  getItem("Meta (Formerly Facebook)", "/Meta/Tab", <FacebookFilled />, [
    getItem("What's New", "/Meta/Browse", <FacebookOutlined />),
    getItem("Post", "/Meta/Post", <UploadOutlined />),
    getItem("Sign Out", "/Meta/Remove", <DeleteOutlined />),
  ]),
];

export const Homepage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          width={350}
          style={{
            overflow: "auto",
            height: "100vh",
            position: "sticky",
            top: 0,
            left: 0,
          }}
        >
          <div
            style={{
              height: 32,
              margin: 16,
              color: "#87ceeb",
            }}
          >
            <h2>Keep'em Posted</h2>
          </div>
          <Menu
            theme="dark"
            onClick={(e) => navigate(e.key)}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout className="site-layout">
          <Header style={{ padding: 0, background: colorBgContainer }} />
          <Content style={{ margin: "0 20px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>
                <LinkedinLogin />
              </Breadcrumb.Item>
            </Breadcrumb>

            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              <MenuNavigator />
            </div>
          </Content>
          <Footer style={{ textAlign: "end" }}>Keep'em Posted ©2023</Footer>
        </Layout>
      </Layout>
    </>
  );
};
