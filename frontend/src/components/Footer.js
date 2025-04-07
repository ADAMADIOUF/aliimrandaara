import React from 'react';

import { FaFacebookF, FaTwitter, FaYoutube, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import ChatBox from './ChatBox';

const Footer = () => {
  return (
    <footer className="footer">
      {/* About and Social */}
      <div className="footer-column">
        <h4>About Us</h4>
        <p>
          Empowering global seekers with faith, practice, and excellence in Islam, safeguarding the legacy of Islamic scholasticism.
        </p>
        <p><FaWhatsapp /> Whatsapp: +1 224-400-0203</p>
        <p><FaEnvelope /> Email: admin@darululoomonline.org</p>
        <div className="social-icons">
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" aria-label="YouTube"><FaYoutube /></a>
        </div>
      </div>

      {/* Quick Links */}
      <div className="footer-column">
        <h4>Quick Links</h4>
        <a href="#">Home</a>
        <a href="#">Teachers</a>
        <a href="#">Course-Catalog</a>
        <a href="#">Students’ Portal</a>
        <a href="#">Contact us</a>
      </div>

      {/* Quick Info */}
      <div className="footer-column">
        <h4>Quick Info</h4>
        <p>Darul Uloom Online is one of the best online Islamic Institutions.</p>
        <p>Global Approach</p>
        <p>Be Responsible Global Citizens</p>
        <p>Access Anytime from Anywhere</p>
      </div>

      {/* Join Us */}
      <div className="footer-column">
        <h4>JOIN DARUL ULOOM ONLINE</h4>
        <p>Be the part of noble mission</p>
        <form className="chat-form">
          <input type="text" placeholder="Type a message..." className="chat-input" />
          <button type="submit" className="chat-button">Send</button>
        </form>
      </div>

      {/* Chat box */}
       <ChatBox/>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>Copyright © 2016 Darul Uloom Online. All Rights Reserved.</p>
      </div>
     
    </footer>
  );
};

export default Footer;
