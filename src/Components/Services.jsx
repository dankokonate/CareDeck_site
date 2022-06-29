import React from 'react';
import Card from './Card';
import ServiceData from './ServiceData';

const Services = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Notre produits</h1>
            </div>
            <div>
                <p>
                   <center> 
                    <strong>CareDeck est le bouton d'appel 2.0</strong><br/>
                    Son but ? <br />
                    Améliorer les boutons d'appels qui équipent nos aujourd'hui nos hôpitaux.<br/>
                    Relié à une application, il permet au personnel soignant de visualiser instantanément les requêtes des patients.<br/>
                    MAIS POURQUOI 2.0 ?<br/>
                    CareDeck possède des boutons personnalisables. Chacun d'entre eux sera associé à une demande particulières.<br/> Les infirmiers pourront ainsi attribuer à chaque CareDeck des requêtes selon les besoins du malade<br/>
                    </center>
                </p>
            </div>
            <div className="my-5">
                <h1 className="text-center">3 ambitions</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                ServiceData.map((val, index) => {
                                    return <Card
                                        imgsrc={val.imgsrc}
                                        title={val.title}
                                        key={index}
                                        contenue={val.contenue}
                                    />
                                }
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;
