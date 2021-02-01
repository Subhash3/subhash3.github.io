import React from 'react';
import { Store } from '../../Redux/Store'
import { separateLettersOfName } from '../../Utils/helpers'
import ProjectCard from '../ProjectCard/ProjectCard'

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
    }, {
        title: "Project3",
        imageUrl: '',
        info: "information"
    }, {
        title: "Project3",
        imageUrl: '',
        info: "information"
    }, {
        title: "Project3",
        imageUrl: '',
        info: "information"
    },
]

const Projects = () => {
    Store.subscribe(() => {
        console.log("In Projects")
    })
    return (
        <div class="projects-container">
            <div className="header">
                {separateLettersOfName("My Projects")}
            </div>
            <div className="projects-grid">
                {projects.map((project, index) => {
                    return <ProjectCard key={index} project={project} />
                })}
            </div>
        </div>
    );
}

export default Projects;
