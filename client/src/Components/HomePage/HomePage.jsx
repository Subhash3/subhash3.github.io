import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { separateLettersOfName } from '../../Utils/helpers'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import HeadShake from 'react-reveal/HeadShake'
import Jump from 'react-reveal/Jump'

import './HomePage.min.css'

const HomePage = () => {

    return (
        <div className="home-page">
            <div className="left-card personal-info">
                <Slide left><Fade>
                    <div className={`name`}>
                        {/* {separateLettersOfName("Subhash Sarangi").map(letterElement => letterElement)} */}
                        {separateLettersOfName("Subhash Sarangi")}
                    </div>
                </Fade></Slide>
                <div className="sub-title">Full Stack Developer | Deep Learning Enthusiast</div>
                <Jump>
                    <div className="social-links">
                        <div className="facebook"><FacebookIcon /></div>
                        <div className="instagram"><InstagramIcon /></div>
                        <div className="github"><GitHubIcon /></div>
                        <div className="linkedin"><LinkedInIcon /></div>
                    </div>
                </Jump>
                <div className="buttons">
                    <HeadShake delay={500}>
                        <div className="hire-me btn">Hire Me!</div>
                    </HeadShake>
                    <HeadShake delay={600}>
                        <div className="resume btn">Resume</div>
                    </HeadShake>
                </div>
            </div>
            <div className="right-card">
                <div className="logo">SS</div>
            </div>
        </div>
    );
}

export default HomePage;
