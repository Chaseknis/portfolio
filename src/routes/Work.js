import React from 'react';
import './styles/work.css';
import Works from '../components/Works';

const Work = () => (
  <section id="portfolio">
    <div className="work_container container">
      <h2>Portfolio</h2>

      <span className="subtitle">
        My most recent works
      </span>

      <Works />

    </div>
  </section>
);

export default Work;
