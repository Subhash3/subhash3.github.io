import React, { useState } from 'react';
import logo from '../../Images/logo2.jpeg'
import './ProjectCard.min.css'

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

export default Project;