import React from 'react'
import about from "../images/about.svg";
import Common from './Common'

const About = () => {
    return (
        <>
            <Common 
                name='Organigramme' 
                imgsrc={about}
                visit='/contact' 
                btnname="Contact Now" 
                text= "MERCI ! A nos partenaires pour les conseils, la confiance et le soutien qu'ils nous ont apportés."
                titre= ""
                logoPart = ""
            />
        </>
    )
}

export default About
