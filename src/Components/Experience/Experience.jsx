import React from 'react';
import Slide from 'react-reveal/Slide'
import { pickRandomFromArray } from '../../Utils/helpers'
import { slideDirections as directions } from '../../Utils/useful-objects'

import './Experience.min.css'

const myWorks = [
    {
        title: "Software Engineer",
        place: "GE Digital",
        date: "Aug 2022 to Present",
        info: "I am currently working here"
    },
    {
        title: "Digital Technology Intern",
        place: "GE Digital",
        date: "Jan 2022 to July 2022",
        info: "Designed and developed a fully customizable dashboard with ReactJs for a product called Industrial Data Diagnostics. And also researched on various solutions to implement a data ingestion pipeline and built appropriate prototypes."
    }, {
        title: "Full Stack Developer",
        place: "The Young Minds",
        date: "13th Sep 2020 to 31st March 2021",
        info: "I worked as a full (Mern) stack developer. During the period, I build a Real-Time Chat Application and Live Streaming platform."
    },{
        title: "Web-app Security Intern",
        place: "IIT Kanpur",
        date: "12th May 2019 to 07th July 2019",
        info: "I worked as a Web Application Security intern. As part of the internship, I built a proxy firewall using python."
    }
]

const Experience = () => {
    return (
        <div id="experience" className="experience-component">
            <div className="header">
                Experience
            </div>
            <div className="works">
                {myWorks.map((workObject, index) => <Work workObject={workObject} key={index} />)}
            </div>
        </div>
    );
}

const Work = ({ workObject }) => {
    let { title, place, date, info } = workObject

    const pickDirection = () => {
        let slideDir = { left: false, right: false, up: false, down: false }

        let dir = pickRandomFromArray(directions)
        slideDir[dir] = true

        return slideDir
    }

    let slideDir = pickDirection()

    return (
        <Slide left={slideDir.left} right={slideDir.right} down={slideDir.down} up={slideDir.up}>
            <div className="work">
                <div className="title">{title}</div>
                <div className="place">{place}</div>
                <div className="date">{date}</div>
                <div className="info">{info}</div>
            </div>
        </Slide>
    )
}

export default Experience;
