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
                        <h5 className="card-title"><strong>{title}</strong></h5>
                        <p className="card-text">Le stress, omniprésent dans les  établissements de santé, est un enjeux crucial pour le confort de travail de nos soignants. CareDeck est la solution leur permettant de mieux piloter les différentes requêtes de leurs patients.</p>
                        <NavLink to="/" className="btn btn-primary">Voir plus</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
