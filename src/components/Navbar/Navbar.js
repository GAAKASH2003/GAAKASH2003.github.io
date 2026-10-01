import React, { useContext, useState } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Fade from 'react-reveal/Fade';
import { IoMenuSharp, IoHomeSharp } from 'react-icons/io5';
import { BsAward, BsCodeSlash } from 'react-icons/bs';
import { MdPhone } from 'react-icons/md';
import { FaBriefcase, FaFolderOpen, FaTrophy, FaUser } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { Close as CloseIcon } from '@material-ui/icons';

import './Navbar.css';
import { headerData } from '../../data/headerData';
import { ThemeContext } from '../../contexts/ThemeContext';

const navigationItems = [
    { label: 'Home', to: '/', Icon: IoHomeSharp },
    { label: 'About', to: '/#about', Icon: FaUser },
    { label: 'Skills', to: '/#skills', Icon: BsCodeSlash },
    { label: 'Experience', to: '/#experience', Icon: FaBriefcase },
    { label: 'Projects', to: '/#projects', Icon: FaFolderOpen },
    { label: 'Achievements', to: '/#achievements', Icon: FaTrophy },
    { label: 'Certifications', to: '/#certifications', Icon: BsAward },
    { label: 'Contact', to: '/#contacts', Icon: MdPhone },
];

function Navbar() {
    const { theme, setHandleDrawer } = useContext(ThemeContext);

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
        setHandleDrawer(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
        setHandleDrawer(false);
    };

    const useStyles = makeStyles((t) => ({
        navMenu: {
            background: 'transparent',
            border: 0,
            fontSize: '2.5rem',
            color: theme.tertiary,
            cursor: 'pointer',
            lineHeight: 0,
            padding: 0,
            transform: 'translateY(-10px)',
            transition: 'color 0.3s',
            '&:hover': {
                color: theme.primary,
            },
            [t.breakpoints.down('sm')]: {
                fontSize: '2.5rem',
            },
            [t.breakpoints.down('xs')]: {
                fontSize: '2rem',
            },
        },
        MuiDrawer: {
            padding: '0 24px',
            width: '360px',
            maxWidth: '100vw',
            boxSizing: 'border-box',
            fontFamily: ' var(--primaryFont)',
            fontStyle: ' normal',
            fontWeight: ' normal',
            fontSize: ' 24px',
            background: theme.secondary,
            overflowY: 'auto',
            borderTopRightRadius: '40px',
            borderBottomRightRadius: '40px',
            [t.breakpoints.down('sm')]: {
                width: '320px',
                padding: '0 20px',
            },
        },
        closebtnIcon: {
            fontSize: '2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            color: theme.primary,
            position: 'absolute',
            right: 40,
            top: 40,
            transition: 'color 0.2s',
            '&:hover': {
                color: theme.tertiary,
            },
            [t.breakpoints.down('sm')]: {
                right: 20,
                top: 20,
            },
        },
        drawerItem: {
            margin: '0.75rem auto',
            borderRadius: '78.8418px',
            background: theme.secondary,
            color: theme.primary,
            width: '100%',
            minHeight: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '12px',
            padding: '12px 18px',
            boxSizing: 'border-box',
            border: '2px solid',
            borderColor: theme.primary,
            transition: 'background-color 0.2s, color 0.2s',
            '&:hover': {
                background: theme.primary,
                color: theme.secondary,
            },
            [t.breakpoints.down('sm')]: {
                padding: '12px 16px',
                minHeight: '55px',
            },
        },
        drawerLinks: {
            fontFamily: 'var(--primaryFont)',
            flex: 1,
            minWidth: 0,
            overflowWrap: 'anywhere',
            lineHeight: 1.4,
            fontSize: '1.125rem',
            fontWeight: 600,
            [t.breakpoints.down('sm')]: {
                fontSize: '1.125rem',
            },
        },
        drawerIcon: {
            flexShrink: 0,
            fontSize: '1.6rem',
            [t.breakpoints.down('sm')]: {
                fontSize: '1.385rem',
            },
        },
    }));

    const classes = useStyles();

    const shortname = (name) => {
        if (name.length > 12) {
            return name.split(' ')[0];
        } else {
            return name;
        }
    };

    return (
        <div className='navbar'>
            <div className='navbar--container'>
                <h1 style={{ color: theme.secondary }}>
                    {shortname(headerData.name)}
                </h1>

                <button
                    type='button'
                    className={`nav-menu ${classes.navMenu}`}
                    onClick={handleDrawerOpen}
                    aria-label='Menu'
                    aria-expanded={open}
                    aria-controls='navigation-drawer'
                >
                    <IoMenuSharp aria-hidden='true' />
                </button>
            </div>
            <Drawer
                variant='temporary'
                onClose={handleDrawerClose}
                anchor='left'
                open={open}
                classes={{ paper: classes.MuiDrawer }}
                className='drawer'
                disableScrollLock={true}
            >
                <div id='navigation-drawer' className='div-closebtn'>
                    <CloseIcon
                        onClick={handleDrawerClose}
                        onKeyDown={(e) => {
                            if (e.key === ' ' || e.key === 'Enter') {
                                e.preventDefault();
                                handleDrawerClose();
                            }
                        }}
                        className={classes.closebtnIcon}
                        role='button'
                        tabIndex='0'
                        aria-label='Close'
                    />
                </div>
                <br />

                <nav className='navLink--container' aria-label='Main navigation'>
                    {navigationItems.map(({ label, to, Icon }) => (
                        <Fade left key={to}>
                            <NavLink
                                to={to}
                                smooth={true}
                                duration={2000}
                                onClick={handleDrawerClose}
                            >
                                <div className={classes.drawerItem}>
                                    <Icon className={classes.drawerIcon} aria-hidden='true' />
                                    <span className={classes.drawerLinks}>{label}</span>
                                </div>
                            </NavLink>
                        </Fade>
                    ))}
                </nav>
            </Drawer>
        </div>
    );
}

export default Navbar;
