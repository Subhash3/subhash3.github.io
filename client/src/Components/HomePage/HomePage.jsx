import React from 'react';
// import FacebookIcon from '@material-ui/icons/Facebook';

import './HomePage.min.css'

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="personal-info">
                <div className="name"><span>S</span>ubhash <span>S</span>arangi</div>
                Full Stack Developer |
                Deep Learning Enthusiast
                <div className="social-links">
                    <div className="facebook">F</div>
                    <div className="instagram">I</div>
                    <div className="github">G</div>
                    <div className="linkedin">L</div>
                </div>
            </div>
            <div className="logo">S.S</div>
        </div>
    );
}

export default HomePage;
