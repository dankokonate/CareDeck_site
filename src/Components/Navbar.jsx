import React from "react";
import navbar from "../images/CareDeck.png"
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Link } from 'react-scroll'




const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg"  >
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light" >
              <div className="container-fluid" /*style={{background :"red"}}*/>
                <grid className="item-img">
                  <img src={navbar} alt="Logo" width={50} height={50} />
                </grid>
                {/* <NavLink exact className="navbar-brand" to="/">
                  CareDevs
                </NavLink> */}
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} delay={100}>
                  CareDevs
                </Link>
                <PopupState variant="popover" popupId="demo-popup-menu">
                  {(popupState) => (
                    <React.Fragment>
                      <Button variant="contained" //color="primary"
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        {...bindTrigger(popupState)}>
                        <span className="navbar-toggler-icon"></span>
                      </Button>
                      <Menu {...bindMenu(popupState)}>
                        <MenuItem>
                          <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} delay={100}>
                            Accueil
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <Link activeClass="active" to="services" spy={true} smooth={true} offset={50} duration={500} delay={100}>
                            Nos Produits
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} delay={100}>
                            A propos
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500} delay={100}>
                            Contact
                          </Link>
                        </MenuItem>
                      </Menu>
                    </React.Fragment>
                  )}
                </PopupState>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} delay={100}>
                        Accueil
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link activeClass="active" to="services" spy={true} smooth={true} offset={50} duration={500} delay={100}>
                        Nos Produits
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} delay={100}>
                        A Propos
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500} delay={100}>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
