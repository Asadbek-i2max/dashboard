import './Header.scss';
import { Layout, Input, Avatar } from 'antd';

const { Header } = Layout;

const AppHeader = () => {
  return (
    <>
      <Header className="app-header">
        <div className="logo">Fido-biznes</div>
        <div className="search-bar">
          <Input placeholder="Search for a challenge..." />
        </div>
        <div className="profile">
          <Avatar src="/src/assets/images/profile.png" />
          <span>Username</span>
        </div>
      </Header>
    </>
  );
};
export default AppHeader;
