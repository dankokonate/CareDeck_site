import React from 'react';
import home from "../images/medicine.png";
import Common from './Common';
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
                text = "C'est autour de ces valeurs communes que CareDevs est né. Une équipe de 25 étudiants en première année de Master MIAGE à l'Université d'Evry, regroupés en tribu autour d'un projet :"
                titre = "AMBITION, CONFIANCE, PARTAGE "
            />
        {/* <Services/>
        <About/>
        <Contact/> */}
        </>
    )
}

export default Home;