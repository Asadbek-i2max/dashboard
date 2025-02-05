import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { DashboardOutlined } from '@ant-design/icons';

import Image from '../Image/Image';
import './Sidebar.scss';

import LOGO_IMAGE from '../../assets/images/logo.png';
import D1 from '../../assets/dashboardImages/dash1.png';
import D2 from '../../assets/dashboardImages/dash2.png';
import D3 from '../../assets/dashboardImages/dash3.png';
import D4 from '../../assets/dashboardImages/dash4.png';
import D5 from '../../assets/dashboardImages/dash5.png';
import D6 from '../../assets/dashboardImages/dash6.png';
import D7 from '../../assets/dashboardImages/dash7.png';
import D8 from '../../assets/dashboardImages/dash8.png';

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      className="sidebar"
    >
      <div className="logo-container">
        <img src={LOGO_IMAGE} alt="Logo" className="logo" />
      </div>

      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        className="sidebar-menu"
      >
        <Menu.SubMenu
          key="dashboards"
          icon={<DashboardOutlined />}
          title={`Dashboards (8)`}
        >
          <Image id="1" url={D1} name="Dashboard 1" />
          <Image id="2" url={D2} name="Dashboard 2" />
          <Image id="3" url={D3} name="Dashboard 3" />
          <Image id="4" url={D4} name="Dashboard 4" />
          <Image id="5" url={D5} name="Dashboard 5" />
          <Image id="6" url={D6} name="Dashboard 6" />
          <Image id="7" url={D7} name="Dashboard 7" />
          <Image id="8" url={D8} name="Dashboard 8" />
        </Menu.SubMenu>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
