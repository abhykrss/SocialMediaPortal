//Crucial Imports
import React from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, message, Space } from "antd";

const onClick: MenuProps["onClick"] = ({ key }) => {
  message.info(`Post is set to ${key}`);
};

const items: MenuProps["items"] = [
  {
    label: "Public",
    key: "PUBLIC",
  },
  {
    label: "Connections",
    key: "CONNECTIONS",
  },
];

export const ScopeSelect: React.FC = () => (
  <Dropdown menu={{ items, onClick }}>
    <Space>
      <h3>Scope</h3>
      <DownOutlined />
    </Space>
  </Dropdown>
);
