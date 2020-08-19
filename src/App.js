import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ParticlesBg from 'particles-bg'
import NavBar from './NavBar/NavBar'; 
import WebContent from './WebContent/WebContent'

class App extends React.Component{
  render(){
    return (
      <React.Fragment>
        <CssBaseline />
        <NavBar/>
        {/* <ParticlesBg type="cobweb" bg={true} /> */}
        <Container style={{background:'#f3f4f5', padding:0}} maxWidth='false'>
          <Container className="top-container" maxWidth='false' style={{padding:0}}>
            <div className="top-content">
              <Container maxWidth="lg">
                <Typography variant="h4">
                  Hello & Welcome
                </Typography>
                <Typography variant="h2">
  
                  I Am <span style={{fontWeight:500}}>A Software Developer</span>.  
                </Typography>
              </Container>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,192L48,186.7C96,181,192,171,288,170.7C384,171,480,181,576,192C672,203,768,213,864,197.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              </path></svg>
            </div>
          </Container>
          <WebContent/>
          <Typography variant="h2">TEEES</Typography>
          {/* <Typography component="div" style={{ backgroundColor: '#000000', marginTop: '50vh', opacity:'0.8', padding:'2vh 2vw'}}>
  
  
            <Typography variant="h2" style={{color:"#fff", marginBottom:'10px'}}>
              Hi, my name is Putu Gde Aditya
            </Typography>
  
  
            <Typography variant="h3" style={{color:"#fff"}}>
              <b>Coming soon ...</b>
            </Typography>
  
  
          </Typography> */}
        </Container>
  
      </React.Fragment>
    );
  }
  
}

export default App;
