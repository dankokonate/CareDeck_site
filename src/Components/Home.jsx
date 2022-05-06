import React from 'react';
import home from "../images/medicine.png";
import Common from './Common';
import Services from './Services';
import About from './About';
import Contact from './Contact';
const Home = () => {
    return (
        <>
            <Common 
                name='Bienvenue Chez ' 
                imgsrc={home} 
                isCompName={true}
                compName="CareDevs"
                visit='/services' 
                btnname="Nos produits" 
            />
        {/* <Services/>
        <About/>
        <Contact/> */}
        </>
    )
}

export default Home;