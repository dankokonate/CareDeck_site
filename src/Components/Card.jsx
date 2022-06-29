import React from 'react';
import { NavLink } from "react-router-dom";

const Card = ({ 
    imgsrc,
    title,
    contenue
}) => {

    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={imgsrc} className="card-img-top" id="coverImg" alt="card" />
                    <div className="card-body">
                        <h5 className="card-title"><strong>{title}</strong></h5>
                        <p className="card-text">{contenue}</p>
                        <NavLink to="/" className="btn btn-primary">Voir plus</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
