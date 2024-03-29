import React, { useState } from 'react';
import { navItems } from './navItems.js'
// import { Store } from '../../Redux/Store'

import './NavBar.min.css'

const NavBar = ({ vertical }) => {
    const [hamBurgerActive, setHamBurgerActive] = useState(false)

    console.log(hamBurgerActive)

    const toggleHamBurger = (e) => {
        setHamBurgerActive(!hamBurgerActive)
    }

    return (
        <div className={`nav-bar ${vertical ? 'vertical' : ''} ${hamBurgerActive ? 'active' : ''}`}>
            <div
                className="ham-burger"
                onClick={toggleHamBurger}
            >
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
            </div>
            <div className="nav-items-container">
                <div className="nav-link name-logo">
                    <a href="/">
                        <span className="fname">Subhash</span> Sarangi
                </a>
                </div>
                <div className="nav-items">
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
            </div>
        </div>
    );
}

const NavItem = ({ text, linkTo, className, Icon, iconDisplay }) => {
    return (
        <div className={`nav-link ${className}`}>
            {iconDisplay ? <a href={linkTo}><Icon /></a> : null}
            <a href={linkTo}>{text}</a>
        </div>
    )
}

export default NavBar;
