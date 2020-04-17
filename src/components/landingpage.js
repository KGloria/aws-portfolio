import React, { Component } from 'react';
import { Grid, Cell, Button } from 'react-mdl';
import Typist from 'react-typist';

class Landing extends Component {
    render() {
        return(
            <div className="outter-land">
                <div className="landing" style = {{width: '100%', margin: 'auto'}}>
                    <Grid className="landing-grid">
                        <Cell className="cell-2" col={2}>
                        <img src={"https://cdn.discordapp.com/attachments/134100737625030656/672991571095978014/download20200105182805.png"} alt="Logo" width="400" height="345"/>
                        </Cell>
                        <Cell className="cell-1" col={10}>
                            <p className="banner-text-blank3"></p>
                            <div className="banner-text">
                                <Typist className="type-ani">
                                <p1> Recent Computer Science Graduate</p1>
                                </Typist>
                                <p className="banner-text-blank"></p>
                                <hr/>
                                <p className="banner-text-blank2"></p>
                                <p2>Seeking New Opportunities</p2>
                            </div>
                        </Cell>
                    </Grid>
                    <p className="landing-grid-blank"></p>
                    <div className="enter-btn">
                        <Button className="btn-background" raised accent ripple onClick={() => window.location.href = "/aboutme"}>Enter!</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;