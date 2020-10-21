import { NavLink } from 'react-router-dom'
import React from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../App'

var loggedIn = false;

const NavBar = () => {

    
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    setInterval(function () {
        console.log(auth.currentUser)
        if (auth.currentUser === null) {
            loggedIn = false;
        }
        else { 
            loggedIn = true;
        }
        console.log(loggedIn)
    }, 1000);

    

    return (
        <div>
            <header>
                <div className='nav-link-div'>
                    <NavLink to='/' className='nav-link'>Home</NavLink>
                    <NavLink to='/register' className='nav-link' activeStyle={{ color: "red" }}>Register</NavLink>
                    <NavLink to='/coaches' className='nav-link' activeStyle={{ color: "red" }}>Coaches</NavLink>
                    <NavLink to='/teams' className='nav-link' activeStyle={{ color: "red" }}>Teams</NavLink>
                    <NavLink to='/media' className='nav-link' activeStyle={{ color: "red" }}>Media</NavLink>
                    <NavLink to='/about' className='nav-link' activeStyle={{ color: "red" }}>About</NavLink>
                    <NavLink to='/contact' className='nav-link' activeStyle={{ color: "red" }}>Contact Us</NavLink>
                    {loggedIn ?
                        <button className="nav-link-log" onClick={() => auth.signOut()}>Sign Out</button>
                        :
                        <button onClick={signInWithGoogle} className='nav-link-log'>Log In</button> 
                    }
                </div>
            </header>
        </div>
    )
}

export default NavBar;