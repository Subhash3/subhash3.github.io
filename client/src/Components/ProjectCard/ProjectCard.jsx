import React, { useState } from 'react';
import logo from '../../Images/logo2.jpeg'
import Slide from 'react-reveal/Slide'
import { separateLettersOfName, pickRandomFromArray } from '../../Utils/helpers'
import { slideDirections as directions } from '../../Utils/useful-objects'

import './ProjectCard.min.css'

const Project = ({ project }) => {
    const [infoRevealed, setInfoRevealed] = useState(false)
    const { title, info } = project

    const toggleInfo = () => {
        setInfoRevealed(!infoRevealed)
    }

    const getLines = (string) => {
        let lines = string.split('\n')
        return lines.map(line => line.trim())
    }

    const pickDirection = () => {
        let slideDir = { left: false, right: false, up: false, down: false }

        let dir = pickRandomFromArray(directions)
        slideDir[dir] = true

        return slideDir
    }

    let slideDir = pickDirection()
    // console.log({ slideDir })
    return (
        <div className={`project-card  ${infoRevealed ? 'revealed' : ''}`}>
            <div className="thumbnail">
                <img src={project.imageUrl ? project.imageUrl : logo} alt={title} />
            </div>
            <Slide left={slideDir.left} right={slideDir.right} down={slideDir.down} up={slideDir.up} >
                <div className="title">{separateLettersOfName(title)}</div>
            </Slide>
            <ul className={`info`}>
                {getLines(info).map((line, index) => <li key={index}>{line}</li>)}
            </ul>
            <div className="buttons">
                {/* <button className="visit-project">Vist Project</button>
                <button className="visit-repo">Visit Repo</button> */}
                <a
                    className="read-more"
                    href={project.url}
                    onClick={toggleInfo}
                >Read More</a>
            </div>
        </div>
    );
}

export default Project;