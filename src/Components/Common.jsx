import React from 'react';
import { useState } from 'react';
import { NavLink } from "react-router-dom"
import Organigramme from './organigramme'
const Common = ({
    name,
    imgsrc,
    isCompName,
    compName,
    visit,
    btnname,
    text,
    titre,
    logoPart,
    titre1,
    imgabout
}) => {
    const [showOrganigram, setShowOrganigram] = useState(false)
    const handleShowOrganigram = () => {
        setShowOrganigram(!showOrganigram)
    }
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    {showOrganigram && <Organigramme />}
                                    <h1>
                                        {name}
                                        {isCompName ? <strong className="brand-name"> {compName}</strong> : ""}
                                    </h1>
                                    <h3 className="my-3">
                                        <a href='organigram.html' target={'_blank'}>
                                            {titre1} 
                                        </a>
                                        <p>{text}</p>
                                    </h3>
                                    <div className="mt-3">
                                        <NavLink to={visit} className="btn-get-started ">
                                            {btnname}
                                        </NavLink>
                                    </div>
                                </div>

                                <div className="col-lg-6 order-1 order-lg-2 header-image">
                                    <img src={imgsrc} className="img-fluid animated" alt="Home Img" />
                                </div>
                                <div>
                                    <img src={logoPart} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Common;
