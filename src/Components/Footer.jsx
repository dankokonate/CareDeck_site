import React from "react";
import {Box,
  Container,
  Row,
  Column,
  /*FooterLink,
  Heading*/} from "./FooterStyle"
  import { Grid } from "@material-ui/core";

const Footer = () =>
 (
    <Box>
      <Container>
        <Row>
          <Column>
            <h2 style={{color:"white", padding:10,fontWeight: "bold"}}>CareDeck</h2>
            <p>CareDeck est un boitier qui va simplifier la vie des infirmiers et infirmières</p>
          </Column>
          <Column>
            <h5 style={{color:"white", padding:10}}>Social Media</h5>
            <Grid style={{display:"inline-flex",color:"black"}}>
              <Grid item xs={3}>
                <a href="">
                  <img src="https://img.icons8.com/glyph-neue/344/facebook.png" alt="" width="40" />
                </a>
              </Grid>

              <Grid item xs={3}>
                <a href="">
                  <img src="https://img.icons8.com/glyph-neue/344/instagram-new.png" alt="Intagram" width="40" />
                </a>
              </Grid>
              <Grid item xs={3}>
                <a href="">
                  <img src="https://img.icons8.com/glyph-neue/344/linkedin.png" alt="Linkedin" width="40" />
                </a>
              </Grid>
              <Grid item xs={3}>
                <a href="">
                  <img src="https://img.icons8.com/ios-filled/344/twitter-circled--v1.png" alt="Twiter" width="40" />
                </a>
              </Grid>
              <Grid item xs={3}>
                <a href="">
                  <img src="https://img.icons8.com/glyph-neue/344/github.png" alt="Github" width="40" />
                </a>
              </Grid>
            </Grid>
          </Column>
          <Column>
            <h5 style={{color:"white", padding:10}}>Nous Contacter</h5>
            <p> <strong>Adresse</strong>: 23 Bd de France, 91037 Évry-Courcouronnes <br />
                <strong>Tel</strong>: 01 64 85 34 00 <br />
                <strong>Email</strong>:	m1-miage-21@googlegroups.com <br />
                <strong>Site web</strong>: 
            </p>
          </Column>
        </Row>
        <hr />
        <div className="footerfooter" style={{marginLeft:"auto", marginRight:"auto"}}>
          <p> &copy; {new Date().getFullYear()} Copyright: <a style={{textDecoration:"", color:"black"}} href="https://konatedanko.netlify.app/" target="_blank"> Danko Konate </a> <br />
              <a style={{textDecoration:"", color:"black"}} href="">Mentions légales</a>
          </p>
        </div>
      </Container>
    </Box>
);

export default Footer;