import React from 'react';
import { Link } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import GavelIcon from '@material-ui/icons/Gavel';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';

import './NavBar.min.css'

const NavBar = ({ vertical }) => {
    const navItems = [
        {
            text: 'Home',
            className: 'home',
            linkTo: '/',
            icon: HomeIcon,
            iconDisplay: vertical
        }, {
            text: 'Projects',
            className: 'projects',
            linkTo: '/projects',
            icon: AccountTreeIcon,
            iconDisplay: vertical
        }, {
            text: 'Experience',
            className: 'experience',
            linkTo: '/experience',
            icon: GavelIcon,
            iconDisplay: vertical
        }, {
            text: 'About',
            className: 'about',
            linkTo: '/about',
            icon: PersonIcon,
            iconDisplay: vertical
        }, {
            text: 'Get In Touch',
            className: 'contact',
            linkTo: '/contact',
            icon: PhoneIcon,
            iconDisplay: vertical
        },
    ]

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
                    iconDisplay={item.iconDisplay}
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
