import React from 'react';
import './styles/footer.css';

const Footer = () => (
  <footer>
    <div className="footer_container">
      <a href="#home" className="logo footer_logo">Chase</a>
      <ul>
        <li>
          <a href="#about" className="footer_link">About</a>
        </li>

        <li>
          <a href="#portfolio" className="footer_link">Projects</a>
        </li>

        <li>
          <a href="#contact" className="footer_link">Contact</a>
        </li>
      </ul>

      <div className="footer_socials_wrapper">
        <a href="https://github.com/Chaseknis" className="socials_icon socials-1" target="_blank" rel="noreferrer">
          <i className="uil uil-github" />
        </a>

        <a href="https://www.linkedin.com/in/innocent-n/" className="socials_icon socials-2" target="_blank" rel="noreferrer">
          <i className="uil uil-linkedin" />
        </a>

        <a href="https://twitter.com/chasetotheworld" className="socials_icon socials-3" target="_blank" rel="noreferrer">
          <i className="uil uil-twitter" />
        </a>

        <a href="https://www.instagram.com/chasetotheworld/" className="socials_icon socials-3" target="_blank" rel="noreferrer">
          <i className="uil uil-instagram-alt" />
        </a>
      </div>

      <span className="copyrights">
        &#169; 2023 Chase. All rights reserved
      </span>

    </div>
  </footer>
);

export default Footer;
