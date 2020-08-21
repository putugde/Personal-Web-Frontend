import React from 'react';
import './WebContent.css';
import { Typography, Container, Grid, Card, CardContent, Link } from '@material-ui/core';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';
import GitHubIcon from '@material-ui/icons/GitHub';
import 'react-vertical-timeline-component/style.min.css';

const aboutMe = "My name is Putu Gde Aditya Taguh Widiana. I'm a Final year Computer Science Student at Bandung Institute of Technology. I love to solve problems. I'm interested in Web Development and Machine Learning, especially NLP."
const timelineData = [
    {
        'type':'work',
        'title':'Software Engineer',
        'subtitle': 'Kredibel',
        'loc':'Greater Jakarta Area, Indonesia',
        'date':'August 2020 - Present'
    },
    {
        'type':'work',
        'title':'Software Engineer Intern',
        'subtitle': 'Kredibel',
        'loc':'Greater Jakarta Area, Indonesia',
        'date':'May 2020 - August 2020'
    },
    {
        'type':'work',
        'title':'Software Engineer Intern',
        'subtitle': 'IBM JTI',
        'loc':'Greater Jakarta Area, Indonesia',
        'date':'May 2019 - August 2019'
    },
    {
        'type':'edu',
        'title':'Computer Science Bachelor\'s Degree',
        'subtitle': 'Bandung Institute of Technology',
        'loc':'Bandung Area, West Java, Indonesia',
        'date':'July 2017 - Present'
    },
    {
        'type':'edu',
        'title':'Senior High School',
        'subtitle': 'SMAK Penabur Harapan Indah',
        'loc':'Bekasi , West Java, Indonesia',
        'date':'July 2014 - May 2017'
    },
    {
        'type':'edu',
        'title':'Junior High School',
        'subtitle': 'SMPK Penabur Harapan Indah',
        'loc':'Bekasi, West Java, Indonesia',
        'date':'July 2011 - May 2014'
    },
    {
        'type':'edu',
        'title':'Elementary School',
        'subtitle': 'SD Tunas Harapan',
        'loc':'Bekasi, West Java, Indonesia',
        'date':'July 2005 - May 2011'
    },
]

const projectData = [
    {
        'name':'Personal Web',
        'link':'http://putu-gde.engineer/',
        'stack':'ReactJS, Material UI',
        'github':'https://github.com/putugde/Personal-Web-Frontend',
        'desc':'Well, self explanatory :)'
    },
    {
        'name':'Obscura Exhibition 2020',
        'link':'https://www.obscuraexhibition.web.id',
        'stack':'Django, PostgreSQL, Bootstrap 4',
        'desc':'Website for photography exhibition'
    },
    {
        'name':'Qvestment',
        'link':'http://qvestment.web.id/',
        'stack':'Django, PostgreSQL, Bootstrap 4',
        'desc':'Equity Crowdfunding Website'
    },
    {
        'name':'QUI Enhancement 2.0',
        'stack':'Django, PostgreSQL, Bootstrap 4',
        'desc':'Adding new features into QUI Website'
    },
    {
        'name':'Cookiet',
        'stack':'Flutter, ExpressJS',
        'desc':'Mobile app for choosing what food to cook, based on available ingredients.',
        'github':'https://github.com/putugde/Cookiet'
    },

]
class WebContent extends React.Component{
    render(){
        return(
            <div style={{marginTop:'15vh'}}>
                <Container>
                    <Typography variant="h2" style={{fontWeight:300,paddingTop:'75px', marginTop:'-75px'}} align="center" id="about-me">
                    <span style={{fontWeight:500}}>About </span>Me
                    </Typography>
                    <center>
                        <div style={{marginTop:20}}>
                            <Typography align="center" variant="h5" style={{maxWidth:600, fontWeight:300}}>
                                {aboutMe}
                            </Typography>
                        </div>
                    </center>
                </Container>
                <MyTimeline/>
                <MyProjects/>
            </div>
        )
    }
}

