import React from 'react';
import { Link } from 'react-router-dom'

import './NavBar.min.css'

const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className="nav-link logo">
                <Link to="/"> Logo</Link>
            </div>
            <div className="nav-link home">
                <Link to="/"> Home</Link>
            </div>
            <div className="nav-link projects">
                <Link to="/"> Projects</Link>
            </div>
            <div className="nav-link experience">
                <Link to="/"> Experience</Link>
            </div>
            <div className="nav-link about">
                <Link to="/"> About Me</Link>
            </div>
            <div className="nav-link contact">
                <Link to="/"> Get in touch</Link>
            </div>
        </div>
    );
}

export default NavBar;
