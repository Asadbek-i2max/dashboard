import './Header.scss';

const Header = () => {
  return <>
    <header className="header">
      <div className="logo">Fido-Biznes</div>
      <div className="search-bar">
        <input type="text" placeholder="Search for a challenge..." />
      </div>

      <div className="profile">
        <img src="/src/assets/images/profile.png" alt="Profile" />
        <span>Username</span>
      </div>
    </header>
  </>;
};
export default Header;
