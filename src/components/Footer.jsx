import React from 'react';
import { Link } from 'react-router-dom';
import { FiLinkedin, FiInstagram } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-container">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <img 
              src="/MacanX Transparent-01 Purple.png" 
              alt="MacanX" 
              className="logo-img footer-logo-img"
            />
          </Link>
          <p>
            Revolutionizing enterprise operations with intelligent, scalable software solutions. Build your future today.
          </p>
          <div className="social-links">
            {/* MacanX */}
            <a
              href="https://www.linkedin.com/company/macanx/"
              target="_blank"
              rel="noreferrer"
              aria-label="MacanX LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://www.instagram.com/_macanx_/"
              target="_blank"
              rel="noreferrer"
              aria-label="MacanX Instagram"
            >
              <FiInstagram />
            </a>
            {/* Manas */}
            {/* <a
              href="https://www.linkedin.com/in/manasmehta1504/"
              target="_blank"
              rel="noreferrer"
              aria-label="Manas Mehta LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://www.instagram.com/ig_manasmehta/"
              target="_blank"
              rel="noreferrer"
              aria-label="Manas Mehta Instagram"
            >
              <FiInstagram />
            </a> */}
          </div>
        </div>

        <div className="footer-links-group">
          <h4>Platform</h4>
          <ul>
            <li><Link to="/jewellery-erp">Jewellery ERP</Link></li>
            <li><Link to="/corporate-erp">Corporate ERP</Link></li>
            <li><Link to="/mec">MEC Solutions</Link></li>
            <li><Link to="/analytics">Analytics</Link></li>
          </ul>
        </div>

        <div className="footer-links-group">
          <h4>Services</h4>
          <ul>
            <li><Link to="/artificial-intelligence">AI Consulting</Link></li>
            <li><Link to="/ai-agent-development">AI Agent / GEN AI</Link></li>
            <li><Link to="/devops">DevOps / MLOps</Link></li>
            <li><Link to="/web-app-services">Web &amp; App Dev</Link></li>
          </ul>
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
