import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  let shop = props.shop.shop
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <i className="fas fa-magic"></i>
            <span>Genie</span>
          </Link>
          <div className="shop-header">
            <div className="shop-logo">
              <img src={shop?.logo} alt={`${shop?.name || 'Shop Name'}`}  id = "client-con-image-logo"/>
            </div>
            <div className="shop-name">{shop?.name || "Shop Name"}</div>
          </div>
          <ul className="menu">
            <li><a href="#hero-banner">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact Shop</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
