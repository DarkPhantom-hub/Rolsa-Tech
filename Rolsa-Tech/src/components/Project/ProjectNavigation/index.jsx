import React from 'react';
import './ProjectNavigation.css';

const ProjectNavigation = ({ categories, active, onChange }) => {
    return (
        <div className="project__navigation">
            {categories.map((name, index) => (
                <button
                    key={index}
                    className={active === name ? 'active' : ''}
                    onClick={() => onChange(name)}
                >
                    {name}
                </button>
            ))}
        </div>
    );
};

export default ProjectNavigation;
