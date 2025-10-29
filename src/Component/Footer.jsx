import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <div className="footer-logo">
              <i className="fas fa-magic"></i>
              <span>Genie</span>
            </div>
            <p>Genie helps you discover and support local businesses in your community...</p>
          </div>
          <div className="footer-links">
            <div className="link-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Genie</a></li>
                <li><a href="#">Our Team</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
              </ul>
            </div>
            <div className="link-column">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </div>
            <div className="link-column">
              <h4>Connect</h4>
              <ul>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Genie. All rights reserved. Made with ❤️ for local businesses.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
