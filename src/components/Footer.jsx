import React from 'react';
import { FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-container">
        <div className="footer-brand">
          <a href="#" className="logo">
            <img 
              src="/MacanX Transparent-01 Purple.png" 
              alt="MacanX" 
              className="logo-img footer-logo-img"
            />
          </a>
          <p>
            Revolutionizing enterprise operations with intelligent, scalable software solutions. Build your future today.
          </p>
          <div className="social-links">
            <a href="#"><FiTwitter /></a>
            <a href="#"><FiLinkedin /></a>
            <a href="#"><FiGithub /></a>
          </div>
        </div>

        <div className="footer-links-group">
          <h4>Platform</h4>
          <ul>
            <li><a href="#">ERP System</a></li>
            <li><a href="#">MECS</a></li>
             <li><a href="#">Custom Software</a></li>
            <li><a href="#">Analytics</a></li>
          </ul>
        </div>

        <div className="footer-links-group">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>Stay Updated</h4>
          <p>Get the latest updates on our platform and features.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      
      <div className="footer-bottom container">
        <p>&copy; {new Date().getFullYear()} MACANX Inc. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
