import React from 'react'
import Common from '../Common'
import web from '../img/study.jpg';

const About = () => {
    return (
        <div>
            <Common 
            name="Welcome to about page"
            imgsrc={web}
            visit="/contact"
            btname="Contact Now"
            />
        </div>
    )
}

export default About
