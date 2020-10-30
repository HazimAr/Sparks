import './App.css';

// Page Imports
import Home from './Pages/Home'
import NavBar from './Pages/NavBar'
import Footer from './Pages/Footer'
import About from './Pages/About'
import Coaches from './Pages/Coaches'
import Contact from './Pages/Contact'
import Media from './Pages/Media'
import Teams from './Pages/Teams'
import Register from './Pages/Register'
import Waiver from './Pages/Waiver'


import { BrowserRouter, Route, } from "react-router-dom";
import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';


var FBinit = {
  apiKey: "AIzaSyA4qr1j20J8yjzQO6UhwxNTPDQXR-KZBPk",
  authDomain: "sparks-413c9.firebaseapp.com",
  databaseURL: "https://sparks-413c9.firebaseio.com",
  projectId: "sparks-413c9",
  storageBucket: "sparks-413c9.appspot.com",
  messagingSenderId: "1070946902875",
  appId: "1:1070946902875:web:f9f5cd4c9621080cb7b07e",
  measurementId: "G-PRXVXH5T20"
}
firebase.initializeApp(FBinit);

export const auth = firebase.auth();

const firestore = firebase.firestore();

// collections(databases)
export const messagesRef = firestore.collection('contactMessages');

function App() {

  return (
    <BrowserRouter>


      <div className="theme-dark">

        <NavBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/coaches' component={Coaches} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/media' component={Media} />
        <Route exact path='/teams' component={Teams} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/waiver' component={Waiver} />
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
