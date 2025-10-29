import React, { useState, useEffect } from 'react';
import ShopCard from './ShopCard';
import Pagination from './Pagination';
import axios from "axios";


const ShopGrid = () => {
  const [shops, setShop] = useState([]);
  useEffect(() => {
    axios.get(`https://mrgenie.pythonanywhere.com/api/shops/`)
      .then(res => setShop(res.data.shops_list))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="shops" id="shops">
      <div className="container">
        <div className="section-title">
          <h2>Featured Local Businesses</h2>
          <p>Discover unique shops and services in your community</p>
        </div>
        <div className="shop-grid">
          {
           shops.map((shop , index)=>{
             return <ShopCard key={index} {...shop} />
           })
          }

        </div>
      </div>
      <Pagination />
    </section>
  );
};

export default ShopGrid;
