import React from 'react';
import { Link } from 'react-router-dom'
import { navItems } from './navItems.js'

import './NavBar.min.css'

const NavBar = ({ vertical }) => {

    return (
        <div className={`nav-bar ${vertical ? 'vertical' : ''}`}>
            <div className="nav-link name-logo">
                <Link to="/">
                    <span className="fname">Subhash</span> Sarangi
                </Link>
            </div>
            {navItems.map((item, index) => {
                return <NavItem
                    key={index}
                    text={item.text}
                    linkTo={item.linkTo}
                    className={item.className}
                    Icon={item.icon}
                    iconDisplay={vertical}
                />
            })}
        </div>
    );
}

const NavItem = ({ text, linkTo, className, Icon, iconDisplay }) => {
    return (
        <div className={`nav-link ${className}`}>
            {iconDisplay ? <Link to={linkTo}><Icon /></Link> : null}
            <Link to={linkTo}>{text}</Link>
        </div>
    )
}

export default NavBar;
