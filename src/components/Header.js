import React, { useState } from 'react';
import './styles/header.css';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header>
      <nav>
        <a href="#home" className="logo">Chase</a>
        <div className={toggle ? 'nav_menu show_menu' : 'nav_menu'}>
          <ul>
            <li>
              <a
                href="#home"
                onClick={() => setActiveNav('#home')}
                className={activeNav === '#home' ? 'nav_link active_link' : 'nav_link'}
              >
                <i className="uil uil-estate nav_icon" />
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={() => setActiveNav('#about')}
                className={activeNav === '#about' ? 'nav_link active_link' : 'nav_link'}
              >
                <i className="uil uil-user nav_icon" />
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                onClick={() => setActiveNav('#skills')}
                className={activeNav === '#skills' ? 'nav_link active_link' : 'nav_link'}
              >
                <i className="uil uil-file-alt nav_icon" />
                Skills
              </a>
            </li>

            <li>
              <a
                href="#services"
                onClick={() => setActiveNav('#services')}
                className={activeNav === '#services' ? 'nav_link active_link' : 'nav_link'}
              >
                <i className="uil uil-briefcase-alt nav_icon" />
                Services
              </a>
            </li>

            <li>
              <a
                href="#qualification"
                onClick={() => setActiveNav('#qualification')}
                className={activeNav === '#qualification' ? 'nav_link active_link' : 'nav_link'}
              >
                <i className="uil uil-scenery nav_icon" />
                Qualification
              </a>
            </li>

            <li>
              <a
                href="#portfolio"
                onClick={() => setActiveNav('#portfolio')}
                className={activeNav === '#portfolio' ? 'nav_link active_link' : 'nav_link'}
              >
                <i className="uil uil-scenery nav_icon" />
                Portfolio
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setActiveNav('#contact')}
                className={activeNav === '#contact' ? 'nav_link active_link' : 'nav_link'}
              >
                <i className="uil uil-message nav_icon" />
                Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav_close"
            onClick={handleToggle}
            onKeyDown={handleToggle}
            role="button"
            tabIndex={0}
          >
            <span className="visually-hidden">Close navigation</span>
          </i>
        </div>

        <div className="nav_toggle" onClick={handleToggle} onKeyDown={handleToggle} role="button" tabIndex={0}>
          <i className="uil uil-apps" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
