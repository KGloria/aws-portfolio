import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

class Projects extends Component {
    render() {
        return(
            <div className="projects-body">
                <h1 className="projects-header">Projects</h1>
                <Grid className="demo-grid-3">
                    <Cell col={4} phone={4}>Portfolio Page
                        <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto', align: 'center'}}>
                            <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>2020</CardTitle>
                            <CardText>
                                Github repository for my portfolio page.
                            </CardText>
                            <CardActions border>
                                <Button colored onClick={() => window.location.href = "https://github.com/KGloria/MyPortfolio"}>View Git Repository</Button>
                            </CardActions>
                        </Card>
                    </Cell>
                    <Cell col={4} phone={4}>Oasis Server
                        <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>2020</CardTitle>
                                <CardText>
                                    Homelab deployed Ubuntu Linux server specifications.
                                </CardText>
                                <CardActions border>
                                    <Button colored onClick={() => window.location.href = "https://github.com/KGloria/Homelab"}>View Git Repository</Button>
                                </CardActions>
                        </Card>                  
                    </Cell>
                    <Cell col={4} phone={4}>3D Unity Game
                        <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>2019</CardTitle>
                                <CardText>
                                    3D game program developed in C#. 
                                </CardText>
                                <CardActions border>
                                    <Button colored onClick={() => window.location.href = "https://github.com/KGloria/PreGame-Party"}>View Git Repository</Button>
                                </CardActions>
                        </Card>   
                    </Cell>
                </Grid>
                <Grid className="demo-grid-3">
                    <Cell col={4} phone={4}>Unix Shell
                        <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto', align: 'center'}}>
                            <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>2019</CardTitle>
                            <CardText>
                               Cs570 Operating Systems Shell Project
                            </CardText>
                            <CardActions border>
                                <Button colored onClick={() => window.location.href = "https://github.com/KGloria/Shell_Project"}>View Git Repository</Button>
                            </CardActions>
                        </Card>
                    </Cell>
                    <Cell col={4} phone={4}>2D Game Program
                        <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>2019</CardTitle>
                                <CardText>
                                    2D game program developed in C#
                                </CardText>
                                <CardActions border>
                                    <Button colored onClick={() => window.location.href = "https://github.com/KGloria/KBlade-2D-Game"}>View Git Repository</Button>
                                </CardActions>
                        </Card>                  
                    </Cell>
                    <Cell col={4} phone={4}>Python Bot
                        <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>In Progress</CardTitle>
                                <CardText>
                                    Python webscraper to retrieve prices of CPU parts
                                </CardText>
                                <CardActions border>
                                    <Button colored onClick={() => window.location.href = ""}>In Progress</Button>
                                </CardActions>
                        </Card>   
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;