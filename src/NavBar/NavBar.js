import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Container, Link, Button } from '@material-ui/core';

import './NavBar.css';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  topLink:{
    // textDecoration:'none'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
        <MenuItem>
            <Link href="https://www.example.com">
                <div>
                    About Me
                </div>
            </Link>
        </MenuItem>
        <MenuItem>
            <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
                <MailIcon />
            </Badge>
            </IconButton>
            <p>Messages</p>
        </MenuItem>
        <MenuItem>
            <IconButton aria-label="show 11 new notifications" color="inherit">
            <Badge badgeContent={11} color="secondary">
                <NotificationsIcon />
            </Badge>
            </IconButton>
            <p>Notifications</p>
        </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" style={{background:"transparent", boxShadow:"none"}}>
          <Container>
        <Toolbar disableGutters>
          <Typography className={classes.title} variant="h5" style={{fontWeight:'500'}}>
            Putu Gde
          </Typography>
          <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
                <div className="topLink">
                    <Link href="#about-me" variant="h6" color="inherit" className="link">
                        About Me
                    </Link>
                </div>
                <div className="topLink">
                    <Link href="#experience" variant="h6" color="inherit" className="link">
                        Education & Experience
                    </Link>
                </div>
                <div className="topLink">
                    <Link href="https://www.example.com" variant="h6" color="inherit" className="link">
                        Projects
                    </Link>
                </div>
                {/* <Button href="#" color="inherit">
                    About Me
                </Button>
                <Button href="#" color="inherit">
                    Experiences
                </Button>
                <Button href="#" color="inherit">
                    Education
                </Button>
                <Button href="#" color="inherit">
                    Projects
                </Button> */}
                {/* <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={0} color="secondary">
                    <MailIcon />
                </Badge>
                </IconButton>
                <IconButton aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={17} color="secondary">
                    <NotificationsIcon />
                </Badge>
                </IconButton> */}
            </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
