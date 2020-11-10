import './App.css';

// Page Imports
import Home from './Pages/Home'
import NavBar from './Pages/NavBar'
import Footer from './Pages/Footer'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'
import Register from './Pages/Register'
import React from 'react';

function App() {

  return (
      <div className="theme-dark">
        <NavBar />
        <Home />
        <AboutUs />
        <Register />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;
