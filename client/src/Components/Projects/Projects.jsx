import React from 'react';
import { Store } from '../../Redux/Store'
import { separateLettersOfName } from '../../Utils/helpers'
import ProjectCard from '../ProjectCard/ProjectCard'

import './Projects.min.css'

const projects = [
    {
        title: "Feed Forward Neural Networks",
        imageUrl: '',
        info: `Fully functional feed forward neural networks library from scratch.
               Implemented in python3.6.`
    }, {
        title: "Handwritten Digits Recognition",
        imageUrl: '',
        info: `Neural Network which can classify handwritten digits using MNIST dataset from scratch.
               Implemented using the ffnn library that I made.`
    }, {
        title: "Real-Time Chat application",
        imageUrl: '',
        info: `Implemented using MERN stack and socket.io
               I learned about heroku and netlify during this project.`
    }, {
        title: "Sentiment Analysis",
        imageUrl: '',
        info: `Sentiment Analysis using Naive Bayes Classifier from scratch.
               Classifier model was implemented in both Python and Typescript.`
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
        <div id="projects" className="projects-container">
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
