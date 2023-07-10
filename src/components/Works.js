import React, { useEffect, useState } from 'react';
import { projectsData, projectsNav } from './Data';
// eslint-disable-next-line
import WorkItems from './workItems';

const Works = () => {
  const [item, setItem] = useState({ name: 'all' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === 'all') {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter(
        (project) => project.category.toLowerCase() === item.name,
      );
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      <div className="work_filters">
        {projectsNav.map((item, index) => (
          <span
            onClick={(e) => {
              handleClick(e, index);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleClick(e, index);
              }
            }}
            role="button"
            tabIndex={0}
            className={`${active === index ? 'active_work' : ''} work_item`}
            key={index}
          >
            {item.name}
          </span>

        ))}
      </div>

      <div className="work_group">
        {projects.map((item) => <WorkItems item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default Works;
