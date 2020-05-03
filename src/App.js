import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ParticlesBg from 'particles-bg'

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ParticlesBg type="cobweb" bg={true} />
      <Container>
        <Typography component="div" style={{ backgroundColor: '#000000', marginTop: '50vh', opacity:'0.8', padding:'2vh 2vw'}}>
          <Typography variant="h2" style={{color:"#fff", marginBottom:'10px'}}>
            Hi, my name is Putu Gde Aditya
          </Typography>
          <Typography variant="h3" style={{color:"#fff"}}>
            <b>Coming soon ...</b>
          </Typography>
        </Typography>
      </Container>

    </React.Fragment>
  );
}

export default App;
