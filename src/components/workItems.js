import React, { useState } from 'react';
import PropTypes from 'prop-types';

const WorkItems = ({ item }) => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="work_card" key={item.id}>

      <img src={item.image} alt="" className="work_image" />
      <h3 className="work_title">{item.title}</h3>

      <button type="button" className="services_button" onClick={() => toggleTab(1)}>
        View More
        <i className="uil uil-arrow-right services_button_icon" />
      </button>

      <div className={toggleState === 1 ? 'services_modal active_modal' : 'services_modal'}>
        <div className="work_modal_wrapper">
          <button type="button" className="services_modal_close" onClick={() => toggleTab(0)}>
            <i className="uil uil-times" />
          </button>

          <h3 className="work_modal_header">{item.title}</h3>

          <img src={item.image} alt="" className="pop_up_work_image" />

          <p className="modal_description">
            {item.description}
          </p>

          <div className="work_pop_up_links">
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="work_button button">
              Demo
              <i className="bx bx-right-arrow-alt work_button_icon" />
            </a>

            <a href={item.codebase} target="_blank" rel="noopener noreferrer" className="work_button button">
              Codebase
              <i className="bx bx-right-arrow-alt work_button_icon" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

WorkItems.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    codebase: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default WorkItems;
