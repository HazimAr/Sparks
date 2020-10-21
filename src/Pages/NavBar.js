import { NavLink } from 'react-router-dom'
import React, { useRef, useState } from 'react';

const NavBar = () => {

    function signIn() {
        
    }
    
    return (
        <div>
            <header>
                <div className='nav-link-div'>
                    <NavLink to='/' className='nav-name' >Sparks Volleyball Club</NavLink>
                    <NavLink to='/' className='nav-link'>Home</NavLink>
                    <NavLink to='/coaches' className='nav-link' activeStyle={{ color: "red" }}>Coaches</NavLink>
                    <NavLink to='/teams' className='nav-link' activeStyle={{ color: "red" }}>Teams</NavLink>
                    <NavLink to='/media' className='nav-link' activeStyle={{ color: "red" }}>Media</NavLink>
                    <NavLink to='/about' className='nav-link' activeStyle={{ color: "red" }}>About</NavLink>
                    <NavLink to='/contact' className='nav-link' activeStyle={{ color: "red" }}>Contact Us</NavLink>
                    <button onClick={signIn} className='nav-link-log'>Log In</button>

                </div>

            </header>
        </div>
    )
}

export default NavBar;