class MyTimeline extends React.Component{
    render(){
        let verticalTimelineArray = []
        for (let [index, value] of timelineData.entries()) {
            if (value.type === 'work'){
                verticalTimelineArray.push(
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#555', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #555' }}
                        date={value.date}
                        dateClassName="custom-date"
                        iconStyle={{ background: '#555', color: '#fff' }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">{value.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{value.subtitle}</h4>
                        <p>
                        {value.loc}
                        </p>
                    </VerticalTimelineElement>
                );
            }else{
                verticalTimelineArray.push(
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: '#fff', color: '#222' }}
                        contentArrowStyle={{ borderRight: '7px solid  #888' }}
                        date={value.date}
                        iconStyle={{ background: '#888', color: '#fff' }}
                        icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">{value.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{value.subtitle}</h4>
                        <p>
                        {value.loc}
                        </p>
                    </VerticalTimelineElement>
                )
            }
        }
        return(
            <div style={{marginTop:"10vh", background:"#eee", paddingTop:"5vh", paddingBottom:"5vh"}}>
                <Typography variant="h2" style={{fontWeight:500, marginBottom:40,paddingTop:'75px', marginTop:'-75px'}} align="center" id="experience" >
                Education <span style={{fontWeight:300}}>&</span> Experience
                </Typography>

                <VerticalTimeline>
                {verticalTimelineArray}
                <VerticalTimelineElement
                    iconStyle={{ background: '#fff', color: '#222' }}
                    icon={<StarIcon />}
                />
                </VerticalTimeline>
            </div>
        );
    }
}

class MyProjects extends React.Component{
    render(){
        let projectArray = [];
        for (let [, value] of projectData.entries()) {
            if ((value.github) && (value.link)){
                projectArray.push(
                    <Grid item md={6} className="hoverize"> 
                        <Card style={{height:'100%'}}>
                            <CardContent>
                                <Link href={value.link} target="_blank">
                                    <Typography variant="h6">{value.name}</Typography>
                                </Link>
                                <Typography>{value.desc}</Typography>
                                <Typography style={{fontWeight:500}}>Stack : {value.stack}</Typography>
                                <Grid container style={{marginTop:5}} alignItems="center" justify="flex-start">
                                    <Grid item xs={1}>
                                        <GitHubIcon style={{marginRight:5}}/>
                                    </Grid>
                                    <Grid item xs={11}>
                                        <Link variant="body" target="_blank" className="linkWeb">{value.github}</Link>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                );
            } else if (value.github){
                projectArray.push(
                    <Grid item md={6} className="hoverize"> 
                        <Card style={{height:'100%'}}>
                            <CardContent>
                                <Typography variant="h6">{value.name}</Typography>
                                <Typography>{value.desc}</Typography>
                                <Typography style={{fontWeight:500}}>Stack : {value.stack}</Typography>
                                <Grid container style={{marginTop:5}} alignItems="center" justify="flex-start">
                                    <Grid item xs={1}>
                                        <GitHubIcon style={{marginRight:5}}/>
                                    </Grid>
                                    <Grid item xs={11}>
                                        <Link variant="body" target="_blank" className="linkWeb">{value.github}</Link>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                );
            } else if (value.link){
                projectArray.push(
                    <Grid item md={6} className="hoverize"> 
                        <Card style={{height:'100%'}}>
                            <CardContent>
                                <Link href={value.link} target="_blank">
                                    <Typography variant="h6">{value.name}</Typography>
                                </Link>
                                <Typography>{value.desc}</Typography>
                                <Typography style={{fontWeight:500}}>Stack : {value.stack}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                );
            } else {
                projectArray.push(
                    <Grid item md={6} className="hoverize"> 
                        <Card style={{height:'100%'}}>
                            <CardContent>
                                <Typography variant="h6">{value.name}</Typography>
                                <Typography>{value.desc}</Typography>
                                <Typography style={{fontWeight:500}}>Stack : {value.stack}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                );
            }
        }

        return(
            <Container style={{marginTop:40, marginBottom:40}}>
                <Typography variant="h2" style={{fontWeight:500, marginBottom:40,paddingTop:'75px', marginTop:'-75px'}} align="center" id="projects" >
                Projects
                </Typography>
                <Grid container spacing={3}>
                    {projectArray}
                </Grid>
            </Container>
        );
    }
}

export default WebContent;
