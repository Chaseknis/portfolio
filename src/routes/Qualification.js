import React, { useState } from 'react';
import './styles/qualification.css';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section id="qualification">
      <div className="qualification_container container">
        <h2>Qualification</h2>

        <span className="subtitle">
          My personal Journey
        </span>

        <div className="qualification_group">
          <div className="qualification_tabs">
            <button type="button" className={toggleState === 1 ? 'qualification_button qualification_active' : 'qualification_button'} onClick={() => toggleTab(1)}>
              <i className="uil uil-graduation-cap qualification_icon" />
              Education
            </button>

            <button type="button" className={toggleState === 2 ? 'qualification_button qualification_active' : 'qualification_button'} onClick={() => toggleTab(2)}>
              <i className="uil uil-briefcase-alt qualification_icon" />
              Experience
            </button>
          </div>

          <div className="qualification_sections">
            <div className={toggleState === 1 ? 'qualification_content qualification_content_active' : 'qualification_content'}>
              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">
                    Software Engineering
                  </h3>

                  <span className="qualification_subtitle">
                    USA - Microverse
                  </span>

                  <div className="qualification_calender">
                    <i className="uil uil-calendar-alt qualification_icon" />
                    2022 - 2023
                  </div>
                </div>

                <div>
                  <span className="qualification_rounder" />
                  <span className="qualification_line" />

                </div>
              </div>

              <div className="qualification_data">
                <div />

                <div>
                  <span className="qualification_rounder" />
                  <span className="qualification_line" />

                </div>

                <div>
                  <h3 className="qualification_title">
                    Information Science
                  </h3>

                  <span className="qualification_subtitle">
                    Rwanda - MK
                  </span>

                  <div className="qualification_calender">
                    <i className="uil uil-calendar-alt qualification_icon" />
                    2015 - 2019
                  </div>
                </div>
              </div>

              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">
                    Web Development
                  </h3>

                  <span className="qualification_subtitle">
                    USA  - Microverse
                  </span>

                  <div className="qualification_calender">
                    <i className="uil uil-calendar-alt qualification_icon" />
                    2022 - 2023
                  </div>
                </div>

                <div>
                  <span className="qualification_rounder" />
                  <span className="qualification_line" />

                </div>
              </div>

              <div className="qualification_data">
                <div />

                <div>
                  <span className="qualification_rounder" />
                  <span className="qualification_line" />

                </div>

                <div>
                  <h3 className="qualification_title">
                    UI/UX Design
                  </h3>

                  <span className="qualification_subtitle">
                    Ukraine - Mate Academy
                  </span>

                  <div className="qualification_calender">
                    <i className="uil uil-calendar-alt qualification_icon" />
                    2021 - 2022
                  </div>

                </div>
              </div>

              <div className="qualification_data">
                <div />

                <div>
                  <span className="qualification_rounder" />

                </div>
              </div>
            </div>

            <div className={toggleState === 2 ? 'qualification_content qualification_content_active' : 'qualification_content'}>
              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">
                    Mentor
                  </h3>

                  <span className="qualification_subtitle">
                    USA - Microverse
                  </span>

                  <div className="qualification_calender">
                    <i className="uil uil-calendar-alt qualification_icon" />
                    2022 - Present
                  </div>
                </div>

                <div>
                  <span className="qualification_rounder" />
                  <span className="qualification_line" />

                </div>
              </div>

              <div className="qualification_data">
                <div />

                <div>
                  <span className="qualification_rounder" />
                  <span className="qualification_line" />

                </div>

                <div>
                  <h3 className="qualification_title">
                    Full-Stack Developer
                  </h3>

                  <span className="qualification_subtitle">
                    Rwanda - Freelance
                  </span>

                  <div className="qualification_calender">
                    <i className="uil uil-calendar-alt qualification_icon" />
                    2021 - Present
                  </div>
                </div>
              </div>

              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">
                    Web Designer
                  </h3>

                  <span className="qualification_subtitle">
                    Rwanda - Wika Translate
                  </span>

                  <div className="qualification_calender">
                    <i className="uil uil-calendar-alt qualification_icon" />
                    2022 - 2023
                  </div>
                </div>

                <div>
                  <span className="qualification_rounder" />
                  <span className="qualification_line" />

                </div>
              </div>

              <div className="qualification_data">
                <div />

                <div>
                  <span className="qualification_rounder" />

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Qualification;
