import React from 'react';
import './Footer.css';
import { FaGithub, FaEnvelope, FaLinkedinIn, FaTwitter } from 'react-icons/fa'; // Importing Font Awesome Icons

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        
        <div className="footer-top">
          <ul className="footer-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
           
          </ul>
        </div>
        <div className="footer-bottom">
          <ul className="social-icons">
          <b>Connect with me : - </b>
            <li><a href="https://github.com/guptaprity" target="_blank" rel="noreferrer"><FaGithub /></a></li>
            <li><a href="prity.mini3110@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope /></a></li>
            <li><a href="https://www.linkedin.com/in/prity-gupta-mini/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a></li>
            <li><a href="https://x.com/pritysahu310" target="_blank" rel="noreferrer"><FaTwitter /></a></li>
          </ul>
          <p>&copy; 2024 Prity . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

