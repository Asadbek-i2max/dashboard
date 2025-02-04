import { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  DashboardOutlined,
  PictureOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const dashboardItems = [
    {
      id: 1,
      name: 'Picture 1',
      url: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Picture 2',
      url: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Picture 3',
      url: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Picture 4',
      url: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      name: 'Picture 5',
      url: 'https://via.placeholder.com/150',
    }
  ];

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
          title={`Dashboards (${dashboardItems.length})`}
        >
          {dashboardItems.map((item) => (
            <Menu.Item key={item.id} icon={<PictureOutlined />}>
              <span style={{ marginLeft: '8px' }}>{item.name}</span>
            </Menu.Item>
          ))}
        </Menu.SubMenu>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
