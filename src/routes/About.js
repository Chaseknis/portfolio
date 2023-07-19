import React from 'react';
import './styles/about.css';
import AboutImage from '../assets/IMG_3343.JPG';
import Resume from '../assets/Innocent_N_Resume.pdf';

const About = () => (
  <section id="about">
    <div className="about_container container">
      <h2>About Me</h2>

      <span className="subtitle">My Introduction</span>

      <div className="about_wrapper">
        <img src={AboutImage} alt="" className="about_image" />

        <div className="about_information">
          <div className="info_cards_wrapper">
            <div className="about_card">
              <i className="bx bx-award about_icon" />
              <h3>Experience</h3>
              <span>2 Years Working</span>
            </div>

            <div className="about_card">
              <i className="bx bx-briefcase-alt-2 about_icon" />
              <h3>Completed</h3>
              <span>20 + Projects</span>
            </div>

            <div className="about_card">
              <i className="bx bx-support about_icon" />
              <h3>Support</h3>
              <span>Online 24/7</span>
            </div>

          </div>

          <p className="description">
            Experienced full-stack developer passionate about modern tech, seeking a
            challenging role with an innovative team to develop efficient, scalable, and
            user-friendly solutions. I have completed over 2000 hours of collaborative
            learning and I have mastered HTML, CSS, JavaScript, React.Js, MySql and Ruby on Rails.
          </p>

          <a download="" href={Resume} className="about_button">
            Download Resume
            <i className="uil uil-file-download" />
          </a>

        </div>

      </div>

    </div>
  </section>
);

export default About;
