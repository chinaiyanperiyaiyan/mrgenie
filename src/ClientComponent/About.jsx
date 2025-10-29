import React from "react";

function About(props) {
  let shop = props.shop.shop;
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="section-title">
            <h2>About Our Shop</h2>
          </div>
          <div className="about-content">
            <div className="about-text">
              <h3>{shop?.about_title || "AboutTitle"}</h3>
              <p>{shop?.about_description || "AboutDescription"}</p>
              <p>{shop?.about_details || "AboutDetails"}</p>
            </div>
            <div className="about-image">
              <img
                src={shop?.banner_image}
                alt="Shop interior"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )

};

export default About;
