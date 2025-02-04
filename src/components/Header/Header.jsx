const Header = () => {
  <>
    <header>
      <div className="logo">Fido-Biznes</div>
      <div className="search-bar">
        <input type="text" placeholder="Search for a challenge..." />
      </div>

      <div className="profile">
        <img src="profile-pic.jpg" alt="Profile" />
        <span>Username</span>
      </div>
    </header>
  </>;
};

export default Header;
