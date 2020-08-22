import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Container, Link } from '@material-ui/core';
import PropTypes from "prop-types";

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

function NavBarInternal(props) {
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
        <Link href="#about-me" style={{color:'black', textDecoration:'none'}} onClick={handleMobileMenuClose}>
          <MenuItem>About Me</MenuItem>
        </Link>
        <Link href="#experience" style={{color:'black', textDecoration:'none'}} onClick={handleMobileMenuClose}>
          <MenuItem>Education & Experience</MenuItem>
        </Link>
        <Link href="#projects" style={{color:'black', textDecoration:'none'}} onClick={handleMobileMenuClose}>
          <MenuItem>Projects</MenuItem>
        </Link>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className={props.bg}>
          <Container>
        <Toolbar disableGutters>
          <Link href="#back-top" color="inherit" variant="h5" style={{fontWeight:'500', textDecoration:'none'}}>
            Putu Gde
          </Link>
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
                    <Link href="#projects" variant="h6" color="inherit" className="link">
                        Projects
                    </Link>
                </div>
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

class NavBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      scrollPos: 0
    };
    this.handleScroll = this.handleScroll.bind(this);
  }


  static propTypes = {
    brand: PropTypes.shape({
      name: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired
    }),
    links: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired
      })
    )
  };

  handleScroll() {
    const { scrollPos } = this.state;
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: scrollPos > -100
    });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render(){
    return <div className={this.state.show ? "active" : "hidden"}><NavBarInternal bg={this.state.show ? "hide" : "show"}/></div>
    
  }
}

export default NavBar;