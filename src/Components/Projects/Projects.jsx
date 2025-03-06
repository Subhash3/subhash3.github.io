import React from 'react';
import { Store } from '../../Redux/Store'
import { separateLettersOfName } from '../../Utils/helpers'
import ProjectCard from '../ProjectCard/ProjectCard'

import neuralNetworkImage from '../../Images/neural-network.jpg'
import handwrittenDigitsImage from '../../Images/handwritten-digits.png'
import chatAppImage from '../../Images/chat-app.png'

import './Projects.min.css'

const projects = [
    {
        title: "Sorting Visualizer",
        imageUrl: "",
        info: `An interactive web application to visualize six sorting algorithms.
                Implemented in React + Typescript`,
        url: "https://subhash3.github.io/sorting-visualizer/"
    },
    {
        title: "Feed Forward Neural Networks",
        imageUrl: neuralNetworkImage,
        info: `Fully functional feed forward neural networks library from scratch.
               Implemented in python3.`,
        url: "https://pypi.org/project/nicenet/"
    }, {
        title: "Handwritten Digits Recognition",
        imageUrl: handwrittenDigitsImage,
        info: `Neural Network which can classify handwritten digits using MNIST dataset from scratch.`,
        url: "https://github.com/Subhash3/Handwritten-digit-recognition"
    }, {
        title: "Real-Time Chat application",
        imageUrl: chatAppImage,
        info: `Implemented using MERN stack and socket.io
               I learned about heroku and netlify during this project.`,
        url: "https://github.com/Subhash3/chat-app"
    }, {
        title: "Sentiment Analysis",
        imageUrl: '',
        info: `Sentiment Analysis using Naive Bayes Classifier from scratch.
               Classifier model was implemented in both Python and Typescript.`,
        url: "https://github.com/Subhash3/Sentiment-Analysis"
    }, {
        title: "Covid19 Predictions API",
        imageUrl: '',
        info: `REST API which provides the next 3 weeks' predictions of covid19 cases for several countries.
               Implemented using NodeJs and Express.`,
        url: "http://152.67.162.241:3000"
    },
    // {
    //     title: "Pima Diabetes Classifier",
    //     imageUrl: '',
    //     info: `Classification of Pima Indian Diabetes dataset using neural networks. `,
    //     url: "https://github.com/Subhash3/Pima-Indians-Diabetes"
    // },
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
