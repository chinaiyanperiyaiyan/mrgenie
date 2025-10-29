import React from "react";

function Contact(props){
 let contact = props.shop.shop?.contact
  return(<>
   <section className="contact" id="contact">
    <div className="container">
      <div className="section-title">
        <h2>Contact Us</h2>
        <p>Get in touch with our shop</p>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Visit Our Store</h3>
          <div className="contact-details">
            <div className="contact-item"><i className="fas fa-phone"></i>{contact?.phone}</div>
            <div className="contact-item"><i className="fas fa-envelope"></i>{contact?.email}</div>
            <div className="contact-item"><i className="fas fa-map-marker-alt"></i>{contact?.address}</div>
            <div className="contact-item"><i className="fas fa-clock"></i>{contact?.hours}</div>
          </div>
          <a
            href={`https://wa.me/${contact?.whatsapp.replace(/\D/g, '')}`}
            className="whatsapp-btn"
          >
            <i className="fab fa-whatsapp"></i> Message us on WhatsApp
          </a>
        </div>
        <div className="map">
          <div className="map-placeholder">
            <i className="fas fa-map"></i>
            <p>Interactive Map (Coming Soon)</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>)
};

export default Contact;
