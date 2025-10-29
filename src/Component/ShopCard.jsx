import React from 'react';
import {Link} from 'react-router-dom';
const ShopCard = ({shop_id, slug, shop_name , description , logo}) => {
  return (
    <div className="shop-card">
      <div className="shop-logo">
        <img src={logo} alt="" id = 'logo-img' />
      </div>
      <div className="shop-info">
        <h3>{shop_name}</h3>
        <p>{description}</p>
        <Link
          to={`/shoppage/${slug}/${shop_id}`}
          className="visit-btn"
        >
          Visit Shop
        </Link>
      </div>
    </div>
  );
};

export default ShopCard;
