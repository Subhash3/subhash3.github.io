import HomeIcon from '@material-ui/icons/Home';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import GavelIcon from '@material-ui/icons/Gavel';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';

export const navItems = [
    {
        text: 'Home',
        className: 'home',
        linkTo: '/',
        icon: HomeIcon,
    }, {
        text: 'Projects',
        className: 'projects',
        linkTo: '/projects',
        icon: AccountTreeIcon,
    }, {
        text: 'Experience',
        className: 'experience',
        linkTo: '/experience',
        icon: GavelIcon,
    }, {
        text: 'About',
        className: 'about',
        linkTo: '/about',
        icon: PersonIcon,
    }, {
        text: 'Get In Touch',
        className: 'contact',
        linkTo: '/contact',
        icon: PhoneIcon,
    },
]