import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Switch , Route, Redirect} from 'react-router-dom';
import Home from '../src/containers/Home';
import  Contact from '../src/containers/Contact';
import Service from '../src/containers/service';
import About from '../src/containers/About';
import Navbar from "./Navbar";
import Footer from "../src/containers/Footer"

const App = () => {
  return (
    
    <>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
        
      </Switch>
      <Footer />
    </>
  );
};

export default App;
