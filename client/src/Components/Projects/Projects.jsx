import React, { useState } from 'react';
import logo from '../../Images/logo2.jpeg'
import { Store } from '../../Redux/Store'
import { separateLettersOfName } from '../../Utils/helpers'

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
                    return <Project key={index} project={project} />
                })}
            </div>
        </div>
    );
}

const Project = ({ project }) => {
    const [infoRevealed, setInfoRevealed] = useState(false)
    const { title, info } = project

    const toggleInfo = () => {
        setInfoRevealed(!infoRevealed)
    }

    return (
        <div className={`project-card  ${infoRevealed ? 'revealed' : ''}`}>
            <div className="thumbnail">
                <img src={logo} alt={title} />
            </div>
            <div className="title">{title}</div>
            <div className={`info`}>{info}</div>
            <div className="buttons">
                {/* <button className="visit-project">Vist Project</button>
                <button className="visit-repo">Visit Repo</button> */}
                <button
                    className="read-more"
                    onClick={toggleInfo}
                >Read More</button>
            </div>
        </div>
    );
}

export default Projects;
