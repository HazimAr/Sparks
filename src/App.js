import React from 'react';
import './App.css';

import Home from './Pages/Home'
import NavBar from './Pages/NavBar'
import Footer from './Pages/Footer'

import About from './Pages/About'
import Coaches from './Pages/Coaches'
import Contact from './Pages/Contact'
import Media from './Pages/Media'
import Teams from './Pages/Teams'


import {BrowserRouter,Route,} from "react-router-dom";


function App() {


  


  return (
    <BrowserRouter>
      
      
    <div className="theme-light">

      <NavBar />
      <Route exact path='/' component={Home} />
      <Route exact path='/coaches' component={Coaches} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/media' component={Media} />
      <Route exact path='/teams' component={Teams} />
      <Footer />

    </div>
    </BrowserRouter>
  );
}

export default App;
