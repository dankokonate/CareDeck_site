import React from "react";
import { NavLink } from "react-router-dom"
import navbar from "../images/CareDeck.png"
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";




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
                <NavLink exact className="navbar-brand" to="/">
                  CareDevs
                </NavLink>
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
                        <MenuItem onClick={popupState.close}>Accueil</MenuItem>
                        <MenuItem onClick={popupState.close}>Nos produits</MenuItem>
                        <MenuItem onClick={popupState.close}>A propos</MenuItem>
                        <MenuItem onClick={popupState.close}>Contact</MenuItem>
                        <Switch>
                          <Route exact path="/Nos produits" component={Services} />
                          <Route exact path="/A propos" component={About} />
                          <Route exact path="/Contact" component={Contact} />
                          <Route exact path="/" component={Home} />
                        </Switch>
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
                      <NavLink activeClassName="menu_active" exact
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Accueil
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="menu_active" exact className="nav-link" to="/services">
                        Nos produits
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="menu_active" exact className="nav-link" to="/about">
                        A propos
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="menu_active" exact className="nav-link" to="/contact">
                        Contact
                      </NavLink>
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
