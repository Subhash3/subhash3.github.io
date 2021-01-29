import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import './HomePage.min.css'

const HomePage = () => {

    const separateLettersOfName = (name) => {
        let len = name.length
        let lettersArray = []
        for (let i = 0; i < len; i++) {
            let className = `letter ${name[i] === name[i].toUpperCase() ? "capital" : ""}`
            lettersArray.push(<span key={i} className={className}>{name[i]}</span>)
        }

        return lettersArray
    }

    return (
        <div className="home-page">
            <div className="personal-info">
                {/* <div className="name">
                    {separateLettersOfName("Subhash Sarangi").map(letterElement => letterElement)}
                </div>
                <div className="sub-title">Full Stack Developer | Deep Learning Enthusiast</div>
                <div className="social-links">
                    <div className="facebook"><FacebookIcon /></div>
                    <div className="instagram"><InstagramIcon /></div>
                    <div className="github"><GitHubIcon /></div>
                    <div className="linkedin"><LinkedInIcon /></div>
                </div> */}
            </div>
            <div className="logo">S.S</div>
        </div>
    );
}

export default HomePage;
