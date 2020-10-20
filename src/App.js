import './App.css';

import Home from './Pages/Home'
import NavBar from './Pages/NavBar'
import Footer from './Pages/Footer'
import About from './Pages/About'
import Coaches from './Pages/Coaches'
import Contact from './Pages/Contact'
import Media from './Pages/Media'
import Teams from './Pages/Teams'


import { BrowserRouter, Route, } from "react-router-dom";
import React, { useRef, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';


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

const auth = firebase.auth();
const firestore = firebase.firestore();

// collections(databases)
const messagesRef = firestore.collection('contactMessages');

export const sendContact = async (value, email) => {
  console.log(value, email)
  await messagesRef.add({
    text: email,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    message: value,
  });
}
function App() {

  return (
    <BrowserRouter>


      <div className="theme-light">

        <NavBar />
        <div style={{ height: '80px' }} />
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
