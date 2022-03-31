import React from 'react';
import { NavLink } from "react-router-dom";

const Card = ({ 
    imgsrc,
    title
}) => {

    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={imgsrc} className="card-img-top" id="coverImg" alt="card" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">CareDeck est une solution pensée par des étudiants, pour le secteur hospitalier, afin de répondre à un besoin constant de réactivité aux sien des servicess de soins, dans le contexte actuel ou le nombre de soignants se voit décroitre sur notre territoire.</p>
                        <p className='card-text'>Dans le but de facilité le travail de ces soignants, et rendre le séjour à l'hospital bien moins stressany en étant dignement accompagné</p>
                        <NavLink to="/" className="btn btn-primary">Plus de details</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
