import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';

class WebFooter extends React.Component{
    render(){
        return(
            <div style={{background:'#222', paddingTop:5, paddingBottom:5}}>
                <Container>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography variant="h6" style={{fontWeight:'300', color:'#fff'}}>
                                By Putu Gde
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6" style={{fontWeight:'300', color:'#fff'}} align="right">
                                2020
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }
}

export default WebFooter;