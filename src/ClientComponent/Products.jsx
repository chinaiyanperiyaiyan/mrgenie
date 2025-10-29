import React from "react";

function Products (props){
    let products =  props.shop.shop?.products || []
     return(<>
    <section className="products" id="products">
    <div className="container">
      <div className="section-title">
        <h2>Our Products</h2>
        <p>Quality items you'll love</p>
      </div>
      <div className="products-grid">
        {products?.map((p, i) => (
          <div className="product-card" key={i}>
            <div className="product-image"><i className={p?.icon_class}></i></div>
            <div className="product-info">
              <h3>{p?.name}</h3>
              <p>{p?.description}</p>
              <div className="product-price">₹ {p?.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
     </>)
}
export default Products;
