import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { separateLettersOfName, } from '../../Utils/helpers'
import resume from '../../files/resume.pdf'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import HeadShake from 'react-reveal/HeadShake'
import Jump from 'react-reveal/Jump'

import './HomePage.min.css'

const HomePage = () => {
    // const subtitleArr = ["Full Stack Developer", "Deep Learning Enthusiast"]
    const subtitleArr = ["Software Engineer @GE Vernova"]

    return (
        <div className="home-page">
            <div className="right-card">
                <div className="logo">SS</div>
            </div>
            <div className="left-card personal-info">
                <Slide left><Fade>
                    <div className={`name`}>
                        {/* {separateLettersOfName("Subhash Sarangi").map(letterElement => letterElement)} */}
                        {separateLettersOfName("Subhash Sarangi")}
                    </div>
                </Fade></Slide>
                <div className="sub-title">
                    {subtitleArr.map((st, index) => {
                        if (index === subtitleArr.length - 1) {
                            return <span key={index}>{st}</span>
                        }
                        return <span key={index}>{st} | </span>
                    })}
                </div>
                <Jump>
                    <div className="social-links">
                        <a href="https://github.com/Subhash3" className="github" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
                        <a href="https://linkedin.com/in/subhash-sarangi" className="linkedin" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
                        <a href="/" className="facebook" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
                        <a href="/" className="instagram" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
                    </div>
                </Jump>
                <div className="buttons">
                    {/* <HeadShake delay={500}>
                        <div className="hire-me btn">Hire Me!</div>
                    </HeadShake> */}
                    <HeadShake delay={600}>
                        {/* <div className="resume btn" onClick={openResume}>Resume</div> */}
                        <a href={resume} className="btn" nice='true' download>Resume</a>
                    </HeadShake>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
