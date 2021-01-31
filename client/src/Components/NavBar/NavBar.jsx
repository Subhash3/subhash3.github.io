import React from 'react';
import { NavLink } from 'react-router-dom'
import { navItems } from './navItems.js'
import { Store } from '../../Redux/Store'

import './NavBar.min.css'

const NavBar = ({ vertical }) => {
    Store.dispatch({ type: 'hihi', payload: {} })

    return (
        <div className={`nav-bar ${vertical ? 'vertical' : ''}`}>
            <div className="nav-link name-logo">
                <NavLink to="/">
                    <span className="fname">Subhash</span> Sarangi
                </NavLink>
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
            {iconDisplay ? <NavLink to={linkTo}><Icon /></NavLink> : null}
            <NavLink to={linkTo} exact activeClassName='active'>{text}</NavLink>
        </div>
    )
}

export default NavBar;
