import React from 'react';
import './styles/socials.css';

const Social = () => (
  <div className="socials_wrapper">
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
);

export default Social;
