import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../ClientComponent/Header';
import Footer from '../../ClientComponent/Footer';
import Hero from '../../ClientComponent/Hero';
import About from '../../ClientComponent/About';
import Products from '../../ClientComponent/Products';
import Contact from '../../ClientComponent/Contact';
import "./ShopPage.css";
// import { shopData } from './ShopData';
import { useParams } from 'react-router-dom';

const ShopPage = () => {
  const [shopData_, setShopData_] = useState([]);
  const { shopId } = useParams()
  useEffect(() => {
    axios.get(`https://mrgenie.pythonanywhere.com/api/shop/${shopId}/`)
      .then(res => setShopData_(res.data))
      .catch(err => console.error(err));
  }, []);
  return (
    <>
      <Header shop={shopData_} />
      <Hero shop={shopData_} />
      <About shop={shopData_} />
      <Products shop={shopData_} />
      <Contact shop={shopData_} />
      <Footer />
    </>
  )
}

export default ShopPage