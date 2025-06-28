import React from 'react';
import './Footer.css';
import insta from './insta.avif';
import whatsapp from './whats.png';
import Pinterest from './pint.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <p>The Second Wave</p>
      </div>

      <ul className='footer-links'>
        <li>Company</li>
        <li>About</li>
        <li>Contacts</li>
        <li>Offices</li>
      </ul>

      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt='Instagram' />
          </a>
        </div>
        <div className="footer-icon-container">
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp} alt='WhatsApp' />
          </a>
        </div>
        <div className="footer-icon-container">
          <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
            <img src={Pinterest} alt='Pinterest' />
          </a>
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>Copyright © 2025 - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
