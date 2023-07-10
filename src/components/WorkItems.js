import React from 'react';

const WorkItems = ({ item }) => {

  return(
    <div className="work_card" key={item.id}>

       <img src={item.image}  alt="" className="work_image"></img>
       <h3 className="work_title">{item.title}</h3>
       <a href="#" className="work_button button">
          Demo
          <i class="bx bx-right-arrow-alt work_button_icon"></i>
        </a>

    </div>
    );
};

export default WorkItems;
