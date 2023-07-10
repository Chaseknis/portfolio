import React, { useEffect, useState } from 'react';
import { projectsData, projectsNav } from './Data';
import WorkItems from './WorkItems';

const Works = () => {
    const [item, setItem] = useState({name: 'all' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === "all") {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter((project) => {
                return project.category ===item.name;
            });
            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (e, index) => {
       setItem({ name: e.target.textContent });
       setActive(index);
    };

return (
    <div>
        <div className="work_filters">
            {projectsNav.map((item, index) => {
                return <span onClick={(e) => {
                    handleClick(e, index);
                }} className={`${active === index ? 'active_work' : ""} work_item`} key={index}>{item.name}</span>
            })}
        </div>

        <div className="work_group">
            {projects.map((item) => {
                return <WorkItems item={item} key={item.id} />
            })}
        </div>
    </div>
);
  
};

export default Works;
