import React from 'react';

import './Experience.min.css'

const myWorks = [
    {
        title: "Web-app Security Intern",
        place: "IIT Kanpur",
        date: "12th May 2019 to 07th July 2019",
        info: "I worked as a Web Application Security intern. As part of the internship, I built a proxy firewall using python."
    }, {
        title: "Full Stack Developer",
        place: "theyoundminds.org",
        date: "13th Sep 2020 to 31st March 2021",
        info: "I worked as a full (Mern) stack developer. During the period, I build a Real-Time Chat Application and Live Streaming platform."
    },
]

const Experience = () => {
    return (
        <div id="experience" class="experience-component">
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


    return (
        <div className="work">
            <div className="title">{title}</div>
            <div className="place">{place}</div>
            <div className="date">{date}</div>
            <div className="info">{info}</div>
        </div>
    )
}

export default Experience;
