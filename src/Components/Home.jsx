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
            />
        </>
    )
}

export default Home;