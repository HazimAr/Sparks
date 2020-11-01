import './App.css';

// Page Imports
import Home from './Pages/Home'
import NavBar from './Pages/NavBar'
import Footer from './Pages/Footer'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'
import Register from './Pages/Register'
import Waiver from './Pages/Waiver'

import { BrowserRouter, Route, } from "react-router-dom";
import React from 'react';

function App() {

  return (
    <BrowserRouter>

      <div className="theme-dark">

        <NavBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={AboutUs} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/waiver' component={Waiver} />
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
