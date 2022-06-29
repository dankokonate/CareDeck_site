import React from "react";
import {Box,
  Container,
  Row,
  Column,
  } from "./FooterStyle"
  import images from '../images/CareDeck.png'

const Footer = () =>
 (
    <Box>
      <Container>
        <Row>
          <Column style={{padding:5}}>
            <img src={images} alt="CareDeck"  width={110}/>
          </Column>
          <Column>
            <h5 style={{color:"#0257D5", padding:5}}><strong>Le produit</strong></h5>
                <a href="" style={{textDecoration:"none", color: "white"}}>
                  Avantage
                </a>
                <a href="" style={{textDecoration:"none", color: "white"}}>
                  Portfolio
                </a>
          </Column>
          <Column>
            <h5 style={{color:"#0257D5", padding:5}}><strong>A propos</strong></h5>
                <a href="" style={{textDecoration:"none", color: "white"}}>
                  Qui sommes-nous
                </a>
                <a href="" style={{textDecoration:"none", color: "white"}}>
                  Nous trouver
                </a>
                <a href="" style={{textDecoration:"none", color: "white"}}>
                Contactez nous
                </a>
          </Column>
        </Row>
        <br/>
        <div>
          <div className="footerfooter" style={{marginLeft:"auto", marginRight:"auto" ,color:"white"}}>
          <a style={{textDecoration:"none", color:"white",marginRight: "20px"}} href="">Mentions légales</a>
          <a style={{textDecoration:"none", color:"white", marginRight: "20px"}} href="">Politique de confidentialité</a>
          <a style={{textDecoration:"none", color:"white"}} href="">Paramètre des cookies</a>
          </div>
          <div style={{position: 'absolute',margin:0,right:70}}>
            <a href="" style={{textDecoration:"none",marginLeft:30}}><img src="https://img.icons8.com/color/344/facebook-new.png" alt="FaceBook" width={30}/></a> 
            <a href="" style={{textDecoration:"none",marginLeft:30}}><img src="https://img.icons8.com/fluency/344/twitter.png" alt="Twitter"  width={30}  /></a> 
            <a href="" style={{textDecoration:"none",marginLeft:30}}><img src="https://img.icons8.com/fluency/344/instagram-new.png" alt="Instagram"  width={30}  /></a> 
          </div>

        </div>
        <hr/>
        <p style={{textDecoration:"none", color:"white", margin: 'auto'}}>&copy; {new Date().getFullYear()} Copyright: <a style={{textDecoration:"none" }}href="https://www.univ-evry.fr/" target="_blank"> Université d'EVRY Paris Saclay </a></p>
      </Container>
    </Box>
);

export default Footer;