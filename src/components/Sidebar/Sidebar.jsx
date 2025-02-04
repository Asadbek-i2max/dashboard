import { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  DashboardOutlined
} from '@ant-design/icons';

import Image from '../Image/Image';

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={250}
      style={{ background: '#fff' }}
    >
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <img
          src="/src/assets/images/logo.png"
          alt="Logo"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>

      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ borderRight: 0 }}
      >
        <Menu.SubMenu
          key="dashboards"
          icon={<DashboardOutlined />}
          title={`Dashboards (3)`}
        >
          <Image
            id="1"
            url="/src/assets/images/logo.png"
            name="Picture 1"
          />
          <Image
            id="2"
            url="/src/assets/images/logo.png"
            name="Picture 2"
          />
          <Image
            id="2"
            url="/src/assets/images/logo.png"
            name="Picture 2"
          />
        </Menu.SubMenu>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
