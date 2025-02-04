import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { DashboardOutlined } from '@ant-design/icons';

import Image from '../Image/Image';
import './Sidebar.scss';

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={250}
      className="sidebar"
    >
      <div className="logo-container">
        <img
          src="/src/assets/images/logo.png"
          alt="Logo"
          className="logo"
        />
      </div>

      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        className="sidebar-menu"
      >
        <Menu.SubMenu
          key="dashboards"
          icon={<DashboardOutlined />}
          title={`Dashboards (3)`}
        >
          <Image
            id="1"
            url="/src/assets/dashboardImages/dash1.png"
            name="Dashboard 1"
          />
          <Image
            id="2"
            url="/src/assets/dashboardImages/dash2.png"
            name="Dashboard 2"
          />
          <Image
            id="3"
            url="/src/assets/dashboardImages/dash3.png"
            name="Dashboard 3"
          />
          <Image
            id="4"
            url="/src/assets/dashboardImages/dash4.png"
            name="Dashboard 4"
          />
          <Image
            id="5"
            url="/src/assets/dashboardImages/dash5.png"
            name="Dashboard 5"
          />
          <Image
            id="6"
            url="/src/assets/dashboardImages/dash6.png"
            name="Dashboard 6"
          />
          <Image
            id="7"
            url="/src/assets/dashboardImages/dash7.png"
            name="Dashboard 7"
          />
          <Image
            id="8"
            url="/src/assets/dashboardImages/dash8.png"
            name="Dashboard 8"
          />
        </Menu.SubMenu>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
