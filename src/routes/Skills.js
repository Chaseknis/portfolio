import React from 'react';
import './styles/skills.css';
import Frontend from '../components/Frontend';
import Backend from '../components/Backend';

const Skills = () => (
  <section id="skills">
    <div className="skills_container container">
      <h2>Skills</h2>

      <span className="subtitle">
        My Technical Level
      </span>

      <div className="skills_group">
        <Frontend />
        <Backend />
      </div>

    </div>
  </section>
);

export default Skills;
