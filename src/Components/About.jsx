import React from 'react'
import about from "../images/about.svg";
import Common from './Common'

const About = () => {
    return (
        <>
            <Common 
                name='Bienvenue sur la page A propos' 
                imgsrc={about} 
                visit='/contact' 
                btnname="Contact Now" 
            />
        </>
    )
}

export default About
