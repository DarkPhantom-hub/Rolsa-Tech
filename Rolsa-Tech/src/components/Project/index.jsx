import React, { useEffect, useState } from 'react';
import './Project.css';
import { projects } from '../../data';
import ProjectNavigation from './ProjectNavigation';

const Project = () => {
    const [activeProjects, setActiveProjects] = useState(projects);
    const [activeCategory, setActiveCategory] = useState('All');
    const [load, setLoad] = useState(false);

    useEffect(() => {
        setLoad(true);
        setTimeout(() => {
            setLoad(false);
        }, 600);
    }, [activeProjects]);

    const getTabs = () => {
        const tabs = ['All'];
        projects.forEach((item) => {
            if (!tabs.includes(item.category)) {
                tabs.push(item.category);
            }
        });
        return tabs;
    };

    const setProjects = (category) => {
        setActiveCategory(category);
        if (category === 'All') {
            setActiveProjects(projects);
        } else {
            const filteredProjects = projects.filter((item) => item.category === category);
            setActiveProjects(filteredProjects);
        }
    };

    return (
        <section id="project">
            <div className="container">
                <h1 className="project__heading">
                    Our <span>Projects</span>
                </h1>
                <ProjectNavigation
                    categories={getTabs()}
                    active={activeCategory}
                    onChange={setProjects}
                />
                <div className="projects__container">
                    {activeProjects.map((project, index) => (
                        <div className={`project__card ${load ? 'zoom__in' : ''}`} key={index}>
                            <div className="image__container">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <h3 className="name">{project.title}</h3>
                            <p className="text__muted description">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;
