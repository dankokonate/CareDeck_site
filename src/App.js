import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Services from './Components/Services'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import {  Element } from 'react-scroll'


const App = () => {
  return (
    <>
		<Navbar />
		<Element name="home" className="home">
          <Home />
        </Element>
		<Element name="services" className="services">
          <Services />
        </Element>
		<Element name="about" className="about">
          <About />
        </Element>
		<Element name="contact" className="contact">
          <Contact />
        </Element>
		<Footer/>
    </>
  )
}

export default App
