import React from 'react';
import './WebContent.css'
import { Typography, Container } from '@material-ui/core';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';
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

class WebContent extends React.Component{
    render(){
        return(
            <div style={{marginTop:30}}>
                <Container>
                    <Typography variant="h2" style={{fontWeight:300}} align="center" id="about-me">
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
            <div style={{marginTop:"10vh", background:"#eee", paddingTop:"5vh"}}>
                <Typography variant="h2" style={{fontWeight:500, marginBottom:40}} align="center" id="experience" >
                Education & Experience
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

export default WebContent;
