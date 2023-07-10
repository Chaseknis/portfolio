import React from 'react';
import PropTypes from 'prop-types';

const WorkItems = ({ item }) => (
  <div className="work_card" key={item.id}>

    <img src={item.image} alt="" className="work_image" />
    <h3 className="work_title">{item.title}</h3>
    <a href="https://car-rental-capstone.netlify.app/" className="work_button button">
      Demo
      <i className="bx bx-right-arrow-alt work_button_icon" />
    </a>

  </div>
);

WorkItems.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default WorkItems;
