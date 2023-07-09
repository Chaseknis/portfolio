import React, { useState } from 'react';
import './styles/services.css';

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section id="services">
      <div className="services_container container">
        <h2>Services</h2>

        <span className="subtitle">
          What I Can Offer
        </span>

        <div className="services_group">
          <div className="services_wrapper">
            <div>
              <i className="uil uil-web-grid services_icon" />
              <h3>
                Product
                <br />
                Designer
              </h3>
            </div>

            <button type="button" className="services_button" onClick={() => toggleTab(1)}>
              View More
              <i className="uil uil-arrow-right services_button_icon" />
            </button>

            <div className={toggleState === 1 ? 'services_modal active_modal' : 'services_modal'}>
              <div className="services_modal_wrapper">
                <button type="button" className="services_modal_close" onClick={() => toggleTab(0)}>
                  <i className="uil uil-times" />
                </button>

                <h3 className="modal_header">Product Designer</h3>

                <p className="modal_description">
                  Services with more than 2 years of experience.
                  Providing quality work to clients and companies.
                </p>

                <ul>
                  <li>
                    <i className="uil uil-check-circle services_modal_icon" />
                    <p>I develop the user interface.</p>
                  </li>

                  <li>
                    <i className="uil uil-check-circle services_modal_icon" />
                    <p>Web page development.</p>
                  </li>

                  <li>
                    <i className="uil uil-check-circle services_modal_icon" />
                    <p>I create UX interactions.</p>
                  </li>

                  <li>
                    <i className="uil uil-check-circle services_modal_icon" />
                    <p>I position your company&apos;s brand.</p>
                  </li>

                  <li>
                    <i className="uil uil-check-circle services_modal_icon" />
                    <p>Design and mockups for the companies products.</p>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          <div className="services_wrapper">
            <div>
              <i className="uil uil-arrow services_icon" />
              <h3>
                UI/UX
                <br />
                Designer
              </h3>
            </div>

            <button type="button" className="services_button" onClick={() => toggleTab(2)}>
              View More
              <i className="uil uil-arrow-right services_button_icon" />
            </button>

            <div className={toggleState === 2 ? 'services_modal active_modal' : 'services_modal'}>
              <div className="services_modal_wrapper">
                <button type="button" className="services_modal_close" onClick={() => toggleTab(0)}>
                  <i className="uil uil-times" />
                </button>

                <h3 className="modal_header">UI/UX Designer</h3>

                <p className="modal_description">
                  Services with more than 2 years of experience.
                  Providing quality work to clients and companies.
                </p>

                <ul>
                  <li>
                    <i className="uil uil-check-circle services_modal_icon" />
                    <p>I develop the user interface.</p>
                  </li>

                  <li>
                    <i className="uil uil-check-circle services_modal_icon" />
                    <p>Web page development.</p>
                  </li>

                  <li>
                    <i className="uil uil-check-circle services_modal_icon" />
                    <p>I create UX interactions.</p>
                  </li>

                  <li>
                    <i className="uil uil-check-circle services_modal_icon" />
                    <p>I position your company&apos;s brand.</p>
                  </li>

                  <li>
                    <i className="uil uil-check-circle services_modal_icon" />
                    <p>Design and mockups for the companies products.</p>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          <div className="services_wrapper">
            <div>
              <i className="uil uil-edit services_icon" />
              <h3>
                Visual
                <br />
                Designer
              </h3>
            </div>

            <button type="button" className="services_button" onClick={() => toggleTab(3)}>
              View More
              <i className="uil uil-arrow-right services_button_icon" />
            </button>

            <div className={toggleState === 3 ? 'services_modal active_modal' : 'services_modal'}>
              <div className="services_modal_wrapper">
                <button type="button" className="services_modal_close" onClick={() => toggleTab(0)}>
                  <i className="uil uil-times" />
                </button>

                <h3 className="modal_header">Visual Designer</h3>

                <p className="modal_description">
                  Services with more than 2 years of experience.
                  Providing quality work to clients and companies.
                </p>

                <ul>
                  <li>
                    <i className="uil uil-check-circle services_modal_icon" />
                    <p>I develop the user interface.</p>
                  </li>

                  <li>
                    <i className="uil uil-check-circle services_modal_icon" />
                    <p>Web page development.</p>
                  </li>

                  <li>
                    <i className="uil uil-check-circle services_modal_icon" />
                    <p>I create UX interactions.</p>
                  </li>

                  <li>
                    <i className="uil uil-check-circle services_modal_icon" />
                    <p>I position your company&apos;s brand.</p>
                  </li>

                  <li>
                    <i className="uil uil-check-circle services_modal_icon" />
                    <p>Design and mockups for the companies products.</p>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
