import React from 'react';

import './Projects.min.css'

const projects = [
    {
        title: "Project-1",
        imageUrl: '',
        info: "information"
    }, {
        title: "Project-2",
        imageUrl: '',
        info: "information"
    }, {
        title: "Project3",
        imageUrl: '',
        info: "information"
    },
]

const Projects = () => {
    return (
        <div class="projects-container">
            <div className="projects-grid">
                {projects.map((project, index) => {
                    return <Project key={index} project={project} />
                })}
            </div>
        </div>
    );
}

const Project = ({ project }) => {
    const { title, info } = project

    return (
        <div className="project-card">
            <div className="title">{title}</div>
            <div className="thumbnail">Photo</div>
            <div className="info">{info}</div>
        </div>
    );
}

export default Projects;
