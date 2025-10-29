import React from 'react';
import Header from '../../Component/Header';
import Hero from '../../Component/Hero';
import ShopCard from '../../Component/ShopCard';
import ShopGrid from '../../Component/ShopGrid';
import Footer from '../../Component/Footer';
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <ShopGrid />
      <Footer />
    </>
  )
}

export default Home;