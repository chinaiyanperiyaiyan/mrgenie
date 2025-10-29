import React from 'react';
// import './Header.css'; 

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <i className="fas fa-magic"></i>
            <span>Genie</span>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search for shops, restaurants, services..." />
            <button><i className="fas fa-search"></i></button>
          </div>
          <ul className="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
