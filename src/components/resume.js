import React, { Component } from 'react';
import { Card, CardTitle, CardActions } from 'react-mdl';
import { Link } from 'react-router-dom';

class Resume extends Component {
    render() {
        return(
            <div className="outter-res">
                <div className="resume-div">
                    <h1 className="resume-header">Resume</h1>
                    <Link className="resume" to="/files/KyleGloria_Resume.pdf" target="_blank" download>Save as PDF</Link>
                    <Card shadow={1} style={{width: '1024px', height: '1280px', background: 'url(./img/KyleGloria_Resume.jpg) center / cover', margin: 'auto'}}>
                        <CardTitle expand />
                        <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                            <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                                Last Updated: Apr. 15, 2020
                            </span>
                        </CardActions>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Resume;