import React, { Component } from 'react';
import { Card, CardTitle, CardActions, CardText } from 'react-mdl';

class About extends Component {
    render() {
        return(
            <div className="aboutme-div">
            <Card className="aboutme-card"shadow={0} style={{ width: "1200px", margin: 'auto'}}>
                <CardTitle style={{color: '#FFF', height: '300px', background: 'url(https://storage.needpix.com/rsynced_images/san-diego-2084674_1280.jpg) center / cover'}}></CardTitle>
                <CardText style={{margin: 'auto', textAlign: 'left', display:'box'}}>
                    Hello! My name is Kyle and I am a recent graduate from San Diego State University with a B.S. in Computer Science.
                    <br></br>
                    <br></br>
                    Born and raised in San Diego, I grew up through the rise of the internet and technology. I have always enjoyed utilizing technology ranging from media creation software
                    such as Adobe Photoshop to hardware projects such as the raspberry pi, which has led me into pursuing a degree in Computer Science.
                    Additionally, I have 3 years of experience in Information Technology supporting hardware, software and end-users in the public sector. In my free time I enjoy 
                    playing video games such as animal crossing and creating projects such as this website, my home-lab, and more which can be found in the projects section of this site. Currently, I am seeking job opportunities
                    in the IT and Cyber Security fields to utilize my skillset. 
                    <br></br>
                    <br></br> 
                    If you would like to get in touch with me, please do not hesitate grab my contact below, 
                    or check out my resume and projects.
                    <br></br>
                    <br></br>
                    Thanks for stopping by!
                </CardText>
                <CardActions border>
                    <CardText style={{color: '#5a6069'}}> <b style={{color: '#5a6069'}}>Email:</b> <a href="mailto:KyleSheaGloria@gmail.com">KyleSheaGloria@gmail.com</a>     |    <b>LinkedIn:</b> <a href="https://www.linkedin.com/in/kyle-gloria/">linkedin.com/in/kyle-gloria</a></CardText>
                </CardActions>
            </Card>
            </div>
        )
    }
}

export default About;