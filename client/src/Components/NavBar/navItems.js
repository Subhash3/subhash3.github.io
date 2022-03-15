import HomeIcon from '@material-ui/icons/Home';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import GavelIcon from '@material-ui/icons/Gavel';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';

export const navItemTypes = {
    HOME: 'Home',
    PROJECTS: 'Projects',
    EXPERIENCE: 'Experience',
    ABOUT: 'About',
    GET_IN_TOUCH: 'Get In Touch',
    ACHIEVEMENTS: "Achievements"
}

export const navItems = [
    {
        text: navItemTypes.HOME,
        className: 'home',
        linkTo: '/',
        icon: HomeIcon,
    }, {
        text: navItemTypes.PROJECTS,
        className: 'projects',
        linkTo: '#projects',
        icon: AccountTreeIcon,
    }, {
        text: navItemTypes.EXPERIENCE,
        className: 'experience',
        linkTo: '#experience',
        icon: GavelIcon,
    }, {
        text: navItemTypes.ACHIEVEMENTS,
        className: 'achievements',
        linkTo: '#achievements',
        icon: EmojiEventsIcon
    }
    // {
    //     text: navItemTypes.ABOUT,
    //     className: 'about',
    //     linkTo: '#about',
    //     icon: PersonIcon,
    // }, {
    //     text: navItemTypes.GET_IN_TOUCH,
    //     className: 'contact',
    //     linkTo: '#contact',
    //     icon: PhoneIcon,
    // },
]