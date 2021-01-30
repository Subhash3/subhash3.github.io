import React, { useState, useEffect } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { separateLettersOfName } from '../../Utils/helpers'

import './HomePage.min.css'

const HomePage = () => {
    const [pageLoaded, setPageLoaded] = useState(false);

    useEffect(() => {
        window.addEventListener('load', () => {
            setPageLoaded(true);
        })
        return () => {
            // cleanUp()
        }
    }, []);

    return (
        <div className="home-page">
            <div className="left-card personal-info">
                <div className={`name ${pageLoaded ? 'page-loaded' : ''}`}>
                    {/* {separateLettersOfName("Subhash Sarangi").map(letterElement => letterElement)} */}
                    {separateLettersOfName("Subhash Sarangi")}
                </div>
                <div className="sub-title">Full Stack Developer | Deep Learning Enthusiast</div>
                <div className="social-links">
                    <div className="facebook"><FacebookIcon /></div>
                    <div className="instagram"><InstagramIcon /></div>
                    <div className="github"><GitHubIcon /></div>
                    <div className="linkedin"><LinkedInIcon /></div>
                </div>
                <div className="connect-btn">Connect</div>
            </div>
            <div className="right-card">
                <div className="logo">SS</div>
            </div>
        </div>
    );
}

export default HomePage;
