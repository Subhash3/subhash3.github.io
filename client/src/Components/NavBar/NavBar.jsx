import React from 'react';
import { navItems } from './navItems.js'
import { Store } from '../../Redux/Store'

import './NavBar.min.css'

const NavBar = ({ vertical }) => {
    Store.dispatch({ type: 'hihi', payload: {} })

    return (
        <div className={`nav-bar ${vertical ? 'vertical' : ''}`}>
            <div className="nav-link name-logo">
                <a href="/">
                    <span className="fname">Subhash</span> Sarangi
                </a>
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
            {iconDisplay ? <a href={linkTo}><Icon /></a> : null}
            <a href={linkTo} exact activeClassName='active'>{text}</a>
        </div>
    )
}

export default NavBar;
