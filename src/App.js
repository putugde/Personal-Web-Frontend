import React from 'react';
import './App.css';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import NavBar from './NavBar/NavBar'; 
import WebContent from './WebContent/WebContent';
import WebFooter from './WebFooter/WebFooter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import {Link } from '@material-ui/core';
import Typewriter from 'typewriter-effect';


const linkData = {
  'twitterLink':'https://twitter.com/putu_gde_',
  'linkedinLink':'https://www.linkedin.com/in/putu-gde-ab760a181/',
  'githubLink':'https://github.com/putugde'
}

class App extends React.Component{
  render(){
    return (
      <React.Fragment>
        <CssBaseline/>
        <NavBar/>
        <Container style={{background:'#f3f4f5', padding:0}} maxWidth='false'>
          <Container className="top-container" maxWidth='false' style={{padding:0}}>
            <div className="top-content" id="back-top">
              <Container className="container-content">
                <Typography variant="h4">
                  Hello & Welcome
                </Typography>
                <Typography variant="h2">
                  I Am <span style={{fontWeight:500}}><Typewriter
                    options={{
                      strings: ['Putu Gde.','A Software Engineer.', 'A Computer Science Student.'],
                      autoStart: true,
                      loop: true,
                    }}
                  /></span>  
                </Typography>
                <Link style={{marginRight:15}} href={linkData.twitterLink} target="_blank">
                    <TwitterIcon fontSize="large"/>
                </Link>
                <Link style={{marginRight:15}} href={linkData.linkedinLink} target="_blank">
                  <LinkedInIcon fontSize="large"/>
                </Link>
                <Link style={{marginRight:15}} href={linkData.githubLink} target="_blank">
                  <GitHubIcon fontSize="large"/>
                </Link>
              </Container>
              <div className="svgCurve">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,192L48,186.7C96,181,192,171,288,170.7C384,171,480,181,576,192C672,203,768,213,864,197.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                  </path></svg>
              </div>
            </div>
          </Container>
          <WebContent/>
          <WebFooter/>
        </Container>
  
      </React.Fragment>
    );
  }
  
}

export default App;
