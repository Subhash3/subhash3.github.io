import React from 'react';
import Slide from 'react-reveal/Slide'
import { pickRandomFromArray } from '../../Utils/helpers'
import { slideDirections as directions } from '../../Utils/useful-objects'

import './Experience.min.css'

const myWorks = [
    {
        title: "Digital Technology Intern",
        place: "GE Digital",
        date: "10th Jan 2022 to Present",
        info: "I am currently working with the technologies React and Dagster."
    }, {
        title: "Full Stack Developer",
        // place: "theyoundminds.org",
        place: "The Young Minds",
        date: "13th Sep 2020 to 31st March 2021",
        info: "I worked as a full (Mern) stack developer. During the period, I build a Real-Time Chat Application and Live Streaming platform."
    },{
        title: "Web-app Security Intern",
        place: "IIT Kanpur",
        date: "12th May 2019 to 07th July 2019",
        info: "I worked as a Web Application Security intern. As part of the internship, I built a proxy firewall using python."
    }
    // , {
    //     title: "Another Project/Internship",
    //     place: "Some weird place",
    //     date: "Donno to Donno",
    //     info: "I wish I had done some ML internships and projects. But I don't. Pray for me!"
    // },
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
