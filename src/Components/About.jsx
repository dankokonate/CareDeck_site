import React from 'react'
import about from "../images/about.svg";
import Common from './Common'
import about1 from "../images/Control_panel.png"

const About = () => {
    return (
        <>
            <Common 
                name='A propos' 
                imgsrc={about}
                visit='/contact' 
                btnname="Contactez-nous" 
                text= "MERCI ! A nos partenaires pour les conseils, la confiance et le soutien qu'ils nous ont apportés."
                titre1= "Voir l'organigramme"
                logoPart = ""
                //imgabout={about1}
            />
        </>
    )
}

export default About
